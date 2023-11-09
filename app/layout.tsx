import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "../redux/provider";

export const metadata: Metadata = {
  title: "Electronics store",
  description: "No description",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): ReturnType<React.FC> {
  return (
    <html lang="en">
      <body className="">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
