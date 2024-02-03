"use client";

import { motion } from "framer-motion";
import fadeInAminationVariants from "@lib/animationVariants";
import ProductSections from "@/components/product/ProductSections";
import CategorySections from "@/components/product/CategorySections";

export default function ProductsContainer({
  isAllProducts,
}: {
  isAllProducts: boolean;
}): JSX.Element {
  const categories: string[] = ["Laptop", "Phone", "Tablet", "Watch", "TV"];
  const top4brands: string[] = ["Apple", "Samsung", "Xiaomi", "Sony", "..."];
  const brandsLines: string[][] = [
    top4brands,
    top4brands,
    top4brands,
    top4brands,
  ];

  return (
    <motion.div
      variants={fadeInAminationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="w-auto h-full mx-48 2xl:mx-10 xl:mx-1.5 overflow-hidden rounded-3xl xl:rounded-2xl sm:rounded-2xl border-2 border-black"
    >
      <div className="w-full h-[70px] bg-primary text-3xl font-semibold flex justify-center items-center">
        Electrical Store
      </div>
      <div className="w-full h-full flex flex-row">
        <div className="w-[20%] lg:hidden bg-[#f6f6f6] p-2">
          <CategorySections categories={categories} brandsLines={brandsLines} />
        </div>
        <div className="w-[80%] lg:w-full p-2 sm:p-0">
          <ProductSections
            isAllProducts={isAllProducts}
            categories={categories}
            brandsLines={brandsLines}
          />
        </div>
      </div>
    </motion.div>
  );
}
