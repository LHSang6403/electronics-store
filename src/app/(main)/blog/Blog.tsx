import type BlogData from "@app/(main)/blog/interface";

const Blog = ({ blog }: { blog: BlogData }) => {
  return (
    <div className="w-52 h-fit overflow-hidden">
      <img
        className="w-full h-44 object-cover rounded-xl"
        alt="Blog"
        src="https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3F1YXJlfGVufDB8fDB8fHww"
      />
      <div className="h-fit w-full py-1 px-2">
        <h2 className="text-xl">{blog.title}</h2>
        <p className="text-sm break-words line-clamp-2 leading-4">
          {blog.content}
        </p>
      </div>
    </div>
  );
};

export default Blog;
