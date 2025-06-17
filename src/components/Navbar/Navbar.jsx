import React, { useState, useRef, useEffect } from "react";
import Button from "../UIComponents/Button";
import { IoMdSettings } from "react-icons/io";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  // settings for navbar dropdown
  const [isSettingsMenuOpen, setIsSettingsMenuOpen] = useState(false);
  const settingsBtnRef = useRef(null);
  const [dropdownPos, setDropdownPos] = useState({ top: 0, right: 0 });

  useEffect(() => {
    if (isSettingsMenuOpen && settingsBtnRef.current) {
      const rect = settingsBtnRef.current.getBoundingClientRect();
      // adjust top and right depending on your design
      setDropdownPos({
        top: rect.bottom + window.scrollY + 8, // 8px below the button
        right: window.innerWidth - rect.right - window.scrollX,
      });
    }
  }, [isSettingsMenuOpen]);

  //settings to set active status in navbar

  const linkClass = ({ isActive }) =>
    isActive
      ? "bg-zinc-300 text-Zinc-600 hover:bg-sky-300 hover:text-sky-600 rounded-md px-3 py-2 h-12"
      : "text-black hover:bg-gray-300 hover:text-black rounded-md px-3 py-2";

  return (
    <div className="relative  border-[rgba(93,163,153,0.8)] m-0.5 max-w-full h-20 rounded-2xl bg-gradient-to-bl from-zinc-400 to-[rgba(172,203,225,0.9)] shadow-md shadow-[rgba(245,239,255,.6)] flex items-center justify-end mb-0 ">
      <div className="flex flex-wrap items-center gap-4">
        <NavLink to="/" className={linkClass}>
          <Button width="w-20" height="h-12" label="Home" border="border-0" />
        </NavLink>

        <NavLink to="/games" className={linkClass}>
          <Button width="w-20" height="h-12" label="Games" border="border-0" />
        </NavLink>
        <NavLink to="/gallery" className={linkClass}>
          <Button
            width="w-20"
            height="h-12"
            label="gallery"
            border="border-0"
          />
        </NavLink>

        <Button width="w-20" height="h-12" label="events" border="border-0" />
        <NavLink to="/dashboard" className={linkClass}>
          <Button width="w-20" height="h-12" label="dash" border="border-0" />
        </NavLink>
        <NavLink to="/signUp" className={linkClass}>
          <Button width="w-20" height="h-12" label="signup" border="border-0" />
        </NavLink>
        <NavLink to="/movies" className={linkClass}>
          <Button width="w-20" height="h-12" label="movies" border="border-0" />
        </NavLink>

        {/* Settings Button + Dropdown */}
        <div className="relative">
          <Button
            ref={settingsBtnRef}
            onClick={() => setIsSettingsMenuOpen((prev) => !prev)}
            width="w-12"
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
                label="profile settings"
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
