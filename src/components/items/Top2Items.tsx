"use client";

import items from "@/dummyApi/top2Items";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import Image from "next/image";
import { motion } from "framer-motion";
import fadeInAminationVariants from "@lib/animationVariants";

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
    <motion.div
      variants={fadeInAminationVariants}
      initial="initial"
      whileInView="animate"
      className="w-fit h-full mx-auto px-4 xl:px-0 sm:px-4 flex flex-row sm:flex-col gap-4 sm:gap-8 justify-start items-center"
    >
      {data.map((item) => (
        <div
          className="w-[600px] xl:w-[400px] h-full p-2 xl:p-1 sm:w-full sm:h-[220px] shadow-md bg-[#EEEEEE] flex flex-row justify-center items-center"
          key={item.id}
        >
          <div className="w-1/2 xl:w-1/3 sm:w-1/4 ml-4">
            <Image
              src={item.image}
              alt="Top two items"
              width={640}
              height={471}
            />
          </div>
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
    </motion.div>
  );
}
