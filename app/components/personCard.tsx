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
    <div className="w-full h-full shadow-lg overflow-hidden flex flex-col justify-end items-end group hover:cursor-pointer hover:bg-black">
      <img
        className="w-full h-full object-cover [transition:transform_0.5s_ease] group-hover:scale-[1.04]"
        src={image}
      ></img>
      {name !== "" && (
        <div className="w-full h-8 mb-1 mt-2 text-xl font-medium text-center group-hover:text-white">
          {name}
        </div>
      )}
      {description !== "" && (
        <div className="w-full h-20 px-3 pb-4 text-[14px] text-center group-hover:text-white">
          {description}
        </div>
      )}
    </div>
  );
}
