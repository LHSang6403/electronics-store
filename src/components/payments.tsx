"use client";

import RadiosGroup from "./buttons/RadiosGroup";
import { useForm } from "react-hook-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui-shadcn/ui/card";
import { Button } from "@/components/ui-shadcn/ui/button";

export interface Option {
  name: string;
  icon: string;
}

export default function Payments(): JSX.Element {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: { name: "", phone: "", address: "" },
  });

  const onSubmit = (data: {
    name: string;
    phone: string;
    address: string;
  }): void => {
    reset();
  };

  const options: Option[] = [
    { name: "Cash", icon: "/assets/payments/cash.png" },
    { name: "Momo", icon: "/assets/payments/momo.png" },
    { name: "Zalo Pay", icon: "/assets/payments/zalopay.png" },
    { name: "Credit Card", icon: "/assets/payments/creditcard.png" },
  ];

  return (
    <Card className="w-full h-fit bg-[#FCFCFC] flex flex-col justify-cente items-start">
      <CardHeader>
        <CardTitle>Payment</CardTitle>
        <CardDescription>
          <p className="w-full h-fit text-xl font-medium">
            Your bill: 2.500.000 VND
          </p>{" "}
        </CardDescription>
      </CardHeader>
      <CardContent className="w-full h-fit flex flex-col justify-start mx-auto">
        <form
          onSubmit={() => handleSubmit(onSubmit)}
          className="w-full h-full flex flex-col gap-2 justify-start  overflow-hidden"
          onChange={(e) => {}}
        >
          <input
            className="w-full h-8 rounded-lg pl-2 text-base hover:outline-0 focus:outline-0"
            type="text"
            placeholder="Your name"
            autoComplete="off"
            {...register("name")}
          />
          <input
            className="w-full h-8 rounded-lg pl-2 text-base hover:outline-0 focus:outline-0"
            type="text"
            placeholder="Phone number"
            autoComplete="off"
            {...register("phone")}
          />
          <input
            className="w-full h-8 rounded-lg pl-2 text-base hover:outline-0 focus:outline-0"
            type="text"
            placeholder="Address"
            autoComplete="off"
            {...register("address")}
          />
        </form>
        <div className="w-full h-fit mt-4">
          <RadiosGroup options={options} />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="h-9 bg-primary text-black" onClick={() => {}}>
          Check out
        </Button>
      </CardFooter>
    </Card>
  );
}
