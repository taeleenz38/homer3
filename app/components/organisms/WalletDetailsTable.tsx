import React from "react";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const WalletDetailsTable = () => {
  return (
    <div className="bg-white w-full px-20 py-10 rounded-xl shadow-sm">
      <div className="font-bold py-4 mb-4 border-b-[1px] text-xl w-7/12">
        Wallet address information
      </div>
      <div className="grid grid-cols-3 pl-4 w-7/12 pb-14 mb-4 border-b-[1px]">
        <div className="col-span-1 font-medium">Wallet Nickname</div>
        <div className="col-span-2">ETH Hot Wallet</div>
      </div>
      <div className="grid grid-cols-3 pl-4 w-7/12 pb-14 mb-4 border-b-[1px]">
        <div className="col-span-1 font-medium">Wallet Address</div>
        <div className="col-span-2">
          0x1E40767ddA91a06ee3e80E3d28BEB28CcF2F2565 <ContentCopyIcon />
        </div>
      </div>
      <div className="grid grid-cols-3 pl-4 w-7/12 pb-14 mb-4 border-b-[1px]">
        <div className="col-span-1 font-medium">Blockchain</div>
        <div className="col-span-2">Ethereum (ETH)</div>
      </div>
      <div className="grid grid-cols-3 pl-4 w-7/12 mb-4">
        <div className="col-span-1 font-medium">Bank Linked On</div>
        <div className="col-span-2">08/24/2023</div>
      </div>
    </div>
  );
};

export default WalletDetailsTable;
