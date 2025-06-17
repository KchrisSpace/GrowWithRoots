// 为云朵添加动画
const cloud1 = document.querySelector('.cloud-1');
const cloud2 = document.querySelector('.cloud-2');
const cloud3 = document.querySelector('.cloud-3');

// 设置云朵的初始状态
gsap.set(cloud1, { x: '-5rem', opacity: 0 });
gsap.set(cloud2, { x: '-5rem', opacity: 0 });
gsap.set(cloud3, { x: '4rem', opacity: 0 });

// 创建云朵的渐入动画
gsap.to(cloud1, {
  x: '0',
  opacity: 1,
  duration: 1.5,
  ease: 'power2.out',
  scrollTrigger: {
    trigger: '.poem',
    start: 'top center',
    end: 'bottom center',
    toggleActions: 'play none none reverse',
  },
});

gsap.to(cloud2, {
  x: '0',
  opacity: 1,
  duration: 1.5,
  ease: 'power2.out',
  scrollTrigger: {
    trigger: '.poem',
    start: 'top center',
    end: 'bottom center',
    toggleActions: 'play none none reverse',
  },
});

gsap.to(cloud3, {
  x: '0',
  opacity: 1,
  duration: 1.5,
  ease: 'power2.out',
  scrollTrigger: {
    trigger: '.poem',
    start: 'top center',
    end: 'bottom center',
    toggleActions: 'play none none reverse',
  },
});

// 添加漂浮动画
gsap.to(cloud1, {
  y: '10px',
  duration: 3,
  ease: 'power1.inOut',
  yoyo: true,
  repeat: -1,
});

gsap.to(cloud2, {
  x: '5px',
  duration: 3,
  ease: 'power1.inOut',
  yoyo: true,
  repeat: -1,
});

gsap.to(cloud3, {
  x: '16px',
  duration: 3,
  ease: 'power1.inOut',
  yoyo: true,
  repeat: -1,
});

// 给诗文字加上动画
const poemText = document.querySelectorAll('.poem-p p');
// plow标题文字
const maskTitle = document.querySelector('.mask-title');

// 创建标题文字的 Observer
const titleObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const text = entry.target.textContent;
        entry.target.textContent = '';

        // 创建逐字动画
        let currentText = '';
        const chars = text.split('');

        chars.forEach((char, i) => {
          setTimeout(() => {
            currentText += char;
            entry.target.textContent = currentText;
          }, i * 100); // 每个字符间隔50ms
        });

        // 一旦动画开始，就停止观察该元素
        titleObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.5,
  }
);

// 开始观察标题文字
if (maskTitle) {
  titleObserver.observe(maskTitle);
}

// 创建诗文字的 Observer
const textObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const index = Array.from(poemText).indexOf(entry.target);
        const text = entry.target.textContent;
        entry.target.textContent = '';

        // 创建逐字动画
        let currentText = '';
        const chars = text.split('');

        chars.forEach((char, i) => {
          setTimeout(() => {
            currentText += char;
            entry.target.textContent = currentText;
          }, i * 50 + index * 800); // 每个字符间隔5ms，每段文字间隔1s
        });

        // 一旦动画开始，就停止观察该元素
        textObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.5, // 当元素50%进入视窗时触发
  }
);

// 开始观察所有文字元素
poemText.forEach((text) => {
  textObserver.observe(text);
});
