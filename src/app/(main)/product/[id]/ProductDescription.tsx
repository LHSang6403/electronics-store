import DescribeIn2Cols from "@app/(main)/product/[id]/DescribeIn2Cols";
import Image from "next/image";

import { type ProductData } from "@app/interface";

export default async function ProductDescription({
  productData,
}: {
  productData: ProductData;
}): Promise<JSX.Element> {
  return (
    <div>
      <p className="mt-5 text-justify">{productData.description}</p>
      <div className="w-full p-5">
        <Image
          className="w-full p-5"
          alt="Product Description"
          src={productData.image_1}
          width={500}
          height={500}
        />
      </div>
      <p className="w-full h-auto mt-5 text-justify">
        {productData.description_1}
      </p>
      <DescribeIn2Cols
        image={productData.image_2}
        description={productData.description_1}
        isReverse={false}
      />
      <DescribeIn2Cols
        image={productData.image_3}
        description={productData.description_1}
        isReverse={true}
      />
      <p className="w-full h-auto mt-5 text-justify">
        {productData.description_1}
      </p>
    </div>
  );
}
