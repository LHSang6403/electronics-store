import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import products from "../dummyApi/product";

export default function CartTable(): JSX.Element {
  const data = products.slice(0, 10);

  return (
    <Table className="w-fit h-fit mx-auto">
      {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
      <TableHeader className="w-full h-10">
        <TableRow>
          <TableHead className="w-40 text-xl">Image</TableHead>
          <TableHead className="w-60 text-xl">Name</TableHead>
          <TableHead className="w-28 text-xl">Category</TableHead>
          <TableHead className="w-fit text-xl">Number</TableHead>
          <TableHead className="w-28 text-right text-xl">Price</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((line) => (
          <TableRow key={line.id}>
            <TableCell className="h-[120px] border-b-2">
              <img
                className="w-[90px] mx-auto scale-125 object-cover rounded-lg"
                alt={`img-${line.id}`}
                src={line.image}
              ></img>
            </TableCell>
            <TableCell className="h-[120px] border-b-2 text-xl font-medium leading-10">
              {line.name}
            </TableCell>
            <TableCell className="h-16 border-b-2 text-center text-xl leading-10">
              {line.category}
            </TableCell>
            <TableCell className="h-16 border-b-2 text-center text-xl">
              <div className="flex flex-row justify-center items-center gap-3">
                <img
                  className="w-4"
                  alt="minus-icon"
                  src="/assets/minus-icon.png"
                ></img>
                <p className="text-xl">1</p>
                <img
                  className="w-4"
                  alt="plus-icon"
                  src="/assets/plus-icon.png"
                ></img>
              </div>
            </TableCell>
            <TableCell className="h-16 border-b-2 text-right text-xl">
              {line.price} VND
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow className="h-16 text-xl">
          <TableCell colSpan={4}>
            <div className="mx-10">Total price</div>
          </TableCell>
          <TableCell className="text-right">
            <div className="">2.500.000 VND</div>
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
