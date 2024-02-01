// import Create from "@/components/dashboard/buttons/Create";
import Order from "@app/(protected)/dashboard/order/Table/Order";

export default function Page() {
  return (
    <div className="w-full h-fit flex flex-col gap-2">
      <div className="flex flex-row sm:flex-col justify-between sm:items-center">
        <h1 className="w-fit ml-2 text-2xl font-medium text-center">
          Orders Management
        </h1>
        {/* <Create url="/dashboard/order/create" /> */}
      </div>
      <Order />
    </div>
  );
}
