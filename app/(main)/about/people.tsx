import PersonCard from "@components/cards/PersonCard";
import { personCardList as personCardListData } from "@dummyApi/about";

import { type PersonCardProps } from "@app/(main)/about/interface";

export default function People(): JSX.Element {
  const personCardList: PersonCardProps[] = personCardListData;
  return (
    <div className="w-full h-full rounded-b-[36px] bg-black py-2">
      <div className="w-auto mx-4 h-fit overflow-hidden flex flex-row  justify-center items-end">
        <ul className="w-[90%] h-fit py-8 flex flex-row sm:flex-col justify-center items-end gap-8">
          <li className="w-fit h-[370px] sm:hidden" key="0">
            <PersonCard data={personCardList[personCardList.length - 1]} />
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
              <PersonCard data={each} />
            </li>
          ))}
          <li className="w-fit h-[400px] sm:hidden" key="4">
            <PersonCard data={personCardList[0]} />
          </li>
        </ul>
      </div>
    </div>
  );
}
