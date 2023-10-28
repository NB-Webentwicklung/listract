import type { Metadata } from "next";
import { PT_Sans } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import "./globals.css";

const ptSans = PT_Sans({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Listract",
  description: "A place where you can store books you enjoy reading.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body className={ptSans.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
