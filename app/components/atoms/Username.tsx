import React from "react";

interface UsernameProps {
  text: string;
}

const Username: React.FC<UsernameProps> = ({ text }) => {
  return <h2 className="self-center ml-4 font-medium">{text}</h2>;
};

export default Username;
