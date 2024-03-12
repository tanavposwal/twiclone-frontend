import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import RecoidContextProvider from "@/components/recoilContextProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
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
