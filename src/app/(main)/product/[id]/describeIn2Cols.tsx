import { type DescribeIn2ColsProps } from "@/app/(main)/product/[id]/interface";

export default function DescribeIn2Cols({
  image,
  description,
  isReverse,
}: DescribeIn2ColsProps): JSX.Element {
  return (
    <div
      className={`w-full h-fit flex py-8 sm:px-4 ${
        isReverse
          ? "flex-row-reverse sm:flex-col-reverse bg-black rounded-3xl shadow-lg text-white pl-10"
          : "flex-row sm:flex-col pr-10"
      } sm:px-2 justify-center items-center gap-4`}
    >
      <img
        className="w-1/2 xl:w-1/3 sm:w-full mx-6 xl:mx-0"
        alt="prod-description-1"
        src={image}
      ></img>
      <p className="w-full sm:w-full h-auto text-justify">{description}</p>
    </div>
  );
}
