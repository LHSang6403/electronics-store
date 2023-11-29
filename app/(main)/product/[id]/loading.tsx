import { Skeleton } from "@mui/material";
export default function Loading() {
  return (
    <div>
      Loading...
      <Skeleton
        sx={{ bgcolor: "grey.900" }}
        variant="rectangular"
        width={500}
        height={200}
      />
    </div>
  );
}
