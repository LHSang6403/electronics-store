import { Skeleton } from "@mui/material";

export default function Loading() {
  return (
    <div className="w-full h-screen p-4 ">
      <div className="w-full h-fit grid grid-cols-5 gap-3">
        <Skeleton
          sx={{ bgcolor: "#EEEEEE" }}
          variant="rectangular"
          className="h-72 rounded-lg col-start-1 col-span-2"
        />
        <div className="col-start-3 col-span-3 flex flex-col gap-3">
          <Skeleton
            sx={{ bgcolor: "#EEEEEE" }}
            variant="rectangular"
            className="h-10 rounded-lg "
          />
          <Skeleton
            sx={{ bgcolor: "#EEEEEE" }}
            variant="rectangular"
            className="h-24 rounded-lg"
          />
          <Skeleton
            sx={{ bgcolor: "#EEEEEE" }}
            variant="rectangular"
            className="h-32 rounded-lg"
          />
        </div>
        <Skeleton
          sx={{ bgcolor: "#EEEEEE" }}
          variant="rectangular"
          className="h-10 rounded-lg col-start-1 col-span-3"
        />
        <Skeleton
          sx={{ bgcolor: "#EEEEEE" }}
          variant="rectangular"
          className="h-10 rounded-lg col-start-4 col-span-2"
        />
        <Skeleton
          sx={{ bgcolor: "#EEEEEE" }}
          variant="rectangular"
          className="h-10 rounded-lg col-start-1 col-span-2"
        />
        <Skeleton
          sx={{ bgcolor: "#EEEEEE" }}
          variant="rectangular"
          className="h-10 rounded-lg col-start-3 col-span-3"
        />
        <Skeleton
          sx={{ bgcolor: "#EEEEEE" }}
          variant="rectangular"
          className="h-32 rounded-lg col-start-1 col-span-5"
        />
        <Skeleton
          sx={{ bgcolor: "#EEEEEE" }}
          variant="rectangular"
          className="h-36 rounded-lg col-span-5"
        />
      </div>
    </div>
  );
}
