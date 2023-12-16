"use client";

import PrimaryButton from "@components/buttons/PrimaryButton";

export default function IntroHome(): JSX.Element {
  return (
    <div>
      <h1 className="w-[88%] xl:w-full sm:px-4 text-2xl xl:text-xl sm:text-xl font-bold">
        Your go-to destination for top-quality electronic products in Vietnam!
      </h1>
      <div className="w-[88%] xl:w-full sm:w-full my-2 xl:px-0 sm:px-4 flex flex-row justify-between items-center">
        <div className="w-fit ml-2">
          <PrimaryButton name={"Shop now"} onClick={() => {}} />
        </div>
        <hr className="w-[100px] h-[2px] mr-2 bg-primary rounded"></hr>
      </div>
      <div className="w-[88%] xl:w-full sm:px-4 font-light text-justify">
        At&nbsp;
        <p className="inline text-sm font-bold text-secondary">
          Electrical Store
        </p>
        , we take pride in being a destination for tech enthusiasts and
        electronic lovers. With a professional and dedicated team, we are
        committed to provide the best shopping experience.
      </div>
    </div>
  );
}
