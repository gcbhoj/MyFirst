import React from "react";

const HeroMiddle = () => {
  return (
    <div className="w-full h-full grid grid-cols-3 grid-rows-3 p-4">
      {/* Full-width banner at the top spanning all columns */}
      <div className="col-span-3 row-span-2 flex flex-col items-center justify-center text-center">
        <h3 className="text-xl font-semibold font-serif text-[#DBAD6A] text-[36px] tracking-[.05em]">
          <strong>SamskritaBharati Canada</strong>
        </h3>
      </div>

      {/* Bottom message starting from column 2 and spanning 2 columns */}
      <div className="col-start-2 col-span-2 row-start-3 flex items-center justify-center italic text-[#F18F01] text-[12px] text-center">
        <h3>"Unlock the Wisdom of Sanskrit — Through Play!"</h3>
      </div>
    </div>
  );
};

export default HeroMiddle;
