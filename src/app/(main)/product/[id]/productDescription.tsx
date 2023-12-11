import {
  readProductDetailDescriptionById,
  readProductDetailImageById,
} from "@/app/_actions/productActions";
import DescribeIn2Cols from "@/app/(main)/product/[id]/DescribeIn2Cols";
import Image from "next/image";

import {
  type ProductDetailDescription,
  type ProductDetailImages,
  type ProductDescriptionProps,
} from "@/app/(main)/product/[id]/interface";

export default async function ProductDescription({
  data: { productData },
}: ProductDescriptionProps): Promise<JSX.Element> {
  const id = productData.id;

  const { data: productDetailDescription } =
    await readProductDetailDescriptionById(id.toString());
  const productDetailDescriptionData =
    productDetailDescription as ProductDetailDescription;

  const { data: productDetailImage } = await readProductDetailImageById(
    id.toString()
  );
  const productDetailImageData = productDetailImage as ProductDetailImages;

  return (
    <div>
      <p className="mt-5 text-justify">{productData.description}</p>
      <div className="w-full p-5">
        <Image
          className="w-full p-5"
          alt="Product Description"
          src={productDetailImageData.image_0}
          width={500}
          height={500}
        />
      </div>
      <p className="w-full h-auto mt-5 text-justify">
        {productDetailDescriptionData.description}
      </p>
      <DescribeIn2Cols
        image={productDetailImageData.image_1}
        description={productDetailDescriptionData.description}
        isReverse={false}
      />
      <DescribeIn2Cols
        image={productDetailImageData.image_2}
        description={productDetailDescriptionData.description}
        isReverse={true}
      />
      <p className="w-full h-auto mt-5 text-justify">
        {productDetailDescriptionData.description}
      </p>
    </div>
  );
}
