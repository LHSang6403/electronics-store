import replaceImgsByImageUrls from "@/utils/replaceImgsByImageUrls";

import { type ProductData } from "@/app/(main)/product/interface";

export default async function ProductDescription({
  productData,
}: {
  productData: ProductData;
}): Promise<JSX.Element> {
  if (productData === undefined) {
    throw new Error("Product not found");
  }

  const updatedContent = replaceImgsByImageUrls(
    productData.products_description.content,
    productData.products_description.images
  );

  return (
    <div>
      <div
        dangerouslySetInnerHTML={{ __html: updatedContent ?? "" }}
        className=""
      />
    </div>
  );
}
