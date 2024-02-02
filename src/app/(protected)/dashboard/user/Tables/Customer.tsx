"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@components/ui-shadcn/table";
import EditCustomer from "@app/(protected)/dashboard/user/EditCustomer/EditCustomer";
import { readAllCustomers } from "@app/_actions/user";
import { useQuery } from "@tanstack/react-query";
import createSupabaseBrowserClient from "@supabase/client";

export default function Customer() {
  const {
    data: customers,
    isSuccess: isCustomersSuccess,
    error: customersError,
    refetch,
  }: {
    data: any;
    isLoading: boolean;
    isSuccess: boolean;
    error: any;
    refetch: any;
  } = useQuery({
    queryKey: [`customers-dashboard`],
    queryFn: async () => await readAllCustomers(),
    staleTime: 1000 * 60 * 1,
    refetchOnWindowFocus: true,
  });

  if (customersError) {
    throw new Error("Error while fetching data");
  }

  const supabase = createSupabaseBrowserClient();

  const handleChanges = () => {
    refetch();
  };

  supabase
    .channel("customers")
    .on(
      "postgres_changes",
      { event: "*", schema: "public", table: "customers" },
      handleChanges
    )
    .subscribe();

  const customersData = customers?.data;

  return (
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
        <TableBody>
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
        </TableBody>
      </Table>
    </div>
  );
}
