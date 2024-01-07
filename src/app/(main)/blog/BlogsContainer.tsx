import Blog from "@app/(main)/blog/Blog";

// import type BlogData from "@app/(main)/blog/interface";

export default function BlogsContainer(): JSX.Element {
  // const blogs: string[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

  return (
    <div className="w-[1300px] min-h-[500px] grid grid-cols-3 gap-4 bg-blue-200">
      <div className="col-start-1 col-span-2 row-span-2">
        <Blog />
      </div>
      <div className="col-span-1">
        <Blog />
      </div>
      <div className="col-span-1">
        <Blog />
      </div>
      <div className="col-span-1">
        <Blog />
      </div>
      <div className="col-span-2">
        <Blog />
      </div>
    </div>
  );
}
