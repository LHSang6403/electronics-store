"use client";

import RadiosGroup from "./radiosGroup";
import { useForm } from "react-hook-form";

export interface Option {
  name: string;
  icon: string;
}

export default function Payments(): JSX.Element {
  const { register, handleSubmit, reset, setValue, setFocus } = useForm({
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
    <div className="w-full h-full rounded-xl border-2 border-black overflow-hidden flex flex-col justify-cente items-start">
      <p className="w-full h-12 pl-4 flex flex-row justify-start items-center text-xl font-medium">
        Your bill: 2.500.000 VND
      </p>
      <div className="w-[90%] h-fit mx-auto">
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
      </div>
      <div className="w-fit h-fit ml-6 my-4">
        <RadiosGroup options={options} />
      </div>
      <button className="w-full h-10 bg-primary" onClick={() => {}}>
        Check out
      </button>
    </div>
  );
}
