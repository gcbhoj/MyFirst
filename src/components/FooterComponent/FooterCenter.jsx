import { Link } from "react-router-dom";
import Button from "../UIComponents/Button";
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
        <Link to={"/"} className="relative group">
          <Button
            width="w-10"
            height="h-10"
            icon={<FaFacebook />}
            margin="m-1"
            hoverBackground="hover:text-blue-400"
            border="border-0"
          />
          <span className="absolute left-full top-1/2 -translate-y-1/2 ml-2 px-2 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
            Facebook
          </span>
        </Link>
        <Link to={"/"}>
          <Button
            width="w-10"
            height="h-10"
            icon={<FaInstagram />}
            margin="m-1"
            hoverBackground="hover:text-blue-400"
            border="border-0"
          />
          <span className="absolute left-full top-1/2 -translate-y-1/2 ml-2 px-2 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
            Instagram
          </span>
        </Link>
        <Link to={"/"} className="relative group">
          <Button
            width="w-10"
            height="h-10"
            icon={<RiTelegram2Line />}
            margin="m-1"
            hoverBackground="hover:text-blue-400"
            border="border-0"
          />
          <span className="absolute left-full top-1/2 -translate-y-1/2 ml-2 px-2 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
            Telegeram
          </span>
        </Link>
        <Link to={"/"} className="relative group">
          <Button
            width="w-10"
            height="h-10"
            icon={<FaWhatsapp />}
            margin="m-1"
            hoverBackground="hover:text-blue-400"
            border="border-0"
          />
          <span className="absolute left-full top-1/2 -translate-y-1/2 ml-2 px-2 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
            WhatsApp
          </span>
        </Link>
        <Link to={"/"} className="relative group">
          <Button
            width="w-10"
            height="h-10"
            icon={<FiYoutube />}
            margin="m-1"
            hoverBackground="hover:text-blue-400"
            border="border-0"
          />
          <span className="absolute left-full top-1/2 -translate-y-1/2 ml-2 px-2 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
            youtube
          </span>
        </Link>
      </div>
    </>
  );
};

export default FooterCenter;
