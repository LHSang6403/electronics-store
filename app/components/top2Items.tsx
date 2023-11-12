"use client";

import items from "../dummyApi/top2Items";

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
    <div className="w-full h-full flex flex-row justify-center items-center">
      {data.map((item) => (
        <div
          className="w-[600px] h-full shadow-md bg-[#EEEEEE] mx-2 flex flex-row justify-center items-center"
          key={item.id}
        >
          <img
            className="w-1/2 ml-4"
            alt={`img-${data[0].id}`}
            src={item.image}
          ></img>
          <div className="w-1/2 h-full pl-4 flex flex-col justify-center items-start overflow-hidden">
            <div className="w-2/3 my-1">
              <h1 className="text-2xl">{item.name}</h1>
              <hr className="w-full h-[1px] border-none bg-black"></hr>
            </div>
            <div className="flex flex-col justify-center items-start pr-4">
              <p className="w-full text-justify text-[14px]">
                {item.description}
              </p>
              <button
                onClick={() => {}}
                className="w-[100px] h-[40px] mx-auto my-2 bg-primary"
              >
                Buy now
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}