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
});
