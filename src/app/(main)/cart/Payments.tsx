"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@components/ui-shadcn/form";
import { Input } from "@components/ui-shadcn-custom/input-custom";
import { Button } from "@components/ui-shadcn/button";
import {
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectItem,
  Select,
} from "@components/ui-shadcn/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui-shadcn/card";
import { checkRoleCustomer } from "@app/_actions/user";
import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import { createOrder } from "@app/_actions/order";
import { useCartStore } from "@/zustand/useCartStore";
import formatCurrencyWithCommas from "@utils/formatCurrency";

import { type ProductData } from "../product/interface";

const formSchema = z.object({
  address: z.string(),
  paymentMethod: z.string(),
});

export default function Payments(): JSX.Element {
  const { cartList, totalPrice } = useCartStore() as {
    cartList: ProductData[];
    totalPrice: number;
  };

  const {
    data: customerSession,
    isSuccess,
    error,
  }: {
    data: any;
    isSuccess: boolean;
    error: any;
  } = useQuery({
    queryKey: [`customer-session`],
    queryFn: async () => await checkRoleCustomer(),
    staleTime: 1000 * 60 * 60,
    refetchOnWindowFocus: true,
  });

  if (error) {
    throw new Error("You must be logged in to buy products.");
  }
  const customerSessionData = customerSession?.data;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      address: "",
      paymentMethod: "",
    },
  });

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    const order = {
      buyer_id: customerSessionData.id,
      items: cartList.map((product: ProductData) => product.name),
      total_price: totalPrice,
      address: values.address,
      payment_method: values.paymentMethod,
    };
    console.log("order", order);
    const result = await createOrder(order);
    if (result.error) {
      toast.error("The order is failed to create!");
      console.log(result.error);
    } else {
      toast.success("The order is created successfully!");
    }
  };

  const options: string[] = ["Cash", "Momo", "Zalo Pay", "Credit Card"];

  return (
    <Card className="w-full h-fit bg-[#FCFCFC] flex flex-col justify-cente items-start">
      <CardHeader className="w-full">
        <CardTitle>Payment</CardTitle>
        <CardDescription>
          <p className="w-full h-fit text-xl font-medium">
            {formatCurrencyWithCommas(totalPrice)}.000 VND
          </p>
          {isSuccess && (
            <p className="w-full max-w-[280px] h-fit text-base">
              {customerSessionData?.name}
            </p>
          )}
        </CardDescription>
      </CardHeader>
      <CardContent className="w-full h-fit flex flex-col justify-start mx-auto">
        <div className="flex flex-col items-center justify-between">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className="max-w-md w-full flex flex-col gap-4"
            >
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>Your address</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your address"
                          type="text"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
              <FormField
                control={form.control}
                name="paymentMethod"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>Payment method</FormLabel>
                      <Select onValueChange={field.onChange}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a method" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {options.map((option: string, index: number) => (
                            <SelectItem key={index} value={option}>
                              {option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
              <Button type="submit" className="w-full">
                Submit
              </Button>
            </form>
          </Form>
        </div>
      </CardContent>
      {/* <CardFooter>
        <Button className="h-9 bg-primary text-black" onClick={() => {}}>
          Check out
        </Button>
      </CardFooter> */}
    </Card>
  );
}
