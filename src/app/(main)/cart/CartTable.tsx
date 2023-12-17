"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@components/ui-shadcn-custom/table-custom";
import Sale from "./Sale";
import QuantityButton from "@app/(main)/cart/QuantityButton";
import formatCurrencyWithCommas from "@/lib/formatCurrency";

import { useCartStore } from "@zustand/useCartStore";

import { type CartItem } from "@app/(main)/cart/interface";

export default async function CartTable(): Promise<JSX.Element> {
  const { cartList: data, totalPrice } = useCartStore() as {
    cartList: CartItem[];
    totalPrice: number;
  };

  return (
    <div>
      {totalPrice > 0 ? (
        <Table className="h-fit mx-auto">
          <TableHeader className="h-16">
            <TableRow>
              <TableHead className="w-20 sm:w-12 text-black text-lg text-center sm:hidden">
                Image
              </TableHead>
              <TableHead className="w-full text-black text-lg text-left sm:text-center">
                Name
              </TableHead>
              <TableHead className="w-28 text-black text-lg xl:hidden">
                Category
              </TableHead>
              <TableHead className="w-28 text-black text-lg xl:hidden">
                Number
              </TableHead>
              <TableHead className="w-fit text-black text-center text-lg">
                Price
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((line) => (
              <TableRow key={line.id}>
                <TableCell className="sm:hidden">
                  <img
                    className="w-full mx-auto object-cover rounded-lg"
                    alt={`img-${line.id}`}
                    src={line.image}
                  ></img>
                </TableCell>
                <TableCell className="text-base font-semibold leading-10 overflow-hidden">
                  <div className="max-w-[100%] break-words line-clamp-3 sm:line-clamp-4 leading-6">
                    {line.name}
                  </div>
                  <div className="hidden sm:flex flex-row items-center gap-3">
                    <img
                      className="w-10 object-cover rounded-lg"
                      alt={`img-${line.id}`}
                      src={line.image}
                    ></img>
                    <div className="text-sm font-light">{line.category}</div>
                  </div>
                  {line.sale ? (
                    <div className="sm:hidden xl:font-light">
                      <Sale saleProps={line.sale} />
                    </div>
                  ) : (
                    <div className="hidden xl:block sm:hidden text-sm font-light ml-2">
                      {line.category}
                    </div>
                  )}
                </TableCell>
                <TableCell className="text-center text-lg leading-10 xl:hidden">
                  {line.category}
                </TableCell>
                <TableCell className="text-center text-lg xl:hidden">
                  <QuantityButton id={line.id} />
                </TableCell>
                <TableCell className="text-center text-lg">
                  {line.sale && (
                    <div className="hidden sm:flex justify-end">
                      <Sale saleProps={line.sale} />
                    </div>
                  )}
                  <div className="sm:mt-1">
                    {formatCurrencyWithCommas(line.price)}.000
                  </div>
                  <div className="hidden xl:block">
                    <QuantityButton id={line.id} />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter className="h-16">
            <TableRow className="text-lg">
              <TableCell className="sm:hidden"></TableCell>
              <TableCell>Total Price</TableCell>
              <TableCell className="xl:hidden"></TableCell>
              <TableCell className="xl:hidden"></TableCell>
              <TableCell className="text-center sm:text-base">
                {totalPrice > 0 && (
                  <div className="w-24">
                    {formatCurrencyWithCommas(totalPrice)}.000
                  </div>
                )}
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      ) : (
        <div className="h-16 flex justify-center items-center">
          No selected item
        </div>
      )}
    </div>
  );
}
