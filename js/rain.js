function createRaindrops() {
  const rainContainer = document.getElementById('rain');
  const numberOfDrops = 30; // 减少雨滴数量

  for (let i = 0; i < numberOfDrops; i++) {
    const raindrop = document.createElement('div');
    raindrop.className = 'raindrop';

    // 随机位置
    raindrop.style.left = `${Math.random() * 100}%`;

    // 随机动画延迟
    raindrop.style.animationDelay = `${Math.random() * 3}s`; // 增加延迟时间

    // 随机动画持续时间
    raindrop.style.animationDuration = `${2 + Math.random() * 2}s`; // 增加动画时间
    rainContainer.appendChild(raindrop);
  }
}

// 页面加载完成后创建雨滴
document.addEventListener('DOMContentLoaded', createRaindrops);
