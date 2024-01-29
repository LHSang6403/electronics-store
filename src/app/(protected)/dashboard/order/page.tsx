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
import { readOrders } from "@app/_actions/order";
import { useQuery } from "@tanstack/react-query";
import formatReadableTime from "@utils/formatReadableTime";
import formatCurrencyWithCommas from "@utils/formatCurrency";

export default function Page() {
  const {
    data: orders,
    isSuccess,
    isLoading,
    error,
  }: {
    data: any;
    isSuccess: boolean;
    isLoading: boolean;
    error: any;
  } = useQuery({
    queryKey: [`orders-dashboard`],
    queryFn: async () => await readOrders("pending"),
    staleTime: 1000 * 60 * 5,
  });

  if (error) {
    throw new Error("Error while fetching data");
  }

  const ordersData = orders;
  console.log("orders data", ordersData);

  return (
    <div className="w-full h-fit">
      <div className="flex flex-row justify-between">
        <h1 className="w-fit ml-2 text-2xl font-medium text-center mb-2">
          Orders Management
        </h1>
        <Create />
      </div>
      <div className="w-full h-fit rounded-xl bg-white border border-[#E0E0E0] overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-center">Buyer</TableHead>
              <TableHead className="text-left">Products</TableHead>
              <TableHead className="text-center">State</TableHead>
              <TableHead>Created At</TableHead>
              <TableHead>Total Price</TableHead>
              <TableHead className="text-right">
                <p className="mr-4">Actions</p>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isSuccess &&
              ordersData.map((ord: any, index: any) => (
                <TableRow key={index}>
                  <TableCell className="text-center">
                    {ord.buyer_name}
                  </TableCell>
                  <TableCell className="text-left font-medium">
                    {ord.products_name.map((name: string, index: number) => (
                      <span className="block" key={index}>
                        {name}
                        {index !== ord.products_name.length - 1 && ", "}
                      </span>
                    ))}
                  </TableCell>
                  <TableCell className="text-center">
                    {ord.process_state}
                  </TableCell>
                  <TableCell>{formatReadableTime(ord.created_at)}</TableCell>
                  <TableCell>
                    {formatCurrencyWithCommas(ord.total_price)}.000
                  </TableCell>
                  <TableCell className="text-center">
                    <Edit />
                    <Remove />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
