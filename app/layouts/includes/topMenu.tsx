"use client";
export default function TopMenu(): ReturnType<React.FC> {
  const menu: string[] = ["Home", "Best Seller", "Blog", "About", "Contact Us"];
  return (
    <div className="w-full h-8 px-[15%] flex flex-row justify-start items-center bg-white">
      <div className="pr-3 border-r-[1px] border-[#d0d1d2]">
        <button className="flex flex-row items-center gap-1" onClick={() => {}}>
          <img
            className="w-5"
            alt="category-icon"
            src="/assets/category-icon.png"
          ></img>
          Shop by Category
        </button>
      </div>
      {menu.map((item, index) => {
        return (
          <span key={index} className="mx-3">
            {item}
          </span>
        );
      })}
    </div>
  );
}
