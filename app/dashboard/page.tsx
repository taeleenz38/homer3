"use client";
import React, { useState } from "react";
import Heading2 from "../components/atoms/Heading2";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PaidIcon from "@mui/icons-material/Paid";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Dashboard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const requests = [
    {
      requestType: "Acquire with fiat",
      name: "ANZ | 313336 - 455729832",
      currency: "AUDC",
      amount: 500,
      requestDate: "05 April 2024",
      status: "Pending",
      icon: <AccountBalanceIcon />,
    },
    {
      requestType: "Acquire with fiat",
      name: "NAB | 523669 - 212378781",
      currency: "USDC",
      amount: 1000,
      requestDate: "04 April 2024",
      status: "Completed",
      icon: <AccountBalanceIcon />,
    },
    {
      requestType: "Deposit on-chain",
      name: "0x42e9BE8490ab7b8D3CC7e2F453E0A9913b2F203e",
      currency: "USDC",
      amount: 500,
      requestDate: "03 April 2024",
      status: "Completed",
      icon: <PaidIcon />,
    },
    {
      requestType: "Withdraw on-chain",
      name: "0x22A5BC3A1eD4f75A69238286D84ec65358a072C2",
      currency: "GBPC",
      amount: 750,
      requestDate: "04 April 2024",
      status: "Completed",
      icon: <PaidIcon />,
    },
    {
      requestType: "Redeem to bank",
      name: "ANZ | 336923 - 313268744",
      currency: "AUDC",
      amount: 750,
      requestDate: "02 April 2024",
      status: "Completed",
      icon: <AccountBalanceIcon />,
    },
  ];

  const fiatRequests = requests.filter(
    (request) =>
      request.requestType === "Acquire with fiat" ||
      request.requestType === "Redeem to bank"
  );

  const onChainRequests = requests.filter(
    (request) =>
      request.requestType === "Deposit on-chain" ||
      request.requestType === "Withdraw on-chain"
  );

  const renderRequestItems = (requestItems) => (
    <div>
      <div className="flex text-[#8A849C] font-bold p-6">
        <div className="w-3/12">REQUEST TYPE</div>
        <div className="w-2/12">CURRENCY</div>
        <div className="w-2/12">AMOUNT</div>
        <div className="w-3/12">REQUEST DATE</div>
        <div className="w-2/12">STATUS</div>
      </div>
      {requestItems.map((request, index) => (
        <div
          key={index}
          className={`flex items-center ${
            request.status === "Completed"
              ? "bg-gray-100 text-gray-500"
              : "bg-white text-[#212654]"
          } mb-5 p-6 font-medium rounded-2xl shadow-md hover:cursor-pointer`}
        >
          <div className="w-3/12">
            <div className="flex items-center w-full">
              {request.icon}
              <div className="flex flex-col ml-4">
                <p>{request.requestType}</p>
                <p className="text-[#8A849C] font-normal">{request.name}</p>
              </div>
            </div>
          </div>
          <div className="w-2/12">{request.currency}</div>
          <div className="w-2/12">{request.amount}</div>
          <div className="w-3/12">{request.requestDate}</div>
          <div className="w-[10%]">
            <p className="mr-8">{request.status}</p>
          </div>
          <ArrowForwardIosIcon />
        </div>
      ))}
    </div>
  );

  return (
    <div className="pl-[450px] pr-[100px] mt-10">
      <Heading2 text="Work Basket" />
      <div className="bg-[#F9F9FC] mt-10 w-full px-8 py-4 rounded-xl shadow-sm">
        <div className="mb-6">
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <h3 className="text-3xl font-medium my-4 ml-4">Fiat Requests</h3>
            </AccordionSummary>
            <AccordionDetails>
              {renderRequestItems(fiatRequests)}
            </AccordionDetails>
          </Accordion>
        </div>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <h3 className="text-3xl font-medium my-4 ml-4">
              On-chain Requests
            </h3>
          </AccordionSummary>
          <AccordionDetails>
            {renderRequestItems(onChainRequests)}
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default Dashboard;
