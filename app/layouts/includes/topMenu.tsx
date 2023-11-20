"use client";

import Link from "next/link";
import menu from "./urls";

interface URL {
  name: string;
  url: string;
}

export default function TopMenu(): ReturnType<React.FC> {
  const data: URL[] = menu;

  return (
    <div
      className="w-full px-[calc((100%-1050px)_/_2)] xl:px-6 lg:px-6 sm:px-4 h-8 flex xl:flex-row justify-start xl:items-center bg-white
    sm:flex-col sm:items-start"
    >
      <div
        className="w-[204px] border-r-[1px] border-[#d0d1d2]
      sm:hidden"
      >
        <button className="flex flex-row items-center gap-1" onClick={() => {}}>
          <img
            className="w-5 h-5"
            alt="category-icon"
            src="/assets/category-icon.png"
          ></img>
          Shop by Category
        </button>
      </div>
      <ul className="sm:w-full flex flex-row justify-center sm:justify-between items-center">
        <li key="-1" className="hidden sm:block sm:mr-2">
          <img
            className="w-5 h-5"
            alt="category-icon"
            src="/assets/category-icon.png"
          ></img>
        </li>
        {data.map((item, index) => {
          return (
            <li key={index} className="mx-3 sm:mx-1">
              <Link href={item.url}>{item.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
