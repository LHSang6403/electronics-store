// import type BlogData from "@app/(main)/blog/interface";
import Image from "next/image";

function TopBlog(): JSX.Element {
  return (
    <div className="w-full h-full rounded-xl overflow-hidden min-h-60">
      <div className="w-full h-48 rounded-xl overflow-hidden">
        <Image
          alt="Blog"
          src="https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3F1YXJlfGVufDB8fDB8fHww"
          layout="responsive"
          width={870}
          height={599}
        />
      </div>
      <div className="p-2">
        <h2 className="text-xl font-medium">Top blog title</h2>
        <p className="text-base break-words line-clamp-2 leading-5">
          Top blog description description description description description
        </p>
      </div>
    </div>
  );
}

export default TopBlog;
