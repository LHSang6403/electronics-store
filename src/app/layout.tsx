import type { Metadata } from "next";
import "@styles/globals.css";
import { Toaster } from "react-hot-toast";
import Header from "@components/layouts/public/Header";
import TopMenu from "@components/layouts/public/TopMenu";
import Footer from "@components/layouts/public/Footer";

import FramerPageWrapper from "@utils/FramerPageWrapper";
import ReactQueryProvider from "@utils/ReactQueryProvider";
import { SkeletonTheme } from "react-loading-skeleton";

export const metadata: Metadata = {
  title: "Electronics store",
  description: "An online store for electronics products in Vietnam",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): ReturnType<React.FC> {
  return (
    <html lang="en">
      <body>
        <Header />
        <TopMenu />
        <ReactQueryProvider>
          <SkeletonTheme
            baseColor="#5294e0"
            highlightColor="#96c7ff"
            borderRadius="0.5rem"
            duration={4}
          >
            <FramerPageWrapper>{children}</FramerPageWrapper>
          </SkeletonTheme>
        </ReactQueryProvider>
        <Footer />
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
