"use client";

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
import { readBlogs } from "@/app/_actions/blog";
import { useQuery } from "@tanstack/react-query";
import formatReadableTime from "@utils/formatReadableTime";
// import { useSessionStore } from "@/zustand/useSessionStore";

import type BlogData from "@app/(main)/blog/interface";

export default function Page() {
  // const { userSession } = useSessionStore();

  const {
    data: blogs,
    isSuccess,
    isLoading,
    error,
  }: {
    data: any;
    isSuccess: boolean;
    isLoading: boolean;
    error: any;
  } = useQuery({
    queryKey: [`products-dashboard`],
    queryFn: async () => await readBlogs({ limit: "read-all" }),
    staleTime: 1000 * 60 * 5,
  });

  if (error) {
    throw new Error("Error while fetching data");
  }

  if (isLoading) {
    // console.log("loading");
  }

  const blogsData = blogs?.data;
  // console.log("products data", blogsData);
  // console.log("user session", userSession);

  return (
    <div className="w-full h-fit">
      <div className="flex flex-row justify-between">
        <h1 className="w-fit ml-2 text-2xl font-medium text-center mb-2">
          Blogs Management
        </h1>
        <Create />
      </div>
      <div className="w-full h-fit rounded-xl bg-white border border-[#E0E0E0] overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[150px]">Title</TableHead>
              <TableHead>Descripition</TableHead>
              <TableHead>Created at</TableHead>
              <TableHead>Updated at</TableHead>
              <TableHead className="text-center">Viewers</TableHead>
              <TableHead className="text-right">
                <p className="mr-4">Actions</p>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isSuccess &&
              blogsData.map((blog: BlogData, index: number) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{blog.title}</TableCell>
                  <TableCell>{blog.description}</TableCell>
                  <TableCell>{formatReadableTime(blog.date_created)}</TableCell>
                  <TableCell className="text-center">
                    {formatReadableTime(blog.date_updated)}
                  </TableCell>
                  <TableCell className="text-center">{blog.viewers}</TableCell>
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
