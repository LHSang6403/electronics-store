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

import products from "@dummyApi/products";
import productDetailImages from "@dummyApi/productDetailImages";
import productDetailDescriptions from "@dummyApi/productDetailDescriptions";

interface SquareBanner {
  image: string;
  title: string;
  description: string;
}

interface ProductData {
  id: number;
  name: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rating: number;
  sale?: string;
}

interface ProductDetailImages {
  id: number;
  images: string[];
}

interface ProductDetailDescription {
  id: number;
  name: string;
  category: string;
  description: string;
}

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

export default function Product({
  params,
}: {
  params: { id: string };
}): JSX.Element {
  const productData: ProductData = products[Number(params.id)];
  const productDetailImagesData: ProductDetailImages[] = productDetailImages;
  const productDetailDescriptionsData: ProductDetailDescription[] =
    productDetailDescriptions;

  const squareBannerData: SquareBanner = mapProductToSquareBanner(productData);

  return (
    <div className="w-full h-auto pb-8">
      <ProductInfo
        data={{
          squareBannerData,
          productData,
        }}
      />
      <div className="w-full h-[250px] sm:h-fit shadow-lg overflow-hidden mt-8">
        <Banner />
      </div>
      <div className="w-full h-auto p-10 sm:p-4 pt-4 mt-8 rounded-[36px] bg-[whitesmoke]">
        <Tabs defaultValue="description" className="w-full">
          <TabsList className="flex flex-row justify-center">
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
                productDetailImagesData,
                productDetailDescriptionsData,
                productData,
              }}
              params={{ id: params.id }}
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
    </div>
  );
}
