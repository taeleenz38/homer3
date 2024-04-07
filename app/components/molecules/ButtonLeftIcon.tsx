import React, { ReactNode } from "react";
import Button from "@mui/material/Button";

interface ButtonLeftIconProps {
  startIcon: ReactNode;
  text: string;
}

const ButtonLeftIcon: React.FC<ButtonLeftIconProps> = ({ text, startIcon }) => {
  return (
    <Button
      className="bg-[#212654] text-xl font-medium capitalize h-14 hover:bg-[white] hover:text-[#212654]"
      variant="contained"
      startIcon={startIcon}
      fullWidth
    >
      {text}
    </Button>
  );
};

export default ButtonLeftIcon;
