import { loadVerses } from "./FetchData.js";
import { Text } from "./Text.js";

window.addEventListener("load", async () => {
  const canvas = document.getElementById("slokCanvas");
  const ctx = canvas.getContext("2d");

  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;

  const slokhs = await loadVerses();

  const cleanedSlokhs = slokhs.map((s) => ({
    ...s,
    gitaSlokh: s.gitaSlokh.replace(/\n+/g, " "),
  }));

  let currentIndex = 0;

  // Initialize Text object with first slokh
  const text = new Text(canvas, cleanedSlokhs[currentIndex].gitaSlokh);

  // Change text every 40 seconds
  setInterval(() => {
    currentIndex = (currentIndex + 1) % cleanedSlokhs.length; // loop back to 0
    text.text = cleanedSlokhs[currentIndex].gitaSlokh; // update text
    text.x = canvas.width; // reset x position
  }, 40000);

  function resizeCanvas() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    text.y = canvas.height / 2; // Update vertical center
  }

  resizeCanvas();

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    text.update();
    text.draw(ctx);
    requestAnimationFrame(animate);
  }

  animate();
  window.addEventListener("resize", () => {
    resizeCanvas();
    text.fontSize = "20"; // Set new font size
    text.x = canvas.width; // Reset x
  });;
});
