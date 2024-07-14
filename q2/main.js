const harryWithWand = document.querySelector(".harry-and-wand");

document.addEventListener("click", e => {
  const box = harryWithWand.getBoundingClientRect();
  const xi = box.left;
  const yi = box.top;

  const x = e.clientX;
  const y = e.clientY;

  const theta = ~~Math.atan2(y - yi, x - xi);

  harryWithWand.style.setProperty("--x", x + "px");
  harryWithWand.style.setProperty("--y", y + "px");
})
