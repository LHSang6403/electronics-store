// import Create from "@components/dashboard/buttons/Create";
import { readStaff } from "@app/_actions/user";
import Customer from "@app/(protected)/dashboard/user/Tables/Customer";
import Staff from "@app/(protected)/dashboard/user/Tables/Staff";

export default async function Page(): Promise<JSX.Element> {
  const staffResult = (await readStaff()) as { data: any; error: any };

  if (staffResult.error) {
    throw new Error("User not logged in.");
  }

  return (
    <div className="w-full h-fit flex flex-col gap-2">
      <div className="flex flex-row sm:flex-col justify-between sm:items-center">
        <h1 className="w-fit ml-2 text-2xl font-medium text-center">
          Users Management
        </h1>
        {/* <Create url="/dashboard/user/create" /> */}
      </div>
      <Customer />
      {staffResult.data && staffResult.data.role === "admin" && <Staff />}
    </div>
  );
}
