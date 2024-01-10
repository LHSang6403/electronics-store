import type BlogData from "@app/(main)/blog/interface";

function TopBlog({ blog }: { blog: BlogData }): JSX.Element {
  return (
    <div className="w-72 h-full rounded-xl overflow-hidden min-h-60 flex flex-col">
      <img
        className="w-full h-[84%] object-cover rounded-xl"
        alt="Blog"
        src="https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3F1YXJlfGVufDB8fDB8fHww"
      />
      <div className="w-full h-20 p-2">
        <h2 className="text-2xl font-medium">{blog.title}</h2>
        <p className="text-sm break-words line-clamp-2 leading-5">
          {blog.content}
        </p>
      </div>
    </div>
  );
}

export default TopBlog;
