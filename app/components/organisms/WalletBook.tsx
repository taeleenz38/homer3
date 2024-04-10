import React from "react";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import Link from "next/link";

const WalletBook = () => {
  const tableData = [
    {
      nickname: "ETH Hot Wallet",
      blockchain: "Ethereum",
      address: "0x1E40767ddA91a06ee3e80E3d28BEB28CcF2F2565",
      status: "Active",
      addedDate: "08/24/2023",
    },
    {
      nickname: "ETH Cold Wallet (Ledger)",
      blockchain: "Ethereum",
      address: "0xe0e3D4141D7FC3697AD469b4ED5b149D30b7069B",
      status: "Active",
      addedDate: "09/27/2024",
    },
    {
      nickname: "ETH Cold Wallet (Trezor)",
      blockchain: "Ethereum",
      address: "0x42e9BE8490ab7b8D3CC7e2F453E0A9913b2F203e",
      status: "Active",
      addedDate: "03/21/2024",
    },
  ];

  return (
    <div className="bg-[#F9F9FC] text-left px-8 py-4">
      <div className="flex text-[#8A849C] font-bold p-6">
        <div className="w-3/12">NICKNAME</div>
        <div className="w-2/12">BLOCKCHAIN</div>
        <div className="w-5/12">WALLET ADDRESS</div>
        <div className="w-2/12">STATUS</div>
      </div>
      {tableData.map((item, index) => (
        <div
          className="flex items-center bg-white mb-4 p-6 font-medium text-primary rounded-2xl shadow-md"
          key={index}
        >
          <div className="w-3/12">
            <div className="flex items-center w-full">
              <AccountBalanceWalletIcon />
              <div className="flex flex-col ml-4">
                <p>{item.nickname}</p>
              </div>
            </div>
          </div>
          <div className="w-2/12">{item.blockchain}</div>
          <div className="w-5/12 text-[#8A849C]">
            {item.address} <ContentCopyIcon />
          </div>
          <div className="w-1/12">
            {item.status}
            <div className="text-[#8A849C]">Added {item.addedDate}</div>
          </div>
          <div className="w-1/12">
            <Link href="/dashboard/walletAddress/walletDetails">
              <ArrowForwardIosIcon />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WalletBook;
