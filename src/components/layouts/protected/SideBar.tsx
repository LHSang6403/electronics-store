"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { readStaff } from "@/app/_actions/user";

export default function SideBar() {
  const pathname = usePathname();
  const {
    data,
    isSuccess,
    error,
  }: {
    data: any;
    isSuccess: boolean;
    error: any;
  } = useQuery({
    queryKey: [`staff-session`],
    queryFn: async () => await readStaff(),
    staleTime: 1000 * 60 * 5,
  });

  if (error) {
    throw new Error("User not logged in.");
  }

  const role = data?.data.role;

  const links = [
    {
      href: "/dashboard",
      text: "Overview",
      icon: "",
      permission: "staff",
    },
    {
      href: "/dashboard/product",
      text: "Products",
      icon: "",
      permission: "admin",
    },
    {
      href: "/dashboard/user",
      text: "Users",
      icon: "",
      permission: "staff",
    },
    {
      href: "/dashboard/order",
      text: "Orders",
      icon: "",
      permission: "staff",
    },
    {
      href: "/dashboard/blog",
      text: "Blogs",
      icon: "",
      permission: "staff",
    },
    {
      href: "/dashboard/log",
      text: "Logs",
      icon: "",
      permission: "admin",
    },
  ];

  return (
    <div className="bg-[#EEEEEE] xl:bg-white shadow xl:shadow-none w-[300px] xl:w-full h-[600px] xl:h-fit p-4 rounded-3xl flex flex-col justify-between">
      <div>
        <h1 className="text-2xl xl:w-fit xl:mx-auto font-bold mt-1">Dashboard</h1>
        <hr className="w-full xl:w-[60%] sm:w-full xl:mx-auto h-[2px] rounded-full bg-black my-2"></hr>
        {isSuccess && (
          <nav>
            <ul className="flex flex-col xl:flex-row xl:justify-center sm:w-fit sm:mx-auto sm:grid sm:grid-cols-2 gap-1 xl:pb-4">
              {links.map((link, index) => (
                <>
                  {link.permission === "admin" ? (
                    role === "admin" && (
                      <li
                        key={index}
                        className={`w-52 px-3 py-1 xl:text-center ${
                          pathname === link.href ? "text-primary  bg-black rounded" : ""
                        }`}
                      >
                        <Link href={link.href}>{link.text}</Link>
                      </li>
                    )
                  ) : (
                    <li
                      key={index}
                      className={`w-52 px-3 py-1 xl:text-center ${
                        pathname === link.href ? "text-primary bg-black rounded" : ""
                      }`}
                    >
                      <Link href={link.href}>{link.text}</Link>
                    </li>
                  )}
                </>
              ))}
            </ul>
          </nav>
        )}
      </div>
      <button className="w-full xl:w-[60%] xl:mx-auto bg-[#1F2937] rounded-lg text-white h-8" onClick={() => {}}>
        Sign out
      </button>
    </div>
  );
}
