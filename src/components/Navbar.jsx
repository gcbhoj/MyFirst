import React, { useState, useRef, useEffect } from "react";
import Button from "./UIComponents/Button";
import { IoMdSettings } from "react-icons/io";

const Navbar = () => {
  const [isSettingsMenuOpen, setIsSettingsMenuOpen] = useState(false);
  const settingsBtnRef = useRef(null);
  const [dropdownPos, setDropdownPos] = useState({ top: 0, right: 0 });

  useEffect(() => {
    if (isSettingsMenuOpen && settingsBtnRef.current) {
      const rect = settingsBtnRef.current.getBoundingClientRect();
      // You can adjust top and right depending on your design
      setDropdownPos({
        top: rect.bottom + window.scrollY + 8, // 8px below the button
        right: window.innerWidth - rect.right - window.scrollX,
      });
    }
  }, [isSettingsMenuOpen]);

  return (
    <div className="relative border-4 border-double border-[rgba(93,163,153,0.8)] m-1 max-w-full h-16 rounded-2xl bg-gradient-to-bl from-[rgba(147,104,183,0.8)] to-[rgba(172,203,225,0.8)] shadow-md shadow-[rgba(245,239,255,.6)] flex items-center justify-end ">
      <div></div>
      <div className="flex flex-wrap items-center gap-4">
        <Button width="w-20" height="h-12" label="Home" border="border-0" />
        <Button width="w-20" height="h-12" label="Games" border="border-0" />
        <Button
          width="w-30"
          height="h-12"
          label="Leaderboard"
          border="border-0"
        />
        <Button
          width="w-30"
          height="h-12"
          label="Dashboard"
          border="border-0"
        />

        {/* Settings Button + Dropdown */}
        <div className="relative">
          <Button
            ref={settingsBtnRef}
            onClick={() => setIsSettingsMenuOpen((prev) => !prev)}
            width="w-10"
            height="h-12"
            label=""
            border="border-0"
            icon={<IoMdSettings />}
            margin="m-0"
          />

          {isSettingsMenuOpen && (
            <div
              className="absolute w-40 p-1 flex flex-col gap-2 z-50"
              style={{
                top: dropdownPos.top,
                right: dropdownPos.right,
                position: "absolute",
              }}
              onMouseLeave={() => setIsSettingsMenuOpen(false)}
            >
              <Button
                label="Sign In"
                width="w-full"
                height="h-8"
                margin="m-0"
                background="bg-stone-600"
              />
              <Button
                label="Login"
                width="w-full"
                height="h-8"
                margin="m-0"
                background="bg-stone-600"
              />
              <Button
                label="Contact"
                width="w-full"
                height="h-8"
                margin="m-0"
                background="bg-stone-600"
              />
              <Button
                label="About"
                width="w-full"
                height="h-8"
                margin="m-0"
                background="bg-stone-600"
              />
              <Button
                label="log out"
                width="w-full"
                height="h-8"
                margin="m-0"
                background="bg-stone-600"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
