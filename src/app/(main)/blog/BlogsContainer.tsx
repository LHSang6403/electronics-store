"use client";

import { readBlogs } from "@app/_actions/blogActions";
import { useQuery } from "@tanstack/react-query";
import Blog from "@app/(main)/blog/Blog";
import { motion } from "framer-motion";
import fadeInAminationVariants from "@lib/animationVariants";

import type BlogData from "@app/(main)/blog/interface";

const BlogsContainer = () => {
  const {
    data,
    isSuccess,
    error,
  }: { data: any; isLoading: boolean; isSuccess: boolean; error: any } =
    useQuery({
      queryKey: ["blogs"],
      queryFn: async () => await readBlogs({ limit: 8 }),
    });

  if (error) {
    throw new Error(error.message);
  }

  const blogs = data?.data;
  console.log(blogs);

  return (
    <div className="w-fit h-fit  mx-auto grid grid-cols-4 gap-4">
      {isSuccess &&
        blogs?.map((eachBlog: BlogData, index: number) => (
          <motion.div
            variants={fadeInAminationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            key={index}
          >
            <Blog blog={eachBlog} />
          </motion.div>
        ))}
    </div>
  );
};

export default BlogsContainer;
