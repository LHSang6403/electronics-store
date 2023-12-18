import { Skeleton } from "@components/ui-shadcn/ui/skeleton";

export default function Loading() {
  return (
    <div className="w-[1050px] h-screen xl:w-full lg:w-full sm:w-full xl:px-6 lg:px-6 sm:px-0 mx-auto bg-[#f5f5f555] flex flex-col p-4">
      <div className="w-full h-fit grid grid-cols-6 gap-3">
        <div className="col-start-1 col-span-3 flex flex-col gap-3">
          <Skeleton className="h-8 rounded-lg bg-[#EEEEEE]" />
          <Skeleton className="h-16 rounded-lg bg-[#EEEEEE]" />
          <Skeleton className="h-48 rounded-lg bg-[#EEEEEE]" />
        </div>
        <Skeleton className="h-full rounded-lg col-start-4 col-span-3 bg-[#EEEEEE]" />
        <Skeleton className="h-8 rounded-lg col-start-1 col-span-4 bg-[#EEEEEE]" />
        <Skeleton className="h-8 rounded-lg col-start-5 col-span-1 bg-[#EEEEEE]" />
        <Skeleton className="h-8 rounded-lg col-start-6 col-span-1 bg-[#EEEEEE]" />
        <Skeleton className="h-8 rounded-lg col-start-1 col-span-1 bg-[#EEEEEE]" />
        <Skeleton className="h-8 rounded-lg col-start-2 col-span-1 bg-[#EEEEEE]" />
        <Skeleton className="h-8 rounded-lg col-start-3 col-span-1 bg-[#EEEEEE]" />
        <Skeleton className="h-8 rounded-lg col-start-4 col-span-3 bg-[#EEEEEE]" />
        <Skeleton className="h-32 rounded-lg col-start-1 col-span-6 bg-[#EEEEEE]" />
      </div>
    </div>
  );
}
