function scaleSvg() {
  const svg = document.querySelector(".center svg");
  svg.style.transition = "transform 1s";
  svg.style.transform = "scale(3)";
}
function jumpToHome() {
  window.location.href = "./home.html";
}
function animateTitle() {
  const title = document.querySelector(".title span");
  title.classList.add("ani-title");
}
function disappear() {
  const clouds = document.querySelectorAll(".clouds>img");
  const car = document.querySelector(".car");
  clouds.forEach((cloud, index) => {
    cloud.classList.add("disappear");
  });
  car.classList.add("disappear");
}

document
  .querySelector(".start-bg-container")
  .addEventListener("click", function () {
    disappear();
    animateTitle();
    scaleSvg();
    setTimeout(jumpToHome, 1000); // 0.5秒后跳转，根据动画时长调整
  });
