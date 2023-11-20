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
    <div
      className="w-full h-full
      flex flex-row justify-center items-center
      lg:grid lg:grid-rows-2 lg:grid-cols-2 lg:gap-6 lg:justify-items-center
      sm:grid sm:grid-rows-2 sm:grid-cols-2 sm:gap-6 sm:justify-items-center"
    >
      {data.map((card) => (
        <div
          key={card.id}
          className="group w-48 h-40 xl:h-36 sm:w-full sm:h-40 shadow-md rounded-lg border border-black mx-8"
        >
          <img
            className="w-8 h-8 mx-auto mt-5 mb-2 group-hover:invisible"
            alt={`img-card-${card.id}`}
            src={card.image}
          ></img>
          <h2 className="w-fit h-fit mx-auto text-2xl xl:text-xl sm:text-xl group-hover:invisible">
            {card.title}
          </h2>
          <p className="w-[94%] h-20 mx-auto text-center text-[12px] group-hover:invisible">
            {card.description}
          </p>
          <div className="invisible group-hover:visible group-hover:animate-show relative -top-[191px] sm:-top-[181px] w-full h-fit my-2 rounded flex flex-col justify-center items-center">
            <div className="w-full h-fit flex flex-col justify-center items-center">
              <img
                className="w-8 h-8"
                alt={`img-card-${card.id}`}
                src={card.image}
              ></img>
              <h1 className="w-fit h-fit mx-auto mb-1 sm:mb-2 font-semibold text-[26px]">
                {card.title}
              </h1>
              <button
                onClick={() => {}}
                className="w-[130px] h-[36px] sm:text-sm rounded-lg text-white bg-primary"
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
