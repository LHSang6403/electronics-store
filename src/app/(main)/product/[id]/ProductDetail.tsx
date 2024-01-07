import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@components/ui-shadcn-custom/tabs-custom";
import ProductDescription from "@/app/(main)/product/[id]/ProductDescription";
import Warranty from "@/app/(main)/product/[id]/Warranty";
import Review from "@/app/(main)/product/[id]/Review";

import { type ProductData } from "@app/interface";

const ProductDetail = ({ productData }: { productData: ProductData }) => {
  return (
    <div className="w-full max-w-[1900px] h-auto p-10 sm:p-4 pt-2 rounded-[36px] bg-[whitesmoke]">
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
  );
};

export default ProductDetail;
