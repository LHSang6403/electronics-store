"use client";

import { Skeleton } from "@components/ui-shadcn/ui/skeleton";
import { motion } from "framer-motion";
import fadeInAminationVariants from "@lib/animationVariants";

function LoadingItemsContainer({
  isAllProducts,
}: {
  isAllProducts: boolean;
}): JSX.Element {
  return (
    <motion.div
      variants={fadeInAminationVariants}
      initial="initial"
      whileInView="animate"
      className="w-full h-full overflow-hidden mx-auto rounded-3xl xl:rounded-2xl sm:rounded-2xl border-2 border-black"
    >
      <div className="w-full h-[70px] mb-4 bg-primary text-3xl font-semibold flex justify-center items-center">
        Electrical Store
      </div>
      {isAllProducts && (
        <div
          className="w-fit sm:w-auto h-fit mx-14 xl:mx-5 sm:mx-3 mb-2 -mt-2 xl:-mt-0 
        flex flex-row justify-start items-center gap-2
        sm:grid sm:grid-cols-2"
        >
          <Skeleton className="w-28 h-8 flex justify-center items-center rounded-lg shadow-lg bg-[#EEEEEE]" />
        </div>
      )}
      {(() => {
        const sections = [];
        for (let i = 0; i < 4; i++) {
          sections.push(
            <div className="w-full pb-3" key={i}>
              <div className="w-full h-8 mt-2 mx-14 xl:mx-5 sm:mx-5 flex flex-row justify-between items-center">
                <div className="flex flex-row mb-2 items-center hover:cursor-pointer">
                  <Skeleton className="w-24 h-7 bg-[#EEEEEE] shadow-lg" />
                </div>
                <div className="flex pr-28 mb-2 flex-row justify-end gap-2 sm:hidden">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Skeleton
                      key={i}
                      className="w-16 h-7 bg-[#EEEEEE] shadow-lg"
                    />
                  ))}
                </div>
              </div>
              <hr className="w-[84%] h-[1px] mx-auto border-none rounded bg-black"></hr>
              <div className="px-2">
                {!isAllProducts ? (
                  <div
                    className="
                  flex flex-row justify-center items-center gap-8 p-2
                  sm:grid sm:grid-cols-2 sm:place-items-center"
                  >
                    {Array.from({ length: 4 }).map((_, i) => (
                      <div
                        key={i}
                        className="w-36 h-48 p-1.5 flex flex-col gap-1.5 rounded-xl bg-[#FCFCFC] shadow-lg"
                      >
                        <Skeleton className="w-full h-3/4 rounded-xl bg-[#EEEEEE]" />
                        <Skeleton className="w-full h-1/4 rounded-xl bg-[#EEEEEE]" />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div
                    className="grid grid-cols-4 grid-rows-3 gap-8 p-2
                  sm:grid-cols-2 sm:grid-rows-6 sm:place-items-center"
                  >
                    {Array.from({ length: 12 }).map((_, i) => (
                      <div
                        key={i}
                        className="w-36 h-48 p-1.5 flex flex-col gap-1.5 rounded-xl bg-[#FCFCFC] shadow-lg"
                      >
                        <Skeleton className="w-full h-3/4 rounded-xl bg-[#EEEEEE]" />
                        <Skeleton className="w-full h-1/4 rounded-xl bg-[#EEEEEE]" />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        }
        return sections;
      })()}
      {!isAllProducts && (
        <div className="w-full h-fit flex justify-center mb-5">
          <Skeleton className="w-28 h-8 flex justify-center items-center rounded-lg shadow-lg bg-[#EEEEEE]" />
        </div>
      )}
    </motion.div>
  );
}

export default LoadingItemsContainer;
