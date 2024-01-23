"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@components/ui-shadcn/table";
import Edit from "@components/dashboard/actions/Edit";
import Remove from "@components/dashboard/actions/Remove";
import Create from "@components/dashboard/actions/Create";
import { readProducts } from "@/app/_actions/product";
import { useQuery } from "@tanstack/react-query";
// import { useSessionStore } from "@zustand/useSessionStore";

import { type ProductData } from "@app/(main)/product/interface";

export default function Page() {
  // const { userSession } = useSessionStore();

  const {
    data: products,
    isSuccess,
    isLoading,
    error,
  }: {
    data: any;
    isSuccess: boolean;
    isLoading: boolean;
    error: any;
  } = useQuery({
    queryKey: [`products-dashboard`],
    queryFn: async () => await readProducts({ limit: "read-all" }),
    staleTime: 1000 * 60 * 5,
  });

  if (error) {
    throw new Error("Error while fetching data");
  }

  if (isLoading) {
    // console.log("loading");
  }

  const productsData = products?.data;
  // console.log("products data", productsData);
  // console.log("user session", userSession);

  return (
    <div className="w-full h-fit">
      <div className="flex flex-row justify-between">
        <h1 className="w-fit ml-2 text-2xl font-medium text-center mb-2">
          Products Management
        </h1>
        <Create />
      </div>
      <div className="w-full h-fit rounded-xl bg-white border border-[#E0E0E0] overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[250px]">Name</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Price</TableHead>
              <TableHead className="text-center">Rate</TableHead>
              <TableHead className="text-center">Sale</TableHead>
              <TableHead className="text-right">
                <p className="mr-4">Actions</p>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isSuccess &&
              productsData.map((prod: ProductData, index: number) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{prod.name}</TableCell>
                  <TableCell>{prod.category}</TableCell>
                  <TableCell>{prod.price}</TableCell>
                  <TableCell className="text-center">{prod.rating}</TableCell>
                  <TableCell className="text-center">
                    {prod.sale ?? "Not on sale"}
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
    </div>
  );
}
