"use client";

import {
  Table,
  // TableBody,
  // TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@components/ui-shadcn/table";
// import EditCustomer from "@app/(protected)/dashboard/user/EditCustomer/EditCustomer";
// import EditStaff from "@app/(protected)/dashboard/user/EditStaff/EditStaff";
import Create from "@components/dashboard/buttons/Create";
// import { readAllCustomers, readAllStaffs, readStaff } from "@app/_actions/user";
// import { useQuery } from "@tanstack/react-query";

export default async function Page(): Promise<JSX.Element> {
  // const {
  //   data: customers,
  //   isSuccess: isCustomersSuccess,
  //   error: customersError,
  // }: {
  //   data: any;
  //   isLoading: boolean;
  //   isSuccess: boolean;
  //   error: any;
  //   refetch: any;
  // } = useQuery({
  //   queryKey: [`customers-dashboard`],
  //   queryFn: async () => await readAllCustomers(),
  //   staleTime: 1000 * 60 * 1,
  //   refetchOnWindowFocus: true,
  // });

  // const {
  //   data: staffs,
  //   isSuccess: isStaffsSuccess,
  //   error: staffsError,
  // }: {
  //   data: any;
  //   isLoading: boolean;
  //   isSuccess: boolean;
  //   error: any;
  //   refetch: any;
  // } = useQuery({
  //   queryKey: [`staffs-dashboard`],
  //   queryFn: async () => await readAllStaffs(),
  //   staleTime: 1000 * 60 * 1,
  //   refetchOnWindowFocus: true,
  // });

  // const {
  //   data: staffSession,
  //   error: staffSessionError,
  // }: {
  //   data: any;
  //   error: any;
  // } = useQuery({
  //   queryKey: [`staff-session`],
  //   queryFn: async () => await readStaff(),
  //   staleTime: 1000 * 60 * 5,
  // });

  // if (staffSessionError) {
  //   throw new Error("User not logged in.");
  // }

  // if (customersError || staffsError) {
  //   throw new Error("Error while fetching data");
  // }

  // const customersData = customers?.data;
  // const staffsData = staffs?.data;
  // const staffSessionData = staffSession?.data;

  return (
    <div className="w-full h-fit flex flex-col gap-2">
      <div className="flex flex-row sm:flex-col justify-between sm:items-center">
        <h1 className="w-fit ml-2 text-2xl font-medium text-center">
          Users Management
        </h1>
        <Create url="/dashboard/user/create" />
      </div>
      <div className="w-full h-fit rounded-xl bg-white border border-[#E0E0E0] overflow-hidden">
        <h2 className="mx-2 mt-1 text-lg text-center">Customers</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-left w-[220px]">Name</TableHead>
              <TableHead className="text-left sm:hidden">Phone</TableHead>
              <TableHead className="text-center">Score</TableHead>
              <TableHead className="text-center sm:hidden">Type</TableHead>
              <TableHead className="text-center">Actions</TableHead>
            </TableRow>
          </TableHeader>
          {/* <TableBody>
            {isCustomersSuccess &&
              customersData?.map((customer: any, index: number) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">
                    {customer.name || "Unknown"}
                    <p className="hidden sm:block font-normal text-gray-500">
                      {customer.phone || "Unknown"}
                      <br></br>
                      Type: {customer.type || "Normal"}
                    </p>
                  </TableCell>
                  <TableCell className="sm:hidden">
                    {customer.phone || "Unknown"}
                  </TableCell>
                  <TableCell className="text-center">
                    {customer.score || 0}
                  </TableCell>
                  <TableCell className="text-center sm:hidden">
                    {customer.type || "Normal"}
                  </TableCell>
                  <TableCell className="text-center">
                    <EditCustomer data={customer} />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody> */}
        </Table>
      </div>
      {/* {staffSessionData &&
        "role" in staffSessionData &&
        staffSessionData?.role === "admin" && (
          <div className="w-full h-fit rounded-xl bg-white border border-[#E0E0E0] overflow-hidden">
            <h2 className="mx-2 mt-1 text-lg text-center">Staffs</h2>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-left w-[220px]">Name</TableHead>
                  <TableHead className="text-left sm:hidden">Phone</TableHead>
                  <TableHead className="text-center sm:hidden">
                    Date of Birth
                  </TableHead>
                  <TableHead className="text-center">Role</TableHead>
                  <TableHead className="text-center">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {isStaffsSuccess &&
                  staffsData?.map((staff: any, index: number) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">
                        {staff.name || "Unknown"}
                        <p className="hidden sm:block font-normal text-gray-500">
                          {staff.phone || "Unknown"}
                        </p>
                      </TableCell>
                      <TableCell className="sm:hidden">
                        {staff.phone || "Unknown"}
                      </TableCell>
                      <TableCell className="text-center sm:hidden">
                        {staff.date_of_birth || "Unknown"}
                      </TableCell>
                      <TableCell className="text-center">
                        {staff.role || "Staff"}
                      </TableCell>
                      <TableCell className="text-center">
                        <EditStaff data={staff} />
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </div>
        )} */}
    </div>
  );
}
