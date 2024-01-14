"use client";

import NextProgress from "nextjs-progressbar";

const ProgressBar = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NextProgress
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
        color="#FFC400"
      />
      {children}
    </>
  );
};

export default ProgressBar;
