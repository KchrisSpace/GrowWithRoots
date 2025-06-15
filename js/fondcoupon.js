
// 卡片相关代码
const cardCount = 30;
const cardPerRow = 5; // 每行卡片数量
// 计算行数
const cardRows = Math.ceil(cardCount / cardPerRow);
const cardContainer = document.querySelector('.card-container');

// 创建卡片并堆叠在底部中间
function createCards() {
  for (let i = 0; i < cardCount; i++) {
    const card = document.createElement('div');
    card.className = 'card';
    card.style.zIndex = cardCount - i;

    // 图片路径可根据实际情况调整
    const img = document.createElement('img');
    img.src = `../assets/imgs/origin/foodcoupon/${i + 1}.png`;
    img.alt = `card${i + 1}`;
    img.style.width = '100%';
    img.style.height = '100%';
    img.style.objectFit = 'cover';
    card.appendChild(img);
    cardContainer.appendChild(card);
  }
}

// 发牌动画
function dealCards() {
  const cards = document.querySelectorAll('.card');
  cards.forEach((card, i) => {
    setTimeout(() => {
      card.classList.add('dealt');
      // 计算当前卡片的行和列
      const row = Math.floor(i / cardPerRow);
      const col = i % cardPerRow;
      // 计算目标位置
      const x = (col - (cardPerRow - 1) / 2) * 315;
      const y = row * 120;

      // 设置初始位置（底部中间）
      card.style.transform = 'translate(-50%, 0)';
      card.offsetWidth; // 强制重绘

      // 设置目标位置
      card.style.transform = `translate(calc(-50% + ${x}px), ${y}px)`;
      card.style.zIndex = i + 1;
    }, i * 100);
  });
}

// 添加鼠标悬停动画
function addHoverAnimation() {
  const cards = document.querySelectorAll('.card');
  cards.forEach((card) => {
    card.addEventListener('mouseenter', () => {
      gsap.to(card, {
        rotation: 8,
        duration: 0.01,
        ease: 'power1.inOut',
      });
    });

    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        rotation: 0,
        duration: 0.01,
      });
    });
  });
}

// 初始化卡片
function initCards() {
  createCards();

  // 让 card-container 高度自适应所有卡片
  const totalHeight = cardRows * 110 + 40;
  cardContainer.style.height = totalHeight + 'px';

  // 自动发牌
  setTimeout(() => {
    dealCards();

    // 发牌完成后添加鼠标悬停动画
    setTimeout(() => {
      addHoverAnimation();
    }, cardCount * 100 + 500); // 等待所有卡片发牌完成
  }, 100);
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', initCards);
