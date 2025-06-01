import React, { useEffect } from "react";
import SlokComponent from "./SlokComponent.jsx";
import { Effects } from "../animations/ConstillationEffect/Effect.js";

const Hero = () => {
  useEffect(() => {
    const canvas = document.getElementById("constillationEffect");
    const ctx = canvas.getContext("2d");

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const effect = new Effects(canvas);

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      effect.handleBallParticles(ctx);
      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      effect.width = canvas.offsetWidth;
      effect.height = canvas.offsetHeight;
    };

    window.addEventListener("resize", handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Run once when Hero mounts

  return (
    <div className="w-full h-65 m-1 rounded-b-none flex flex-col mb-0 shadow-sm shadow-gray-300">
      <div className="relative rounded-2xl h-40 mt-1 ml-1 mr-1 bg-zinc-800 rounded-b-none overflow-hidden shadow-sm">
        <div className="absolute top-2 left-0 right-0 px-4 flex justify-between items-center z-10 text-white font-bold text-xl w-full">
          <div className="border-2 w-32 h-35 rounded-full flex items-center justify-center">
            <h3>Add logo hero</h3>
          </div>
          <div className="border-2 w-40 h-16 flex items-center justify-center">
            <h3>Add something here</h3>
          </div>
          <div className="">more here</div>
        </div>

        <canvas id="constillationEffect" className="w-full h-full z-0"></canvas>
      </div>

      <SlokComponent />
    </div>
  );
};

export default Hero;
