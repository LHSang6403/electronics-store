"use client";

import trendingCategories from "@dummyApi/trendingCategories";
import PrimaryButton from "@components/buttons/PrimaryButton";

interface TrendingCategory {
  id: number;
  name: string;
  image: string;
}

export default function TrendingCategories(): JSX.Element {
  const data: TrendingCategory[] = trendingCategories;

  return (
    <div
      className="w-full h-fit sm:px-4
    flex flex-row justify-center items-center
    xl:grid xl:grid-cols-6 xl:gap-4
    sm:grid-cols-6 sm:justify-items-center"
    >
      {data.map((item, index) => (
        <div
          className={`w-44 xl:w-auto sm:w-full h-52 ${
            index === data.length - 1 || index === data.length - 2
              ? "xl:col-span-3"
              : "xl:col-span-2"
          } sm:col-span-3 mx-2 xl:mx-0 sm:m-0 shadow-md flex flex-col justify-center items-center bg-[#EEEEEE]`}
          key={item.id}
        >
          <img
            className="w-32 h-32 rounded-2xl overflow-hidden"
            alt={`category-img-${item.id}`}
            src={item.image}
          ></img>
          <p className="h-8 text-xl sm:text-lg">{item.name}</p>
          <PrimaryButton name="See more" onClick={() => {}} />
        </div>
      ))}
    </div>
  );
}
