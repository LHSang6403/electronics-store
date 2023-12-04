"use client";

import items from "@/dummyApi/top2Items";
import PrimaryButton from "@/components/buttons/primaryButton";

interface TopItem {
  id: number;
  name: string;
  price: number;
  feature: string;
  description: string;
  image: string;
}

export default function Top2Items(): JSX.Element {
  const data: TopItem[] = items;

  return (
    <div className="w-full h-full px-4 xl:px-0 sm:px-4 flex flex-row sm:flex-col gap-4 sm:gap-8 justify-center items-center">
      {data.map((item) => (
        <div
          className="w-[600px] h-full sm:w-full sm:h-[220px] shadow-md bg-[#EEEEEE] flex flex-row justify-center items-center"
          key={item.id}
        >
          <img
            className="w-1/2 xl:w-1/3 sm:w-1/4 ml-4"
            alt={`img-${data[0].id}`}
            src={item.image}
          ></img>
          <div className="w-1/2 xl:w-2/3 sm:w-3/4 h-full pl-4 flex flex-col justify-center items-start overflow-hidden">
            <div className="w-2/3 my-1">
              <h1 className="text-[26px] sm:text-[24px]">{item.name}</h1>
              <hr className="w-full h-[1px] border-none bg-black"></hr>
            </div>
            <div className="flex flex-col justify-center items-start pr-4">
              <p className="w-full text-justify text-[14px]">
                {item.description}
              </p>
              <PrimaryButton name={"Buy now"} onClick={() => {}} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
