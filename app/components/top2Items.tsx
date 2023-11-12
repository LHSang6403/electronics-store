"use client";

interface TopItem {
  id: number;
  name: string;
  price: number;
  feature: string;
  description: string;
  image: string;
}

export default function Top2Items(): JSX.Element {
  const items: TopItem[] = [
    {
      id: 1,
      name: "Arduino V1",
      price: 300000,
      feature: "circut",
      description:
        "Arduino V1, a pinnacle in open-source electronics, offers intuitive electronic platforms for enthusiasts and innovators.",
      image: "/assets/arduino.png",
    },
    {
      id: 2,
      name: "Arduino V3",
      price: 500000,
      feature: "circut",
      description:
        "Fuel creativity with our Arduino modules—compact, powerful, and perfect for tech enthusiasts to bring their ideas to life.",
      image: "/assets/arduino.png",
    },
  ];
  return (
    <div className="w-full h-full flex flex-row justify-center items-center">
      {items.map((item) => (
        <div
          className="w-[600px] h-full shadow-md bg-[#EEEEEE] mx-2 flex flex-row justify-center items-center"
          key={items[0].id}
        >
          <img
            className="w-56 ml-4"
            alt={`img-${items[0].id}`}
            src={items[0].image}
          ></img>
          <div className="w-1/2 h-full flex flex-col justify-center items-start">
            <div className="w-2/3 ml-6 my-1">
              <h1 className="text-2xl">{item.name}</h1>
              <hr className="w-full h-[1px] border-none bg-black"></hr>
            </div>
            <div className="flex flex-col justify-center items-center">
              <p className="w-[80%] text-justify text-[14px]">
                {item.description}
              </p>
              <button
                onClick={() => {}}
                className="w-[100px] h-[40px] my-2 bg-primary"
              >
                Buy now
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
