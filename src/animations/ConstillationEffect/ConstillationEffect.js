import { Effects } from "./Effect.js";

window.addEventListener("load", () => {
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
    
    window.addEventListener("resize", function () {
        effect.width = canvas.width
        effect.height = canvas.height
    })
});
