import Banner from "@components/banners/banner";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@components/ui_shadcn/tabs-custom";

import ProductInfo from "./productInfo";
import ProductDescription from "./productDescription";
import Warranty from "./warranty";
import Review from "./review";

import { readProductById, readCategoryById } from "@app/actions/productActions";

import { type ProductData } from "@app/interface";
import { type SquareBanner } from "@app/(main)/product/[id]/interface";

import { waiting } from "@utils/setTimeOut";

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
  await waiting(20000);

  const { data: productDatas } = await readProductById(params.id);
  const productData = productDatas[0] as ProductData;

  const { data: category } = await readCategoryById(params.id);
  const categoryName = category[0].name as string;

  const squareBannerData: SquareBanner = mapProductToSquareBanner(productData);
  return (
    <>
      <ProductInfo
        data={{
          squareBannerData,
          productData,
          categoryName,
        }}
      />
      <div className="w-full h-[250px] sm:h-fit shadow-lg overflow-hidden">
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
