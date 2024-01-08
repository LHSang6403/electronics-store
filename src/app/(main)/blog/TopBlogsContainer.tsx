import TopBlog from "@app/(main)/blog/TopBlog";
import BigTopBlog from "@app/(main)/blog/BigTopBlog";

// import type BlogData from "@app/(main)/blog/interface";

export default function TopBlogsContainer(): JSX.Element {
  // const blogs: string[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

  return (
    <div className="w-[1800px] h-fit grid grid-cols-6 gap-4">
      <div className="col-start-1 col-span-3 row-span-2">
        <div className="h-[88%]">
          <BigTopBlog />
        </div>
        <h1 className="text-[50px] text-center font-semibold text-[#7e7e7e]">
          Blogs title
        </h1>
      </div>
      <div className="col-span-1">
        <TopBlog />
      </div>
      <div className="col-span-1">
        <TopBlog />
      </div>
      <div className="col-span-1">
        <TopBlog />
      </div>
      <div className="col-span-1">
        <TopBlog />
      </div>
      <div className="col-span-1">
        <TopBlog />
      </div>
      <div className="col-span-1">
        <TopBlog />
      </div>
    </div>
  );
}
