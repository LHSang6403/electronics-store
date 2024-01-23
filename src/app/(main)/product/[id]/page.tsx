import ProductInfo from "@app/(main)/product/[id]/ProductInfo";
import ProductDetail from "@app/(main)/product/[id]/ProductDetail";
// import { useQuery } from "@tanstack/react-query";
import { readProductById } from "@/app/_actions/product";

import { type ProductData } from "@/app/(main)/product/interface";
import { type ProductImages } from "@app/(main)/product/[id]/interface";

export default async function Product({
  params,
}: {
  params: { id: string };
}): Promise<JSX.Element> {
  // const {
  //   data,
  //   isSuccess,
  //   error,
  // }: { data: any; isLoading: boolean; isSuccess: boolean; error: any } =
  //   useQuery({
  //     queryKey: [`product-${params.id}`],
  //     queryFn: async () => await readProductById(params.id),
  //   });

  // if (error) {
  //   throw new Error(error.message);
  // }

  // const productData = data?.data[0] as ProductData;
  // const productImages: ProductImages = mapProductToProductImages(productData);

  const response: any = await readProductById(params.id);
  if (response?.error) {
    throw new Error("Product not found");
  }
  const productData = response.data as ProductData;
  const productImages: ProductImages = mapProductToProductImages(productData);

  return (
    <>
      <div className="w-full xflex justify-center">
        <ProductInfo productImages={productImages} productData={productData} />
      </div>
      {<ProductDetail productData={productData} />}
    </>
  );
}

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
