const ball = document.querySelector(".ball");

const btn = {
  start: document.querySelector(".controls > .btn-start"),
  resume: document.querySelector(".controls > .btn-resume"),
  stop: document.querySelector(".controls > .btn-stop")
};

btn.start.addEventListener("click", () => {
  ball.style.animation = "none";
  ball.offsetWidth;
  ball.style.animation = null;
  ball.style.animationPlayState = "running";
});

btn.stop.addEventListener("click", () => {
  ball.style.animationPlayState = "paused";
});

btn.resume.addEventListener("click", () => {
  ball.style.animationPlayState = "running";
});

ball.addEventListener("mouseover", function() {
  this.style.filter = `hue-rotate(${Math.random() * 360}deg)`
});
