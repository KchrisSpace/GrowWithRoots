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
    // Check if this is the past carousel and reverse direction
    const direction = carousel.closest(".past") ? 0.1 : -0.1;
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
            }
        ],
        past: [
            {
                title: "耕牛犁地",
                image: "../assets/imgs/wish-detalis/tools/past/耕牛犁地.png",
            },
            {
                title: "牛拉圆盘耙",
                image: "../assets/imgs/wish-detalis/tools/past/牛拉圆盘耙.png",
            },
            {
                title: "手工插秧",
                image: "../assets/imgs/wish-detalis/tools/past/手工插秧.png", 
            },
            {
                title: "手扶耕地机",
                image: "../assets/imgs/wish-detalis/tools/past/手扶耕地机.png",
            },
            {
                title: "手工收割",
                image: "../assets/imgs/wish-detalis/tools/past/手工收割.png",
            }
        ]
    }
};
// details默认隐藏，点击查看后出现
document.addEventListener("DOMContentLoaded", function () {
  const details = document.querySelector(".details");
  const viewButtons = document.querySelectorAll(".card button");

  // 初始隐藏详情
  details.style.display = "none";

  // 为每个按钮添加点击事件
  viewButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const buttonValue = button.value; // 读取button的value值

      // Get the corresponding data based on button value
      const data = detailsData[buttonValue];

      // Clear existing content
      const todayCarousel = document.querySelector(".today .carousel");
      const pastCarousel = document.querySelector(".past .carousel");
      todayCarousel.innerHTML = "";
      pastCarousel.innerHTML = "";

      // Render today's items
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

      // Render past items
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

      // 显示详情区域
      details.style.display = "block";
      // 隐藏所有查看按钮
      viewButtons.forEach((btn) => (btn.style.display = "none"));
    });
  });
});
