import PageHeading from "@/components/layouts/PageHeading";
import TopBlogsContainer from "@/app/(main)/blog/TopBlogsContainer";
import BlogsContainer from "@/app/(main)/blog/BlogsContainer";

const Blog = () => {
  return (
    <>
      <PageHeading name="Blog" />
      <div className="w-full h-fit flex justify-center">
        <TopBlogsContainer />
      </div>
      <div className="w-full h-fit flex justify-center">
        <BlogsContainer />
      </div>
    </>
  );
};

export default Blog;
