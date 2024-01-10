import type BlogData from "@app/(main)/blog/interface";

function BigTopBlog({ blog }: { blog: BlogData }): JSX.Element {
  return (
    <div className="w-full h-full overflow-hidden min-h-60">
      <div className="w-full h-[600px] rounded-xl overflow-hidden object-fill">
        <img
          alt="Blog"
          src="https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3F1YXJlfGVufDB8fDB8fHww"
        />
      </div>
      <h2 className="text-[50px] text-center font-medium">{blog.title}</h2>
    </div>
  );
}

export default BigTopBlog;
