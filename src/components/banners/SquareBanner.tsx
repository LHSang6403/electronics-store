import Image from "next/image";

import { type SquareBannerProps } from "@app/(main)/about/interface";

export default function SquareBanner({
  squareBannerProps,
}: {
  squareBannerProps: SquareBannerProps;
}): JSX.Element {
  const { title, image, description } = squareBannerProps;

  return (
    <div className="group w-full h-fit flex flex-col justify-center items-center">
      {title !== "" && (
        <h1 className="w-full h-8 mb-4 flex flex-row justify-center items-center text-2xl font-medium">
          {title}
        </h1>
      )}
      <div className="block w-[400px] h-[400px] xl:w-[300px] xl:h-[300px] sm:w-[250px] sm:h-[250px] object-cover overflow-hidden rounded-3xl [transition:transform_0.5s_ease] group-hover:scale-[1.01]">
        <Image src={image} alt="Square Banner" width={400} height={400} />
      </div>
      {description !== "" && (
        <p className="text-center mt-2 text-sm text-gray-500">{description}</p>
      )}
    </div>
  );
}
