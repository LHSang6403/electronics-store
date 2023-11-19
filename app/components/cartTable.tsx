"use client";

import formatCurrencyWithCommas from "../utils/formatCurrency";

import {
  Table,
  TableBody,
  // TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../../shadcn-custom/table-custom";

import products from "../dummyApi/products";

export default function CartTable(): JSX.Element {
  const data = products.slice(0, 5);

  return (
    <Table className="w-fit h-fit mx-auto">
      {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
      <TableHeader className="w-full h-16">
        <TableRow>
          <TableHead className="w-[150px] text-black text-lg text-center">
            Image
          </TableHead>
          <TableHead className="w-60 text-black text-lg text-left">
            Name
          </TableHead>
          <TableHead className="w-28 text-black text-lg">Category</TableHead>
          <TableHead className="w-fit text-black text-lg">Number</TableHead>
          <TableHead className="w-28 text-black text-right text-lg">
            Price
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((line) => (
          <TableRow key={line.id}>
            <TableCell className="h-[120px]">
              <img
                className="w-[90px] mx-auto scale-125 object-cover rounded-lg"
                alt={`img-${line.id}`}
                src={line.image}
              ></img>
            </TableCell>
            <TableCell className="text-base font-semibold leading-10 overflow-hidden">
              <p className="w-max-60 break-words line-clamp-3 leading-6">
                {line.name}
              </p>
              {line.sale !== "" && (
                <div className="w-fit h-fit flex flex-row mt-1 pr-2 text-base text-primary">
                  <img
                    className="w-5 h-5 relative -top-0.5"
                    alt="sale-tag"
                    src="/assets/sale-tag.png"
                  ></img>
                  <p className="max-w-[280px] overflow-hidden whitespace-nowrap overflow-ellipsis -ml-3 border-[1px] border-primary rounded-lg px-2">
                    {line.sale}
                  </p>
                </div>
              )}
            </TableCell>
            <TableCell className="text-center text-lg leading-10">
              {line.category}
            </TableCell>
            <TableCell className="text-center text-lg">
              <div className="flex flex-row justify-center items-center gap-2">
                <button onClick={() => {}}>
                  <img
                    className="w-3.5"
                    alt="minus-icon"
                    src="/assets/minus-icon.png"
                  ></img>
                </button>
                <p className="text-xl">1</p>
                <button onClick={() => {}}>
                  <img
                    className="w-3.5"
                    alt="plus-icon"
                    src="/assets/plus-icon.png"
                  ></img>
                </button>
              </div>
            </TableCell>
            <TableCell className="text-right text-lg">
              <p className="mr-2">{formatCurrencyWithCommas(line.price)} VND</p>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow className="text-lg">
          <TableCell colSpan={4}>
            <div className="h-[80px] w-fit text-primary text-xl flex flex-row justify-center items-center ml-5">
              Total price
            </div>
          </TableCell>
          <TableCell className="text-right">
            <div className="h-[80px] w-fit text-primary flex flex-row justify-center items-center mr-2">
              {formatCurrencyWithCommas(2500000)} VND
            </div>
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
