import Banner from "@components/banners/Banner";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@components/ui-shadcn-custom/tabs-custom";

import ProductInfo from "@app/(main)/product/[id]/ProductInfo";
import ProductDescription from "@app/(main)/product/[id]/ProductDescription";
import Warranty from "@app/(main)/product/[id]/Warranty";
import Review from "@app/(main)/product/[id]/Review";

import { readProductById } from "@app/_actions/productActions";
import { type ProductData } from "@app/interface";
import { type ProductImages } from "@app/(main)/product/[id]/interface";

import { waiting } from "@/lib/waiting";

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

  await waiting(200);
  return (
    <>
      <ProductInfo productImages={productImages} productData={productData} />
      <div className="w-full h-[250px] xl:mt-6 sm:-mt-2 sm:h-fit shadow-lg overflow-hidden">
        <Banner />
      </div>
      <div className="w-full h-auto p-10 sm:p-4 pt-2 rounded-[36px] bg-[whitesmoke]">
        <Tabs defaultValue="description" className="w-full">
          <TabsList className="flex flex-row justify-center gap-1 my-2">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="warranty">Warranty</TabsTrigger>
            <TabsTrigger value="review">Review</TabsTrigger>
          </TabsList>
          <h2 className="px-5 text-2xl font-semibold break-words line-clamp-3 leading-8">
            {productData.name}
          </h2>
          <TabsContent value="description">
            <ProductDescription productData={productData} />
          </TabsContent>
          <TabsContent value="warranty">
            <Warranty />
          </TabsContent>
          <TabsContent value="review">
            <Review />
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
