window.addEventListener("load", () => {
  const scrollArea = document.querySelector(".scroll-area");

  window.addEventListener(
    "wheel",
    (e) => {
      e.preventDefault();
      scrollArea.scrollLeft += e.deltaY;
    },
    { passive: false }
  );
});
window.addEventListener("load", () => {
  const storyIndex = localStorage.getItem("story-currentIndex");
  console.log(storyIndex);
  if (storyIndex !== null) {
    const story = stories[storyIndex];
    console.log(story);
    document.querySelector(".t1").textContent = story.t1;
    document.querySelector(".t2").textContent = story.t2;

    const scrollContent = document.querySelector(".scroll-content");

    story.content.forEach((item) => {
      scrollContent.innerHTML += `
                <div class="node">
                    <p>${item.p}</p>
                    <img src="${item.img}" alt="">
                </div>`;
    });
  }
});
// 返回按钮
document.querySelector(".back-button").addEventListener("click", function () {
  window.history.back();
});

const stories = [
  {
    t1: "种米姑娘—陈雨佳",
    t2: "黑龙江省宁安市渤海镇上官地村的一位返乡创业青年",
    content: [
      {
        p: "她用一粒米，连接了一座村庄与千万个城市家庭。",
        img: "../assets/imgs/story-detail/0/s01.png",
      },
      {
        p: "村民不必外出打工，在家门口就能就业增收，促进村庄人口回流、产业回归、文化复兴。",
        img: "../assets/imgs/story-detail/0/s02.png",
      },
    ],
  },
  {
    t1: "十个勤天",
    t2: "他们通过实际行动，展示了新时代“新农人”的风采，推动了农业现代化和乡村振兴。",
    content: [
      {
        p: "见天地之广阔，解民生之多艰",
        img: "../assets/imgs/story-detail/1/s01.png",
      },
      {
        p: "民勤县敢把沙漠变绿洲的当代愚公精神，需要被更多人看见。",
        img: "../assets/imgs/story-detail/1/s02.png",
      },
      {
        p: "见水之 以实干破难题，用真心暖民心——十个勤天推进成林大棚建设工作纪实",
        img: "../assets/imgs/story-detail/1/s03.png",
      },
    ],
  },
  {
    t1: "新农人— 汤鑫晨",
    t2: "从互联网产品经理到“数字果农”",
    content: [
      {
        p: "采购商可以“按图索果”，节省了选品时间，也提高了交易成功率，为传统果园插上了数字化的翅膀。",
        img: "../assets/imgs/story-detail/2/s01.png",
      },
      {
        p: "突破了传统“卖难”困境，实现产地直销，不仅提高了果农收益，也为乡村电商打造了成功样板。",
        img: "../assets/imgs/story-detail/2/s02.png",
      },
      {
        p: "见水之 当地农业逐步向“品质化、规模化、现代化”转型，也为村民带来了更多就业机会和发展信心。",
        img: "../assets/imgs/story-detail/2/s03.png",
      },
    ],
  },
];
