import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import NavigationBar from "@/app/components/NavigationBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abi Refrigeration & Electrical",
  description: "Keeping your spaces cool, fresh, and food safe! Abi Refrigeration & Electrical provides expert services for all your refrigeration, air conditioning, ventilation, and water cooler needs. We also specialize in freezer room installations and maintenance.  Our technicians are reliable, experienced, and dedicated to keeping your equipment running smoothly.",
  keywords: [
    "refrigeration",
    "air conditioning",
    "ventilation",
    "water coolers",
    "freezer rooms"
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} mt-[148px]`}>
      <NavigationBar/>
      {children}
      </body>
    </html>
  );
}
