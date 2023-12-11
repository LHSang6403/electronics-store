"use client";

import Link from "next/link";
import menu from "./urls";
import Image from "next/image";

interface URL {
  name: string;
  url: string;
}

export default function TopMenu(): ReturnType<React.FC> {
  const data: URL[] = menu;

  return (
    <div
      className="w-full px-[calc((100%-1050px)_/_2)] xl:px-6 sm:px-4 h-8 flex justify-start bg-white
    "
    >
      <ul className="sm:w-full overflow-auto flex flex-row justify-center sm:justify-start items-center gap-3">
        <li>
          <Link
            href="#"
            className="w-fit flex flex-row items-center gap-1 pr-2 border-r-[1px] border-[#d0d1d2]"
            onClick={() => {}}
          >
            <div className="w-5 h-5 block">
              <Image
                src="/assets/icons/category-icon.png"
                alt="Category"
                width={512}
                height={512}
              />
            </div>
            <p className="sm:hidden">Shop by Category</p>
          </Link>
        </li>
        {data.map((item, index) => {
          return (
            <li key={index} className="w-fit">
              <Link href={item.url}>{item.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
