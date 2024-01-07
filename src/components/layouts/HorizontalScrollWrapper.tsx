"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function HorizontalScrollWrapper({
  children,
  direction,
}: {
  children: React.ReactNode;
  direction: number;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });

  const xTransform = useTransform(scrollYProgress, [0, 1], [0, direction]);

  return (
    <div ref={scrollRef}>
      <motion.div
        style={{
          zIndex: 6,
          position: "relative",
          translateX: xTransform,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default HorizontalScrollWrapper;
