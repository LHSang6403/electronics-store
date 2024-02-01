import Blog from "@app/(protected)/dashboard/blog/Table/Blog";

// import Create from "@/components/dashboard/buttons/Create";

export default function Page() {
  return (
    <div className="w-full h-fit flex flex-col gap-2">
      <div className="flex flex-row sm:flex-col justify-between sm:items-center">
        <h1 className="w-fit ml-2 text-2xl font-medium text-center">
          Blogs Management
        </h1>
        {/* <Create url="/dashboard/blog/create" /> */}
      </div>
      <Blog />
    </div>
  );
}
