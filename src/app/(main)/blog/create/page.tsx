import PageHeading from "@components/layouts/PageHeading";
import CreateBlogForm from "./CreateBlogForm";

import TestUploadImg from "./TestUploadImg";

const CreateBlog = () => {
  return (
    <>
      <PageHeading name="Create" />
      <div className="w-fit h-fit mx-auto bg-[#f6f6f6] py-3 px-4 rounded-xl border-2">
        <h2 className="text-primary text-2xl font-medium mb-2">
          Create your own blogs
        </h2>
        <div className="flex flex-row justify-center gap-4">
          <CreateBlogForm />
        </div>
      </div>
      <TestUploadImg />
    </>
  );
};

export default CreateBlog;
