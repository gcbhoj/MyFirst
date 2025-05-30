import React from "react";

const Button = ({ label, height = "h-10", width = "w-10", background, icon }) => {
  return (
    <button
      className={`${width} ${height} rounded-2xl  m-2 border ${background} border-stone-500 active:border-stone-600 active:shadow-gray-600 active:shadow md:w-2 hover:text-sky-200 font-serif tracking-[.13em] m-5 capitalize hover:italic active:scale-95 hover:scale-105 ${icon} flex flex-wrap`}
    >
      {label}
    </button>
  );
};

export default Button;
