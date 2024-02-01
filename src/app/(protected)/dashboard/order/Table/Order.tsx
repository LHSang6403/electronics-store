"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@components/ui-shadcn/table";
import Edit from "@app/(protected)/dashboard/order/Edit/Edit";
import { readOrders } from "@app/_actions/order";
import { useQuery } from "@tanstack/react-query";
import formatReadableTime from "@utils/formatReadableTime";
import formatCurrencyWithCommas from "@utils/formatCurrency";

export default function Order() {
  const {
    data: orders,
    isSuccess,
    error,
  }: {
    data: any;
    isSuccess: boolean;
    error: any;
  } = useQuery({
    queryKey: [`orders-dashboard`],
    queryFn: async () => await readOrders("all"),
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: true,
  });

  if (error) {
    throw new Error("Error while fetching data");
  }

  const ordersData = orders;
  return (
    <div className="w-full h-fit rounded-xl bg-white border border-[#E0E0E0] overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-center">Buyer</TableHead>
            <TableHead className="text-left">Products</TableHead>
            <TableHead className="text-center sm:hidden">State</TableHead>
            <TableHead className="sm:hidden">Created At</TableHead>
            <TableHead>Total Price</TableHead>
            <TableHead className="text-center sm:hidden">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {isSuccess &&
            ordersData.map((ord: any, index: any) => (
              <TableRow key={index}>
                <TableCell className="text-center">{ord.buyer_name}</TableCell>
                <TableCell className="text-left font-medium">
                  {ord.products_name.map((name: string, index: number) => (
                    <span className="block" key={index}>
                      {name}
                      {index !== ord.products_name.length - 1 && ", "}
                    </span>
                  ))}
                </TableCell>
                <TableCell className="text-center sm:hidden">
                  {ord.process_state}
                </TableCell>
                <TableCell className="sm:hidden">
                  {formatReadableTime(ord.created_at)}
                </TableCell>
                <TableCell>
                  {formatCurrencyWithCommas(ord.total_price)}.000
                </TableCell>
                <TableCell className="text-center sm:hidden">
                  <Edit data={ord} />
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
}
