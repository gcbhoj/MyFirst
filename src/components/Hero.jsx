import React from "react";
import SlokComponent from "./SlokComponent.jsx";

const Hero = () => {
  return (
    <div className="w-full h-55 m-1 rounded-b-none flex flex-col mb-0">
      {/* Relative container to position text over canvas */}
      <div className="relative rounded-2xl h-40 mt-1 ml-1 mr-1 bg-gray-400 rounded-b-none overflow-hidden shadow-sm ">
        {/* Header with logo and text at top */}
        <div className="absolute top-2 left-0 right-0 px-4 flex justify-between items-center z-10 text-white font-bold text-xl w-full">
          <div className="border-2 w-32 h-35 rounded-full flex items-center justify-center">
            <h3>Add logo hero</h3>
          </div>
          <div className="border-2 w-40 h-16 flex items-center justify-center">
            <h3>Add something here</h3>
          </div>
          <div className="">more here</div>
        </div>

        {/* Canvas behind the text */}
        <canvas id="constillationEffect" className="w-full h-full z-0"></canvas>
      </div>

      <SlokComponent />
      
    </div>
  );
};

export default Hero;
