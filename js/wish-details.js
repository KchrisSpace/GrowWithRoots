function initializeCarousel(carousel, items) {
  // Style the carousel container
  carousel.style.position = "relative";
  carousel.style.width = "100%";

  // Create a wrapper for all items
  const wrapper = document.createElement("div");
  wrapper.style.display = "flex";
  wrapper.style.transition = "none";
  wrapper.style.width = `${items.length * 100}%`;

  // Move all items into the wrapper
  items.forEach((item) => {
    item.style.width = `${100 / items.length}%`;
    wrapper.appendChild(item);
  });

  // Clone first item and append to end for smooth loop
  const firstItemClone = items[0].cloneNode(true);
  wrapper.appendChild(firstItemClone);

  // Add wrapper to carousel
  carousel.appendChild(wrapper);

  let position = 0;
  function animate() {
    //    速度调整
    const direction = carousel.closest(".past") ? 0.01 : -0.01;
    position += direction;
    if (carousel.closest(".past")) {
      if (position >= 100) position = 0;
    } else {
      if (position <= -100) position = 0;
    }
    wrapper.style.transform = `translateX(${position}%)`;
    requestAnimationFrame(animate);
  }
  animate();
}

document.addEventListener("DOMContentLoaded", function () {
  const viewButtons = document.querySelectorAll(".card button");

  viewButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const todayCarousel = document.querySelector(".today .carousel");
      const pastCarousel = document.querySelector(".past .carousel");

      // Initialize carousels after content is loaded
      setTimeout(() => {
        const todayItems = todayCarousel.querySelectorAll("li");
        const pastItems = pastCarousel.querySelectorAll("li");
        initializeCarousel(todayCarousel, todayItems);
        initializeCarousel(pastCarousel, pastItems);
      }, 0);
    });
  });
});
// details渲染数据
const detailsData = {
  农事监测: {
    today: [
      {
        title: "农田环境监测",
        image: "../assets/imgs/wish-detalis/watch/today/农田环境监测.png",
      },
      {
        title: "农业大数据监测",
        image: "../assets/imgs/wish-detalis/watch/today/农业大数据监测.png",
      },
      {
        title: "卫星遥感检测",
        image: "../assets/imgs/wish-detalis/watch/today/卫星遥感检测.png",
      },
      {
        title: "无人机监测",
        image: "../assets/imgs/wish-detalis/watch/today/无人机监测.png",
      },
      {
        title: "遥感识别虫害",
        image: "../assets/imgs/wish-detalis/watch/today/遥感识别虫害.png",
      },
    ],
    past: [
      {
        title: "二十四节气",
        image: "../assets/imgs/wish-detalis/watch/past/二十四节气.png",
      },
      {
        title: "农谚",
        image: "../assets/imgs/wish-detalis/watch/past/农谚.png",
      },
      {
        title: "手感判断",
        image: "../assets/imgs/wish-detalis/watch/past/手感判断.png",
      },
      {
        title: "天气变换",
        image: "../assets/imgs/wish-detalis/watch/past/天气变换.png",
      },
      {
        title: "星宿",
        image: "../assets/imgs/wish-detalis/watch/past/星宿.png",
      },
    ],
  },
  施肥与灌溉: {
    today: [
      {
        title: "机械浇灌",
        image: "../assets/imgs/wish-detalis/water/today/机械浇灌.png",
      },
      {
        title: "水肥一体化",
        image: "../assets/imgs/wish-detalis/water/today/滴灌水肥一体化.png",
      },
      {
        title: "精准施肥",
        image: "../assets/imgs/wish-detalis/water/today/精准施肥机器.png",
      },
      {
        title: "无人机喷洒",
        image: "../assets/imgs/wish-detalis/water/today/无人机喷洒.png",
      },
      {
        title: "中心轴旋喷灌",
        image: "../assets/imgs/wish-detalis/water/today/中心轴旋转喷灌.png",
      },
    ],
    past: [
      {
        title: "畜粪草灰施肥",
        image: "../assets/imgs/wish-detalis/water/past/畜粪草灰施肥.png",
      },
      {
        title: "灌溉劳作",
        image: "../assets/imgs/wish-detalis/water/past/灌溉劳作.png",
      },
      {
        title: "灌溉引水",
        image: "../assets/imgs/wish-detalis/water/past/灌溉引水.png",
      },
      {
        title: "手撒肥料",
        image: "../assets/imgs/wish-detalis/water/past/手撒肥料.png",
      },
      {
        title: "水车灌溉",
        image: "../assets/imgs/wish-detalis/water/past/水车灌溉.png",
      },
    ],
  },
  生产工具与技术: {
    today: [
      {
        title: "大型联合收割机",
        image: "../assets/imgs/wish-detalis/tools/today/大型联合收割机.png",
      },
      {
        title: "机器人采摘",
        image: "../assets/imgs/wish-detalis/tools/today/机器人采摘.png",
      },
      {
        title: "农机维护车间",
        image: "../assets/imgs/wish-detalis/tools/today/农机维护车间.png",
      },
      {
        title: "无人驾驶播种机",
        image: "../assets/imgs/wish-detalis/tools/today/无人驾驶播种车.png",
      },
      {
        title: "智能插秧机",
        image: "../assets/imgs/wish-detalis/tools/today/智能插秧机.png",
      },
      {
        title: "智能温室控制系统",
        image: "../assets/imgs/wish-detalis/tools/today/智能温室控制系统.png",
      },
      {
        title: "GPS农机导航仪",
        image: "../assets/imgs/wish-detalis/tools/today/GPS农机导航仪.png",
      },
    ],
    past: [
      {
        title: "耕牛犁地",
        image: "../assets/imgs/wish-detalis/tools/past/耕牛犁地.png",
      },
      {
        title: "背篓运输",
        image: "../assets/imgs/wish-detalis/tools/past/背篓运输.png",
      },
      {
        title: "手工插秧",
        image: "../assets/imgs/wish-detalis/tools/past/手工插秧.png",
      },
      {
        title: "镰刀收割",
        image: "../assets/imgs/wish-detalis/tools/past/镰刀收割.png",
      },
      {
        title: "木锄劳作",
        image: "../assets/imgs/wish-detalis/tools/past/木锄劳作.png",
      },
      {
        title: "人工打谷",
        image: "../assets/imgs/wish-detalis/tools/past/人工打谷.png",
      },
    ],
  },
};
// details默认隐藏，点击查看后出现
document.addEventListener("DOMContentLoaded", function () {
  const details = document.querySelector(".details");
  const viewButtons = document.querySelectorAll(".card button");
  const p3Gray = document.querySelector(".p3-gray");

  // 初始隐藏详情
  details.style.display = "none";
  // 初始隐藏灰色背景
  p3Gray.style.display = "none";

  // 为每个按钮添加点击事件
  viewButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Jump to page-3 section
      document.querySelector(".page-3").scrollIntoView({
        behavior: "smooth",
      });
      // 显示灰色背景
      p3Gray.style.display = "block";

      const buttonValue = button.value; // 读取button的value值

      // Get the corresponding data based on button value
      const data = detailsData[buttonValue];

      // Clear existing content
      const todayCarousel = document.querySelector(".today .carousel");
      const pastCarousel = document.querySelector(".past .carousel");
      todayCarousel.innerHTML = "";
      pastCarousel.innerHTML = "";

      // Render today's items 10 times
      for (let i = 0; i < 10; i++) {
        data.today.forEach((item) => {
          const li = document.createElement("li");
          const img = document.createElement("img");
          const span = document.createElement("span");
          img.src = item.image;
          img.alt = item.title;
          span.className = "name";
          span.textContent = item.title;
          li.appendChild(img);
          li.appendChild(span);
          todayCarousel.appendChild(li);
        });
      }

      // Render past items 10 times
      for (let i = 0; i < 10; i++) {
        data.past.forEach((item) => {
          const li = document.createElement("li");
          const img = document.createElement("img");
          const span = document.createElement("span");
          img.src = item.image;
          img.alt = item.title;
          span.className = "name";
          span.textContent = item.title;
          li.appendChild(img);
          li.appendChild(span);
          pastCarousel.appendChild(li);
        });
      }

      // 显示详情区域
      const today = document.querySelector(".details .today");
      const past = document.querySelector(".details .past");
      const closeBT = document.querySelector(".details .close-bt");
      details.style.display = "block";
      // 从右出场
      today.style.transform = "translateX(100%)";
      today.style.transition = "transform 1s ease-out";
      setTimeout(() => {
        today.style.transform = "translateX(0)";
      }, 0);
      // 关闭按钮也从右出场
      closeBT.style.transform = "translateX(100%)";
      closeBT.style.transition = "transform 1s ease-out";
      setTimeout(() => {
        closeBT.style.transform = "translateX(0)";
      }, 0);
      // 从左出场
      past.style.transform = "translateX(-100%)";
      past.style.transition = "transform 1s ease-out";
      setTimeout(() => {
        past.style.transform = "translateX(0)";
      }, 0);

      // 隐藏所有查看按钮
      viewButtons.forEach((btn) => (btn.style.display = "none"));
    });
  });
  // 关闭按钮点击事件
  const closeButton = document.querySelector(".details .close-bt");
  closeButton.addEventListener("click", () => {
    details.style.display = "none";
    p3Gray.style.display = "none";
    viewButtons.forEach((btn) => (btn.style.display = "block"));
  });
});
// 政策树
const btn1 = document.querySelector(".btn-1");
const btn2 = document.querySelector(".btn-2");
const btn3 = document.querySelector(".btn-3");
const btn4 = document.querySelector(".btn-4");
btn1.addEventListener("click", () => {
  window.location.href = "./policytree-1.html";
});
btn2.addEventListener("click", () => {
  window.location.href = "./policytree-2.html";
});
btn3.addEventListener("click", () => {
  window.location.href = "./policytree-3.html";
});
btn4.addEventListener("click", () => {
  window.location.href = "./policytree-4.html";
});
// 三卡片页面
document.addEventListener("DOMContentLoaded", () => {
  const photos = document.querySelectorAll(".page-7 .photos .photo");
  let currentIndex = 0;
  // 点击时可跳转页面
  photos.forEach((photo, index) => {
    photo.addEventListener("click", () => {
      // 跳转到对应的页面
      switch (index) {
        case 0:
          window.location.href = "./story-detail.html";
          localStorage.setItem('story-currentIndex', '0');
          break;
        case 1:
          window.location.href = "./story-detail.html";
          localStorage.setItem('story-currentIndex', '1');
          break;
        case 2:
          window.location.href = "./story-detail.html";
          localStorage.setItem('story-currentIndex', '2');
          break;
      }
    });
  });


  function cyclePhotos() {
    // Remove active from all photos
    photos.forEach((photo) => photo.classList.remove("active"));

    // Add active to current photo
    photos[currentIndex].classList.add("active");

    // 根据索性渲染intro
    const title = document.querySelector(".target");
    const subtitle = document.querySelector(".subtitle");
    const titles = ["勤者阿尾", "十个勤天", "田下一米"];
    const subtitles = [
      "来自祖祖辈辈辛勤耕作的家庭，从小在田野里长大。阿尾，以田为伴，耕作技艺精湛，作为一名农耕师，开展多种作物种植实验。",
      "十位朝气蓬勃的年轻人走进乡村，用两年多的时间进行播种灌溉、施肥、收获、用汗水与努力见证一粒粒种子要成美田，一片农野的荒野变成田园。",

      "自从阿米来到农场，田里多了欢声笑语。她每日认真除草施肥、精心照料庄稼，与禾苗一同生长、一同成熟。",
    ];
    function updateContent() {
      title.textContent = titles[currentIndex];
      subtitle.textContent = subtitles[currentIndex];
    }
    updateContent();
    // 更新索引并循环
    currentIndex = (currentIndex + 1) % photos.length;

    setTimeout(cyclePhotos, 3000);
  }

  // Start the cycle
  cyclePhotos();
});
