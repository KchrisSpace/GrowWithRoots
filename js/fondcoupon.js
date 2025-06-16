// 卡片相关代码
const cardCount = 30;
const cardPerRow = 5; // 每行5张卡片
const cardRows = 6; // 固定6行
const cardContainer = document.querySelector('.card-container');
const carBoxes = document.querySelectorAll('.car-box');

// 创建预览弹窗
function createPreviewModal() {
  const modal = document.createElement('div');
  modal.className = 'preview-modal';

  const content = document.createElement('div');
  content.className = 'preview-content';

  const closeBtn = document.createElement('div');
  closeBtn.className = 'preview-close';
  closeBtn.innerHTML = '×';
  closeBtn.onclick = () => {
    modal.classList.remove('active');
  };

  const previewImg = document.createElement('img');
  content.appendChild(previewImg);
  content.appendChild(closeBtn);
  modal.appendChild(content);
  document.body.appendChild(modal);

  return { modal, previewImg };
}

// 初始化预览功能
const { modal, previewImg } = createPreviewModal();

// 创建提示框
function createTooltip() {
  const tooltip = document.createElement('div');
  tooltip.className = 'tooltip';
  document.body.appendChild(tooltip);
  return tooltip;
}

// 初始化提示框
const tooltip = createTooltip();

// 初始化卡片盒子
function initCardBoxes() {
  carBoxes.forEach((box, index) => {
    // 创建图片元素
    const img = document.createElement('img');
    img.src = `../assets/imgs/origin/foodcoupon/${index + 1}.png`;
    img.alt = `card${index + 1}`;

    // 添加图片到盒子
    box.appendChild(img);

    // 添加点击事件
    box.addEventListener('click', () => {
      previewImg.src = img.src;
      modal.classList.add('active');
    });

    // 设置初始z-index，使先发的牌在上面
    if (index === 2) {
      box.style.zIndex == 1;
    } else {
      box.style.zIndex = cardCount - index;
    }

    // 添加鼠标悬停事件
    box.addEventListener('mouseenter', (e) => {
      tooltip.textContent = `点击`;
      tooltip.style.display = 'block';
    });

    // 添加鼠标移动事件
    box.addEventListener('mousemove', (e) => {
      // 更新提示框位置，跟随鼠标
      tooltip.style.left = `${e.clientX + 15}px`;
      tooltip.style.top = `${e.clientY + 15}px`;
    });

    // 添加鼠标离开事件
    box.addEventListener('mouseleave', () => {
      tooltip.style.display = 'none';
    });
  });
}

// 发牌动画
function dealCards() {
  carBoxes.forEach((box, index) => {
    // 计算目标位置
    const row = Math.floor(index / cardPerRow);
    const col = index % cardPerRow;

    setTimeout(() => {
      // 添加晃动动画
      box.classList.add('dealing');

      // 延迟一下再发牌
      setTimeout(() => {
        // 移除晃动动画
        box.classList.remove('dealing');
        // 添加dealt类触发发牌动画
        box.classList.add('dealt');
      }, 100); // 晃动0.5秒后发牌
    }, index * 100); // 每张卡片间隔200ms
  });
}

// 初始化
function init() {
  initCardBoxes();

  // 创建 Intersection Observer
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // 延迟一下再开始发牌，确保DOM已经准备好
          setTimeout(dealCards, 100);
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  observer.observe(cardContainer);
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', init);
