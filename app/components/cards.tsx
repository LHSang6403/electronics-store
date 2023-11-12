"use client";

import cards from "../dummyApi/cards";

interface Card {
  id: number;
  title: string;
  description: string;
  image: string;
}

export default function Cards(): JSX.Element {
  const data: Card[] = cards;

  return (
    <div className="w-full h-full flex flex-row justify-center items-center">
      {data.map((card) => (
        <div
          key={card.id}
          className="group w-48 h-36 shadow-md rounded-lg border border-black mx-8"
        >
          <img
            className="w-8 h-8 mx-auto mt-5 mb-2 group-hover:invisible"
            alt={`img-card-${card.id}`}
            src={card.image}
          ></img>
          <h1 className="w-fit h-fit mx-auto text-2xl group-hover:invisible">
            {card.title}
          </h1>
          <p className="w-[86%] mx-auto text-center text-[12px] group-hover:invisible">
            {card.description}
          </p>
          <div className="invisible group-hover:visible group-hover:animate-show relative -top-[151px] w-full h-full rounded flex flex-col justify-center items-center ">
            <div className="w-full h-fit flex flex-col justify-center items-center">
              <img
                className="w-8 h-8"
                alt={`img-card-${card.id}`}
                src={card.image}
              ></img>
              <h1 className="w-fit h-fit mx-auto mb-1 font-semibold text-[26px]">
                {card.title}
              </h1>
              <button
                onClick={() => {}}
                className="w-[130px] h-[36px] rounded-lg text-white bg-primary"
              >
                Learn more
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
