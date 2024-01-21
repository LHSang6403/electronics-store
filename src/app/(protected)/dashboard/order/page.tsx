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

export default function Page() {
  const invoices = [
    {
      id: "INV001",
      name: "Cutting Tool",
      category: "Machine",
      price: "$250.00",
    },
    {
      id: "INV001",
      name: "Cutting Tool",
      category: "Machine",
      price: "250.000",
    },
    {
      id: "INV001",
      name: "Cutting Tool",
      category: "Machine",
      price: "250.000",
    },
    {
      id: "INV001",
      name: "Cutting Tool",
      category: "Machine",
      price: "250.000",
    },
    {
      id: "INV001",
      name: "Cutting Tool",
      category: "Machine",
      price: "250.000",
    },
    {
      id: "INV001",
      name: "Cutting Tool",
      category: "Machine",
      price: "250.000",
    },
    {
      id: "INV001",
      name: "Cutting Tool",
      category: "Machine",
      price: "250.000",
    },
    {
      id: "INV001",
      name: "Cutting Tool",
      category: "Machine",
      price: "250.000",
    },
    {
      id: "INV001",
      name: "Cutting Tool",
      category: "Machine",
      price: "250.000",
    },
  ];

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
              <TableHead className="w-[150px]">ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Category</TableHead>
              <TableHead className="text-center">Price</TableHead>
              <TableHead className="text-right">
                <p className="mr-4">Actions</p>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{invoice.id}</TableCell>
                <TableCell>{invoice.name}</TableCell>
                <TableCell>{invoice.category}</TableCell>
                <TableCell className="text-center">{invoice.price}</TableCell>
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
