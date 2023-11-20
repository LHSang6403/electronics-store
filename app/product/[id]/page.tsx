"use client";

import formatCurrencyWithCommas from "../../utils/formatCurrency";
import SquareBanner from "../../components/squareBanner";
import RatingStars from "../../components/ratingStars";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../shadcn-custom/table-custom";
import Link from "next/link";

import products from "../../dummyApi/products";
import productDetailImages from "../../dummyApi/productDetailImages";
import productDetailDescriptions from "../../dummyApi/productDetailDescriptions";
import { type ReactNode } from "react";

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
  const productData: ProductData = products[Number(params.id)];
  const productDetailImagesData: ProductDetailImages[] = productDetailImages;
  const productDetailDescriptionsData: ProductDetailDescription[] =
    productDetailDescriptions;

  const squareBannerData: SquareBannerProps =
    mapProductToSquareBanner(productData);

  return (
    <div className="w-full h-auto pb-8">
      <div className="w-full h-auto flex flex-row justify-center items-center">
        <div className="w-[40%] h-[500px] ">
          <div className="w-[70%] h-[94%] my-[3%] pt-[calc((470px_-_250px)_/_2)] rounded-r-2xl bg-black">
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
            <Link
              href="/"
              className="w-fit h-fit px-2 text-[14px] shadow-lg rounded border-[1px] border-black font-light hover:bg-black hover:text-white"
            >
              Go back
            </Link>
          </div>
          <div className="w-full h-full right-0 flex flex-col">
            <h2 className="text-2xl font-semibold break-words line-clamp-3 leading-8">
              {productData.name}
            </h2>
            {productData.sale !== "" && (
              <div className="w-fit max-w-[400px] h-fit font-semibold px-2 py-1 text-primary rounded-lg shadow-lg bg-black">
                {productData.sale}
              </div>
            )}
            <h3 className="text-lg text-primary mt-4 -mb-2">
              <RatingStars rating={productData.rating} />
            </h3>
            <h3 className="text-2xl font-semibold text-primary">
              {formatCurrencyWithCommas(productData.price)} VND
            </h3>
            <div className="bg-black text-white rounded-2xl shadow-lg p-4 mt-2">
              <h4 className="text-xl ">{productData.category}</h4>
              <p className="text-sm text-justify break-words line-clamp-3 leading-5">
                {productData.description}
              </p>
            </div>
            <button className="w-28 h-10 mt-4 ml-10 text-xl bg-primary shadow-lg font-semibold">
              Buy now
            </button>
          </div>
        </div>
      </div>
      <div className="w-auto h-fit mx-8 my-12">
        <img
          className="w-full h-[350px] mt-2 object-cover hover:cursor-pointer"
          src="https://static.vecteezy.com/system/resources/previews/001/338/096/non_2x/black-friday-sale-banner-free-vector.jpg"
        ></img>
      </div>
      <div className="w-full h-auto p-10 pt-4 mt-8 rounded-[36px] bg-[whitesmoke]">
        <Tabs defaultValue="description" className="w-full">
          <TabsList className="flex flex-row justify-center">
            <TabsTrigger value="description">
              <button className="">Description</button>
            </TabsTrigger>
            <TabsTrigger value="warranty">
              <button className="">Warranty</button>
            </TabsTrigger>
            <TabsTrigger value="review">
              <button className="">Review</button>
            </TabsTrigger>
          </TabsList>
          <h2 className="px-5 text-2xl font-semibold break-words line-clamp-3 leading-8">
            {productData.name}
          </h2>
          <TabsContent value="description">
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
          </TabsContent>
          <TabsContent value="warranty">
            <div>
              <p className="mt-5 text-justify">
                At [Your Company Name], our comprehensive warranty service is
                tailored to safeguard your investment and ensure that you
                experience worry-free ownership of our products. Our commitment
                extends beyond just delivering cutting-edge technology - it is
                about standing by our promise of quality and reliability. Our
                warranty coverage encompasses a wide range of scenarios,
                providing you with protection against manufacturing defects,
                malfunctions, and unexpected issues that may arise during the
                covered period.
              </p>
              <img
                className="w-full p-5"
                alt="prod-description-0"
                src="https://cdn.tgdd.vn/Files/2021/12/16/1404781/cach-kiem-tra-thoi-han-bao-hanh-o-cung-ssd-cpu-in-6.png"
              ></img>
              <div className="w-full h-auto flex flex-col gap-4 text-justify">
                Our warranty service covers:
                <ul className="px-8">
                  <li>
                    - <strong>Manufacturing Defects:</strong> We understand that
                    even with rigorous quality control, unforeseen defects can
                    occur. Our warranty assures you that any manufacturing
                    defects will be promptly addressed, ensuring the integrity
                    of your purchase.
                  </li>
                  <li>
                    - <strong>Malfunctions:</strong> In the rare instance that
                    your product experiences a malfunction during the warranty
                    period, our dedicated support team is ready to assist. We
                    will work diligently to diagnose and resolve the issue,
                    minimizing any disruption to your use.
                  </li>
                  <li>
                    - <strong>Technical Support:</strong> Our commitment to your
                    satisfaction extends beyond physical issues. Should you
                    encounter any technical challenges, our support team is
                    available to provide guidance, troubleshooting, and
                    solutions to keep your product performing at its best.
                  </li>
                </ul>
                <img
                  className="w-full p-5"
                  alt="prod-description-0"
                  src="https://www.x-cart.com/img/27093/best-shipping-company-for-small-business-raw.png"
                ></img>
                The warranty process is designed to be straightforward:
                <ul className="px-8">
                  <li>
                    - <strong>Contact our Support Team:</strong> If you
                    encounter an issue covered by the warranty, simply reach out
                    to our support team through the provided channels, whether
                    it is via phone, email, or our online portal.
                  </li>
                  <li>
                    - <strong>Evaluation and Authorization:</strong> Once your
                    request is received, our team will guide you through any
                    necessary diagnostic steps. If the issue is confirmed to be
                    covered by the warranty, we will provide authorization for
                    the next steps.
                  </li>
                  <li>
                    - <strong>Repair or Replacement:</strong> Depending on the
                    nature of the issue, we will either initiate repairs to
                    restore your product to optimal condition or provide a
                    replacement if deemed necessary.
                  </li>
                  <li>
                    - <strong>Timely Return:</strong> We understand the
                    importance of your time. Our efficient process ensures that
                    your product is returned to you promptly, allowing you to
                    resume normal use.
                  </li>
                </ul>
                Our warranty service reflects our confidence in the durability
                and performance of our products. We are committed to delivering
                not only exceptional technology but also a seamless and reliable
                ownership experience. Your satisfaction is our priority, and our
                warranty service is a testament to that commitment.
              </div>
            </div>
          </TabsContent>
          <TabsContent value="review">
            <div className="w-full h-fit flex flex-row justify-center gap-4">
              <div className="w-[600px] h-[410px] overflow-auto px-4 py-2 border rounded-lg border-[#E5E7EB] bg-[#FCFCFC]">
                <Table className="w-fit h-fit mx-auto">
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-28 text-black text-lg text-left">
                        Name
                      </TableHead>
                      <TableHead className="w-60 text-black text-lg">
                        Review
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody className="h-fit max-h-[300px] overflow-y-scroll">
                    <TableRow>
                      <TableCell>
                        <p className="w-20 break-words line-clamp-1 text-left text-base ">
                          Sang le
                        </p>
                        <div className="h-6 w-12 text-right text-base flex flex-row justify-center items-center gap-1">
                          <button>
                            <img
                              className="w-5 h-4 pr-1 border-r-[1px] bg-none border-[##E5E7EB]"
                              src="/assets/like.png"
                            ></img>
                          </button>
                          <button>
                            <img
                              className="w-4 h-4"
                              src="/assets/dislike.png"
                            ></img>
                          </button>
                        </div>
                      </TableCell>
                      <TableCell>
                        <p className="w-fit max-w-32 break-words line-clamp-2 text-left text-base ">
                          Ultra nice wfbhjerfh jerfhergfh jerhfehgfrrfgref
                          kjwrhfjkerhf jkfkherhv
                          hgerfjvhersjvfbherhjvbjkebfvjhdbvhjdbvg
                        </p>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <p className="w-20 break-words line-clamp-1 text-left text-base ">
                          Sang le
                        </p>
                        <div className="h-6 w-12 text-right text-base flex flex-row justify-center items-center gap-1">
                          <img
                            className="w-5 h-4 pr-1 border-r-[1px] bg-none border-[##E5E7EB]"
                            src="/assets/like.png"
                          ></img>{" "}
                          <img
                            className="w-4 h-4"
                            src="/assets/dislike.png"
                          ></img>
                        </div>
                      </TableCell>
                      <TableCell>
                        <p className="w-fit max-w-32 break-words line-clamp-2 text-left text-base ">
                          Ultra nice wfbhjerfh jerfhergfh
                        </p>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <p className="w-20 break-words line-clamp-1 text-left text-base ">
                          Sang le
                        </p>
                        <div className="h-6 w-12 text-right text-base flex flex-row justify-center items-center gap-1">
                          <button>
                            <img
                              className="w-5 h-4 pr-1 border-r-[1px] bg-none border-[##E5E7EB]"
                              src="/assets/like.png"
                            ></img>
                          </button>
                          <button>
                            <img
                              className="w-4 h-4"
                              src="/assets/dislike.png"
                            ></img>
                          </button>
                        </div>
                      </TableCell>
                      <TableCell>
                        <p className="w-fit max-w-32 break-words line-clamp-2 text-left text-base ">
                          Ultra nice wfbhjerfh jerfhergfh jerhfehgfrrfgref
                          kjwrhfjkerhf jkfkherhv
                          hgerfjvhersjvfbherhjvbjkebfvjhdbvhjdbvg
                        </p>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <p className="w-20 break-words line-clamp-1 text-left text-base ">
                          Sang le
                        </p>
                        <div className="h-6 w-12 text-right text-base flex flex-row justify-center items-center gap-1">
                          <img
                            className="w-5 h-4 pr-1 border-r-[1px] bg-none border-[##E5E7EB]"
                            src="/assets/like.png"
                          ></img>{" "}
                          <img
                            className="w-4 h-4"
                            src="/assets/dislike.png"
                          ></img>
                        </div>
                      </TableCell>
                      <TableCell>
                        <p className="w-fit max-w-32 break-words line-clamp-2 text-left text-base ">
                          Ultra nice wfbhjerfh jerfhergfh
                        </p>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
              <Card className="w-[350px] h-[410px] bg-[#FCFCFC]">
                <CardHeader>
                  <CardTitle>Send us</CardTitle>
                  <CardDescription>
                    Do you have any feedback for us? We would love to hear from.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form>
                    <div className="grid w-full items-center gap-4">
                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="name">Name</Label>
                        <Input
                          className="h-9"
                          id="name"
                          placeholder="Your name"
                        />
                      </div>
                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="review">Your review</Label>
                        <Input
                          className="h-9"
                          id="name"
                          placeholder="Content"
                        />
                      </div>
                    </div>
                  </form>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button className="w-[40%] h-9" variant="outline">
                    Cancel
                  </Button>
                  <Button className="bg-primary w-[40%] h-9">Send</Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

interface DescribeIn2ColsProps {
  image: string;
  description: string;
  isReverse: boolean;
}

function DescribeIn2Cols({
  image,
  description,
  isReverse,
}: DescribeIn2ColsProps): JSX.Element {
  return (
    <div
      className={`w-full h-fit mt-5 flex ${
        isReverse
          ? "flex-row-reverse bg-black rounded-3xl shadow-lg text-white pl-10"
          : "flex-row pr-10"
      } justify-center items-center gap-4`}
    >
      <img
        className="w-80 mx-6"
        alt="prod-description-1"
        // src={productDetailImagesData[parseInt(params.id)].images[1]}
        src={image}
      ></img>
      <p className="w-full h-auto text-justify">
        {/* {productDetailDescriptionsData[parseInt(params.id)].description} */}
        {description}
      </p>
    </div>
  );
}
