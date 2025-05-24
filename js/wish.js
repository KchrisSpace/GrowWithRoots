// 导航栏
const navbar = document.querySelector(".navbar");
let lastScrollY = window.scrollY;
let ticking = false;

function handleScroll() {
  if (window.scrollY === 0) {
    navbar.style.top = "0";
    navbar.style.transition = "top 0.3s";
  } else if (window.scrollY > lastScrollY) {
    // 向下滚动，隐藏navbar
    navbar.style.top = "-100px"; // 假设navbar高度为60px
  } else {
    // 向上滚动，显示navbar
    navbar.style.top = "0";
  }
  lastScrollY = window.scrollY;
  ticking = false;
}

window.addEventListener("scroll", function () {
  if (!ticking) {
    window.requestAnimationFrame(handleScroll);
    ticking = true;
  }
});
// tips进入
// tips依次从右向左进入动画
window.addEventListener("DOMContentLoaded", () => {
  const tips = document.querySelectorAll(".select .tip");
  tips.forEach((tip, i) => {
    // tip.style.transform = 'translateX(100vw)';
    tip.style.opacity = "0";
    tip.style.transition =
      "transform 0.7s cubic-bezier(.77,0,.18,1), opacity 0.7s";
    setTimeout(() => {
      tip.style.transform = "translateX(0)";
      tip.style.opacity = "1";
    }, 300 + i * 250);
  });
});
// cow向左
// cow向左动画
window.addEventListener("DOMContentLoaded", () => {
  const cow = document.querySelector(".cow");
  if (!cow) return;

  // 初始状态
  cow.style.transition = "transform 5s linear";
  cow.style.transform = "translateX(0) ";

  function animateCow(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        cow.style.transform = "translateX(-34vw)";
      }
    });
  }

  const observer = new IntersectionObserver(animateCow, {
    threshold: 0.5, // 50%可见时触发
  });

  observer.observe(cow);
});

// car向右
window.addEventListener("DOMContentLoaded", () => {
  const car = document.querySelector(".car");
  if (!car) return;

  car.style.transition = "transform 4s linear";
  car.style.transform = "translateX(0)";

  function animateCar(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          car.style.transform = "translateX(35vw)";
        }, 500);
      }
    });
  }

  const observer = new IntersectionObserver(animateCar, {
    threshold: 1, // 100%可见时触发
  });

  observer.observe(car);
});
// 当page3进入页面时
window.addEventListener("DOMContentLoaded", () => {
  const page3 = document.querySelector(".page-3");
  if (!page3) return;

  const cards = page3.querySelectorAll(".cards .card");
  cards.forEach((card) => {
    card.style.transform = "translateY(80px)";
    card.style.transition = "transform 0.6s  opacity 0.6s";
  });

  function animateCards(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        cards.forEach((card, i) => {
          setTimeout(() => {
            // card.style.zIndex = "-1";
            card.style.transform = "translateY(0px)";
          }, i * 600);
        });
      }
    });
  }

  const observer = new IntersectionObserver(animateCards, {
    threshold: 0.6,
  });

  observer.observe(page3);
});
