import React, { ReactNode } from "react";
import Button from "@mui/material/Button";

interface ButtonRightIconProps {
  endIcon: ReactNode;
  text: string;
}

const ButtonRightIcon: React.FC<ButtonRightIconProps> = ({ text, endIcon }) => {
  return (
    <Button
      className="bg-[#212654] capitalize text-xl font-medium h-14 hover:bg-[white] hover:text-[#212654]"
      variant="contained"
      endIcon={endIcon}
      fullWidth
    >
      {text}
    </Button>
  );
};

export default ButtonRightIcon;
