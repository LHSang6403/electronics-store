"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@components/ui-shadcn/button";
import { Checkbox } from "@/components/ui-shadcn-custom/checkbox-custom";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@components/ui-shadcn/form";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@components/ui-shadcn/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@components/ui-shadcn/select";
import { useQuery } from "@tanstack/react-query";
import { readAllAvailableProducts } from "@app/_actions/storage";
import { readAllCustomers } from "@app/_actions/user";
import { createOrder } from "@app/_actions/order";
import { toast } from "sonner";

const FormSchema = z.object({
  items: z.array(z.string()),
  buyer_id: z.string(),
});

export default function CreateForm() {
  const {
    data: products,
    isSuccess: isSuccessProducts,
    error: errorProducts,
  }: {
    data: any;
    isSuccess: boolean;
    error: any;
  } = useQuery({
    queryKey: [`avail-products-dashboard`],
    queryFn: async () => await readAllAvailableProducts(10),
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: true,
  });

  const {
    data: customers,
    isSuccess: isSuccessCustomers,
    error: errorCustomers,
  }: {
    data: any;
    isSuccess: boolean;
    error: any;
  } = useQuery({
    queryKey: [`customers-dashboard`],
    queryFn: async () => await readAllCustomers(),
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: true,
  });

  if (errorProducts || errorCustomers) {
    throw new Error("Error while fetching data");
  }

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      items: [],
      buyer_id: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    const result = await createOrder(data);
    if (result.error) {
      toast.error(`Create failed: ${result.error}.`);
    } else {
      toast.success("The order is created successfully.");
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="buyer_id"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Customer</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a customer" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {isSuccessCustomers &&
                    customers.data.map((cust: any, index: number) => (
                      <SelectItem key={index} value={cust.id}>
                        {cust.name}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
        <div className="max-h-[500px] overflow-auto border border-[#ECEDF0] rounded-md">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-left">Name</TableHead>
                <TableHead className="text-center">
                  Available quantity
                </TableHead>
                <TableHead className="text-center sm:hidden">Storage</TableHead>
                <TableHead className="text-center">Select</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {isSuccessProducts &&
                products.data.map((prod: any, index: number) => (
                  <TableRow key={index}>
                    <TableCell className="text-left font-medium">
                      {prod.product_name}
                    </TableCell>
                    <TableCell className="text-center">
                      {prod.product_quantity}
                    </TableCell>
                    <TableCell className="text-center sm:hidden">
                      {prod.storage_name}
                    </TableCell>
                    <TableCell className="text-center">
                      <FormField
                        key={prod.id}
                        control={form.control}
                        name="items"
                        render={({ field }) => {
                          return (
                            <FormItem
                              key={prod.id}
                              className="mr-4 flex justify-center items-center"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(
                                    prod.product_name
                                  )}
                                  onCheckedChange={(checked) => {
                                    checked
                                      ? field.onChange([
                                          ...field.value,
                                          prod.product_name,
                                        ])
                                      : field.onChange(
                                          field.value?.filter(
                                            (value) =>
                                              value !== prod.product_name
                                          )
                                        );
                                  }}
                                />
                              </FormControl>
                            </FormItem>
                          );
                        }}
                      />
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </div>
        <Button className="w-full" type="submit">
          Submit
        </Button>
      </form>
    </Form>
  );
}
