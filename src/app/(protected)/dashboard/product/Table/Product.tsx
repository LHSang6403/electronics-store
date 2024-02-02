"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@components/ui-shadcn/table";
import Edit from "@/app/(protected)/dashboard/product/Edit/Edit";
import Remove from "@components/dashboard/popups/Remove";
import { readProducts } from "@app/_actions/product";
import { useQuery } from "@tanstack/react-query";
import formatCurrencyWithCommas from "@utils/formatCurrency";
import createSupabaseBrowserClient from "@supabase/client";

import { type ProductData } from "@app/(main)/product/interface";

export default function Product() {
  const {
    data: products,
    isSuccess,
    error,
    refetch,
  }: {
    data: any;
    isSuccess: boolean;
    error: any;
    refetch: any;
  } = useQuery({
    queryKey: [`products-dashboard`],
    queryFn: async () => await readProducts({ limit: 10 }),
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: true,
  });

  if (error) {
    throw new Error("Error while fetching data");
  }

  const supabase = createSupabaseBrowserClient();

  const handleChanges = () => {
    refetch();
  };

  supabase
    .channel("products")
    .on(
      "postgres_changes",
      { event: "*", schema: "public", table: "products" },
      handleChanges
    )
    .subscribe();

  const productsData = products?.data;

  return (
    <div className="w-full h-fit rounded-xl bg-white border border-[#E0E0E0] overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[250px]">Name</TableHead>
            <TableHead className="sm:hidden">Category</TableHead>
            <TableHead>Price</TableHead>
            <TableHead className="text-center sm:hidden">Rate</TableHead>
            <TableHead className="text-center sm:hidden">Sale</TableHead>
            <TableHead className="text-center">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {isSuccess &&
            productsData.map((prod: ProductData, index: number) => (
              <TableRow key={index}>
                <TableCell className="font-medium">
                  {prod.name}
                  <p className="hidden sm:block font-normal text-gray-500">
                    {prod.category} Rate: {prod.rating} <br></br>
                    Sale: {prod.sale ?? "Not on sale"}
                  </p>
                </TableCell>
                <TableCell className="sm:hidden">{prod.category}</TableCell>
                <TableCell>
                  {formatCurrencyWithCommas(prod.price)}.000
                </TableCell>
                <TableCell className="text-center sm:hidden">
                  {prod.rating}
                </TableCell>
                <TableCell className="text-center sm:hidden">
                  {prod.sale ?? "Not on sale"}
                </TableCell>
                <TableCell className="text-center">
                  <Edit data={prod} />
                  <Remove id={prod.id} table="products" />
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
}
