import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@redux/provider";

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
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
