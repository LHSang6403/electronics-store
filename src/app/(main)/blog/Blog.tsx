import Link from "next/link";

import type BlogData from "@/app/(main)/blog/interface";

const Blog = ({ blog }: { blog: BlogData }) => {
  return (
    <Link href={`/blog/${blog.id}`}>
      <div className="w-52 sm:w-[96%] sm:mx-auto h-fit overflow-hidden">
        <img
          className="w-full h-44 object-cover rounded-xl"
          alt="Blog"
          src="https://damoclesjournal.files.wordpress.com/2022/02/0x0.jpg"
        />
        <div className="h-fit w-full py-1 px-2">
          <h2 className="text-xl">{blog.title}</h2>
          <p className="text-[16px] break-words line-clamp-2 leading-4">
            {blog.description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Blog;
