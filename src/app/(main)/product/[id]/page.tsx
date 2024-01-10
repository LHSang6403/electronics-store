import ProductInfo from "@app/(main)/product/[id]/ProductInfo";
import { readProductById } from "@/app/_actions/products/read";
import ProductDetail from "@app/(main)/product/[id]/ProductDetail";

import { type ProductData } from "@/app/(main)/product/interface";
import { type ProductImages } from "@app/(main)/product/[id]/interface";

function mapProductToProductImages(product: ProductData): ProductImages {
  return product !== undefined
    ? {
        image_0: product.image_1,
        image_1: product.image_2,
        image_2: product.image_3,
        image_3: product.image_4,
      }
    : {
        image_0: "",
        image_1: "",
        image_2: "",
        image_3: "",
      };
}

export default async function Product({
  params,
}: {
  params: { id: string };
}): Promise<JSX.Element> {
  const { data: product } = await readProductById(params.id);
  if (!product) {
    throw new Error("Product not found");
  }
  const productData = product[0] as ProductData;
  const productImages: ProductImages = mapProductToProductImages(productData);

  return (
    <>
      <div className="w-full flex justify-center">
        <ProductInfo productImages={productImages} productData={productData} />
      </div>
      <ProductDetail productData={productData} />
    </>
  );
}
