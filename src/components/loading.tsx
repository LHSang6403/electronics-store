import { Skeleton } from "@components/ui-shadcn/ui/skeleton";

const LoadingComponent = () => {
  return (
    <div className="w-full h-full p-2">
      <Skeleton className="rounded-lg bg-[#EEEEEE]" />
    </div>
  );
};

export default LoadingComponent;
