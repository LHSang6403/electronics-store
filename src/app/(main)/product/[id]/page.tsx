import ProductInfo from "@app/(main)/product/[id]/ProductInfo";
import ProductDetail from "@app/(main)/product/[id]/ProductDetail";
import { readProductById } from "@/app/_actions/product";

import { type ProductData } from "@/app/(main)/product/interface";

export default async function Product({ params }: { params: { id: string } }): Promise<JSX.Element> {
  const response: any = await readProductById(params.id);

  if (response?.error) {
    throw new Error("Product not found");
  }
  const productData = response.data as ProductData;

  return (
    <>
      <div className="w-full flex justify-center">
        <ProductInfo productData={productData} />
      </div>
      <ProductDetail productData={productData} />
    </>
  );
}
