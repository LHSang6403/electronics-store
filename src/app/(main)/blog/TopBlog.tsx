import Link from "next/link";

import type BlogData from "@app/(main)/blog/interface";

function TopBlog({ blog }: { blog: BlogData }): JSX.Element {
  return (
    <Link href={`/blog/${blog.id}`}>
      <div className="w-72 lg:w-60 sm:w-full h-full rounded-xl overflow-hidden min-h-60 flex flex-col">
        <img
          className="w-full h-[84%] object-cover rounded-xl"
          alt="Blog"
          src="https://damoclesjournal.files.wordpress.com/2022/02/0x0.jpg"
        />
        <div className="w-full h-20 p-2">
          <h2 className="text-2xl font-medium">{blog.title}</h2>
          <p className="text-[16px] break-words line-clamp-2 leading-4">
            {blog.description}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default TopBlog;
