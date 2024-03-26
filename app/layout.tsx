import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import RecoidContextProvider from "@/components/recoilContextProvider";
import NextTopLoader from 'nextjs-toploader';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Micro blog",
  description: "An twitter clon made with MENN stack (mongo db, express, node js, next js).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <NextTopLoader color="#fc3838"  template='<div class="bar" role="bar"></div>' />
        <div className="mx-auto max-w-4xl pt-16">
        <RecoidContextProvider>
          <Navbar />
          <div className="main">{children}</div>
        </RecoidContextProvider>
        </div>
      </body>
    </html>
  );
}
