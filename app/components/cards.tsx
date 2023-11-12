"use client";

interface Card {
  id: number;
  title: string;
  description: string;
  image: string;
}

export default function Cards(): JSX.Element {
  const cards: Card[] = [
    {
      id: 1,
      title: "Best quality",
      description: "Our commitment to excellence shines through all products.",
      image: "/assets/cards/quality-icon.png",
    },
    {
      id: 2,
      title: "Best price",
      description: "Discover unbeatable value without compromising on quality.",
      image: "/assets/cards/price-icon.png",
    },
    {
      id: 3,
      title: "Nice guarantee",
      description:
        "Shop with confidence knowing that your satisfaction is top priority.",
      image: "/assets/cards/guarantee-icon.png",
    },
    {
      id: 4,
      title: "Best service",
      description:
        "Experience personalized service that goes beyond the transaction.",
      image: "/assets/cards/service-icon.png",
    },
  ];
  return (
    <div className="w-full h-full flex flex-row justify-center items-center">
      {cards.map((card) => (
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
