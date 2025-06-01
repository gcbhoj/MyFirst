import React from "react";

const SlokComponent = () => {
  return (
    <div className="slok-container ml-1 mr-1 h-12 rounded-2xl overflow-hidden bg-gray-400 fade rounded-t-none">
      <canvas id="slokCanvas" className="w-full h-full block "></canvas>
    </div>
  );
};

export default SlokComponent;
