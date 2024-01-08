import ProductsContainer from "@/components/product/ProductsContainer";
import Banner from "@components/banners/Banner";
import PageHeading from "@components/layouts/PageHeading";
import CarouselSlider from "@components/CarouselSlider";
import { Suspense } from "react";
import LoadingComponent from "@components/skeletons/LoadingComponent";

export default function AllProducts(): JSX.Element {
  return (
    <>
      <PageHeading name="Products" />
      <section className="px-2 xl:px-0">
        <Suspense fallback={<LoadingComponent />}>
          <CarouselSlider />
        </Suspense>
      </section>
      <section className="w-full h-fit">
        <Banner />
      </section>
      <section className="w-full h-fit">
        <ProductsContainer isAllProducts={true} />
      </section>
    </>
  );
}
