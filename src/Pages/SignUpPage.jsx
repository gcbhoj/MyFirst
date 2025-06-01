import React from "react";
import InputBox from "../components/UIComponents/InputBox";
import Button from "../components/UIComponents/Button";

const Auth = () => {
  return (
    <div className=" mt-25 flex items-center justify-center">
      <div className="flex flex-col items-center justify-center w-96 p-6 border border-[#F1F7ED] shadow-md bg-[#F1F7ED] rounded-4xl">
        <h3 className="font-serif italic tracking-[.13em] font-black text-[12px] text-[#262322] mb-4 text-center">
          Enter your Email
          <br />
          <span className="mt-2 block">Password to Sign Up</span>
        </h3>

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
          label="Sign Up"
          width="w-32"
          height="h-10"
          background="bg-stone-600"
          border="border-1"
        />
      </div>
    </div>
  );
};

export default Auth;
