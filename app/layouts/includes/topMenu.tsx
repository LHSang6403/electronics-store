"use client";
import Link from "next/link";
interface URL {
  name: string;
  url: string;
}

export default function TopMenu(): ReturnType<React.FC> {
  const menu: URL[] = [
    { name: "Home", url: "/" },
    { name: "All products", url: "/all-products" },
    { name: "Cart", url: "/cart" },

    { name: "About", url: "/about" },
  ];
  return (
    <div className="w-full px-[calc((100%-1050px)_/_2)] h-8 flex flex-row justify-start items-center bg-white">
      <div className="w-[204px] border-r-[1px] border-[#d0d1d2]">
        <button className="flex flex-row items-center gap-1" onClick={() => {}}>
          <img
            className="w-5"
            alt="category-icon"
            src="/assets/category-icon.png"
          ></img>
          Shop by Category
        </button>
      </div>
      <ul className="flex flex-row justify-center items-center">
        {menu.map((item, index) => {
          return (
            <li key={index} className="mx-3">
              <Link href={item.url}>{item.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
