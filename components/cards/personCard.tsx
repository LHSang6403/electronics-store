interface PersonCardProps {
  data: {
    image: string;
    name: string;
    description: string;
  };
}

export default function PersonCard({ data }: PersonCardProps): JSX.Element {
  const { name, image, description } = data;
  return (
    <div className="w-52 xl:w-56 sm:w-64 h-full shadow-lg overflow-hidden flex flex-col justify-end items-end hover:cursor-pointer bg-white [transition:transform_0.5s_ease] hover:scale-[1.02]">
      <img
        className="w-full h-full object-cover [transition:transform_0.5s_ease] hover:scale-[1.04]"
        src={image}
      ></img>
      {name !== "" && (
        <div className="w-full h-8 mb-1 mt-2 text-xl text-black font-medium text-center">
          {name}
        </div>
      )}
      {description !== "" && (
        <div className="w-full h-20 px-3 pb-4 text-[14px] text-black text-center">
          {description}
        </div>
      )}
    </div>
  );
}
