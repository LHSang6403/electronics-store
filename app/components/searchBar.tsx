"use client";

import { use, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "shadcn-custom/select-custom";
import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "shadcn-custom/dropdown-menu-custom";
import { Button } from "@/components/ui/button";

import categories from "../dummyApi/category";
import ShowMore from "./showMore";

interface Suggestion {
  id: number;
  name: string;
  image: string;
}

const SearchBar = (props: any): ReturnType<React.FC> => {
  const [isOpenSuggestion, setOpenSuggestion] = useState<boolean>(false);

  const { register, handleSubmit, reset, setValue, setFocus } = useForm({
    defaultValues: { search: "" },
  });
  const setOpenSuggestionHandler = (): void => {
    console.log("open suggestion");
    setOpenSuggestion(!isOpenSuggestion);
    setFocus("search");
  };

  const onSubmit = (data: { search: string }): void => {
    reset();
  };

  // Fetch suggests api
  const suggestions: Suggestion[] = [
    {
      id: 1,
      name: "Paint brush",
      image:
        "https://images.pexels.com/photos/5583115/pexels-photo-5583115.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 2,
      name: "Aluminum tools",
      image:
        "https://images.pexels.com/photos/175039/pexels-photo-175039.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 3,
      name: "drill",
      image:
        "https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 4,
      name: "Screw wrench",
      image:
        "https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 5,
      name: "Knife",
      image:
        "https://images.pexels.com/photos/1409215/pexels-photo-1409215.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 6,
      name: "Cutting machines",
      image:
        "https://images.pexels.com/photos/162625/grinder-hitachi-power-tool-flexible-162625.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
  ];

  useEffect(() => {
    setFocus("search");
  }, [isOpenSuggestion]);

  return (
    <div className="w-[670px] h-[40px]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="h-full flex flex-row justify-start border-2 border-primary rounded-3xl overflow-hidden"
        onChange={() => {
          setOpenSuggestionHandler();
        }}
        // onFocus={}
      >
        <div className="w-[270px] ml-2 text-lg">
          <Select>
            <SelectTrigger className="w-full h-auto pl-1 border-none focus:outline-0">
              <SelectValue placeholder="All Category" />
            </SelectTrigger>
            <SelectContent className="w-fit h-fit max-h-[350px] mt-1 rounded-lg shadow-lg border-none bg-[whitesmoke] overflow-scroll-y">
              <div className="w-auto h-9 text-lg font-normal bg-primary rounded-t pl-2 flex flex-row justify-between items-center">
                Our products:
                <div className="w-12 h-7 rounded mr-1 flex items-center justify-center hover:cursor-pointer">
                  <button onClick={() => {}}>
                    <img
                      className="w-5 h-5"
                      alt="rm-icon"
                      src="/assets/remove-icon.png"
                    ></img>
                  </button>
                </div>
              </div>
              <hr className="w-full h-[1.5px] border-none bg-black"></hr>
              <div className="grid grid-cols-3 bg-[#ececec] rounded-b">
                {categories.map((category, index) => (
                  <div key={category.id}>
                    <div className="w-[212px] m-1 h-9 flex flex-row hover:cursor-pointer hover:bg-[#e3e3e3] hover:rounded">
                      <img
                        className="w-12 ml-2"
                        alt={`categoty-${category.id}`}
                        src={category.image}
                      ></img>
                      <SelectItem
                        className="w-full h-auto pl-2 border-none hover:outline-0 focus:outline-0"
                        value={category.name}
                      >
                        {category.name}
                      </SelectItem>
                    </div>
                  </div>
                ))}
              </div>
              <div className="w-full h-fit flex flex-row justify-center items-center">
                <ShowMore onClick={() => {}} />
              </div>
            </SelectContent>
          </Select>
        </div>
        <div className="border border-primary w-[1px] m-1 mx-2 rounded relative right-[1px] "></div>
        {suggestions != null && (
          <div className="w-full">
            <DropdownMenu
              open={isOpenSuggestion}
              onOpenChange={setOpenSuggestionHandler}
            >
              <DropdownMenuTrigger asChild>
                <input
                  className="w-full text-lg hover:outline-0 focus:outline-0"
                  type="text"
                  placeholder="Search product"
                  autoComplete="off"
                  {...register("search")}
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="relative top-5 w-56">
                <div className="w-auto h-9 text-lg font-normal bg-primary rounded-t pl-2 flex flex-row items-center">
                  <DropdownMenuLabel>Suggestions</DropdownMenuLabel>
                </div>
                <hr className="w-full h-[1px] mb-2 border-none bg-black"></hr>
                <DropdownMenuGroup>
                  {/* <DropdownMenuItem>
                <Users className="mr-2 h-4 w-4" />
                <span>Team</span>
              </DropdownMenuItem> */}
                  {/* --------- */}

                  {suggestions.map((item, index) => (
                    <div key={item.id} className="h-10">
                      <DropdownMenuItem className="h-full rounded hover:bg-[#e3e3e3] hover:cursor-pointer hover:outline-0 focus:outline-0">
                        <div className="w-10">
                          <img alt={`item-${item.id}`} src={item.image}></img>
                        </div>
                        <span className="ml-3">{item.name}</span>
                      </DropdownMenuItem>
                    </div>
                  ))}
                  {/* <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  <UserPlus className="mr-2 h-4 w-4" />
                  <span>Sang</span>
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem>
                      <Mail className="mr-2 h-4 w-4" />
                      <span>Email</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <MessageSquare className="mr-2 h-4 w-4" />
                      <span>Message</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <PlusCircle className="mr-2 h-4 w-4" />
                      <span>More...</span>
                    </DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub> */}
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        )}

        <div className="w-[180px] flex flex-row justify-center items-center bg-primary">
          <button type="submit" className="text-lg">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
