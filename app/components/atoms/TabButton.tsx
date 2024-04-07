import React from "react";
import { motion } from "framer-motion";

interface TabButtonProps {
  active: boolean;
  selectTab: () => void;
  children: React.ReactNode;
}

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 2.25rem)" },
};

const TabButton: React.FC<TabButtonProps> = ({
  active,
  selectTab,
  children,
}) => {
  const buttonClasses = active ? "text-[#212654]" : "text-black";

  return (
    <button onClick={selectTab}>
      <p className={`mr-9 font-medium hover:text-[#212654] ${buttonClasses}`}>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 bg-[#212654] mt-1 mr-9"
      ></motion.div>
    </button>
  );
};

export default TabButton;
