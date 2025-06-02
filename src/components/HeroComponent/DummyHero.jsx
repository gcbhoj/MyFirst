import React from "react";

const DummyHero = ({ statement}) => {
  return (
    <div className="m-1 mt-0.5 flex justify-center items-center font-serif flex-col">
      <h3 className="text-xl font-semibold font-serif text-[#bd730c] text-[36px] tracking-[.05em]">
        <strong>SamskritaBharati Canada</strong>
      </h3>
      <h3 className="text-[14px] italic tracking-[.05em]">{statement}</h3>
    </div>
  );
};

export default DummyHero;
