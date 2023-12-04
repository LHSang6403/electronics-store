"use client";

import { useAppSelector } from "@/redux/hooks";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/ui_shadcn/table-custom";
import Sale from "./sale";
import QuantityButton from "@/app/(main)/cart/quantityButton";

import { type CartItem } from "@/app/(main)/cart/interface";

export default function CartTable(): JSX.Element {
  const data: CartItem[] = useAppSelector(
    (state) => state.cartReducer.cartList
  );
  const totalPrice: number = useAppSelector(
    (state) => state.cartReducer.totalPrice
  );

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
                  <p className="max-w-[100%] break-words line-clamp-3 sm:line-clamp-4 leading-6">
                    {line.name}
                  </p>
                  <div className="hidden sm:flex flex-row items-center gap-3">
                    <img
                      className="w-10 object-cover rounded-lg"
                      alt={`img-${line.id}`}
                      src={line.image}
                    ></img>
                    <p className="text-sm font-light">{line.category}</p>
                  </div>
                  {line.sale !== undefined && line.sale !== "" ? (
                    <div className="sm:hidden xl:font-light">
                      <Sale data={line.sale} />
                    </div>
                  ) : (
                    <p className="hidden xl:block sm:hidden text-sm font-light ml-2">
                      {line.category}
                    </p>
                  )}
                </TableCell>
                <TableCell className="text-center text-lg leading-10 xl:hidden">
                  {line.category}
                </TableCell>
                <TableCell className="text-center text-lg xl:hidden">
                  <QuantityButton id={line.id} quantity={line.quantity} />
                </TableCell>
                <TableCell className="text-center text-lg">
                  {line.sale !== undefined && line.sale !== "" && (
                    <div className="hidden sm:flex justify-end">
                      <Sale data={line.sale} />
                    </div>
                  )}
                  <p className="sm:mt-1">{line.price}.000</p>
                  <div className="hidden xl:block">
                    <QuantityButton id={line.id} quantity={line.quantity} />
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
                {totalPrice > 0 && <p className="w-24">{totalPrice}.000</p>}
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      ) : (
        <div className="h-16 flex justify-center items-center">
          No selected item (audit later)
        </div>
      )}
    </div>
  );
}
