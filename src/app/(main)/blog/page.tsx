import PageHeading from "@components/layouts/PageHeading";
import TopBlogsContainer from "@app/(main)/blog/TopBlogsContainer";
import BlogsContainer from "@app/(main)/blog/BlogsContainer";
import PrimaryButton from "@components/buttons/PrimaryLink";

const Blog = () => {
  return (
    <>
      <div className="w-full h-20 -mb-5 flex flex-row justify-between">
        <div className="w-fit h-full">
          <PageHeading name="Blog" />
        </div>
        <div className="w-fit h-full flex justify-center items-center mr-8">
          <PrimaryButton name="Create" link="blog/create" />
        </div>
      </div>
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
