import PageHeading from "@components/layouts/PageHeading";
import CreateBlogForm from "./CreateBlogForm";

const CreateBlog = () => {
  return (
    <>
      <PageHeading name="Create" />
      <div className="w-full h-fit mx-auto bg-[#f6f6f6] py-3 px-4 sm:px-2 rounded-xl border-2">
        <h2 className="text-primary text-2xl font-medium mb-2">
          Create your own blogs
        </h2>
        <CreateBlogForm />
      </div>
    </>
  );
};

export default CreateBlog;
