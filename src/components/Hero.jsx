import React from "react";
import SlokComponent from "./SlokComponent.jsx";

const Hero = () => {
  return (
    <div className="border-1 border-amber-800 w-full h-45 m-1 rounded-b-none flex flex-col">
      <div className=" border-2  rounded-2xl h-30 mt-1 ml-1 mr-1 bg-gray-400 rounded-b-none">
        <canvas id="constillationEffect" className="w-full"></canvas>
      </div>
      <SlokComponent />
    </div>
  );
};

export default Hero;
