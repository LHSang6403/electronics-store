"use client";

import Link from "next/link";
import menu from "./urls";
import Image from "next/image";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

interface URL {
  name: string;
  url: string;
}

export default function TopMenu(): ReturnType<React.FC> {
  const data: URL[] = menu;
  const path = usePathname();

  return (
    <div
      className="w-full px-10 xl:px-6 sm:px-2 ssm:px-0 h-8 flex justify-start
    "
    >
      <ul className="sm:w-full overflow-auto flex flex-row justify-center sm:justify-start items-center gap-3">
        <li>
          <Link
            href="#"
            className="sm:hidden w-fit flex flex-row items-center gap-1 pr-2 border-r-[1px] border-[#d0d1d2]"
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
            <p className="sm:hidden mx-0.5">Shop by Category</p>
          </Link>
        </li>
        {data.map((item, index) => {
          return (
            <li key={index} className="w-fit mx-0.5">
              <Link className="relative" href={item.url}>
                {path === item.url && (
                  <motion.span
                    layoutId="underline"
                    className="absolute left-0 top-full h-[2px] block w-full bg-primary"
                  />
                )}
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
