"use client";

import PersonCard from "@/components/cards/PersonCard";
import Mission from "./Mission";
import { personCardList as personCardListData } from "@/dummyApi/about";
import { motion } from "framer-motion";
import fadeInAminationVariants from "../../../lib/animationVariants";

interface PersonCardProps {
  name: string;
  image: string;
  description: string;
}

export default function People(): JSX.Element {
  const personCardList: PersonCardProps[] = personCardListData;

  return (
    <motion.div
      variants={fadeInAminationVariants}
      initial="initial"
      whileInView="animate"
      className="max-w-[1800px] mx-auto h-full rounded-[36px] overflow-hidden bg-black py-2 sm:pb-4"
    >
      <Mission />
      <div className="w-full h-fit  text-white py-6 flex flex-row justify-center items-center text-3xl font-medium">
        Meet Our Cores
      </div>
      <ul className="w-[1100px] xl:w-full mx-auto h-fit overflow-hidden py-8 flex flex-row lg:flex-col justify-center items-end gap-4">
        {/* <li className="w-fit h-[400px] sm:hidden" key="0">
          <PersonCard
            image={personCardList[personCardList.length - 1].image}
            name={personCardList[personCardList.length - 1].name}
            description={personCardList[personCardList.length - 1].description}
          />
        </li> */}
        {personCardList.map((each, index) => (
          <li
            className={`w-fit mx-auto sm:mx-4 ${
              index === Math.floor(personCardList.length / 2)
                ? "h-[450px] sm:h-[500px]"
                : "h-[420px] sm:h-[500px]"
            }`}
            key={index}
          >
            <PersonCard
              image={each.image}
              name={each.name}
              description={each.description}
            />
          </li>
        ))}
        {/* <li className="w-fit h-[400px] sm:hidden" key="4">
          <PersonCard
            image={personCardList[0].image}
            name={personCardList[0].name}
            description={personCardList[0].description}
          />
        </li> */}
      </ul>
    </motion.div>
  );
}
