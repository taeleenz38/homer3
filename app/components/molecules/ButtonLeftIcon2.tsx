import React, { ReactNode } from "react";
import Button from "@mui/material/Button";

interface ButtonLeftIconProps {
  startIcon: ReactNode;
  text: string;
}

const ButtonLeftIcon2: React.FC<ButtonLeftIconProps> = ({ text, startIcon }) => {
  return (
    <Button
      className="bg-white text-xl text-[#212654] capitalize font-medium h-14 hover:bg-[#212654] hover:text-white"
      variant="contained"
      startIcon={startIcon}
      fullWidth
    >
      {text}
    </Button>
  );
};

export default ButtonLeftIcon2;
