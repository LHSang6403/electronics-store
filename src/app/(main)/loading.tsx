import { Skeleton } from "@/components/ui-shadcn/skeleton";

export default function Loading() {
  return (
    <div className="w-full h-screen p-4 ">
      <div className="w-full h-fit grid grid-cols-5 gap-3">
        <Skeleton className="h-72 rounded-lg col-start-1 col-span-2 bg-[#EEEEEE]" />
        <div className="col-start-3 col-span-3 flex flex-col gap-3">
          <Skeleton className="h-10 rounded-lg bg-[#EEEEEE]" />
          <Skeleton className="h-24 rounded-lg bg-[#EEEEEE]" />
          <Skeleton className="h-32 rounded-lg bg-[#EEEEEE]" />
        </div>
        <Skeleton className="h-8 rounded-lg col-start-1 col-span-3 bg-[#EEEEEE]" />
        <Skeleton className="h-8 rounded-lg col-start-4 col-span-2 bg-[#EEEEEE]" />
        <Skeleton className="h-8 rounded-lg col-start-1 col-span-2 bg-[#EEEEEE]" />
        <Skeleton className="h-8 rounded-lg col-start-3 col-span-3 bg-[#EEEEEE]" />
        <Skeleton className="h-8 rounded-lg col-start-1 col-span-5 bg-[#EEEEEE]" />
        <Skeleton className="h-28 rounded-lg col-span-5 bg-[#EEEEEE]" />
      </div>
    </div>
  );
}
