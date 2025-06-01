import React from "react";
import Button from "../components/UIComponents/Button";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { RiTelegram2Line } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";
const FooterCenter = () => {
  return (
    <>
      <h3 className="font-serif flex flex-wrap justify-center text-[13px] italic">
        Connect With Us:
      </h3>
      <div className="flex flex-wrap items-center justify-evenly m-1">
        <Button
          width="w-10"
          height="h-10"
          icon={<FaFacebook />}
          margin="m-1"
          hoverBackground="hover:text-blue-400"
          border="border-0"
        />
        <Button
          width="w-10"
          height="h-10"
          icon={<FaInstagram />}
          margin="m-1"
          hoverBackground="hover:text-blue-400"
          border="border-0"
        />
        <Button
          width="w-10"
          height="h-10"
          icon={<RiTelegram2Line />}
          margin="m-1"
          hoverBackground="hover:text-blue-400"
          border="border-0"
        />
        <Button
          width="w-10"
          height="h-10"
          icon={<FaWhatsapp />}
          margin="m-1"
          hoverBackground="hover:text-blue-400"
          border="border-0"
        />
        <Button
          width="w-10"
          height="h-10"
          icon={<FiYoutube />}
          margin="m-1"
          hoverBackground="hover:text-blue-400"
          border="border-0"
        />
      </div>
    </>
  );
};

export default FooterCenter;
