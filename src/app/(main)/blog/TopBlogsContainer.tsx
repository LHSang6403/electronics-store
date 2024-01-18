"use client";

import TopBlog from "@/app/(main)/blog/TopBlog";
import BigTopBlog from "@/app/(main)/blog/BigTopBlog";
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
      queryFn: async () => await readTopBlogs({ limit: 1 }),
    });

  if (error) {
    throw new Error(error.message);
  }

  const topBlogs = data?.data;

  return (
    <div className="max-w-[1500px] h-[680px] xl:w-full xl:h-fit flex flex-row xl:flex-col gap-4">
      <motion.div
        variants={fadeInAminationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="h-full w-[50%] xl:w-[90%] sm:w-full xl:mx-auto"
      >
        {isSuccess && <BigTopBlog blog={topBlogs[0]} />}
      </motion.div>
      <motion.div
        variants={fadeInAminationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="h-[600px] w-[25%] xl:hidden"
      >
        {isSuccess && <TopBlog blog={topBlogs[0]} />}
      </motion.div>
      <motion.div
        variants={fadeInAminationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="h-[520px] w-[25%] xl:hidden"
      >
        {isSuccess && <TopBlog blog={topBlogs[0]} />}
      </motion.div>
      <div className="hidden xl:flex w-[90%] mx-auto flex-row sm:flex-col justify-center sm:gap-2">
        <motion.div
          variants={fadeInAminationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="h-[520px] w-[50%] sm:w-full flex justify-center"
        >
          {isSuccess && <TopBlog blog={topBlogs[0]} />}
        </motion.div>
        <motion.div
          variants={fadeInAminationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="h-[520px] w-[50%] sm:w-full flex justify-center"
        >
          {isSuccess && <TopBlog blog={topBlogs[0]} />}
        </motion.div>
      </div>
    </div>
  );
}
