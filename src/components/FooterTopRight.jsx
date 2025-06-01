import React from "react";
import { Link } from "react-router-dom";

const FooterTopRight = () => {
  return (
    <>
      {" "}
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
    </>
  );
};

export default FooterTopRight;
