document.addEventListener('DOMContentLoaded', () => {
  const circleContainer = document.querySelector('.circle-container');
  const circleItems = document.querySelectorAll('.circle-item');
  let currentRotation = 0;
  const minRotation = -15;
  const maxRotation = 0;

  window.addEventListener(
    'wheel',
    (e) => {
      // 根据滚轮方向调整旋转
      const delta = e.deltaY > 0 ? -5 : 5;

      // 计算新的旋转角度
      currentRotation = Math.max(
        minRotation,
        Math.min(maxRotation, currentRotation + delta)
      );

      // 应用旋转，保持位置不变
      circleContainer.style.transform = `translate(-50%, 5.5%) rotate(${currentRotation}deg)`;

      // 防止页面滚动
      e.preventDefault();
    },
    { passive: false }
  );
  circleItems[0].addEventListener('click', () => {
    window.location.href = '../disaster/children-pages/pest.html';
  });
  circleItems[1].addEventListener('click', () => {
    window.location.href = '../disaster/children-pages/famine.html';
  });
  circleItems[2].addEventListener('click', () => {
    window.location.href = '../disaster/children-pages/drought.html';
  });
  circleItems[3].addEventListener('click', () => {
    window.location.href = '../disaster/children-pages/deluge.html';
  });
  // 照片垂直无限滚动
  const container = document.querySelector('.waterfall-container');

  // 立即开始动态加载
  function render() {
    for (x = 0; x < 20; x++) {
      container.innerHTML += `
      <img src="../../assets/imgs/coexistence/disater/stream/01.jpg" class="waterfall-img" alt="waterfall" />
       <img src="../../assets/imgs/coexistence/disater/stream/02.jpg" class="waterfall-img" alt="waterfall" />
        <img src="../../assets/imgs/coexistence/disater/stream/03.jpg" class="waterfall-img" alt="waterfall" />
         <img src="../../assets/imgs/coexistence/disater/stream/04.jpg" class="waterfall-img" alt="waterfall" />
          <img src="../../assets/imgs/coexistence/disater/stream/05.jpg" class="waterfall-img" alt="waterfall" />
           <img src="../../assets/imgs/coexistence/disater/stream/06.jpg" class="waterfall-img" alt="waterfall" />
            <img src="../../assets/imgs/coexistence/disater/stream/07.jpg" class="waterfall-img" alt="waterfall" />
             <img src="../../assets/imgs/coexistence/disater/stream/08.jpg" class="waterfall-img" alt="waterfall" />
              <img src="../../assets/imgs/coexistence/disater/stream/09.jpg" class="waterfall-img" alt="waterfall" />
               <img src="../../assets/imgs/coexistence/disater/stream/10.jpg" class="waterfall-img" alt="waterfall" />
                <img src="../../assets/imgs/coexistence/disater/stream/11.jpg" class="waterfall-img" alt="waterfall" />
                 <img src="../../assets/imgs/coexistence/disater/stream/12.jpg" class="waterfall-img" alt="waterfall" />
                  <img src="../../assets/imgs/coexistence/disater/stream/13.jpg" class="waterfall-img" alt="waterfall" />
                   <img src="../../assets/imgs/coexistence/disater/stream/14.jpg" class="waterfall-img" alt="waterfall" />
                    <img src="../../assets/imgs/coexistence/disater/stream/15.jpg" class="waterfall-img" alt="waterfall" />
                     <img src="../../assets/imgs/coexistence/disater/stream/16.jpg" class="waterfall-img" alt="waterfall" />
                      <img src="../../assets/imgs/coexistence/disater/stream/17.jpg" class="waterfall-img" alt="waterfall" />
                       <img src="../../assets/imgs/coexistence/disater/stream/13.jpg" class="waterfall-img" alt="waterfall" />
                   <img src="../../assets/imgs/coexistence/disater/stream/14.jpg" class="waterfall-img" alt="waterfall" />
                    <img src="../../assets/imgs/coexistence/disater/stream/15.jpg" class="waterfall-img" alt="waterfall" />
                     <img src="../../assets/imgs/coexistence/disater/stream/16.jpg" class="waterfall-img" alt="waterfall" />
                      <img src="../../assets/imgs/coexistence/disater/stream/17.jpg" class="waterfall-img" alt="waterfall" />
                       <img src="../../assets/imgs/coexistence/disater/stream/13.jpg" class="waterfall-img" alt="waterfall" />
                   <img src="../../assets/imgs/coexistence/disater/stream/14.jpg" class="waterfall-img" alt="waterfall" />
                    <img src="../../assets/imgs/coexistence/disater/stream/15.jpg" class="waterfall-img" alt="waterfall" />
                     <img src="../../assets/imgs/coexistence/disater/stream/16.jpg" class="waterfall-img" alt="waterfall" />
                      <img src="../../assets/imgs/coexistence/disater/stream/17.jpg" class="waterfall-img" alt="waterfall" />
                       <img src="../../assets/imgs/coexistence/disater/stream/13.jpg" class="waterfall-img" alt="waterfall" />
                   <img src="../../assets/imgs/coexistence/disater/stream/14.jpg" class="waterfall-img" alt="waterfall" />
                    <img src="../../assets/imgs/coexistence/disater/stream/15.jpg" class="waterfall-img" alt="waterfall" />
                     <img src="../../assets/imgs/coexistence/disater/stream/16.jpg" class="waterfall-img" alt="waterfall" />
                      <img src="../../assets/imgs/coexistence/disater/stream/17.jpg" class="waterfall-img" alt="waterfall" />
                       <img src="../../assets/imgs/coexistence/disater/stream/13.jpg" class="waterfall-img" alt="waterfall" />
                   <img src="../../assets/imgs/coexistence/disater/stream/14.jpg" class="waterfall-img" alt="waterfall" />
                    <img src="../../assets/imgs/coexistence/disater/stream/15.jpg" class="waterfall-img" alt="waterfall" />
                     <img src="../../assets/imgs/coexistence/disater/stream/16.jpg" class="waterfall-img" alt="waterfall" />
                      <img src="../../assets/imgs/coexistence/disater/stream/17.jpg" class="waterfall-img" alt="waterfall" />
                       <img src="../../assets/imgs/coexistence/disater/stream/18.jpg" class="waterfall-img" alt="waterfall" />
                   <img src="../../assets/imgs/coexistence/disater/stream/19.jpg" class="waterfall-img" alt="waterfall" />
                    <img src="../../assets/imgs/coexistence/disater/stream/20.jpg" class="waterfall-img" alt="waterfall" />
                     <img src="../../assets/imgs/coexistence/disater/stream/21.jpg" class="waterfall-img" alt="waterfall" />
                      <img src="../../assets/imgs/coexistence/disater/stream/22.jpg" class="waterfall-img" alt="waterfall" />

      `;
    }
  }
  render();

  // 为动态加载的图片设置动画
  const images = document.querySelectorAll('.waterfall-img');
  images.forEach((img, index) => {
    const randomX = Math.random() * (window.innerWidth - img.width);
    const y = 1.78 * window.innerHeight;
    const randomZ = -500 - Math.random() * 1000;
    img.style.position = 'absolute';
    img.style.left = `${randomX}px`;
    img.style.top = `${y}px`;
    img.style.transform = `translateZ(${randomZ}px)`;

    if (img.complete) {
      startAnimation(img, randomZ, index);
    } else {
      img.addEventListener('load', () => {
        startAnimation(img, randomZ, index);
      });
    }
  });

  // 动态加载图片的动画函数
  function startAnimation(img, depth, index) {
    const duration = 4 + Math.abs(depth) / 200; // 基础4秒，每200单位深度增加1秒

    gsap.to(img, {
      top: -window.innerHeight,
      duration: duration,
      delay: index * 0.2,
      ease: 'none',
      transform: `translateZ(${depth}px)`,
    });
  }
});
