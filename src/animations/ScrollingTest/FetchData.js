window.addEventListener("load", () => {
  const canvas = document.getElementById("slokCanvas");

  if (!canvas) {
    console.error("canvas not found!");
    return;
  }
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  console.log(ctx);
});
