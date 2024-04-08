import React, { useState } from "react";
import ButtonLeftIcon from "../molecules/ButtonLeftIcon";
import ButtonLeftIcon2 from "../molecules/ButtonLeftIcon2";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import WalletBalance from "../molecules/WalletBalance";
import AcquireForm from "./AcquireForm";
import OpacityFilter from "../atoms/OpacityFilter";

interface TabSectionProps {
  balance: string;
  currency: string;
}

const TabSection: React.FC<TabSectionProps> = ({ balance, currency }) => {
  const [formOpen, setFormOpen] = useState(false);

  const toggleForm = () => {
    setFormOpen((prevFormOpen) => !prevFormOpen);
  };

  return (
    <div className="flex justify-between items-center w-full">
      {formOpen && <AcquireForm toggleForm={toggleForm} />}
      {formOpen && <OpacityFilter />}
      <WalletBalance balance={balance} currency={currency} />
      <div className="flex w-[75%] justify-end">
        <div className="w-[18%] mr-3" onClick={toggleForm}>
          <ButtonLeftIcon startIcon={<LoginIcon />} text="Acquire" />
        </div>
        <div className="w-[18%] mr-6">
          <ButtonLeftIcon startIcon={<LoginIcon />} text="Deposit" />
        </div>
        <div className="w-[18%] mr-3">
          <ButtonLeftIcon2 startIcon={<LogoutIcon />} text="Redeem" />
        </div>
        <div className="w-[18%]">
          <ButtonLeftIcon2 startIcon={<LogoutIcon />} text="Withdraw" />
        </div>
      </div>
    </div>
  );
};

export default TabSection;
