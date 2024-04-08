"use client";
import React, { useTransition, useState, useEffect, useMemo } from "react";
import Image from "next/image";
import TabButton from "../atoms/TabButton";
import TabContent from "../templates/TabContent";
import { getBalance } from "@wagmi/core";
import { config } from "@/config";

const TabSelector = () => {
  const [tab, setTab] = useState("AUDC");
  const [isPending, startTransition] = useTransition();
  const [balance, setBalance] = useState("Loading...");

  type EthereumAddress = `0x${string}`;

  const tokens: { [key: string]: EthereumAddress } = useMemo(
    () => ({
      AUDC: "0xc6a72611ed7a1354fe13e6c4e71d1574e8d619c3",
      USDC: "0x6d87e29e6b5a5a1216598b763552c1d0eb35804b",
      GBPC: "0xe2e20236adea3d6390b998816417a04e46a5691d",
    }),
    []
  );

  useEffect(() => {
    getBalance(config, {
      address: "0x866BA0c6B77f1137F5650d73C0c4aD557F2fbC14",
      token: tokens[tab],
    }).then((result) => {
      setBalance(result.formatted);
    });
  }, [tab, tokens]);

  const TAB_DATA = [
    {
      title: "AUDC",
      id: "AUDC",
      content: <TabContent balance={balance} currency="AUDC" />,
    },
    {
      title: "USDC",
      id: "USDC",
      content: <TabContent balance={balance} currency="USDC" />,
    },
    {
      title: "GBPC",
      id: "GBPC",
      content: <TabContent balance={balance} currency="GBPC" />,
    },
  ];

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const currentTabData = TAB_DATA.find((t) => t.id === tab);
  const content = currentTabData ? currentTabData.content : null;

  return (
    <div className="mt-14">
      <div className="flex flex-row mt-0 md:text-xl text-black">
        <TabButton
          selectTab={() => handleTabChange("AUDC")}
          active={tab === "AUDC"}
        >
          AUDC Wallet
        </TabButton>
        <TabButton
          selectTab={() => handleTabChange("USDC")}
          active={tab === "USDC"}
        >
          USDC Wallet
        </TabButton>
        <TabButton
          selectTab={() => handleTabChange("GBPC")}
          active={tab === "GBPC"}
        >
          GBPC Wallet
        </TabButton>
      </div>
      <div className="mt-6 text-sm md:text-md text-black">{content}</div>
    </div>
  );
};

export default TabSelector;
