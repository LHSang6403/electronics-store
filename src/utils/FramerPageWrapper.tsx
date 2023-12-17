"use client";

import { motion, AnimatePresence } from "framer-motion";

const FramerPageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        className="overflow-hidden"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default FramerPageWrapper;
