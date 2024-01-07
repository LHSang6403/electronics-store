"use client";

import { useState, useMemo } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import Category from "./Category";
import suggestions from "@dummyApi/suggestion";
import formatCurrencyWithCommas from "@/lib/formatCurrency";

interface Suggestion {
  id: number;
  name: string;
  image: string;
  price: number;
  feature: string;
  discription: string;
}

export default function SearchBar(): JSX.Element {
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
    <div className="w-fit h-[40px]">
      <form
        onSubmit={() => handleSubmit(onSubmit)}
        className="h-full flex flex-row justify-start border-2 border-primary rounded-3xl overflow-hidden"
        onChange={(e) => {
          const target = e.target as HTMLInputElement;
          setQuery(target.value);
        }}
      >
        <div className="w-32 xl:w-28 lg:w- ml-2 text-lg bg-white">
          <Category />
        </div>
        <div className="border border-primary w-[1px] m-1 rounded relative right-[1px] "></div>
        <input
          className="w-56 xl:w-36 pl-1 text-base border-none outline-0 hover:outline-0 focus:outline-0"
          type="text"
          placeholder="Search product"
          autoComplete="off"
          {...register("search")}
          onBlur={() => {
            setFocus("search");
            setQuery("");
          }}
        />
        <div className="w-32 xl:w-20 px-2 flex justify-center items-center bg-primary">
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
