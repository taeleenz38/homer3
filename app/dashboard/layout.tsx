import React, { ReactNode } from "react";
import Navbar from "../components/Navbar";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <div className="flex p-0 m-0 w-screen h-screen text-black">
        <Navbar />
        <main className="bg-[#F2F4F8] w-full">{children}</main>
      </div>
    </>
  );
}