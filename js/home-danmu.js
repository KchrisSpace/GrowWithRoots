

const sentens = [
    "农业历史应该从何说起？",
    "我们的农耕文化从哪里来？", 
    "新时代的农耕会带来哪些新的机遇与挑战？",
    "现代农业科技如何改变了传统农耕方式？",
    "智慧农业将如何引领未来发展？",
    "农业生产与生态保护如何平衡？",
    "粮食安全对国家发展有何重要意义？",
    "农业现代化的道路该如何走？",
    "数字农业时代已经来临了吗？"
];
// 弹幕效果
let currentNum = 1;
const createDanmu = () => {
  const danmu = document.createElement("div");
  danmu.classList.add("scrolling_item");
  danmu.style.zIndex = -10;
  danmu.textContent = sentens[Math.floor(Math.random() * sentens.length)];
  danmu.style.fontSize = `${Math.floor(Math.random() * 6 + 2)}vh`;
  danmu.style.left = `${window.innerWidth}px`;
  const scrollingContainer = document.querySelector(".scrolling");
  let randomNum = Math.floor(Math.random() * 9) - 1;

  if (randomNum === currentNum) randomNum = 1;
  else currentNum = randomNum;

//   if (randomNum === 3) randomNum = 1;
//   else if (randomNum === 4) randomNum = 2;
//   else if (randomNum === 5) randomNum = 6;
  danmu.style.top = `${randomNum * Math.floor(100 / 8)}vh`;
  scrollingContainer.appendChild(danmu);
  danmu.style.transition = `transform 15000ms linear`;
  setTimeout(() => {
    danmu.style.transform = `translateX(-${
      window.innerWidth + danmu.offsetWidth
    }px)`;
  }, 0);
  danmu.addEventListener("transitionend", function () {
    danmu.remove();
  });
};
// 启动弹幕循环
let createDame;
const startDanmuLoop = () => {
    createDame = setInterval(createDanmu, 750);
};

// 停止弹幕循环
const stopDanmuLoop = () => {
    clearInterval(createDame);
};

// 开始执行弹幕
startDanmuLoop();
