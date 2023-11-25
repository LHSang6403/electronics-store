interface DescribeIn2ColsProps {
  image: string;
  description: string;
  isReverse: boolean;
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

interface ProductDescriptionProps {
  data: {
    productDetailImagesData: ProductDetailImages[];
    productDetailDescriptionsData: ProductDetailDescription[];
    productData: ProductData;
  };
  params: {
    id: string;
  };
}

export default function ProductDescription({
  data: { productDetailImagesData, productDetailDescriptionsData, productData },
  params,
}: ProductDescriptionProps): JSX.Element {
  return (
    <div>
      <p className="mt-5 text-justify">{productData.description}</p>
      <img
        className="w-full p-5"
        alt="prod-description-0"
        src={productDetailImagesData[parseInt(params.id)].images[0]}
      ></img>
      <p className="w-full h-auto mt-5 text-justify">
        {productDetailDescriptionsData[parseInt(params.id)].description}
      </p>
      <DescribeIn2Cols
        image={productDetailImagesData[parseInt(params.id)].images[1]}
        description={
          productDetailDescriptionsData[parseInt(params.id)].description
        }
        isReverse={false}
      />
      <DescribeIn2Cols
        image={productDetailImagesData[parseInt(params.id)].images[2]}
        description={
          productDetailDescriptionsData[parseInt(params.id)].description
        }
        isReverse={true}
      />
      <p className="w-full h-auto mt-5 text-justify">
        {productDetailDescriptionsData[parseInt(params.id)].description}
      </p>
    </div>
  );
}

function DescribeIn2Cols({
  image,
  description,
  isReverse,
}: DescribeIn2ColsProps): JSX.Element {
  return (
    <div
      className={`w-full h-fit flex py-8 sm:px-4 ${
        isReverse
          ? "flex-row-reverse sm:flex-col-reverse bg-black rounded-3xl shadow-lg text-white pl-10"
          : "flex-row sm:flex-col pr-10"
      } sm:px-2 justify-center items-center gap-4`}
    >
      <img
        className="w-1/2 xl:w-1/3 sm:w-full mx-6 xl:mx-0"
        alt="prod-description-1"
        src={image}
      ></img>
      <p className="w-full sm:w-full h-auto text-justify">{description}</p>
    </div>
  );
}
