import React from "react";

interface SquareBannerProps {
  data: {
    image: string;
    title?: string;
    description?: string;
  };
}

export default function SquareBanner({ data }: SquareBannerProps): JSX.Element {
  const { title, image, description } = data;

  return (
    <div className="group w-full h-fit flex flex-col justify-center items-center">
      {title !== "" && (
        <h1 className="w-full h-8 mb-2 flex flex-row justify-center items-center text-2xl font-medium">
          {title}
        </h1>
      )}
      <img
        className="w-[400px] h-[400px] object-cover rounded-3xl [transition:transform_0.5s_ease] group-hover:scale-[1.01]"
        src={image}
        alt="sale-square-banner"
      />
      {description !== "" && (
        <p className="text-center mt-2 text-sm text-gray-500">{description}</p>
      )}
    </div>
  );
}
