"use client";

import TopBlog from "@app/(main)/blog/TopBlog";
import BigTopBlog from "@app/(main)/blog/BigTopBlog";
import { useQuery } from "@tanstack/react-query";
import { readTopBlogs } from "@app/_actions/blogActions";
import { motion } from "framer-motion";
import fadeInAminationVariants from "@lib/animationVariants";

export default function TopBlogsContainer(): JSX.Element {
  const {
    data,
    isSuccess,
    error,
  }: { data: any; isLoading: boolean; isSuccess: boolean; error: any } =
    useQuery({
      queryKey: ["top-blogs"],
      queryFn: async () => await readTopBlogs({ limit: 3 }),
    });

  if (error) {
    throw new Error(error.message);
  }

  const topBlogs = data?.data;
  console.log(topBlogs);

  return (
    <div className="w-[1800px] h-[680px] flex flex-row gap-4">
      <motion.div
        variants={fadeInAminationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="h-full w-[50%]"
      >
        {isSuccess && <BigTopBlog blog={topBlogs[0]} />}
      </motion.div>
      <motion.div
        variants={fadeInAminationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="h-[600px] w-[25%]"
      >
        {isSuccess && <TopBlog blog={topBlogs[1]} />}
      </motion.div>
      <motion.div
        variants={fadeInAminationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="h-[520px] w-[25%]"
      >
        {isSuccess && <TopBlog blog={topBlogs[2]} />}
      </motion.div>
    </div>
  );
}
