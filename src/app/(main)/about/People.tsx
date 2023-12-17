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
      className="w-full h-full rounded-[36px] overflow-hidden bg-black py-2 sm:pb-4"
    >
      <Mission />
      <div className="w-full h-fit bg-black text-white py-6 flex flex-row justify-center items-center text-3xl font-medium">
        Meet Our Cores
      </div>
      <div className="w-auto mx-4 h-fit overflow-hidden flex flex-row  justify-center items-end">
        <ul className="w-[90%] h-fit py-8 flex flex-row sm:flex-col justify-center items-end gap-8">
          <li className="w-fit h-[370px] sm:hidden" key="0">
            <PersonCard
              image={personCardList[personCardList.length - 1].image}
              name={personCardList[personCardList.length - 1].name}
              description={
                personCardList[personCardList.length - 1].description
              }
            />
          </li>
          {personCardList.map((each, index) => (
            <li
              className={`w-[90%] mx-auto ${
                index === Math.floor(personCardList.length / 2)
                  ? "h-[450px]"
                  : "h-[420px]"
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
          <li className="w-fit h-[400px] sm:hidden" key="4">
            <PersonCard
              image={personCardList[0].image}
              name={personCardList[0].name}
              description={personCardList[0].description}
            />
          </li>
        </ul>
      </div>
    </motion.div>
  );
}
