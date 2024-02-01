import Product from "@app/(protected)/dashboard/product/Table/Product";
// import Create from "@components/dashboard/buttons/Create";

export default function Page() {
  return (
    <div className="w-full h-fit">
      <div className="flex flex-row sm:flex-col justify-between sm:items-center sm:pb-2">
        <h1 className="w-fit ml-2 text-2xl font-medium text-center mb-2">
          Products Management
        </h1>
        {/* <Create url="/dashboard/product/create" /> */}
      </div>
      <Product />
    </div>
  );
}
