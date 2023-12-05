import Image from "next/image";

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
    <div className="w-52 xl:w-56 sm:w-full h-full shadow-lg overflow-hidden flex flex-col justify-end items-end hover:cursor-pointer bg-white [transition:transform_0.5s_ease] hover:scale-[1.02]">
      <div className="w-full h-full block overflow-hidden [transition:transform_0.5s_ease] hover:scale-[1.04]">
        <Image
          src={image}
          alt="Person Card"
          layout="responsive"
          width={260}
          height={320}
        />
      </div>
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
