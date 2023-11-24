"use client";

import formatCurrencyWithCommas from "@utils/formatCurrency";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/ui_shadcn/table-custom";
import products from "@dummyApi/products";
import Sale from "./sale";
import { Underline } from "lucide-react";
import QuantityButton from "./quantityButton";

export default function CartTable(): JSX.Element {
  const data = products.slice(0, 5);

  return (
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
          <TableHead className="w-fit text-black text-lg xl:hidden">
            Number
          </TableHead>
          <TableHead className="w-full text-black text-center text-lg">
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
              <p className="max-w-[100%] break-words line-clamp-3 sm:line-clamp-2 leading-6">
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
              {line.sale !== undefined && line.sale !== "" && (
                <div className="sm:hidden">
                  <Sale data={line.sale} />
                </div>
              )}
            </TableCell>
            <TableCell className="text-center text-lg leading-10 xl:hidden">
              {line.category}
            </TableCell>
            <TableCell className="text-center text-lg xl:hidden">
              <QuantityButton />
            </TableCell>
            <TableCell className="text-right text-lg">
              {line.sale !== undefined && line.sale !== "" && (
                <div className="hidden sm:flex justify-end">
                  <Sale data={line.sale} />
                </div>
              )}
              {formatCurrencyWithCommas(line.price)}
              <div className="hidden sm:block">
                <QuantityButton />
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter className="h-16">
        <TableRow className="text-lg">
          <TableCell className="sm:hidden"></TableCell>
          <TableCell>
            <p className="text-xl flex flex-row items-center">Total price</p>
          </TableCell>
          <TableCell className="sm:hidden"></TableCell>
          <TableCell className="sm:hidden"></TableCell>
          <TableCell className="text-right sm:text-base">
            {formatCurrencyWithCommas(2500000)}
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
