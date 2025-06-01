import React from "react";
import { Link } from "react-router-dom";
import { FaPhone } from "react-icons/fa";
import { FaMailchimp } from "react-icons/fa6";
import { VscFeedback } from "react-icons/vsc";
import Button from "../components/UIComponents/Button";

const FooterTopLeft = () => {
  return (
    <>
      <div className="relative group">
        <Button
          icon={<FaPhone />}
          width="w-10"
          height="h-10"
          margin="m-2"
          border="border-0"
          hoverBackground="hover:text-rose-300"
        />
        <span className="absolute left-full top-1/5 -translate-y-1/2 ml-1 px-1 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
          Call Us
        </span>
      </div>

      <Link to="mailto:code@samskritabharati.ca" className="relative group">
        <Button
          width="w-10"
          height="h-10"
          icon={<FaMailchimp />}
          margin="m-2"
          border="border-0"
          hoverBackground="hover:text-rose-300"
        />
        <span className="absolute left-full top-1/2 -translate-y-1/2 ml-2 px-2 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
          mailto
        </span>
      </Link>

      <Link to="/feedback" className="relative group">
        <Button
          width="w-10"
          height="h-10"
          icon={<VscFeedback />}
          margin="m-2"
          border="border-0"
          hoverBackground="hover:text-rose-300"
        />
        <span className="absolute left-full top-1/4 -translate-y-1/4 ml-2 px-2 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
          Feedback
        </span>
      </Link>
    </>
  );
};

export default FooterTopLeft;
