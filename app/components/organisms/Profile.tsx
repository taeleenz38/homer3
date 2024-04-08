import React from "react";
import Heading2 from "../atoms/Heading2";
import Image from "next/image";
import ContactsIcon from "@mui/icons-material/Contacts";
import Button from "@mui/material/Button";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

const Profile = () => {
  return (
    <div className="w-full">
      <div className="flex justify-between">
        <Heading2 text="Profile" />
        <div className="w-44">
          <Button
            className="bg-white text-[#212654] text-xl capitalize font-medium h-14 hover:bg-[#212654] hover:text-white"
            variant="contained"
            fullWidth
          >
            Edit
          </Button>
        </div>
      </div>
      <div className="bg-[#F9F9FC] flex p-8 rounded-xl shadow-md mt-20">
        <div className="flex flex-col justify-center items-center w-4/12 border-r-2">
          <Image
            className="rounded-full"
            src="/images/profile.jpg"
            alt="Profile"
            width={350}
            height={350}
          />
          <h3 className="text-xl mt-4 font-medium text-[#212654]">
            Ted Hansen
          </h3>
        </div>
        <div className="flex flex-col w-3/12 border-r-2 px-6 justify-around">
          <div className="flex flex-col bg-white rounded-xl p-4 shadow-md">
            <h3 className="text-2xl mb-4 font-medium text-[#212654]">
              Basic Information
            </h3>
            <p className="mb-3">
              <b>Phone Number:</b> 0431-565-034
            </p>
            <p className="mb-3">
              <b>Email Address:</b> ted.hansen@gmail.com
            </p>
            <p className="mb-3">
              <b>Address:</b> 81 Abeckett St, Melbourne VIC 3000
            </p>
            <p className="mb-3">
              <b>Company Name:</b> ALOGO
            </p>
            <p>
              <b>Verification Status:</b> Completed
            </p>
          </div>
        </div>
        <div className="flex flex-col w-5/12 px-6 justify-around">
          <div className="flex flex-col bg-white rounded-xl p-4 shadow-md">
            <h3 className="text-2xl mb-4 font-medium text-[#212654]">
              Wallets
            </h3>
            <p className="mb-3">
              <b>ETH Hot Wallet:</b> 0x1E40767ddA91a06ee3e80E3d28BEB28CcF2F2565{" "}
            </p>
            <p className="mb-3">
              <b>ETH Cold Wallet (Ledger):</b> 0xe0e3D4141D7FC3697AD469b4ED5b149D30b7069B{" "}
            </p>
            <p>
              <b>ETH Cold Wallet (Trezor):</b>{" "}
              0x42e9BE8490ab7b8D3CC7e2F453E0A9913b2F203e
            </p>
          </div>
          <div className="flex flex-col bg-white rounded-xl mt-4 p-4 shadow-md">
            <h3 className="text-2xl mb-4 font-medium text-[#212654]">Banks</h3>
            <div className="mb-4">
              <AccountBalanceIcon />{" "}
              <span className="ml-2 text-[#697077]">
                ANZ-AUD: Australia and New Zealand Banking Group Limited
              </span>
            </div>
            <div className="mb-4">
              <AccountBalanceIcon />{" "}
              <span className="ml-2 text-[#697077]">
                NAB-USD: National Australia Bank
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
