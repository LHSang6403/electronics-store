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
  ];

  return (
    <div className="bg-[#EEEEEE] shadow w-[300px] h-[600px] p-4 rounded-3xl flex flex-col justify-between">
      <div>
        <h1 className="text-2xl font-bold mt-1">Dashboard</h1>
        <hr className="w-full h-[2px] rounded-full bg-black my-2"></hr>
        {isSuccess && (
          <nav>
            <ul className="flex flex-col gap-1">
              {links.map((link, index) => (
                <>
                  {link.permission === "admin" ? (
                    data?.data.role === "admin" && (
                      <li
                        key={index}
                        className={`w-24 px-2 py-1 ${
                          pathname === link.href
                            ? "text-primary bg-black rounded"
                            : ""
                        }`}
                      >
                        <Link href={link.href}>{link.text}</Link>
                      </li>
                    )
                  ) : (
                    <li
                      key={index}
                      className={`w-24 px-2 py-1 ${
                        pathname === link.href
                          ? "text-primary bg-black rounded"
                          : ""
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
      <button
        className="w-full bg-black rounded-lg text-white h-8"
        onClick={() => {}}
      >
        Sign out
      </button>
    </div>
  );
}
