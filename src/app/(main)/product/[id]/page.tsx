import Banner from "@/components/banners/Banner";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui-shadcn-custom/tabs-custom";

import ProductInfo from "@/app/(main)/product/[id]/ProductInfo";
import ProductDescription from "@/app/(main)/product/[id]/ProductDescription";
import Warranty from "@/app/(main)/product/[id]/Warranty";
import Review from "@/app/(main)/product/[id]/Review";

import { readProductById } from "@/app/_actions/productActions";
import { type ProductData } from "@/app/interface";
import { type SquareBanner } from "@/app/(main)/product/[id]/interface";

import { waiting } from "@/utils/waiting";

function mapProductToSquareBanner(product: ProductData): SquareBanner {
  return product !== undefined
    ? {
        image: product.image,
        title: "",
        description: "",
      }
    : {
        image: "",
        title: "undefined",
        description: "",
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
  const squareBannerData: SquareBanner = mapProductToSquareBanner(productData);

  await waiting(1000);
  return (
    <>
      <ProductInfo
        data={{
          squareBannerData,
          productData,
        }}
      />
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
            <ProductDescription
              data={{
                productData,
              }}
            />
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
