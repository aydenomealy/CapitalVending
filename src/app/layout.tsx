import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import {cn} from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const notoSans = Noto_Sans({subsets: ["latin"], style: "normal", display: "swap" });

export const metadata: Metadata = {
  title: "Capital Vending",
  description: "The best in vending & amusements",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className='h-full'>
      <body
          className={cn(
              "relative h-ful antialiased",
              notoSans.className
          )}>
      <main className='relative flex flex-col min-h-screen'>
          <Navbar/>
          <div className='flex-grow flex-1 bg-peachRetro'>
              {children}
          </div>
          <Footer/>
      </main>
      </body>
    </html>
  );
}
