import Blog from "@app/(main)/blog/Blog";

const BlogsContainer = () => {
  return (
    <div className="w-fit h-fit mx-auto grid grid-cols-2 gap-4">
      <Blog />
      <Blog />
      <Blog />
      <Blog />
      <Blog />
      <Blog />
      <Blog />
      <Blog />
    </div>
  );
};

export default BlogsContainer;
