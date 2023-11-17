"use client";

import { useState, useMemo } from "react";
import { useForm } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "shadcn-custom/select-custom";

import categories from "../dummyApi/category";
import suggestions from "../dummyApi/suggestion";
import ShowMore from "./showMore";

interface Suggestion {
  id: number;
  name: string;
  image: string;
  price: number;
  feature: string;
  discription: string;
}

const SearchBar = (props: any): ReturnType<React.FC> => {
  const { register, handleSubmit, reset, setValue, setFocus } = useForm({
    defaultValues: { search: "" },
  });

  const items = suggestions;
  const [query, setQuery] = useState<string>("");

  const filteredItems: Suggestion[] = useMemo(() => {
    return items.filter((item) => {
      return String(item.name)
        .toLowerCase()
        .includes(String(query).toLowerCase());
    });
  }, [items, query]);

  const onSubmit = (data: { search: string }): void => {
    reset();
  };

  return (
    <div className="w-[670px] h-[40px]">
      <form
        onSubmit={() => handleSubmit(onSubmit)}
        className="h-full flex flex-row justify-start border-2 border-primary rounded-3xl overflow-hidden"
        onChange={(e) => {
          const target = e.target as HTMLInputElement;
          setQuery(target.value);
        }}
      >
        <div className="w-[270px] ml-2 text-lg">
          <Select>
            <SelectTrigger className="w-full h-full text-base pl-1 border-none focus:outline-0">
              <SelectValue placeholder="All Category" />
            </SelectTrigger>
            <SelectContent className="max-h-[350px] mt-1 rounded-xl shadow-lg border-none bg-transparent overflow-scroll-y">
              <div className="w-auto h-9 text-lg font-normal bg-primary rounded-t-xl pl-3 flex flex-row justify-between items-center">
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
              {/* <hr className="w-full h-[1.5px] border-none bg-black"></hr> */}
              <div className="grid grid-cols-3 bg-[#ececec]">
                {categories.map((category, index) => (
                  <div key={category.id}>
                    <div className="w-[200px] m-1 h-9 flex flex-row hover:cursor-pointer hover:bg-[#eeeeee] hover:rounded">
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
              <div className="w-full h-fit pb-1.5 rounded-b-xl flex flex-col justify-center items-center bg-[#ececec]">
                <hr className="w-[94%] mx-auto h-[1.5px] border-none bg-[#d0d1d2]"></hr>
                <ShowMore onClick={() => {}} />
              </div>
            </SelectContent>
          </Select>
        </div>
        <div className="border border-primary w-[1px] m-1 rounded relative right-[1px] "></div>
        <input
          className="w-full pl-1 text-base border-none outline-0 hover:outline-0 focus:outline-0"
          type="text"
          placeholder="Search product"
          autoComplete="off"
          {...register("search")}
          onBlur={() => {
            setFocus("search");
            setQuery("");
          }}
        />
        <div className="w-[180px] flex flex-row justify-center items-center bg-primary">
          <button type="submit" className="text-lg">
            Search
          </button>
        </div>
        {}
      </form>
      {query !== "" && filteredItems.length !== 0 && (
        <div className="absolute left-[calc((100vw_-_600px)_/_2)] h-auto pb-1 max-h-[600px] overflow-y-auto w-[600px] mt-1 z-50 rounded-xl shadow-lg bg-[whitesmoke]">
          <div
            className="w-full h-11 bg-primary pl-4 text-lg font-normal flex flex-row items-center"
            onMouseEnter={() => {
              setValue("search", "");
            }}
          >
            Suggested items:
          </div>
          {/* <hr className="w-[94%] h-[1px] mx-auto border-none rounded bg-black"></hr> */}
          {filteredItems.map((item, index) => (
            <div key={index} onClick={() => {}}>
              <div
                className="h-12 px-4 flex flex-row items-center justify-between rounded-xl font-light overflow-hidden whitespace-nowrap overflow-ellipsis hover:cursor-pointer hover:bg-[white]"
                onMouseEnter={() => {
                  setValue("search", item.name);
                }}
              >
                <div className="flex flex-row items-center">
                  <img
                    className="w-[70px] mr-2 rounded"
                    alt={`suggestion-${item.id}`}
                    src={item.image}
                  ></img>
                  <div className="">
                    <p className="font-medium">{item.name}</p>
                    <p className="w-[300px] text-[14px] overflow-hidden whitespace-nowrap overflow-ellipsis">
                      {item.discription}
                    </p>
                  </div>
                </div>
                <div className="w-fit h-4/6 pl-2 text-sm pt-1.5">
                  {item.price} VND
                </div>
              </div>
              {item !== filteredItems[filteredItems.length - 1] && (
                <hr className="w-[94%] h-[1px] mx-auto bg-[#d0d1d2] rounded"></hr>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
