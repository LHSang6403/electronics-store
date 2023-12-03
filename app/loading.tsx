import { Skeleton } from "@mui/material";
import Header from "@components/layouts/public/Header";
import TopMenu from "@components/layouts/public/TopMenu";

export default function Loading() {
  return (
    <div className="w-[1050px] h-screen xl:w-full lg:w-full sm:w-full xl:px-6 lg:px-6 sm:px-0 mx-auto bg-[#f5f5f555] flex flex-col p-4">
      <Header />
      <TopMenu />
      <div className="w-full h-fit grid grid-cols-6 gap-3 pt-4">
        <div className="col-start-1 col-span-3 flex flex-col gap-3">
          <Skeleton
            sx={{ bgcolor: "#EEEEEE" }}
            variant="rectangular"
            className="h-12 rounded-lg "
          />
          <Skeleton
            sx={{ bgcolor: "#EEEEEE" }}
            variant="rectangular"
            className="h-20 rounded-lg"
          />
          <Skeleton
            sx={{ bgcolor: "#EEEEEE" }}
            variant="rectangular"
            className="h-40 rounded-lg"
          />
        </div>
        <Skeleton
          sx={{ bgcolor: "#EEEEEE" }}
          variant="rectangular"
          className="h-full rounded-lg col-start-4 col-span-3"
        />
        <Skeleton
          sx={{ bgcolor: "#EEEEEE" }}
          variant="rectangular"
          className="h-20 rounded-lg col-start-1 col-span-3"
        />
        <Skeleton
          sx={{ bgcolor: "#EEEEEE" }}
          variant="rectangular"
          className="h-20 rounded-lg col-start-4 col-span-1"
        />
        <Skeleton
          sx={{ bgcolor: "#EEEEEE" }}
          variant="rectangular"
          className="h-20 rounded-lg col-start-5 col-span-1"
        />
        <Skeleton
          sx={{ bgcolor: "#EEEEEE" }}
          variant="rectangular"
          className="h-20 rounded-lg col-start-6 col-span-1"
        />
        <Skeleton
          sx={{ bgcolor: "#EEEEEE" }}
          variant="rectangular"
          className="h-32 rounded-lg col-start-1 col-span-6"
        />
      </div>
    </div>
  );
}
