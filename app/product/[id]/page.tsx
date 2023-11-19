"use client";

import formatCurrencyWithCommas from "../../utils/formatCurrency";
import SquareBanner from "../../components/squareBanner";
import RatingStars from "../../components/ratingStars";

import products from "../../dummyApi/products";
import productDetailImages from "../../dummyApi/productDetailImages";
import productDetailDescriptions from "../../dummyApi/productDetailDescriptions";

interface SquareBannerProps {
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

function mapProductToSquareBanner(product: ProductData): SquareBannerProps {
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
  const productsData: ProductData = products[Number(params.id)];
  const productDetailImagesData: ProductDetailImages[] = productDetailImages;
  const productDetailDescriptionsData: ProductDetailDescription[] =
    productDetailDescriptions;

  const squareBannerData: SquareBannerProps =
    mapProductToSquareBanner(productsData);

  return (
    <div className="w-full h-auto">
      <div className="w-full h-auto flex flex-row justify-center items-center">
        <div className="w-[40%] h-[500px] ">
          <div className="w-[50%] h-[94%] my-[3%] pt-[calc((470px_-_250px)_/_2)] rounded-r-2xl bg-black">
            <div className="w-fit h-[250px] border-[1px] ml-8 rounded-lg border-white flex flex-col justify-center items-center">
              <button>
                <img
                  className="w-12 h-12 mr-1"
                  src={squareBannerData.image}
                ></img>
              </button>
              <button>
                <img
                  className="w-12 h-12 mr-1"
                  src={squareBannerData.image}
                ></img>
              </button>
              <button>
                <img
                  className="w-12 h-12 mr-1"
                  src={squareBannerData.image}
                ></img>
              </button>
              <button>
                <img
                  className="w-12 h-12 mr-1"
                  src={squareBannerData.image}
                ></img>
              </button>
            </div>
            <div className="w-[400px] h-[400px] relative left-12 -top-[330px]">
              <SquareBanner data={squareBannerData} />
            </div>
          </div>
        </div>
        <div className="w-[60%] h-[500px] px-10 flex flex-col justify-between">
          <div className="w-full h-16  pt-3 flex flex-row justify-center items-center">
            <button className="w-fit h-fit px-2 text-[14px] shadow-lg rounded border-[1px] border-black font-light hover:bg-black hover:text-white">
              Go back
            </button>
          </div>
          <div className="w-full h-full right-0 flex flex-col">
            <h2 className="text-2xl font-semibold break-words line-clamp-3 leading-8">
              {productsData.name}
            </h2>
            {productsData.sale !== "" && (
              <div className="w-fit max-w-[400px] h-fit font-semibold px-2 py-1 text-primary rounded-lg shadow-lg bg-black">
                {productsData.sale}
              </div>
            )}
            <h3 className="text-lg text-primary mt-4 -mb-2">
              <RatingStars rating={productsData.rating} />
            </h3>
            <h3 className="text-2xl font-semibold text-primary">
              {formatCurrencyWithCommas(productsData.price)} VND
            </h3>
            <h4 className="mt-2 text-xl ">{productsData.category}</h4>
            <p className="text-sm text-justify break-words line-clamp-3 leading-5">
              {productsData.description}
            </p>
            <button className="w-28 h-10 mt-4 ml-10 text-xl bg-primary shadow-lg font-semibold">
              Buy now
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-auto p-10 mt-6 rounded-[36px] bg-[whitesmoke]">
        <h2 className="px-5 text-2xl font-semibold break-words line-clamp-3 leading-8">
          {productsData.name}
        </h2>
        <p className="mt-5">{productsData.description}</p>
        <img
          className="w-full p-5"
          alt="prod-description-0"
          src={productDetailImagesData[parseInt(params.id)].images[0]}
        ></img>
        <p className="w-full h-auto text-justify">
          {productDetailDescriptionsData[parseInt(params.id)].description}
        </p>
        <div className="w-full h-fit flex flex-row justify-center items-center gap-4">
          <img
            className="w-80 mx-6"
            alt="prod-description-1"
            src={productDetailImagesData[parseInt(params.id)].images[1]}
          ></img>
          <p className="w-full h-auto text-justify">
            {productDetailDescriptionsData[parseInt(params.id)].description}
          </p>
        </div>
        <div className="w-full h-fit flex flex-row-reverse justify-center items-center gap-4">
          <img
            className="w-80 mx-6"
            alt="prod-description-1"
            src={productDetailImagesData[parseInt(params.id)].images[1]}
          ></img>
          <p className="w-full h-auto text-justify">
            {productDetailDescriptionsData[parseInt(params.id)].description}
          </p>
        </div>
        <p className="w-full h-auto text-justify">
          {productDetailDescriptionsData[parseInt(params.id)].description}
        </p>
      </div>
    </div>
  );
}
