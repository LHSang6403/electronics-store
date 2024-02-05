import CreateForm from "@app/(protected)/dashboard/product/create/CreateForm";

export default function page() {
  return (
    <div className="w-full h-full bg-white p-3 border border-[#E5E7EB] rounded-3xl shadow">
      <h1 className="w-fit ml-2 text-2xl font-medium text-center mb-2">
        Product Create
      </h1>
      <CreateForm />
    </div>
  );
}
