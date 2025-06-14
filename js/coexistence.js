// 立即执行动画
const topContainer = document.querySelector('.top-container');
const loadingOverlay = document.querySelector('.loading-overlay');

if (topContainer && loadingOverlay) {
  // 添加淡出类到 loading-overlay
  // loadingOverlay.classList.add('fade-out');

  // 添加入场动画类到 top-container
  // topContainer.classList.add('fade-in');

  // 动画结束后移除 loading-overlay
  setTimeout(() => {
    loadingOverlay.remove();
  }, 1000);
}

// 添加TV底部动画
function animateSvg() {
  const tvSvgs = document.querySelectorAll('.tv-bottom svg');
  tvSvgs.forEach((svg) => {
    gsap.to(svg, {
      y: '-=10',
      duration: 2,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true,
      delay: Math.random() * 4, // 随机延迟让动画错开
    });
  });
}

// 添加24节气麦穗摆动动画
function animateSvgSwing() {
  const svg1 = document.querySelectorAll('.wheatear-1 svg');
  const svg2 = document.querySelectorAll('.wheatear-2 svg');
  if (!svg1) return;

  gsap.to(svg1[0], {
    rotation: 2,
    duration: 2,
    ease: 'sine.inOut',
    repeat: -1,
    yoyo: true,
  });
  gsap.to(svg1[1], {
    rotation: 2,
    duration: 2,
    ease: 'sine.inOut',
    repeat: -1,
    yoyo: true,
  });
  gsap.to(svg2[0], {
    rotation: -2,
    duration: 2,
    ease: 'sine.inOut',
    repeat: -1,
    yoyo: true,
  });
  gsap.to(svg2[1], {
    rotation: -2,
    duration: 2,
    ease: 'sine.inOut',
    repeat: -1,
    yoyo: true,
  });
}
// 控制麦穗闪动
const feColorMatrix = document.querySelector(
  "#filter0_d_926_1806 feColorMatrix[type='matrix']"
);

function animateGlowAlpha() {
  if (!feColorMatrix) return; // 如果元素不存在，直接返回

  const baseAlpha = 1.2; // 基础透明度（建议 0 ~ 1）
  const amplitude = 0.5; // 振幅（建议 0 ~ 1）
  const speed = 0.002; // 闪烁速度（值越小越慢）

  let alpha = baseAlpha + Math.sin(Date.now() * speed) * amplitude;
  alpha = Math.max(0, Math.min(1, alpha)); // 限制在 0 ~ 1 之间

  const values = `0 0 0 0 1 0 0 0 0 0.946047 0 0 0 0 0.838141 0 0 0 ${alpha} 0`;
  feColorMatrix.setAttribute('values', values);

  requestAnimationFrame(animateGlowAlpha);
}

// 只有在找到feColorMatrix元素时才启动动画
if (feColorMatrix) {
  animateGlowAlpha();
}

// 添加加载动画+转轴点击等事件
document.addEventListener('DOMContentLoaded', function () {
  const contentData = [
    {
      title: '一粒低镉稻种的十年攻坚',
      content: [
        '"0.031！"——2023年，湖南株洲一块稻田边，检测仪上的数值让科研团队热泪盈眶。',
        '"臻两优8612"成功了，一粒真正低镉、稳产的水稻种子终于诞生。它的主创者，是湖南省农科院水稻所研究员赵炳然。十年来，他带领团队走了一条最艰难却最干净的路：不用转基因，通过物理、化学、空间诱变等手段，从30万株材料中一一筛选。失败过无数次，终于培育出既低镉又高产的种子',
      ],
    },
    {
      title: '坚韧不拔，守护丰收——杨华德',
      content: [
        '他长期扎根田间地头，面对自然环境的不确定性和复杂性，反复试验和改良水稻品种。尤其是在育种技术尚不完善的年代，他带领团队克服了病虫害、气候变化等多重难题，一次次失败后仍不放弃，推动了多项关键技术突破。将中国的杂交水稻技术带到远方的土地。他不仅让布隆迪的水稻产量创下历史新高，更用行动诠释了"农业无国界"的信念。',
        '是这份执着与奉献，点亮了无数农民的希望，也让世界看见了中国农业的力量与温度。',
      ],
    },
    {
      title: '杨良金：扎根田野的农民科学家',
      content: [
        '杨良金，退休前是六郎镇上的农技员，一位从田野中走出的农民科学家，被赞誉为"农民科学家""农民的贴心人"。',
        '他培育的"良金1号"早稻品种，成为芜湖地区主栽品种，辐射面积2000多万亩，带动农户1000多万户，增加粮食千亿斤，创直接经济效益超过千亿元。',
      ],
    },
    {
      title: '"南袁北李"——李登海',
      content: [
        '登海种业开创玉米高产道路50周年纪念暨玉米高产攻关研讨会在莱州召开。奋斗51年，李登海带领团队选育出100多个玉米新品种，不断刷新玉米高产记录。',
        '年6月份，他接受《烟台新闻》的采访时曾这样说："我现在74岁，我们还必须在科研的一线当中去。才知道我们品种应该选育什么。在不同的生产区、不同的气候条件下，如何拿出高产？那么还是需要我们这一代老年人，继续在田野间当中奋斗，更需要年轻人赶快进行交班。"',
      ],
    },
    {
      title: '小麦抗病守护者——李振声',
      content: [
        '说到让中国人都能吃饱，很多人想起的是"杂交水稻之父"袁隆平，其实中国还有一位与袁老齐名、',
        '并称"南袁北李"的农业科学家，他就是"中国小麦远缘杂交之父"李振声。',
      ],
    },
    {
      title: '黄瓜抗病育种先驱——侯锋',
      content: [
        '被誉为中国"黄瓜王"，自1957年起致力抗病黄瓜研发，他培育的系列新品种让我国露地黄瓜亩产突破5000公斤，占据80%种植面积',
      ],
    },
    {
      title: '禾下乘凉梦·"杂交水稻之父"——袁隆平',
      content: [
        '他首创成功培育出世界上第一代杂交水稻，大幅提高水稻产量，使中国用不到全球9%的耕地养活了近20%的人口。自1973年三系杂交水稻问世以来，袁隆平带领团队不断攻关"两系法""超级稻"，推动水稻亩产一再突破纪录。',
        '他的研究成果广泛推广至亚洲、非洲、美洲等地，帮助多个国家缓解粮食危机。他一生心系"禾下乘凉梦"，致力于"让人类远离饥饿"，被誉为"把饭碗牢牢端在中国人自己手里"的种业英雄。',
      ],
    },
    {
      title: '种业改革实践者——程顺和',
      content: [
        '1936年出生，1963年起扎根河南基层，57年如一日专注玉米育种，培育39个新品种，推广5亿亩，获国家科技进步一等奖和"最美科技工作者"称号',
      ],
    },
    {
      title: '作物资源保护倡导者——谢华安',
      content: [
        '福建人，参与育成"汕优63"等超级杂交稻品种，长期从事种质资源保护与杂交稻科研，为农业生物多样性提供稳定品种支撑。',
        '他常说："一粒种子，承载着一个国家的希望。"他用一生诠释了这句话。',
      ],
    },
    {
      title: '育种创新推动者——傅廷栋 ',
      content: [
        '生于1938年，中农大教授，中国工程院院士，发现油菜雄性不育类型并培育多个高产杂交品系，促进6000万亩推广成果与农业增产发展。',
        '从田野到实验室，从油菜田到国际讲坛，他致力于推动杂交油菜突破，创造万亩高产纪录。他将科研成果写在了祖国大地上，也写进了千千万万农民的饭碗里。',
      ],
    },
    {
      title: '种业发展设计师——方智远',
      content: [
        '1964年毕业于武汉大学生物系，蔬菜遗传育种专家，作为中国种业十大功勋人物之一，推动中国种业向强国方向发展，具有重大产业设计能力。他是中国蔬菜育种的奠基人之一。',
        '几十年里，他用选育、改良与推广，为中国人"菜篮子"的丰富与安全保驾护航。他不只是科研专家，更是国家农业未来的设计者。',
      ],
    },
    {
      title: '粮农振兴先行者——郭三堆',
      content: [
        '作为中国种业十大功勋人物，此人长期深耕农业政策推广与技术普及，通过推动基层项目促进农民增收、粮食稳定，为乡村振兴提供实践样本 。他走进最偏远的乡村，推行最前沿的政策。',
        '他既是农业技术推广者，也是农民致富的"引路人"。他相信："把科技送进农田，就是给乡村点灯。"他的脚步，照亮了一条又一条通向振兴的田埂路。',
      ],
    },
    {
      title: '地方种业开发者——程相文',
      content: [
        '1963年起扎根河南基层，57年如一日专注玉米育种，培育39个新品种，推广5亿亩，获国家科技进步一等奖和"最美科技工作者"称号。他走遍河南的田间地头，只为找到一粒适合大地的种子。',
        '从地方科研起步，到培育出39个优良玉米品种，他用一生的默默耕耘，为亿万农民带来希望的收成。他不是明星，却是田野里最耀眼的光。',
      ],
    },
  ];

  // 获取所有方块元素和内容容器
  const items = document.querySelectorAll('.item');
  const accordionContent = document.querySelector('.accordion-content');

  // 为每个方块添加点击事件
  items.forEach((item, index) => {
    item.addEventListener('click', function () {
      // 获取对应的内容数据
      const data = contentData[index];

      // 更新 accordion-content 的内容
      accordionContent.innerHTML = `
        <h6>${data.title}</h6>
        ${data.content.map((text) => `<p>${text}</p>`).join('')}
      `;

      // 移除所有方块的 active 类
      items.forEach((i) => i.classList.remove('active'));
      // 为当前点击的方块添加 active 类
      this.classList.add('active');
    });
  });

  // 默认展开第七个盒子
  const seventhItem = document.querySelector('.item:nth-child(7)');
  if (seventhItem) {
    const index = Array.from(items).indexOf(seventhItem);
    const data = contentData[index];

    // 更新内容
    accordionContent.innerHTML = `
      <h6>${data.title}</h6>
      ${data.content.map((text) => `<p>${text}</p>`).join('')}
    `;

    // 添加 active 类
    seventhItem.classList.add('active');
    // 设置 focus 状态
    seventhItem.focus();
  }

  // 24节气
  // 监听滚动事件
  window.addEventListener('scroll', () => {
    const chunks = document.querySelectorAll(
      '.chunk-1, .chunk-2, .chunk-3, .chunk-4, .chunk-5'
    );
    const offset = 50; // 提前50像素触发
    chunks.forEach((chunk) => {
      const rect = chunk.getBoundingClientRect();
      // 当元素接近视口时添加 visible 类，完全离开视口时移除
      if (rect.top < window.innerHeight + offset && rect.bottom > -offset) {
        chunk.classList.add('visible');
      } else {
        chunk.classList.remove('visible');
      }
    });
  });

  // 创建星星
  function createStars() {
    const seasonContainer = document.querySelector('.season');
    const starCount = 50; // 星星数量

    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.className = 'star';

      // 随机大小 (1-6px)
      const size = Math.random() * 5 + 1;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;

      // 随机位置
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;

      // 随机动画延迟
      star.style.animationDelay = `${Math.random() * 6}s`;

      seasonContainer.appendChild(star);
    }
  }

  createStars();

  // 在页面加载完成后初始化动画
  window.addEventListener('load', () => {
    animateSvgSwing();
    animateSvg();
  });

  // 创建 Intersection Observer
  const circleObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    {
      threshold: 0.1, // 当元素有 10% 进入视口时触发
    }
  );

  // 观察 season-circle 元素
  const seasonCircle = document.querySelector('.season-circle');
  const circle3 = document.querySelector('.circle-3');
  const poem = document.querySelector('.poem');
  if (seasonCircle) {
    circleObserver.observe(seasonCircle);
  }
  if (circle3) {
    circleObserver.observe(circle3);
  }
  if (poem) {
    circleObserver.observe(poem);
  }

  // ========== 节气诗歌数据 ==========
  const solarTermData = {
    立春: {
      title: '立春',
      content: ['春回大地，耕耘始动。', '备农具、翻冻土。'],
      imgs: [
        '../assets/imgs/coexistence/solar-term/spring1-1.png',
        '../assets/imgs/coexistence/solar-term/spring1-2.png',
      ],
      constellation:
        '<svg width="168" height="162" viewBox="0 0 168 162" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '<g filter="url(#filter0_dd_1177_236)">\n' +
        '<circle cx="52.8613" cy="48.8613" r="17.3613" fill="white" stroke="white"/>\n' +
        '<circle cx="115.385" cy="105.422" r="17.3613" fill="white" stroke="white"/>\n' +
        '<line x1="65.4218" y1="59.4" x2="105.362" y2="94.1305" stroke="white"/>\n' +
        '</g>\n' +
        '<defs>\n' +
        '<filter id="filter0_dd_1177_236" x="0.599998" y="0.599998" width="167.042" height="161.083" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n' +
        '<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n' +
        '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n' +
        '<feOffset/>\n' +
        '<feGaussianBlur stdDeviation="12.1"/>\n' +
        '<feComposite in2="hardAlpha" operator="out"/>\n' +
        '<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>\n' +
        '<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1177_236"/>\n' +
        '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n' +
        '<feOffset dy="4"/>\n' +
        '<feGaussianBlur stdDeviation="17.2"/>\n' +
        '<feComposite in2="hardAlpha" operator="out"/>\n' +
        '<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>\n' +
        '<feBlend mode="normal" in2="effect1_dropShadow_1177_236" result="effect2_dropShadow_1177_236"/>\n' +
        '<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_1177_236" result="shape"/>\n' +
        '</filter>\n' +
        '</defs>\n' +
        '</svg>\n',
    },
    雨水: {
      title: '雨水',
      content: ['春雨润物，解冻开耕。', '播种春小麦、早蔬。'],
      imgs: [
        '../assets/imgs/coexistence/solar-term/spring2-1.png',
        '../assets/imgs/coexistence/solar-term/spring2-2.png',
      ],
      constellation:
        '<svg width="222" height="219" viewBox="0 0 222 219" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '<g filter="url(#filter0_dd_1177_240)">\n' +
        '<circle cx="52.8613" cy="78.6309" r="17.3613" fill="white" stroke="white"/>\n' +
        '<circle cx="115.385" cy="48.8613" r="17.3613" fill="white" stroke="white"/>\n' +
        '<circle cx="168.963" cy="93.5146" r="17.3613" fill="white" stroke="white"/>\n' +
        '<circle cx="157.064" cy="161.983" r="17.3613" fill="white" stroke="white"/>\n' +
        '<line x1="63.9491" y1="68.8552" x2="100.311" y2="51.5401" stroke="white"/>\n' +
        '<line x1="130.304" y1="49.8963" x2="161.472" y2="79.332" stroke="white"/>\n' +
        '<line x1="170.272" y1="109.225" x2="163.346" y2="145.587" stroke="white"/>\n' +
        '</g>\n' +
        '<defs>\n' +
        '<filter id="filter0_dd_1177_240" x="0.599998" y="0.599998" width="220.62" height="217.645" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n' +
        '<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n' +
        '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n' +
        '<feOffset/>\n' +
        '<feGaussianBlur stdDeviation="12.1"/>\n' +
        '<feComposite in2="hardAlpha" operator="out"/>\n' +
        '<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>\n' +
        '<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1177_240"/>\n' +
        '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n' +
        '<feOffset dy="4"/>\n' +
        '<feGaussianBlur stdDeviation="17.2"/>\n' +
        '<feComposite in2="hardAlpha" operator="out"/>\n' +
        '<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>\n' +
        '<feBlend mode="normal" in2="effect1_dropShadow_1177_240" result="effect2_dropShadow_1177_240"/>\n' +
        '<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_1177_240" result="shape"/>\n' +
        '</filter>\n' +
        '</defs>\n' +
        '</svg>\n',
    },
    惊蛰: {
      title: '惊蛰',
      content: ['万物苏醒，农事繁忙。', '整地育秧、治虫施肥。'],
      imgs: [
        '../assets/imgs/coexistence/solar-term/spring3-1.png',
        '../assets/imgs/coexistence/solar-term/spring3-2.png',
      ],
      constellation:
        '<svg width="222" height="222" viewBox="0 0 222 222" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '<g filter="url(#filter0_dd_1177_248)">\n' +
        '<circle cx="168.955" cy="81.6064" r="17.3613" fill="white" stroke="white"/>\n' +
        '<circle cx="142.166" cy="164.959" r="17.3613" fill="white" stroke="white"/>\n' +
        '<circle cx="52.8613" cy="141.145" r="17.3613" fill="white" stroke="white"/>\n' +
        '<circle cx="76.6738" cy="48.8613" r="17.3613" fill="white" stroke="white"/>\n' +
        '<line x1="91.7467" y1="57.3272" x2="153.552" y2="81.8255" stroke="white"/>\n' +
        '<line x1="166.468" y1="96.6175" x2="151.583" y2="153.178" stroke="white"/>\n' +
        '<line x1="125.587" y1="167.589" x2="67.5841" y2="147.57" stroke="white"/>\n' +
        '<path d="M57.2452 125.236L73.6868 65.2328" stroke="white"/>\n' +
        '</g>\n' +
        '<defs>\n' +
        '<filter id="filter0_dd_1177_248" x="0.599998" y="0.599998" width="220.613" height="220.62" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n' +
        '<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n' +
        '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n' +
        '<feOffset/>\n' +
        '<feGaussianBlur stdDeviation="12.1"/>\n' +
        '<feComposite in2="hardAlpha" operator="out"/>\n' +
        '<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>\n' +
        '<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1177_248"/>\n' +
        '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n' +
        '<feOffset dy="4"/>\n' +
        '<feGaussianBlur stdDeviation="17.2"/>\n' +
        '<feComposite in2="hardAlpha" operator="out"/>\n' +
        '<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>\n' +
        '<feBlend mode="normal" in2="effect1_dropShadow_1177_248" result="effect2_dropShadow_1177_248"/>\n' +
        '<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_1177_248" result="shape"/>\n' +
        '</filter>\n' +
        '</defs>\n' +
        '</svg>\n',
    },
    春分: {
      title: '春分',
      content: ['春光平分，气温回暖。', '育早稻苗，播春玉米。'],
      imgs: [
        '../assets/imgs/coexistence/solar-term/spring4-1.png',
        '../assets/imgs/coexistence/solar-term/spring4-2.png',
      ],
      constellation:
        '<svg width="291" height="191" viewBox="0 0 291 191" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_dd_926_1777)"><circle cx="52.974" cy="48.9765" r="17.5613" transform="rotate(24.9728 52.974 48.9765)" fill="white" stroke="white"/><circle cx="90.8334" cy="103.14" r="17.5613" transform="rotate(24.9728 90.8334 103.14)" fill="white" stroke="white"/><circle cx="156.318" cy="133.641" r="17.5613" transform="rotate(24.9728 156.318 133.641)" fill="white" stroke="white"/><circle cx="238.146" cy="121.937" r="17.5613" transform="rotate(24.9728 238.146 121.937)" fill="white" stroke="white"/><path d="M59.4331 63.608L77.3533 94.6979" stroke="white"/><line x1="103.429" y1="111.783" x2="139.174" y2="130.687" stroke="white"/><line x1="172.62" y1="140.773" x2="226.26" y2="132.549" stroke="white"/></g><defs><filter id="filter0_dd_926_1777" x="0.506248" y="0.511131" width="290.105" height="189.595" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset/><feGaussianBlur stdDeviation="12.1"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_926_1777"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="4"/><feGaussianBlur stdDeviation="17.2"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/><feBlend mode="normal" in2="effect1_dropShadow_926_1777" result="effect2_dropShadow_926_1777"/><feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_926_1777" result="shape"/></filter></defs></svg>',
    },
    清明: {
      title: '清明',
      content: ['清风暖土，墒情适宜。', '插秧种豆，追肥果树。'],
      imgs: [
        '../assets/imgs/coexistence/solar-term/spring5-1.png',
        '../assets/imgs/coexistence/solar-term/spring5-2.png',
      ],
      constellation:
        '<svg width="230" height="179" viewBox="0 0 230 179" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '<g filter="url(#filter0_dd_1177_14)">\n' +
        '<circle cx="177.299" cy="121.834" r="17.6666" fill="white" stroke="white"/>\n' +
        '<circle cx="153.081" cy="49.1666" r="17.6666" fill="white" stroke="white"/>\n' +
        '<circle cx="53.1666" cy="49.1666" r="17.6666" fill="white" stroke="white"/>\n' +
        '<line x1="68.2847" y1="51.6935" x2="138.272" y2="49.9896" stroke="white"/>\n' +
        '<line x1="159.614" y1="64.1683" x2="171.725" y2="106.557" stroke="white"/>\n' +
        '</g>\n' +
        '<defs>\n' +
        '<filter id="filter0_dd_1177_14" x="0.599998" y="0.599998" width="229.269" height="177.8" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n' +
        '<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n' +
        '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n' +
        '<feOffset/>\n' +
        '<feGaussianBlur stdDeviation="12.1"/>\n' +
        '<feComposite in2="hardAlpha" operator="out"/>\n' +
        '<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>\n' +
        '<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1177_14"/>\n' +
        '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n' +
        '<feOffset dy="4"/>\n' +
        '<feGaussianBlur stdDeviation="17.2"/>\n' +
        '<feComposite in2="hardAlpha" operator="out"/>\n' +
        '<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>\n' +
        '<feBlend mode="normal" in2="effect1_dropShadow_1177_14" result="effect2_dropShadow_1177_14"/>\n' +
        '<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_1177_14" result="shape"/>\n' +
        '</filter>\n' +
        '</defs>\n' +
        '</svg>\n',
    },
    谷雨: {
      title: '谷雨',
      content: ['雨生百谷，春作大忙。', '移栽秧苗，防病除草。'],
      imgs: [
        '../assets/imgs/coexistence/solar-term/spring6-1.png',
        '../assets/imgs/coexistence/solar-term/spring6-2.png',
      ],
      constellation:
        '<svg width="290" height="187" viewBox="0 0 290 187" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '<g filter="url(#filter0_dd_1177_21)">\n' +
        '<circle cx="236.918" cy="130.451" r="17.5822" fill="white" stroke="white"/>\n' +
        '<circle cx="149.52" cy="130.451" r="17.5822" fill="white" stroke="white"/>\n' +
        '<circle cx="68.1525" cy="130.451" r="17.5822" fill="white" stroke="white"/>\n' +
        '<circle cx="53.0822" cy="49.0822" r="17.5822" fill="white" stroke="white"/>\n' +
        '<line x1="50.5476" y1="67.0149" x2="65.6161" y2="115.234" stroke="white"/>\n' +
        '<line x1="83.2188" y1="132.965" x2="131.438" y2="132.965" stroke="white"/>\n' +
        '<line x1="167.637" y1="132.966" x2="221.884" y2="135.979" stroke="white"/>\n' +
        '</g>\n' +
        '<defs>\n' +
        '<filter id="filter0_dd_1177_21" x="0.599998" y="0.599998" width="288.8" height="186.333" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n' +
        '<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n' +
        '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n' +
        '<feOffset/>\n' +
        '<feGaussianBlur stdDeviation="12.1"/>\n' +
        '<feComposite in2="hardAlpha" operator="out"/>\n' +
        '<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>\n' +
        '<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1177_21"/>\n' +
        '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n' +
        '<feOffset dy="4"/>\n' +
        '<feGaussianBlur stdDeviation="17.2"/>\n' +
        '<feComposite in2="hardAlpha" operator="out"/>\n' +
        '<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>\n' +
        '<feBlend mode="normal" in2="effect1_dropShadow_1177_21" result="effect2_dropShadow_1177_21"/>\n' +
        '<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_1177_21" result="shape"/>\n' +
        '</filter>\n' +
        '</defs>\n' +
        '</svg>\n',
    },
    立夏: {
      title: '立夏',
      content: ['万物繁茂，秧苗转壮。', '夏收夏种两不误。'],
      imgs: [
        '../assets/imgs/coexistence/solar-term/summer1-1.png',
        '../assets/imgs/coexistence/solar-term/summer1-2.png',
      ],
      constellation:
        '<svg width="247" height="223" viewBox="0 0 247 223" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '<g filter="url(#filter0_dd_1177_29)">\n' +
        '<circle cx="146.164" cy="48.9298" r="17.4298" fill="white" stroke="white"/>\n' +
        '<circle cx="193.969" cy="120.649" r="17.4298" fill="white" stroke="white"/>\n' +
        '<circle cx="129.422" cy="166.07" r="17.4298" fill="white" stroke="white"/>\n' +
        '<circle cx="52.9298" cy="156.51" r="17.4298" fill="white" stroke="white"/>\n' +
        '<line x1="152.527" y1="61.7593" x2="185.995" y2="102.4" stroke="white"/>\n' +
        '<line x1="181.085" y1="129.44" x2="142.835" y2="153.346" stroke="white"/>\n' +
        '<line x1="111.378" y1="167.753" x2="70.7368" y2="158.191" stroke="white"/>\n' +
        '</g>\n' +
        '<defs>\n' +
        '<filter id="filter0_dd_1177_29" x="0.599998" y="0.599998" width="245.698" height="221.8" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n' +
        '<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n' +
        '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n' +
        '<feOffset/>\n' +
        '<feGaussianBlur stdDeviation="12.1"/>\n' +
        '<feComposite in2="hardAlpha" operator="out"/>\n' +
        '<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>\n' +
        '<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1177_29"/>\n' +
        '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n' +
        '<feOffset dy="4"/>\n' +
        '<feGaussianBlur stdDeviation="17.2"/>\n' +
        '<feComposite in2="hardAlpha" operator="out"/>\n' +
        '<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>\n' +
        '<feBlend mode="normal" in2="effect1_dropShadow_1177_29" result="effect2_dropShadow_1177_29"/>\n' +
        '<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_1177_29" result="shape"/>\n' +
        '</filter>\n' +
        '</defs>\n' +
        '</svg>\n',
    },
    小满: {
      title: '小满',
      content: ['麦粒渐满，防风抗旱。', '收油菜、管小麦。'],
      imgs: [
        '../assets/imgs/coexistence/solar-term/summer2-1.png',
        '../assets/imgs/coexistence/solar-term/summer2-2.png',
      ],
      constellation:
        '<svg width="337" height="412" viewBox="0 0 337 412" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '<g filter="url(#filter0_dd_1177_37)">\n' +
        '<circle cx="285.933" cy="30.0321" r="15.5041" transform="rotate(8.78902 285.933 30.0321)" fill="white" stroke="white"/>\n' +
        '<line x1="282.585" y1="44.7346" x2="278.368" y2="133.627" stroke="white"/>\n' +
        '<circle cx="279.649" cy="146.857" r="17.1179" transform="rotate(8.78902 279.649 146.857)" fill="white" stroke="white"/>\n' +
        '<line x1="273.697" y1="159.516" x2="233.133" y2="220.097" stroke="white"/>\n' +
        '<line x1="124.01" y1="162.463" x2="63.1261" y2="223.543" stroke="white"/>\n' +
        '<circle cx="226.543" cy="229.542" r="19.2542" transform="rotate(8.78902 226.543 229.542)" fill="white" stroke="white"/>\n' +
        '<line x1="144.022" y1="161.098" x2="213.819" y2="221.354" stroke="white"/>\n' +
        '<circle cx="134.665" cy="152.394" r="16.4456" transform="rotate(8.78902 134.665 152.394)" fill="white" stroke="white"/>\n' +
        '<circle cx="51.7433" cy="232.923" r="16.4456" transform="rotate(8.78902 51.7433 232.923)" fill="white" stroke="white"/>\n' +
        '<circle cx="148.884" cy="356.555" r="16.4456" transform="rotate(8.78902 148.884 356.555)" fill="white" stroke="white"/>\n' +
        '<line x1="59.4022" y1="247.08" x2="137.562" y2="347.352" stroke="white"/>\n' +
        '</g>\n' +
        '<defs>\n' +
        '<filter id="filter0_dd_1177_37" x="0.396873" y="-16.3746" width="335.941" height="428.278" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n' +
        '<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n' +
        '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n' +
        '<feOffset/>\n' +
        '<feGaussianBlur stdDeviation="12.1"/>\n' +
        '<feComposite in2="hardAlpha" operator="out"/>\n' +
        '<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>\n' +
        '<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1177_37"/>\n' +
        '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n' +
        '<feOffset dy="4"/>\n' +
        '<feGaussianBlur stdDeviation="17.2"/>\n' +
        '<feComposite in2="hardAlpha" operator="out"/>\n' +
        '<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>\n' +
        '<feBlend mode="normal" in2="effect1_dropShadow_1177_37" result="effect2_dropShadow_1177_37"/>\n' +
        '<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_1177_37" result="shape"/>\n' +
        '</filter>\n' +
        '</defs>\n' +
        '</svg>\n',
    },
    芒种: {
      title: '芒种',
      content: ['芒种忙种，抢收抢种。', '播种中稻、豆类。'],
      imgs: [
        '../assets/imgs/coexistence/solar-term/summer3-1.png',
        '../assets/imgs/coexistence/solar-term/summer3-2.png',
      ],
      constellation:
        '<svg width="199" height="371" viewBox="0 0 199 371" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '<g filter="url(#filter0_dd_1177_49)">\n' +
        '<circle cx="98.3242" cy="49.2705" r="17.418" fill="white" stroke="white"/>\n' +
        '<circle cx="81.6055" cy="135.272" r="17.418" fill="white" stroke="white"/>\n' +
        '<circle cx="146.082" cy="94.6729" r="17.418" fill="white" stroke="white"/>\n' +
        '<circle cx="52.918" cy="228.452" r="17.418" fill="white" stroke="white"/>\n' +
        '<circle cx="131.754" cy="240.401" r="17.418" fill="white" stroke="white"/>\n' +
        '<circle cx="81.6055" cy="314.462" r="17.418" fill="white" stroke="white"/>\n' +
        '<line x1="92.8083" y1="64.8655" x2="85.6411" y2="119.814" stroke="white"/>\n' +
        '<line x1="76.0741" y1="150.979" x2="54.5725" y2="213.095" stroke="white"/>\n' +
        '<line x1="121.46" y1="253.826" x2="90.4017" y2="299.219" stroke="white"/>\n' +
        '<line x1="56.9891" y1="243.808" x2="78.4906" y2="298.757" stroke="white"/>\n' +
        '<line x1="94.5127" y1="126.484" x2="132.738" y2="104.983" stroke="white"/>\n' +
        '</g>\n' +
        '<defs>\n' +
        '<filter id="filter0_dd_1177_49" x="0.599998" y="0.952538" width="197.8" height="369.827" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n' +
        '<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n' +
        '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n' +
        '<feOffset/>\n' +
        '<feGaussianBlur stdDeviation="12.1"/>\n' +
        '<feComposite in2="hardAlpha" operator="out"/>\n' +
        '<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>\n' +
        '<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1177_49"/>\n' +
        '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n' +
        '<feOffset dy="4"/>\n' +
        '<feGaussianBlur stdDeviation="17.2"/>\n' +
        '<feComposite in2="hardAlpha" operator="out"/>\n' +
        '<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>\n' +
        '<feBlend mode="normal" in2="effect1_dropShadow_1177_49" result="effect2_dropShadow_1177_49"/>\n' +
        '<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_1177_49" result="shape"/>\n' +
        '</filter>\n' +
        '</defs>\n' +
        '</svg>\n',
    },
    夏至: {
      title: '夏至',
      content: ['日长夜短，禾苗拔节。', '加强水肥管理。'],
      imgs: [
        '../assets/imgs/coexistence/solar-term/summer4-1.png',
        '../assets/imgs/coexistence/solar-term/summer4-2.png',
      ],
      constellation:
        '<svg width="233" height="266" viewBox="0 0 233 266" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '<g filter="url(#filter0_dd_1177_61)">\n' +
        '<circle cx="161.336" cy="48.7112" r="17.2112" fill="white" stroke="white"/>\n' +
        '<circle cx="52.7112" cy="65.2385" r="17.2112" fill="white" stroke="white"/>\n' +
        '<circle cx="52.7112" cy="209.289" r="17.2112" fill="white" stroke="white"/>\n' +
        '<circle cx="180.258" cy="204.569" r="17.2112" fill="white" stroke="white"/>\n' +
        '<line x1="143.687" y1="50.3887" x2="68.1194" y2="59.8347" stroke="white"/>\n' +
        '<line x1="162.559" y1="206.252" x2="68.0999" y2="208.613" stroke="white"/>\n' +
        '<line x1="54.4141" y1="80.5889" x2="54.4141" y2="193.94" stroke="white"/>\n' +
        '</g>\n' +
        '<defs>\n' +
        '<filter id="filter0_dd_1177_61" x="0.599998" y="0.599998" width="231.769" height="264.8" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n' +
        '<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n' +
        '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n' +
        '<feOffset/>\n' +
        '<feGaussianBlur stdDeviation="12.1"/>\n' +
        '<feComposite in2="hardAlpha" operator="out"/>\n' +
        '<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>\n' +
        '<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1177_61"/>\n' +
        '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n' +
        '<feOffset dy="4"/>\n' +
        '<feGaussianBlur stdDeviation="17.2"/>\n' +
        '<feComposite in2="hardAlpha" operator="out"/>\n' +
        '<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>\n' +
        '<feBlend mode="normal" in2="effect1_dropShadow_1177_61" result="effect2_dropShadow_1177_61"/>\n' +
        '<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_1177_61" result="shape"/>\n' +
        '</filter>\n' +
        '</defs>\n' +
        '</svg>\n',
    },
    小暑: {
      title: '小暑',
      content: ['暑气初盛，防旱抗热。', '治虫护苗，田间管理。'],
      imgs: [
        '../assets/imgs/coexistence/solar-term/summer5-1.png',
        '../assets/imgs/coexistence/solar-term/summer5-2.png',
      ],
      constellation:
        '<svg width="175" height="228" viewBox="0 0 175 228" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '<g filter="url(#filter0_dd_1177_69)">\n' +
        '<circle cx="52.9542" cy="48.9542" r="17.4542" fill="white" stroke="white"/>\n' +
        '<circle cx="122.384" cy="171.046" r="17.4542" fill="white" stroke="white"/>\n' +
        '<line x1="61.7792" y1="64.2651" x2="114.445" y2="157.627" stroke="white"/>\n' +
        '</g>\n' +
        '<defs>\n' +
        '<filter id="filter0_dd_1177_69" x="0.599998" y="0.599998" width="174.136" height="226.8" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n' +
        '<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n' +
        '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n' +
        '<feOffset/>\n' +
        '<feGaussianBlur stdDeviation="12.1"/>\n' +
        '<feComposite in2="hardAlpha" operator="out"/>\n' +
        '<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>\n' +
        '<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1177_69"/>\n' +
        '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n' +
        '<feOffset dy="4"/>\n' +
        '<feGaussianBlur stdDeviation="17.2"/>\n' +
        '<feComposite in2="hardAlpha" operator="out"/>\n' +
        '<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>\n' +
        '<feBlend mode="normal" in2="effect1_dropShadow_1177_69" result="effect2_dropShadow_1177_69"/>\n' +
        '<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_1177_69" result="shape"/>\n' +
        '</filter>\n' +
        '</defs>\n' +
        '</svg>\n',
    },
    大暑: {
      title: '大暑',
      content: ['高温酷热，稻花孕穗。', '灌溉防晒、防病虫害。'],
      imgs: [
        '../assets/imgs/coexistence/solar-term/summer6-1.png',
        '../assets/imgs/coexistence/solar-term/summer6-2.png',
      ],
      constellation:
        '<svg width="189" height="257" viewBox="0 0 189 257" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '<g filter="url(#filter0_dd_1177_73)">\n' +
        '<circle cx="53.2166" cy="49.1922" r="17.7166" fill="white" stroke="white"/>\n' +
        '<circle cx="79.9432" cy="199.783" r="17.7166" fill="white" stroke="white"/>\n' +
        '<circle cx="135.803" cy="78.3407" r="17.7166" fill="white" stroke="white"/>\n' +
        '<line x1="54.9325" y1="67.3404" x2="71.9347" y2="186.356" stroke="white"/>\n' +
        '<line x1="69.2282" y1="49.9486" x2="120.235" y2="71.8086" stroke="white"/>\n' +
        '</g>\n' +
        '<defs>\n' +
        '<filter id="filter0_dd_1177_73" x="0.599998" y="0.575584" width="187.816" height="255.824" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n' +
        '<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n' +
        '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n' +
        '<feOffset/>\n' +
        '<feGaussianBlur stdDeviation="12.1"/>\n' +
        '<feComposite in2="hardAlpha" operator="out"/>\n' +
        '<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>\n' +
        '<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1177_73"/>\n' +
        '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n' +
        '<feOffset dy="4"/>\n' +
        '<feGaussianBlur stdDeviation="17.2"/>\n' +
        '<feComposite in2="hardAlpha" operator="out"/>\n' +
        '<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>\n' +
        '<feBlend mode="normal" in2="effect1_dropShadow_1177_73" result="effect2_dropShadow_1177_73"/>\n' +
        '<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_1177_73" result="shape"/>\n' +
        '</filter>\n' +
        '</defs>\n' +
        '</svg>\n',
    },
    立秋: {
      title: '立秋',
      content: ['一叶知秋。', '收夏作物，种秋白菜。'],
      imgs: [
        '../assets/imgs/coexistence/solar-term/autumn1-1.png',
        '../assets/imgs/coexistence/solar-term/autumn1-2.png',
      ],
      constellation:
        '<svg width="391" height="351" viewBox="0 0 391 351" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '<g filter="url(#filter0_dd_1177_79)">\n' +
        '<circle cx="51.1955" cy="105.747" r="15.58" transform="rotate(-33.9707 51.1955 105.747)" fill="white" stroke="white"/>\n' +
        '<circle cx="88.3596" cy="160.863" r="15.58" transform="rotate(-33.9707 88.3596 160.863)" fill="white" stroke="white"/>\n' +
        '<circle cx="197.813" cy="169.852" r="15.58" transform="rotate(-33.9707 197.813 169.852)" fill="white" stroke="white"/>\n' +
        '<circle cx="263.688" cy="267.642" r="15.58" transform="rotate(-33.9707 263.688 267.642)" fill="white" stroke="white"/>\n' +
        '<circle cx="205.914" cy="247.112" r="15.58" transform="rotate(-33.9707 205.914 247.112)" fill="white" stroke="white"/>\n' +
        '<circle cx="339.656" cy="234.552" r="15.58" transform="rotate(-33.9707 339.656 234.552)" fill="white" stroke="white"/>\n' +
        '<circle cx="322.68" cy="171.018" r="15.58" transform="rotate(-33.9707 322.68 171.018)" fill="white" stroke="white"/>\n' +
        '<circle cx="283.883" cy="140.279" r="15.58" transform="rotate(-33.9707 283.883 140.279)" fill="white" stroke="white"/>\n' +
        '<line x1="297.576" y1="150.214" x2="311.296" y2="159.066" stroke="white"/>\n' +
        '<line x1="212.611" y1="173.779" x2="327.631" y2="225.545" stroke="white"/>\n' +
        '<line x1="218.941" y1="252.238" x2="248.74" y2="265.769" stroke="white"/>\n' +
        '<line x1="208.102" y1="182.296" x2="256.022" y2="253.419" stroke="white"/>\n' +
        '<line x1="211.606" y1="161.271" x2="268.618" y2="146.125" stroke="white"/>\n' +
        '<line x1="102.361" y1="159.997" x2="186.233" y2="165.533" stroke="white"/>\n' +
        '<line x1="61.5016" y1="118.234" x2="78.8915" y2="147.881" stroke="white"/>\n' +
        '</g>\n' +
        '<defs>\n' +
        '<filter id="filter0_dd_1177_79" x="0.717186" y="59.265" width="389.417" height="262.859" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n' +
        '<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n' +
        '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n' +
        '<feOffset/>\n' +
        '<feGaussianBlur stdDeviation="12.1"/>\n' +
        '<feComposite in2="hardAlpha" operator="out"/>\n' +
        '<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>\n' +
        '<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1177_79"/>\n' +
        '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n' +
        '<feOffset dy="4"/>\n' +
        '<feGaussianBlur stdDeviation="17.2"/>\n' +
        '<feComposite in2="hardAlpha" operator="out"/>\n' +
        '<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>\n' +
        '<feBlend mode="normal" in2="effect1_dropShadow_1177_79" result="effect2_dropShadow_1177_79"/>\n' +
        '<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_1177_79" result="shape"/>\n' +
        '</filter>\n' +
        '</defs>\n' +
        '</svg>\n',
    },
    处暑: {
      title: '处暑',
      content: ['暑尽秋至。', '稻谷灌浆，采棉防虫。'],
      imgs: [
        '../assets/imgs/coexistence/solar-term/autumn2-1.png',
        '../assets/imgs/coexistence/solar-term/autumn2-2.png',
      ],
      constellation:
        '<svg width="294" height="278" viewBox="0 0 294 278" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '<g filter="url(#filter0_dd_1177_95)">\n' +
        '<circle cx="241.33" cy="209.152" r="17.7161" transform="rotate(-21.2946 241.33 209.152)" fill="white" stroke="white"/>\n' +
        '<circle cx="53.5878" cy="68.5738" r="17.7161" transform="rotate(-21.2946 53.5878 68.5738)" fill="white" stroke="white"/>\n' +
        '<line x1="67.1646" y1="72.1294" x2="231.126" y2="198.517" stroke="white"/>\n' +
        '</g>\n' +
        '<defs>\n' +
        '<filter id="filter0_dd_1177_95" x="0.967186" y="19.9525" width="292.988" height="245.821" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n' +
        '<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n' +
        '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n' +
        '<feOffset/>\n' +
        '<feGaussianBlur stdDeviation="12.1"/>\n' +
        '<feComposite in2="hardAlpha" operator="out"/>\n' +
        '<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>\n' +
        '<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1177_95"/>\n' +
        '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n' +
        '<feOffset dy="4"/>\n' +
        '<feGaussianBlur stdDeviation="17.2"/>\n' +
        '<feComposite in2="hardAlpha" operator="out"/>\n' +
        '<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>\n' +
        '<feBlend mode="normal" in2="effect1_dropShadow_1177_95" result="effect2_dropShadow_1177_95"/>\n' +
        '<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_1177_95" result="shape"/>\n' +
        '</filter>\n' +
        '</defs>\n' +
        '</svg>\n',
    },
    白露: {
      title: '白露',
      content: ['露凝稻熟。', '秋早稻收割，种冬蔬。'],
      imgs: [
        '../assets/imgs/coexistence/solar-term/autumn3-1.png',
        '../assets/imgs/coexistence/solar-term/autumn3-2.png',
      ],
      constellation:
        '<svg width="436" height="375" viewBox="0 0 436 375" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '<g filter="url(#filter0_dd_1177_99)">\n' +
        '<circle cx="90.5766" cy="171.682" r="17.2329" fill="white" stroke="white"/>\n' +
        '<circle cx="64.5532" cy="126.761" r="17.2329" fill="white" stroke="white"/>\n' +
        '<circle cx="52.7329" cy="67.6518" r="17.2329" fill="white" stroke="white"/>\n' +
        '<circle cx="95.3188" cy="48.7329" r="17.2329" fill="white" stroke="white"/>\n' +
        '<circle cx="137.866" cy="216.602" r="17.2329" fill="white" stroke="white"/>\n' +
        '<circle cx="204.084" cy="233.154" r="17.2329" fill="white" stroke="white"/>\n' +
        '<circle cx="253.749" cy="259.163" r="17.2329" fill="white" stroke="white"/>\n' +
        '<circle cx="284.452" cy="318.267" r="17.2329" fill="white" stroke="white"/>\n' +
        '<circle cx="319.952" cy="263.898" r="17.2329" fill="white" stroke="white"/>\n' +
        '<circle cx="355.413" cy="209.506" r="17.2329" fill="white" stroke="white"/>\n' +
        '<circle cx="383.788" cy="162.232" r="17.2329" fill="white" stroke="white"/>\n' +
        '<circle cx="327.03" cy="145.671" r="17.2329" fill="white" stroke="white"/>\n' +
        '<circle cx="279.709" cy="129.125" r="17.2329" fill="white" stroke="white"/>\n' +
        '<circle cx="220.616" cy="148.044" r="17.2329" fill="white" stroke="white"/>\n' +
        '<circle cx="234.819" cy="74.7417" r="17.2329" fill="white" stroke="white"/>\n' +
        '<line x1="231.774" y1="92.589" x2="222.317" y2="130.419" stroke="white"/>\n' +
        '<line x1="235.903" y1="144.012" x2="266.64" y2="136.919" stroke="white"/>\n' +
        '<line x1="297.789" y1="129.921" x2="309.611" y2="139.379" stroke="white"/>\n' +
        '<line x1="344.864" y1="148.723" x2="368.508" y2="153.451" stroke="white"/>\n' +
        '<line x1="373.557" y1="173.136" x2="361.735" y2="192.051" stroke="white"/>\n' +
        '<line x1="345.198" y1="222.758" x2="328.647" y2="251.13" stroke="white"/>\n' +
        '<line x1="309.729" y1="277.148" x2="293.178" y2="305.521" stroke="white"/>\n' +
        '<line x1="280.506" y1="300.812" x2="261.591" y2="272.439" stroke="white"/>\n' +
        '<line x1="238.011" y1="251.267" x2="221.46" y2="237.081" stroke="white"/>\n' +
        '<line x1="191.004" y1="227.738" x2="150.81" y2="223.009" stroke="white"/>\n' +
        '<line x1="126.849" y1="208.658" x2="103.205" y2="182.649" stroke="white"/>\n' +
        '<line x1="81.8053" y1="158.859" x2="74.7121" y2="139.944" stroke="white"/>\n' +
        '<line x1="65.2714" y1="111.599" x2="53.4494" y2="85.5912" stroke="white"/>\n' +
        '<line x1="65.7266" y1="56.5088" x2="82.2773" y2="56.5088" stroke="white"/>\n' +
        '</g>\n' +
        '<defs>\n' +
        '<filter id="filter0_dd_1177_99" x="0.599998" y="0.599998" width="435.323" height="373.8" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n' +
        '<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n' +
        '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n' +
        '<feOffset/>\n' +
        '<feGaussianBlur stdDeviation="12.1"/>\n' +
        '<feComposite in2="hardAlpha" operator="out"/>\n' +
        '<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>\n' +
        '<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1177_99"/>\n' +
        '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n' +
        '<feOffset dy="4"/>\n' +
        '<feGaussianBlur stdDeviation="17.2"/>\n' +
        '<feComposite in2="hardAlpha" operator="out"/>\n' +
        '<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>\n' +
        '<feBlend mode="normal" in2="effect1_dropShadow_1177_99" result="effect2_dropShadow_1177_99"/>\n' +
        '<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_1177_99" result="shape"/>\n' +
        '</filter>\n' +
        '</defs>\n' +
        '</svg>\n',
    },
    秋分: {
      title: '秋分',
      content: ['昼夜平分，秋高气爽。', '晚稻黄熟，适收适种。'],
      imgs: [
        '../assets/imgs/coexistence/solar-term/autumn4-1.png',
        '../assets/imgs/coexistence/solar-term/autumn4-2.png',
      ],
      constellation:
        '<svg width="297" height="192" viewBox="0 0 297 192" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '<g filter="url(#filter0_dd_1177_129)">\n' +
        '<circle cx="244.45" cy="135.137" r="17.0513" fill="white" stroke="white"/>\n' +
        '<circle cx="139.129" cy="48.5513" r="17.0513" fill="white" stroke="white"/>\n' +
        '<circle cx="52.5513" cy="83.6528" r="17.0513" fill="white" stroke="white"/>\n' +
        '<line x1="152.336" y1="56.3518" x2="234.242" y2="121.876" stroke="white"/>\n' +
        '<line x1="124.1" y1="50.1869" x2="65.5956" y2="73.5886" stroke="white"/>\n' +
        '</g>\n' +
        '<defs>\n' +
        '<filter id="filter0_dd_1177_129" x="0.599998" y="0.599998" width="295.8" height="190.488" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n' +
        '<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n' +
        '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n' +
        '<feOffset/>\n' +
        '<feGaussianBlur stdDeviation="12.1"/>\n' +
        '<feComposite in2="hardAlpha" operator="out"/>\n' +
        '<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>\n' +
        '<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1177_129"/>\n' +
        '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n' +
        '<feOffset dy="4"/>\n' +
        '<feGaussianBlur stdDeviation="17.2"/>\n' +
        '<feComposite in2="hardAlpha" operator="out"/>\n' +
        '<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>\n' +
        '<feBlend mode="normal" in2="effect1_dropShadow_1177_129" result="effect2_dropShadow_1177_129"/>\n' +
        '<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_1177_129" result="shape"/>\n' +
        '</filter>\n' +
        '</defs>\n' +
        '</svg>\n',
    },
    寒露: {
      title: '寒露',
      content: ['天渐寒凉。', '棉花收摘，冬小麦播种。'],
      imgs: [
        '../assets/imgs/coexistence/solar-term/autumn5-1.png',
        '../assets/imgs/coexistence/solar-term/autumn5-2.png',
      ],
      constellation:
        '<svg width="274" height="231" viewBox="0 0 274 231" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '<g filter="url(#filter0_dd_1177_135)">\n' +
        '<circle cx="196.991" cy="173.788" r="17.4985" fill="white" stroke="white"/>\n' +
        '<circle cx="52.9985" cy="84.9956" r="17.4985" fill="white" stroke="white"/>\n' +
        '<circle cx="220.975" cy="48.9985" r="17.4985" fill="white" stroke="white"/>\n' +
        '<line x1="203.092" y1="50.6858" x2="71.1026" y2="81.8832" stroke="white"/>\n' +
        '<line x1="71.3009" y1="85.7912" x2="184.091" y2="167.384" stroke="white"/>\n' +
        '</g>\n' +
        '<defs>\n' +
        '<filter id="filter0_dd_1177_135" x="0.599998" y="0.599998" width="272.777" height="229.586" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n' +
        '<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n' +
        '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n' +
        '<feOffset/>\n' +
        '<feGaussianBlur stdDeviation="12.1"/>\n' +
        '<feComposite in2="hardAlpha" operator="out"/>\n' +
        '<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>\n' +
        '<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1177_135"/>\n' +
        '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n' +
        '<feOffset dy="4"/>\n' +
        '<feGaussianBlur stdDeviation="17.2"/>\n' +
        '<feComposite in2="hardAlpha" operator="out"/>\n' +
        '<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>\n' +
        '<feBlend mode="normal" in2="effect1_dropShadow_1177_135" result="effect2_dropShadow_1177_135"/>\n' +
        '<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_1177_135" result="shape"/>\n' +
        '</filter>\n' +
        '</defs>\n' +
        '</svg>\n',
    },
    霜降: {
      title: '霜降',
      content: ['霜打百草。', '秋收扫尾，深耕备冬。'],
      imgs: [
        '../assets/imgs/coexistence/solar-term/autumn6-1.png',
        '../assets/imgs/coexistence/solar-term/autumn6-2.png',
      ],
      constellation:
        '<svg width="232" height="239" viewBox="0 0 232 239" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '<g filter="url(#filter0_dd_1177_141)">\n' +
        '<circle cx="172.307" cy="182.396" r="17.104" fill="white" stroke="white"/>\n' +
        '<circle cx="52.604" cy="163.619" r="17.104" fill="white" stroke="white"/>\n' +
        '<circle cx="172.307" cy="137.797" r="17.104" fill="white" stroke="white"/>\n' +
        '<circle cx="52.604" cy="121.368" r="17.104" fill="white" stroke="white"/>\n' +
        '<circle cx="177.002" cy="93.2017" r="17.104" fill="white" stroke="white"/>\n' +
        '<circle cx="179.354" cy="48.604" r="17.104" fill="white" stroke="white"/>\n' +
        '<circle cx="52.604" cy="74.4243" r="17.104" fill="white" stroke="white"/>\n' +
        '<line x1="161.886" y1="45.5642" x2="70.3448" y2="71.3835" stroke="white"/>\n' +
        '<line x1="70.3273" y1="75.1133" x2="161.868" y2="98.5854" stroke="white"/>\n' +
        '<line x1="161.838" y1="99.5605" x2="70.2974" y2="115.991" stroke="white"/>\n' +
        '<line x1="70.3369" y1="115.017" x2="154.836" y2="138.489" stroke="white"/>\n' +
        '<line x1="154.755" y1="146.512" x2="65.5618" y2="155.901" stroke="white"/>\n' +
        '<line x1="70.3088" y1="164.303" x2="157.155" y2="183.081" stroke="white"/>\n' +
        '</g>\n' +
        '<defs>\n' +
        '<filter id="filter0_dd_1177_141" x="0.599998" y="0.599998" width="230.761" height="237.8" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n' +
        '<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n' +
        '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n' +
        '<feOffset/>\n' +
        '<feGaussianBlur stdDeviation="12.1"/>\n' +
        '<feComposite in2="hardAlpha" operator="out"/>\n' +
        '<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>\n' +
        '<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1177_141"/>\n' +
        '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n' +
        '<feOffset dy="4"/>\n' +
        '<feGaussianBlur stdDeviation="17.2"/>\n' +
        '<feComposite in2="hardAlpha" operator="out"/>\n' +
        '<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>\n' +
        '<feBlend mode="normal" in2="effect1_dropShadow_1177_141" result="effect2_dropShadow_1177_141"/>\n' +
        '<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_1177_141" result="shape"/>\n' +
        '</filter>\n' +
        '</defs>\n' +
        '</svg>\n',
    },
    立冬: {
      title: '立冬',
      content: ['冬藏万物。', '收秋粮，管越冬作物。'],
      imgs: [
        '../assets/imgs/coexistence/solar-term/winter1-1.png',
        '../assets/imgs/coexistence/solar-term/winter1-2.png',
      ],
      constellation:
        '<svg width="365" height="355" viewBox="0 0 365 355" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '<g filter="url(#filter0_dd_1177_155)">\n' +
        '<circle cx="117.085" cy="298.634" r="17.3425" fill="white" stroke="white"/>\n' +
        '<circle cx="216.983" cy="270.09" r="17.3425" fill="white" stroke="white"/>\n' +
        '<circle cx="252.663" cy="155.895" r="17.3425" fill="white" stroke="white"/>\n' +
        '<circle cx="312.155" cy="48.8425" r="17.3425" fill="white" stroke="white"/>\n' +
        '<circle cx="169.413" cy="103.557" r="17.3425" fill="white" stroke="white"/>\n' +
        '<circle cx="117.085" cy="132.106" r="17.3425" fill="white" stroke="white"/>\n' +
        '<circle cx="52.8425" cy="160.654" r="17.3425" fill="white" stroke="white"/>\n' +
        '<line x1="70.4827" y1="156.624" x2="103.789" y2="142.35" stroke="white"/>\n' +
        '<line x1="134.687" y1="125.722" x2="156.098" y2="113.827" stroke="white"/>\n' +
        '<line x1="187.536" y1="104.339" x2="242.253" y2="142.403" stroke="white"/>\n' +
        '<line x1="260.57" y1="142.556" x2="305.771" y2="66.4282" stroke="white"/>\n' +
        '<line x1="249.58" y1="173.885" x2="225.79" y2="252.392" stroke="white"/>\n' +
        '<line x1="201.669" y1="276.518" x2="135.057" y2="295.55" stroke="white"/>\n' +
        '</g>\n' +
        '<defs>\n' +
        '<filter id="filter0_dd_1177_155" x="0.599998" y="0.599998" width="363.8" height="354.277" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n' +
        '<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n' +
        '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n' +
        '<feOffset/>\n' +
        '<feGaussianBlur stdDeviation="12.1"/>\n' +
        '<feComposite in2="hardAlpha" operator="out"/>\n' +
        '<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>\n' +
        '<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1177_155"/>\n' +
        '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n' +
        '<feOffset dy="4"/>\n' +
        '<feGaussianBlur stdDeviation="17.2"/>\n' +
        '<feComposite in2="hardAlpha" operator="out"/>\n' +
        '<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>\n' +
        '<feBlend mode="normal" in2="effect1_dropShadow_1177_155" result="effect2_dropShadow_1177_155"/>\n' +
        '<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_1177_155" result="shape"/>\n' +
        '</filter>\n' +
        '</defs>\n' +
        '</svg>\n',
    },
    小雪: {
      title: '小雪',
      content: ['寒意渐浓。', '封田保墒，防寒保苗。'],
      imgs: [
        '../assets/imgs/coexistence/solar-term/winter2-1.png',
        '../assets/imgs/coexistence/solar-term/winter2-2.png',
      ],
      constellation:
        '<svg width="219" height="186" viewBox="0 0 219 186" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '<g filter="url(#filter0_dd_1177_169)">\n' +
        '<circle cx="166.191" cy="124.378" r="17.2301" fill="white" stroke="white"/>\n' +
        '<circle cx="52.73" cy="129.108" r="17.2301" fill="white" stroke="white"/>\n' +
        '<circle cx="126.003" cy="48.73" r="17.2301" fill="white" stroke="white"/>\n' +
        '<line x1="70.4903" y1="125.062" x2="150.867" y2="129.79" stroke="white"/>\n' +
        '<line x1="60.6158" y1="115.767" x2="112.624" y2="59.0305" stroke="white"/>\n' +
        '</g>\n' +
        '<defs>\n' +
        '<filter id="filter0_dd_1177_169" x="0.599998" y="0.599998" width="217.722" height="184.638" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n' +
        '<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n' +
        '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n' +
        '<feOffset/>\n' +
        '<feGaussianBlur stdDeviation="12.1"/>\n' +
        '<feComposite in2="hardAlpha" operator="out"/>\n' +
        '<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>\n' +
        '<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1177_169"/>\n' +
        '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n' +
        '<feOffset dy="4"/>\n' +
        '<feGaussianBlur stdDeviation="17.2"/>\n' +
        '<feComposite in2="hardAlpha" operator="out"/>\n' +
        '<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>\n' +
        '<feBlend mode="normal" in2="effect1_dropShadow_1177_169" result="effect2_dropShadow_1177_169"/>\n' +
        '<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_1177_169" result="shape"/>\n' +
        '</filter>\n' +
        '</defs>\n' +
        '</svg>\n',
    },
    大雪: {
      title: '大雪',
      content: ['雪兆丰年。', '积肥备耕，养畜添暖。'],
      imgs: [
        '../assets/imgs/coexistence/solar-term/winter3-1.png',
        '../assets/imgs/coexistence/solar-term/winter3-2.png',
      ],
      constellation:
        '<svg width="475" height="372" viewBox="0 0 475 372" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '<g filter="url(#filter0_dd_1177_175)">\n' +
        '<circle cx="94.6988" cy="315.442" r="17.0582" fill="white" stroke="white"/>\n' +
        '<circle cx="176.621" cy="275.645" r="17.0582" fill="white" stroke="white"/>\n' +
        '<circle cx="146.214" cy="231.165" r="17.0582" fill="white" stroke="white"/>\n' +
        '<circle cx="129.824" cy="186.683" r="17.0582" fill="white" stroke="white"/>\n' +
        '<circle cx="52.5582" cy="200.727" r="17.0582" fill="white" stroke="white"/>\n' +
        '<circle cx="202.378" cy="48.5582" r="17.0582" fill="white" stroke="white"/>\n' +
        '<circle cx="335.847" cy="132.838" r="17.0582" fill="white" stroke="white"/>\n' +
        '<circle cx="422.441" cy="114.107" r="17.0582" fill="white" stroke="white"/>\n' +
        '<circle cx="244.519" cy="224.14" r="17.0582" fill="white" stroke="white"/>\n' +
        '<circle cx="279.644" cy="172.636" r="17.0582" fill="white" stroke="white"/>\n' +
        '<line x1="139.881" y1="171.224" x2="198.408" y2="63.5339" stroke="white"/>\n' +
        '<line x1="70.0752" y1="199.061" x2="116.897" y2="194.379" stroke="white"/>\n' +
        '<line x1="136.154" y1="201.74" x2="140.836" y2="215.787" stroke="white"/>\n' +
        '<line x1="154.82" y1="241.457" x2="166.525" y2="262.527" stroke="white"/>\n' +
        '<line x1="161.573" y1="284.304" x2="107.728" y2="305.374" stroke="white"/>\n' +
        '<line x1="189.177" y1="262.394" x2="228.976" y2="227.277" stroke="white"/>\n' +
        '<line x1="250.011" y1="208.588" x2="271.081" y2="185.177" stroke="white"/>\n' +
        '<line x1="292.308" y1="161.656" x2="325.083" y2="145.269" stroke="white"/>\n' +
        '<line x1="350.996" y1="124.144" x2="409.523" y2="121.803" stroke="white"/>\n' +
        '</g>\n' +
        '<defs>\n' +
        '<filter id="filter0_dd_1177_175" x="0.599998" y="0.599998" width="473.8" height="370.8" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n' +
        '<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n' +
        '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n' +
        '<feOffset/>\n' +
        '<feGaussianBlur stdDeviation="12.1"/>\n' +
        '<feComposite in2="hardAlpha" operator="out"/>\n' +
        '<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>\n' +
        '<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1177_175"/>\n' +
        '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n' +
        '<feOffset dy="4"/>\n' +
        '<feGaussianBlur stdDeviation="17.2"/>\n' +
        '<feComposite in2="hardAlpha" operator="out"/>\n' +
        '<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>\n' +
        '<feBlend mode="normal" in2="effect1_dropShadow_1177_175" result="effect2_dropShadow_1177_175"/>\n' +
        '<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_1177_175" result="shape"/>\n' +
        '</filter>\n' +
        '</defs>\n' +
        '</svg>\n',
    },
    冬至: {
      title: '冬至',
      content: ['阳生而长。', '农闲整器，修渠护畦。'],
      imgs: [
        '../assets/imgs/coexistence/solar-term/winter4-1.png',
        '../assets/imgs/coexistence/solar-term/winter4-2.png',
      ],
      constellation:
        '<svg width="445" height="471" viewBox="0 0 445 471" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '<g filter="url(#filter0_dd_1177_195)">\n' +
        '<circle cx="183.843" cy="414.182" r="17.0772" fill="white" stroke="white"/>\n' +
        '<circle cx="251.788" cy="322.777" r="17.0772" fill="white" stroke="white"/>\n' +
        '<circle cx="319.733" cy="245.44" r="17.0772" fill="white" stroke="white"/>\n' +
        '<circle cx="392.421" cy="177.476" r="17.0772" fill="white" stroke="white"/>\n' +
        '<circle cx="235.382" cy="48.5772" r="17.0772" fill="white" stroke="white"/>\n' +
        '<circle cx="176.812" cy="142.324" r="17.0772" fill="white" stroke="white"/>\n' +
        '<circle cx="118.21" cy="219.661" r="17.0772" fill="white" stroke="white"/>\n' +
        '<circle cx="52.5772" cy="304.03" r="17.0772" fill="white" stroke="white"/>\n' +
        '<line x1="62.7096" y1="290.819" x2="109.582" y2="234.571" stroke="white"/>\n' +
        '<line x1="128.347" y1="206.446" x2="170.532" y2="157.23" stroke="white"/>\n' +
        '<line x1="186.914" y1="129.149" x2="231.443" y2="63.5273" stroke="white"/>\n' +
        '<line x1="129.031" y1="229.815" x2="239.181" y2="314.186" stroke="white"/>\n' +
        '<line x1="189.969" y1="150.122" x2="307.151" y2="236.837" stroke="white"/>\n' +
        '<line x1="329.936" y1="234.531" x2="379.153" y2="187.659" stroke="white"/>\n' +
        '<line x1="307.237" y1="256.307" x2="262.708" y2="310.21" stroke="white"/>\n' +
        '<line x1="239.275" y1="333.625" x2="190.059" y2="399.247" stroke="white"/>\n' +
        '</g>\n' +
        '<defs>\n' +
        '<filter id="filter0_dd_1177_195" x="0.599998" y="0.599998" width="443.8" height="469.559" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n' +
        '<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n' +
        '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n' +
        '<feOffset/>\n' +
        '<feGaussianBlur stdDeviation="12.1"/>\n' +
        '<feComposite in2="hardAlpha" operator="out"/>\n' +
        '<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>\n' +
        '<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1177_195"/>\n' +
        '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n' +
        '<feOffset dy="4"/>\n' +
        '<feGaussianBlur stdDeviation="17.2"/>\n' +
        '<feComposite in2="hardAlpha" operator="out"/>\n' +
        '<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>\n' +
        '<feBlend mode="normal" in2="effect1_dropShadow_1177_195" result="effect2_dropShadow_1177_195"/>\n' +
        '<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_1177_195" result="shape"/>\n' +
        '</filter>\n' +
        '</defs>\n' +
        '</svg>\n',
    },
    小寒: {
      title: '小寒',
      content: ['小寒料峭，寒中有备。', '畜禽防冻，温室育苗。'],
      imgs: [
        '../assets/imgs/coexistence/solar-term/winter5-1.png',
        '../assets/imgs/coexistence/solar-term/winter5-2.png',
      ],
      constellation:
        '<svg width="284" height="349" viewBox="0 0 284 349" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '<g filter="url(#filter0_dd_1177_212)">\n' +
        '<circle cx="119.069" cy="292.055" r="17.382" fill="white" stroke="white"/>\n' +
        '<circle cx="231.116" cy="101.313" r="17.382" fill="white" stroke="white"/>\n' +
        '<circle cx="100.007" cy="48.8605" r="17.382" fill="white" stroke="white"/>\n' +
        '<circle cx="52.3117" cy="263.444" r="17.382" fill="white" stroke="white"/>\n' +
        '<line x1="92.1302" y1="62.0734" x2="53.9819" y2="245.662" stroke="white"/>\n' +
        '<line x1="68.0322" y1="266.577" x2="103.796" y2="285.651" stroke="white"/>\n' +
        '<line x1="126.98" y1="276.307" x2="219.967" y2="114.177" stroke="white"/>\n' +
        '</g>\n' +
        '<defs>\n' +
        '<filter id="filter0_dd_1177_212" x="0.029686" y="0.578514" width="283.37" height="347.758" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n' +
        '<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n' +
        '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n' +
        '<feOffset/>\n' +
        '<feGaussianBlur stdDeviation="12.1"/>\n' +
        '<feComposite in2="hardAlpha" operator="out"/>\n' +
        '<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>\n' +
        '<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1177_212"/>\n' +
        '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n' +
        '<feOffset dy="4"/>\n' +
        '<feGaussianBlur stdDeviation="17.2"/>\n' +
        '<feComposite in2="hardAlpha" operator="out"/>\n' +
        '<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>\n' +
        '<feBlend mode="normal" in2="effect1_dropShadow_1177_212" result="effect2_dropShadow_1177_212"/>\n' +
        '<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_1177_212" result="shape"/>\n' +
        '</filter>\n' +
        '</defs>\n' +
        '</svg>\n',
    },
    大寒: {
      title: '大寒',
      content: ['岁寒将尽。', '养精蓄锐，迎春备种。'],
      imgs: [
        '../assets/imgs/coexistence/solar-term/winter6-1.png',
        '../assets/imgs/coexistence/solar-term/winter6-2.png',
      ],
      constellation:
        '<svg width="295" height="311" viewBox="0 0 295 311" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '<g filter="url(#filter0_dd_1177_220)">\n' +
        '<circle cx="153.477" cy="262.09" r="17.454" fill="white" stroke="white"/>\n' +
        '<circle cx="72.1259" cy="262.09" r="17.454" fill="white" stroke="white"/>\n' +
        '<circle cx="72.1259" cy="161.539" r="17.454" fill="white" stroke="white"/>\n' +
        '<circle cx="52.954" cy="60.997" r="17.454" fill="white" stroke="white"/>\n' +
        '<circle cx="242.048" cy="49.0244" r="17.454" fill="white" stroke="white"/>\n' +
        '<circle cx="225.329" cy="125.636" r="17.454" fill="white" stroke="white"/>\n' +
        '<circle cx="222.915" cy="195.055" r="17.454" fill="white" stroke="white"/>\n' +
        '<circle cx="222.915" cy="257.298" r="17.454" fill="white" stroke="white"/>\n' +
        '<line x1="54.6635" y1="78.8631" x2="66.6329" y2="143.498" stroke="white"/>\n' +
        '<line x1="71.3828" y1="179.495" x2="71.3828" y2="244.13" stroke="white"/>\n' +
        '<line x1="87.6722" y1="265.178" x2="137.944" y2="267.572" stroke="white"/>\n' +
        '<line x1="171.422" y1="262.778" x2="207.33" y2="262.778" stroke="white"/>\n' +
        '<line x1="223.594" y1="239.344" x2="223.594" y2="213.011" stroke="white"/>\n' +
        '<line x1="223.595" y1="177.067" x2="225.989" y2="141.159" stroke="white"/>\n' +
        '<line x1="226.044" y1="107.515" x2="240.407" y2="66.8194" stroke="white"/>\n' +
        '</g>\n' +
        '<defs>\n' +
        '<filter id="filter0_dd_1177_220" x="0.599998" y="0.670311" width="293.8" height="317.774" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n' +
        '<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n' +
        '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n' +
        '<feOffset/>\n' +
        '<feGaussianBlur stdDeviation="12.1"/>\n' +
        '<feComposite in2="hardAlpha" operator="out"/>\n' +
        '<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>\n' +
        '<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1177_220"/>\n' +
        '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n' +
        '<feOffset dy="4"/>\n' +
        '<feGaussianBlur stdDeviation="17.2"/>\n' +
        '<feComposite in2="hardAlpha" operator="out"/>\n' +
        '<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>\n' +
        '<feBlend mode="normal" in2="effect1_dropShadow_1177_220" result="effect2_dropShadow_1177_220"/>\n' +
        '<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_1177_220" result="shape"/>\n' +
        '</filter>\n' +
        '</defs>\n' +
        '</svg>\n',
    },
  };

  // ========== 节气点击切换诗歌功能 ==========
  document.querySelectorAll('.text-3').forEach((item) => {
    item.addEventListener('click', function () {
      const term = this.textContent.trim();
      const data = solarTermData[term];
      if (data) {
        // 更新星座
        const constellationEl = document.querySelector('.poem .constellation');
        if (constellationEl) constellationEl.innerHTML = data.constellation;
        // 更新标题
        const titleEl = document.querySelector('.poem .title p');
        if (titleEl) titleEl.textContent = data.title;
        // 更新内容
        const contentEl = document.querySelector('.poem .content');
        if (contentEl) {
          contentEl.innerHTML = data.content
            .map((line) => `<p class=\"title-text\">${line}</p>`)
            .join('');
        }
        // 更新图片
        const imgsEl = document.querySelector('.poem .poem-imgs');
        if (imgsEl) {
          imgsEl.innerHTML = data.imgs
            .map((src) => `<img src=\"${src}\" alt=\"${term}\">`)
            .join('');
        }

        // 处理text-3的样式
        document
          .querySelectorAll('.text-3')
          .forEach((el) => el.classList.remove('text-6'));
        this.classList.add('text-6');

        // 初始化状态管理
        const state = {
          activeIndex: -1,
          elements: {
            text1: document.querySelector('.text-1'),
            text2Svgs: document.querySelectorAll('.text-2 svg'),
            text3Elements: document.querySelectorAll('.text-3'),
          },
        };

        // 更新激活状态的函数
        function updateActiveState(index) {
          // 如果点击的是当前激活项，不做任何操作
          if (state.activeIndex === index) return;

          // 更新 circle 填充
          if (state.activeIndex !== -1) {
            const prevSvg = state.elements.text2Svgs[state.activeIndex];
            prevSvg.querySelectorAll('circle').forEach((circle) => {
              circle.setAttribute('fill', 'none');
            });
          }

          const currentSvg = state.elements.text2Svgs[index];
          currentSvg.querySelectorAll('circle').forEach((circle) => {
            circle.setAttribute('fill', 'white');
          });

          // 更新 text-3 样式
          state.elements.text3Elements.forEach((element, i) => {
            if (i === index) {
              element.classList.add('text-6');
            } else {
              element.classList.remove('text-6');
            }
          });

          // 更新 text-1 样式
          const text1Elements = document.querySelectorAll('.text-1');
          text1Elements.forEach((el, i) => {
            if (i === index) {
              el.classList.add('text-6');
            } else {
              el.classList.remove('text-6');
            }
          });

          // 更新当前激活索引
          state.activeIndex = index;
        }

        // 初始化 SVG 状态
        state.elements.text2Svgs.forEach((svg) => {
          svg.querySelectorAll('circle').forEach((circle) => {
            circle.setAttribute('fill', 'none');
          });
        });

        // 为 text-3 元素添加点击事件
        state.elements.text3Elements.forEach((element, index) => {
          element.addEventListener('click', () => {
            updateActiveState(index);
          });
        });

        // 为 SVG 元素添加点击事件
        state.elements.text2Svgs.forEach((svg, index) => {
          svg.addEventListener('click', () => {
            updateActiveState(index);
          });
        });
      }
    });
  });

  // 为特定 SVG 添加点击事件
  document.querySelectorAll('.text-2 svg').forEach((svg) => {
    svg.addEventListener('click', function () {
      // 获取当前点击的 SVG 的父元素
      const parentElement = this.closest('.text-2');
      if (parentElement) {
        // 获取对应的 text-3 元素
        const index = Array.from(document.querySelectorAll('.text-2')).indexOf(
          parentElement
        );
        const text3Element = document.querySelectorAll('.text-3')[index];

        if (text3Element) {
          // 触发 text-3 的点击事件
          text3Element.click();
        }
      }
    });
  });

  // 初始化时默认点击第22个text-3
  const text3Elements = document.querySelectorAll('.text-3');
  if (text3Elements.length >= 22) {
    const defaultIndex = 21; // 第22个元素（索引从0开始）
    const defaultElement = text3Elements[defaultIndex];

    // 触发点击事件
    if (defaultElement) {
      defaultElement.click();

      // 更新circle填充
      const svg = document.querySelectorAll('.text-2 svg')[defaultIndex];
      if (svg) {
        svg.querySelectorAll('circle').forEach((circle) => {
          circle.setAttribute('fill', 'white');
        });
      }
    }
  }
  // 当鼠标位于top-container区域时，滚轮滚动一次的高度为屏幕的高度
  // const topContainer = document.querySelector('.top-container');
  // const memoryContainer = document.querySelector('.memory-container');
  // // 防止滚轮事件过于频繁触发导致页面滚动过快
  // // 使用防抖处理，避免滚轮事件过于频繁触发
  // let wheelTimeout = null;
  // if (topContainer) {
  //   topContainer.addEventListener(
  //     'wheel',
  //     function (e) {
  //       e.preventDefault();
  //       if (wheelTimeout) return;
  //       wheelTimeout = setTimeout(() => {
  //         wheelTimeout = null;
  //       }, 600); // 600ms防抖

  //       if (e.deltaY > 0) {
  //         window.scrollBy({
  //           top: window.innerHeight,
  //           left: 0,
  //           behavior: 'smooth',
  //         });
  //       } else if (e.deltaY < 0) {
  //         window.scrollBy({
  //           top: -window.innerHeight,
  //           left: 0,
  //           behavior: 'smooth',
  //         });
  //       }
  //     },
  //     { passive: false }
  //   );
  // }

  // if (memoryContainer) {
  //   memoryContainer.addEventListener(
  //     'wheel',
  //     function (e) {
  //       // 移除 preventDefault()，允许默认滚动行为
  //       if (wheelTimeout) return;
  //       wheelTimeout = setTimeout(() => {
  //         wheelTimeout = null;
  //       }, 600); // 600ms防抖
  //     },
  //     { passive: true }
  //   ); // 使用 passive: true 提高性能
  // }

  // 翻页
  $(window).ready(function () {
    $('#pages').turn({
      display: 'single',
      acceleration: true,
      gradients: true,
      duration: 1000,
      elevation: 500,
      when: {
        turned: function (e, page) {
          /*console.log('Current view: ', $(this).turn('view'));*/
        },
      },
    });
  });

  const preBtn = document.querySelector('.pre-btn');
  const nextBtn = document.querySelector('.next-btn');
  if (preBtn) {
    preBtn.addEventListener('click', function () {
      $('#pages').turn('previous');
    });
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', function () {
      $('#pages').turn('next');
    });
  }
});
