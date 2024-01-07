import type { Metadata } from "next";
import "@styles/globals.css";
import { Toaster } from "sonner";
import Header from "@components/layouts/public/Header";
import TopMenu from "@components/layouts/public/TopMenu";
import Footer from "@components/layouts/public/Footer";
import SideBar from "@components/layouts/SideBar";

import LineBackground from "@components/layouts/LineBackground";
import PageWrapper from "@utils/PageWrapper";
import ReactQueryProvider from "@utils/ReactQueryProvider";

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
      <body className="max-w-[2100px] h-auto mx-auto">
        <LineBackground>
          <SideBar />
          <Header />
          <TopMenu />
          <ReactQueryProvider>
            <PageWrapper>{children}</PageWrapper>
          </ReactQueryProvider>
        </LineBackground>
        <Footer />
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
