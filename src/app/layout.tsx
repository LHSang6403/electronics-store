import type { Metadata } from "next";
import "@styles/globals.css";
// import { ReduxProvider } from "@/redux/provider";
import Header from "@/components/layouts/public/Header";
import TopMenu from "@/components/layouts/public/TopMenu";
import Footer from "@/components/layouts/public/Footer";

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
        {children}
        <Footer />
      </body>
    </html>
  );
}
