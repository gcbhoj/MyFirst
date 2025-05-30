import React from "react";
import InputBox from "./UIComponents/InputBox";
import Button from "./UIComponents/Button";

const Auth = () => {
  return (
    <div className="border 1 border-red-900 w-95 h-65 flex justify-center flex-col m-2 p-2 items-center flex-wrap  ">
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
      <Button
        background={"bg-stone-500"}
        width="w-30"
        height="h-10"
        label={"sign up"}
      />
    </div>
  );
};

export default Auth;
