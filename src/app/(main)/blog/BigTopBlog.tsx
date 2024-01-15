import Link from "next/link";

import type BlogData from "@app/(main)/blog/interface";

function BigTopBlog({ blog }: { blog: BlogData }): JSX.Element {
  return (
    <Link href={`/blog/${blog.id}`}>
      <div className="w-full h-full overflow-hidden min-h-60">
        <div className="w-full h-[600px] sm:h-[410px] rounded-xl overflow-hidden object-fill">
          <img
            className="rounded-xl overflow-hidden"
            alt="Blog"
            src="https://damoclesjournal.files.wordpress.com/2022/02/0x0.jpg"
          />
        </div>
        <h2 className="text-[50px] text-center font-medium">{blog.title}</h2>
      </div>
    </Link>
  );
}

export default BigTopBlog;
