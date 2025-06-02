import React from "react";
import Button from "../UIComponents/Button";

const SettingsMenu = () => {
  return (
    <div className="absolute top-full right-0 mt-2 z-50 border border-amber-700 bg-white w-40 flex flex-col p-2 gap-2 rounded-2xl shadow-lg">
      <Button width="w-10" height="h-8" label="Sign In" />
      <Button width="w-10" height="h-8" label="Login" />
      <Button width="w-10" height="h-8" label="Contact" />
    </div>
  );
};

export default SettingsMenu;
