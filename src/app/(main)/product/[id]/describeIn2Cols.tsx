import { type DescribeIn2ColsProps } from "@/app/(main)/product/[id]/interface";
import Image from "next/image";

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
      <div className="w-1/2 xl:w-1/3 sm:w-full mx-6 xl:mx-0">
        <Image
          src={image}
          alt="Product Description"
          layout="responsive"
          width={500}
          height={300}
        />
      </div>
      <p className="w-full sm:w-full h-auto text-justify">{description}</p>
    </div>
  );
}
