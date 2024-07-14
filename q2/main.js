const harryWithWand = document.querySelector(".harry-and-wand");
const starsContainer = document.querySelector(".stars");

document.addEventListener("click", e => {
  const x = e.clientX;
  const y = e.clientY;

  harryWithWand.style.setProperty("--x", x + "px");
  harryWithWand.style.setProperty("--y", y + "px");
});

for (let i = 0; i < 25; i++) {
  console.log("Hello world")
  const star = document.createElement("div");
  const size = Math.random() * 2 + .5;

  star.className = "star";

  star.style.cssText = `
    --size: ${size}px;
    --delay: ${i * 100}ms;
    top: ${innerHeight * Math.random()}px;
    left: ${innerWidth * Math.random()}px;
  `;

  starsContainer.append(star);
}
