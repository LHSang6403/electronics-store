import { Skeleton } from "@components/ui-shadcn/ui/skeleton";

function LoadingComponent(): JSX.Element {
  return (
    <div className="w-full h-full p-2 grid grid-cols-3 grid-rows-2 gap-2">
      <Skeleton className="w-full h-full col-start-1 col-span-1 rounded-lg bg-[#EEEEEE]" />
      <div className="w-full h-full row-start-1 col-start-2 col-span-2 flex flex-col gap-2">
        <Skeleton className="w-full h-1/3 rounded-lg bg-[#EEEEEE]" />
        <Skeleton className="w-full h-1/3 rounded-lg bg-[#EEEEEE]" />
        <Skeleton className="w-full h-1/3 rounded-lg bg-[#EEEEEE]" />
      </div>
      <Skeleton className="w-full h-full row-start-2 col-start-1 col-span-2 rounded-lg bg-[#EEEEEE]" />
      <Skeleton className="w-full h-full row-start-2 col-start-3 col-span-1 rounded-lg bg-[#EEEEEE]" />
    </div>
  );
}

export default LoadingComponent;
