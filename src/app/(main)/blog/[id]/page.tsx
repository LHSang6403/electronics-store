import { readBlogById } from "@/app/_actions/blog";
import Review from "@app/(main)/product/[id]/Review";
import replaceImgsByImageUrls from "@utils/replaceImgsByImageUrls";

import type BlogData from "@/app/(main)/blog/interface";

const Blog = async ({
  params,
}: {
  params: { id: string };
}): Promise<JSX.Element> => {
  const id = params.id;

  const { data: blog } = await readBlogById(id);
  if (!blog) {
    throw new Error("Blog not found");
  }

  const blogData = blog as BlogData;

  const updatedContent = replaceImgsByImageUrls(
    blogData.content,
    blogData.images
  );

  return (
    <div className="w-[80%] lg:w-full mx-auto mt-4 bg-[#F5F5F5] p-6 sm:p-3 rounded-3xl shadow">
      <h1 className="text-[50px] sm:text-[30px] font-bold mb-2">
        {blogData.title}
      </h1>
      <p className="text-gray-600 mx-4 mb-4 text-justify">
        {blogData.description}
      </p>
      <div className="flex flex-col items-center text-gray-500 mx-4 mb-4 text-justify">
        <p>Writer: LHSang </p>
        <p>Date: Sunday, January 14 2024</p>
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: updatedContent ?? "" }}
        className="mb-6"
      />
      <div className="w-fit mx-auto">
        <h2 className="text-2xl font-bold mb-2 text-gray-800">Comments</h2>
        <Review />
      </div>
    </div>
  );
};

export default Blog;
