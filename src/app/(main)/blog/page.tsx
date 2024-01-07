import PageHeading from "@/components/layouts/PageHeading";
import BlogsContainer from "@app/(main)/blog/BlogsContainer";
import TrendTitle from "@app/(main)/blog/TrendTitle";

const Blog = () => {
  return (
    <>
      <div className="h-24 flex flex-row gap-4 bg-blue-200">
        <PageHeading name="Blog" />
        <div className=" flex items-center pt-3">
          <TrendTitle />
        </div>
      </div>
      <div className="w-full bg-slate-200 min-h-screen flex justify-center">
        <BlogsContainer />
      </div>
    </>
  );
};

export default Blog;
