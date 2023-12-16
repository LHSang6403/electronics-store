import Image from "next/image";

export default function PersonCard({
  image,
  name,
  description,
}: {
  image: string;
  name: string;
  description: string;
}): JSX.Element {
  return (
    <div className="w-52 xl:w-56 sm:w-full h-full shadow-lg overflow-hidden flex flex-col justify-end items-end hover:cursor-pointer bg-white [transition:transform_0.5s_ease] hover:scale-[1.02]">
      <div className="w-full h-full block overflow-hidden [transition:transform_0.5s_ease] hover:scale-[1.04]">
        <Image src={image} alt="Person Card" width={260} height={320} />
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
