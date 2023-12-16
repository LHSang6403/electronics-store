import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@components/ui-shadcn-custom/select-custom";
import ShowMore from "@components/buttons/ShowMore";
import categories from "@dummyApi/category";
import Image from "next/image";

const Category = () => {
  return (
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
  );
};

export default Category;
