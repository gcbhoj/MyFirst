import React from "react";
import InputBox from "./UIComponents/InputBox";

const Auth = () => {
  return (
    <div>
      <InputBox
        label="Email"
        width="w-56"
        height="h-9"
        type="text"
        name="email"
      />
      <InputBox
        label="Password"
        width="w-56"
        height="h-9"
        type="password"
        name="password"
      />
    </div>
  );
};

export default Auth;
