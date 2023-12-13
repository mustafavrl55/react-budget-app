"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { MyContext } from "@/context/my-context";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {

  const [items, setItems] = useState([]);


  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="flex justify-end gap-5 absolute text-white w-full container pt-4 ">
          <Link href="/">Home</Link>
          <Link href="/statictis">Statictis</Link>
          <Link href="/allexpenses">All Expenses</Link>
        </header>
        <div className="h-screen bg-emerald-400 ">
          <MyContext.Provider value={{ items, setItems }}>
            {children}
          </MyContext.Provider>
        </div>
      </body>
    </html>
  );
}
