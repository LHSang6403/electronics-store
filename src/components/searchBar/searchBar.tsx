"use client";

import { useState, useMemo } from "react";
import { useForm } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui-shadcn-custom/select-custom";
import Image from "next/image";

import categories from "@/dummyApi/category";
import suggestions from "@/dummyApi/suggestion";
import ShowMore from "../buttons/showMore";
import formatCurrencyWithCommas from "@/utils/formatCurrency";

interface Suggestion {
  id: number;
  name: string;
  image: string;
  price: number;
  feature: string;
  discription: string;
}

export default function SearchBar(props: any): JSX.Element {
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
    <div className="w-[670px] lg:w-[500px] h-[40px]">
      <form
        onSubmit={() => handleSubmit(onSubmit)}
        className="h-full flex flex-row justify-start border-2 border-primary rounded-3xl overflow-hidden"
        onChange={(e) => {
          const target = e.target as HTMLInputElement;
          setQuery(target.value);
        }}
      >
        <div className="w-[300px] ml-2 text-lg">
          <Select>
            <SelectTrigger className="w-full h-full text-base pl-1 border-none focus:outline-0">
              <SelectValue placeholder="All Category" />
            </SelectTrigger>
            <SelectContent
              className="max-h-[350px] mt-1 rounded-xl shadow-lg border-[1px] border-[#EEEEEE] bg-transparent overflow-scroll-y
            lg:relative lg:-left-16"
            >
              <div className="w-auto h-9 text-lg font-normal bg-primary rounded-t-2 pl-3 flex flex-row justify-between items-center">
                Our products:
                <div className="w-12 h-7 rounded mr-1 flex items-center justify-center hover:cursor-pointer">
                  <button onClick={() => {}}>
                    <div className="w-5 h-5">
                      <Image
                        src="/assets/icons/remove-icon.png"
                        alt="Remove Icon"
                        layout="fix"
                        width={26}
                        height={26}
                      />
                    </div>
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-3 bg-[#FCFCFC]">
                {categories.map((category, index) => (
                  <div key={category.id}>
                    <div className="w-[200px] m-1 h-9 flex flex-row hover:cursor-pointer hover:bg-[#eeeeee] hover:rounded">
                      <div className="w-12 ml-2">
                        <Image
                          src={category.image}
                          alt={`Categoty ${category.id}`}
                          layout="fix"
                          width={46}
                          height={32}
                        />
                      </div>
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
              <div className="w-full h-fit pb-1.5 rounded-b-xl flex flex-col justify-center items-center bg-[#FCFCFC]">
                <hr className="w-[94%] mx-auto h-[1.5px] border-none bg-black"></hr>
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
        <div className="w-[180px] px-2 flex justify-center items-center bg-primary">
          <button type="submit" className="text-lg">
            Search
          </button>
        </div>
        {}
      </form>
      {query !== "" && filteredItems.length !== 0 && (
        <div className="absolute left-[calc((100vw_-_600px)_/_2)] h-auto pb-1 max-h-[600px] overflow-y-auto w-[600px] mt-1 z-50 border-[1px] border-[#EEEEEE] rounded-xl shadow-lg bg-[whitesmoke]">
          <div
            className="w-full h-11 mb-1 bg-primary pl-4 text-lg font-normal flex flex-row items-center"
            onMouseEnter={() => {
              setValue("search", "");
            }}
          >
            Suggested items:
          </div>
          {filteredItems.map((item, index) => (
            <div key={index} onClick={() => {}}>
              <div
                className="h-12 px-4 flex flex-row items-center justify-between font-light overflow-hidden whitespace-nowrap overflow-ellipsis hover:cursor-pointer hover:bg-[#EEEEEE]"
                onMouseEnter={() => {
                  setValue("search", item.name);
                }}
              >
                <div className="flex flex-row items-center">
                  <div className="w-[70px] mr-2 rounded overflow-hidden">
                    <Image
                      alt={`Suggestion ${item.id}`}
                      src={item.image}
                      layout="fix"
                      width={70}
                      height={40}
                    />
                  </div>
                  <div className="">
                    <p className="font-normal">{item.name}</p>
                    <p className="w-[300px] text-[14px] overflow-hidden whitespace-nowrap overflow-ellipsis">
                      {item.discription}
                    </p>
                  </div>
                </div>
                <div className="w-fit h-4/6 pl-2 font-light text-base pt-1.5">
                  {formatCurrencyWithCommas(item.price)} VND
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
}
