import React from "react";

const Button = ({
  label,
  height = "",
  width = "",
  background = "",
  icon = "",
  margin = "m-0",
  border = "",
  onClick, // just declare the prop normally
}) => {
  return (
    <button
      onClick={onClick} // attach the click handler here
      className={`
        ${width} ${height} ${background} ${border}
        rounded-2xl ${margin} border border-stone-500
        active:border-stone-600 active:shadow-gray-600 active:shadow
        hover:text-sky-200 font-serif tracking-[.13em]
        capitalize hover:italic active:scale-95 hover:scale-105
        flex items-center justify-center
        md:w-[220px] text-[12px] font-semibold
      `}
    >
      {icon && <span className="text-xl mr-2">{icon}</span>}
      {label}
    </button>
  );
};

export default Button;
