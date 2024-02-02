"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@components/ui-shadcn/table";
import Edit from "@app/(protected)/dashboard/blog/Edit/Edit";
import Remove from "@components/dashboard/popups/Remove";
import { readBlogs } from "@app/_actions/blog";
import { useQuery } from "@tanstack/react-query";
import formatReadableTime from "@utils/formatReadableTime";
import createSupabaseBrowserClient from "@supabase/client";

import type BlogData from "@app/(main)/blog/interface";

export default function Blog() {
  const {
    data: blogs,
    isSuccess,
    error,
    refetch,
  }: {
    data: any;
    isSuccess: boolean;
    isLoading: boolean;
    error: any;
    refetch: any;
  } = useQuery({
    queryKey: [`products-dashboard`],
    queryFn: async () => await readBlogs({ limit: "read-all" }),
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: true,
  });

  if (error) {
    throw new Error("Error while fetching data");
  }

  const supabase = createSupabaseBrowserClient();

  const handleChanges = () => {
    refetch();
  };

  supabase
    .channel("blogs")
    .on(
      "postgres_changes",
      { event: "*", schema: "public", table: "blogs" },
      handleChanges
    )
    .subscribe();

  const blogsData = blogs?.data;

  return (
    <div className="w-full h-fit rounded-xl bg-white border border-[#E0E0E0] overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="min-w-[200px]">Title</TableHead>
            <TableHead className="sm:hidden">Descripition</TableHead>
            <TableHead className="sm:hidden">Created at</TableHead>
            <TableHead className="sm:hidden">Updated at</TableHead>
            <TableHead className="text-center sm:hidden">Viewers</TableHead>
            <TableHead className="text-center">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {isSuccess &&
            blogsData.map((blog: BlogData, index: number) => (
              <TableRow key={index}>
                <TableCell className="font-medium sm:hidden">
                  {blog.title}
                </TableCell>
                <TableCell>{blog.description}</TableCell>
                <TableCell className="sm:hidden">
                  {formatReadableTime(blog.date_created)}
                </TableCell>
                <TableCell className="sm:hidden">
                  {formatReadableTime(blog.date_updated)}
                </TableCell>
                <TableCell className="text-center sm:hidden">
                  {blog.viewers}
                </TableCell>
                <TableCell className="text-center">
                  <Edit data={blog} />
                  <Remove id={blog.id} table="blogs" />
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
}
