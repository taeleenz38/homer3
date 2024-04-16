"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Username from "./atoms/Username";

const Navbar = () => {
  return (
    <div className="">
      <div className="bg-white flex flex-col absolute top-0 left-0 z-10 h-screen w-[350px] p-8 text-black border-r-[1px] border-[#DDE1E6]">
        <Image
          src="/images/LOGO2.png"
          alt="Logo2"
          width={125}
          height={125}
          className="mx-auto mb-8"
        />
        <div className="flex mb-8">
          <Image src="/images/user.png" alt="Home" width={50} height={50} />{" "}
          <Username text="Tae Lee" />
        </div>
        <div className="nav-items border-[1px] border-[#F2F4F8]">
          <Link
            href="/dashboard"
            className="flex p-3 border-b-[1px] border-[#F2F4F8] hover:bg-[#F2F4F8]"
          >
            <Image src="/images/folder.png" alt="Home" width={25} height={25} />
            <h2 className="self-center ml-2 font-medium">Work Basket</h2>
          </Link>
          <Link
            href="/dashboard/accountSettings"
            className="flex p-3 border-b-[1px] border-[#F2F4F8] hover:bg-[#F2F4F8]"
          >
            <Image src="/images/home.png" alt="Home" width={25} height={25} />
            <h2 className="self-center ml-2 font-medium">Account settings</h2>
          </Link>
          {/* <Link
          href="/dashboard/verification"
          className="flex p-3 border-b-[1px] border-[#F2F4F8] hover:bg-[#F2F4F8]"
        >
          <Image src="/images/folder.png" alt="Home" width={25} height={25} />
          <h2 className="self-center ml-2 font-medium">Verification</h2>
        </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
