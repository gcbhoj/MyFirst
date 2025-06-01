import React, { useEffect } from "react";
import { Text } from "../animations/ScrollingTest/Text.js";
import { loadVerses } from "../animations/ScrollingTest/FetchData.js";

const SlokComponent = () => {
  useEffect(() => {
    let animationFrameId;
    let intervalId;
    let text;

    const initCanvas = async () => {
      const canvas = document.getElementById("slokCanvas");
      if (!canvas) return;

      const ctx = canvas.getContext("2d");

      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;

      const slokhs = await loadVerses();

      const cleanedSlokhs = slokhs.map((s) => ({
        ...s,
        gitaSlokh: s.gitaSlokh.replace(/\n+/g, " "),
      }));

      let currentIndex = 0;
      text = new Text(canvas, cleanedSlokhs[currentIndex].gitaSlokh);

      intervalId = setInterval(() => {
        currentIndex = (currentIndex + 1) % cleanedSlokhs.length;
        text.text = cleanedSlokhs[currentIndex].gitaSlokh;
        text.x = canvas.width;
      }, 40000);

      const resizeCanvas = () => {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        text.y = canvas.height / 2;
        text.fontSize = "20";
        text.x = canvas.width;
      };

      resizeCanvas();

      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        text.update();
        text.draw(ctx);
        animationFrameId = requestAnimationFrame(animate);
      };

      animate();

      window.addEventListener("resize", resizeCanvas);
    };

    initCanvas();

    return () => {
      window.removeEventListener("resize", () => {});
      cancelAnimationFrame(animationFrameId);
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="w-full mt-0 m-1 h-20 borde rounded-b-2xl border-t-0 bg-zinc-800">
      <canvas id="slokCanvas" className="w-full h-24"></canvas>
    </div>
  );
};

export default SlokComponent;
