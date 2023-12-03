import SquareBanner from "@components/banners/SquareBanner";
import TimeLine from "@components/TimeLine";
import TopProfile from "./TopProfile";
import Story from "./Story";
import People from "./People";
import Mission from "./Mission";
import HighlightCards from "@components/cards/highlightCards";
import { bannerData as banner } from "@dummyApi/about";

import { type SquareBannerProps } from "@app/(main)/about/interface";

export default function About(): JSX.Element {
  const bannerData: SquareBannerProps = banner;

  return (
    <>
      <div className="w-full overflow-hidden h-fit pt-2 flex flex-row sm:flex-col justify-center items-center sm:gap-4">
        <div className="w-fit h-fit transform skew-x-[20deg] overflow-hidden flex justify-center items-center p-2 sm:pt-0 sm:px-4">
          <div className="transform skew-x-[-20deg]">
            <SquareBanner data={bannerData} />
          </div>
        </div>
        <div className="w-1/2 xl:w-full h-fit sm:h-fit flex flex-col justify-center items-center p-2 pl-0">
          <TopProfile />
          <hr className="w-[90%] h-[1px] my-2 border-none bg-black"></hr>
          <HighlightCards />
          <hr className="w-[90%] h-[1px] my-2 border-none bg-black"></hr>
        </div>
      </div>
      <Story />
      <div>
        <Mission />
        <div className="w-full h-fit bg-black text-white py-6 flex flex-row justify-center items-center text-3xl font-medium">
          Meet Our Cores
        </div>
        <People />
      </div>
      <div className="w-full h-fit py-6 flex flex-row justify-center items-center text-3xl font-medium">
        Our Journey
      </div>
      <div className="w-full h-fit px-32 sm:px-4 flex flex-row justify-center items-center">
        <TimeLine />
      </div>
    </>
  );
}
