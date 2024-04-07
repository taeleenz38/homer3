import React from "react";
import TextInput from "../atoms/TextInput";
import Heading2 from "../atoms/Heading2";
import InputLabel from "../atoms/InputLabel";
import ButtonNoIcon from "../atoms/ButtonNoIcon";
import CheckboxWithLabel from "../molecules/CheckboxWithLabel";
import Link from "next/link";
import Divider from "@mui/material/Divider";

const SignInForm = () => {
  return (
    <div className="px-28 my-auto">
      <Heading2 text="Sign In" />
      <InputLabel text="Email Address" />
      <TextInput
        labelId="filled-basic"
        labelText="Email Address"
        type="email"
      />
      <InputLabel text="Password" />
      <TextInput
        labelId="filled-password-input"
        labelText="Password"
        type="password"
      />
      <div className="flex justify-between items-center my-4">
        <CheckboxWithLabel labelText="Remember me" />
        <Link href="#" className="text-[#212654]">
          Forgot Password?
        </Link>
      </div>
      <Link href="/dashboard">
        <ButtonNoIcon text="Sign In" />
      </Link>
      <Divider className="my-20"></Divider>
      <Link className="text-[#212654]" href="/signup">
        Do not have an account? Sign Up here
      </Link>
    </div>
  );
};

export default SignInForm;
