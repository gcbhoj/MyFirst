import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/UIComponents/Button";
import { FaPhone } from "react-icons/fa";
import { FaMailchimp } from "react-icons/fa6";
import { VscFeedback } from "react-icons/vsc";

const Footer = () => {
  return (
    <footer className="border m-1 h-[9.5rem] bg-gray-100 rounded-2xl">
      <div className="grid grid-rows-[1fr_3rem] h-full">
        {/* Top Section */}
        <div className="border border-amber-700 m-1 mb-0 grid grid-cols-[10rem_1fr_4rem]">
          {/* Left Column */}
          <div className="bg-gray-200 flex flex-col items-start justify-evenly px-2">
            <Button icon={<FaPhone />} margin="m-0" border="border-0" />
            <Link to="mailto:code@samskritabharati.ca">
              <Button
                icon={<FaMailchimp />}
                margin="m-0"
                border="border-0"
              />
            </Link>
            <Link to="/feedback" className="relative group">
              <Button
                width="w-1/5"
                height="h-10"
                icon={<VscFeedback />}
                margin="0"
                border="border-0"
              />
              <span className="absolute left-full top-1/2 -translate-y-1/2 ml-2 px-2 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
                Feedback
              </span>
            </Link>
          </div>

          {/* Center Column */}
          <div className="bg-gray-300 flex items-center justify-center">
            <span className="text-gray-700 font-medium">
              Social Media / Center Content
            </span>
          </div>

          {/* Right Column */}
          <div className="bg-gray-400 p-2 flex flex-col font-serif text-[14px] justify-center items-end pt-0 gap-1">
            <Link to="/" className="hover:text-sky-600">
              Home
            </Link>
            <Link to="/about" className="hover:text-sky-600">
              About
            </Link>
            <Link to="/games" className="hover:text-sky-600">
              Games
            </Link>
            <Link to="/contact" className="hover:text-sky-600">
              Contact
            </Link>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex items-center justify-center border-amber-900 border-2 m-1 mt-0 h-full">
          <p className="text-sm text-gray-600 font-serif italic">
            &copy; {new Date().getFullYear()} Samskrita Bharati. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
