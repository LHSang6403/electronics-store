"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import fadeInAminationVariants from "@lib/animationVariants";

export default function Banner(): JSX.Element {
  const url =
    "https://viofo.vn/wp-content/uploads/2023/08/Viofo-A139-PRO-Banner.jpg";

  return (
    <motion.div
      variants={fadeInAminationVariants}
      initial="initial"
      whileInView="animate"
      className="w-fit mx-auto block max-h-[500px] overflow-hidden sm:h-[140px] shadow-lg"
    >
      <Link href="#">
        <Image src={url} alt="Advertising Banner" width={1050} height={250} />
      </Link>
    </motion.div>
  );
}
