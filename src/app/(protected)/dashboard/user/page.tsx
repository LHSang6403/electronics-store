"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@components/ui-shadcn/table";
import Edit from "@/components/dashboard/actions/Edit";
import Remove from "@/components/dashboard/actions/Remove";
import Create from "@/components/dashboard/actions/Create";
import { readAllCustomers, readAllStaffs } from "@/app/_actions/user";
import { useQuery } from "@tanstack/react-query";
import { readStaff } from "@app/_actions/user";

export default async function Page(): Promise<JSX.Element> {
  const {
    data: customers,
    isSuccess: isCustomersSuccess,
    error: customersError,
  }: {
    data: any;
    isLoading: boolean;
    isSuccess: boolean;
    error: any;
  } = useQuery({
    queryKey: [`customers-dashboard`],
    queryFn: async () => await readAllCustomers(),
    staleTime: 1000 * 60 * 1,
  });

  const {
    data: staffs,
    isSuccess: isStaffsSuccess,
    error: staffsError,
  }: {
    data: any;
    isLoading: boolean;
    isSuccess: boolean;
    error: any;
  } = useQuery({
    queryKey: [`staffs-dashboard`],
    queryFn: async () => await readAllStaffs(),
    staleTime: 1000 * 60 * 1,
  });

  const {
    data: staffSession,
    error: staffSessionError,
  }: {
    data: any;
    error: any;
  } = useQuery({
    queryKey: [`staff-session`],
    queryFn: async () => await readStaff(),
    staleTime: 1000 * 60 * 5,
  });

  if (staffSessionError) {
    throw new Error("User not logged in.");
  }

  if (customersError || staffsError) {
    throw new Error("Error while fetching data");
  }

  const customersData = customers?.data;
  const staffsData = staffs?.data;

  return (
    <div className="w-full h-fit flex flex-col gap-4">
      <div className="flex flex-row justify-between">
        <h1 className="w-fit ml-2 text-2xl font-medium text-center">
          Users Management
        </h1>
        <Create />
      </div>
      <div className="w-full h-fit rounded-xl bg-white border border-[#E0E0E0] overflow-hidden">
        <h2 className="mx-2 mt-1 text-lg text-center">Customers</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-left w-[230px]">Name</TableHead>
              <TableHead className="text-left">Phone</TableHead>
              <TableHead className="text-center">Score</TableHead>
              <TableHead className="text-center">Type</TableHead>
              <TableHead className="text-right">
                <p className="mr-4">Actions</p>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isCustomersSuccess &&
              customersData?.map((customer: any, index: number) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">
                    {customer.name || "Unknown"}
                  </TableCell>
                  <TableCell>{customer.phone || "Unknown"}</TableCell>
                  <TableCell className="text-center">
                    {customer.score || 0}
                  </TableCell>
                  <TableCell className="text-center">
                    {customer.type || "Normal"}
                  </TableCell>
                  <TableCell className="text-right">
                    <Edit />
                    <Remove />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
      {staffSession.data?.role === "admin" && (
        <div className="w-full h-fit rounded-xl bg-white border border-[#E0E0E0] overflow-hidden">
          <h2 className="mx-2 mt-1 text-lg text-center">Staffs</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-left w-[230px]">Name</TableHead>
                <TableHead className="text-left">Phone</TableHead>
                <TableHead className="text-center">Role</TableHead>
                <TableHead className="text-center">Is Admin</TableHead>
                <TableHead className="text-right">
                  <p className="mr-4">Actions</p>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {isStaffsSuccess &&
                staffsData?.map((staff: any, index: number) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">
                      {staff.name || "Unknown"}
                    </TableCell>
                    <TableCell>{staff.phone || "Unknown"}</TableCell>
                    <TableCell className="text-center">
                      {staff.role || "Staff"}
                    </TableCell>
                    <TableCell className="text-center">
                      {staff.is_admin ? "True" : "False"}
                    </TableCell>
                    <TableCell className="text-right">
                      <Edit />
                      <Remove />
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
}
