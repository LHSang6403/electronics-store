"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@components/ui-shadcn/table";
import { useQuery } from "@tanstack/react-query";
import { readAllStaffs } from "@app/_actions/user";
import EditStaff from "@app/(protected)/dashboard/user/EditStaff/EditStaff";
import createSupabaseBrowserClient from "@supabase/client";

export default function Staff() {
  const {
    data: staffs,
    isSuccess: isStaffsSuccess,
    error: staffsError,
    refetch,
  }: {
    data: any;
    isLoading: boolean;
    isSuccess: boolean;
    error: any;
    refetch: any;
  } = useQuery({
    queryKey: [`staffs-dashboard`],
    queryFn: async () => await readAllStaffs(),
    staleTime: 1000 * 60 * 1,
    refetchOnWindowFocus: true,
  });

  if (staffsError) {
    throw new Error("Error while fetching data");
  }

  const supabase = createSupabaseBrowserClient();

  const handleChanges = () => {
    refetch();
  };

  supabase
    .channel("staffs")
    .on(
      "postgres_changes",
      { event: "*", schema: "public", table: "staffs" },
      handleChanges
    )
    .subscribe();

  const staffsData = staffs?.data;

  return (
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
  );
}
