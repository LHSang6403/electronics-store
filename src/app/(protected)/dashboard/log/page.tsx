import Log from "@app/(protected)/dashboard/log/Table/Log";

export default function Page() {
  return (
    <div className="w-full h-fit">
      <div className="flex flex-row sm:flex-col justify-between sm:items-center sm:pb-2">
        <h1 className="w-fit ml-2 text-2xl font-medium text-center mb-2">
          Activity Management
        </h1>
      </div>
      <Log />
    </div>
  );
}
