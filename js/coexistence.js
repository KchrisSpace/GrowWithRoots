document.addEventListener('DOMContentLoaded', function () {
  const accordionItems = document.querySelectorAll('.accordion-item');
  const contentData = [
    {
      title: '一粒低镉稻种的十年攻坚',
      content: [
        '"0.031！"——2023年，湖南株洲一块稻田边，检测仪上的数值让科研团队热泪盈眶。',
        '"臻两优8612"成功了，一粒真正低镉、稳产的水稻种子终于诞生。它的主创者，是湖南省农科院水稻所研究员赵炳然。十年来，他带领团队走了一条最艰难却最干净的路：不用转基因，通过物理、化学、空间诱变等手段，从30万株材料中一一筛选。失败过无数次，终于培育出既低镉又高产的种子',
      ],
    },
    {
      title: '禾下乘凉梦·"杂交水稻之父"',
      content: [
        '他首创成功培育出世界上第一代杂交水稻，大幅提高水稻产量，使中国用不到全球9%的耕地养活了近20%的人口。自1973年三系杂交水稻问世以来，袁隆平带领团队不断攻关"两系法""超级稻"，推动水稻亩产一再突破纪录。',
        '他的研究成果广泛推广至亚洲、非洲、美洲等地，帮助多个国家缓解粮食危机。',
        '他一生心系"禾下乘凉梦"，致力于"让人类远离饥饿"，被誉为"把饭碗牢牢端在中国人自己手里"的种业英雄。',
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
  ];

  // 创建内容容器
  const contentContainer = document.createElement('div');
  contentContainer.className = 'accordion-content';
  document.querySelector('.accordion-text').appendChild(contentContainer);

  // 初始化显示第三个内容
  updateContent(2);
  accordionItems[2].classList.add('active');

  // 设置定时器，实现自动循环
  let currentIndex = 2;
  setInterval(() => {
    // 移除所有项的active类
    accordionItems.forEach((i) => i.classList.remove('active'));
    // 更新索引
    currentIndex = (currentIndex + 1) % accordionItems.length;
    // 为当前项添加active类
    accordionItems[currentIndex].classList.add('active');
    // 更新内容
    updateContent(currentIndex);
  }, 5000); // 每5秒切换一次

  // 点击事件处理
  accordionItems.forEach((item, index) => {
    item.addEventListener('click', function () {
      // 移除所有项的active类
      accordionItems.forEach((i) => i.classList.remove('active'));
      // 为当前点击的项添加active类
      this.classList.add('active');
      // 更新内容
      updateContent(index);
      // 更新当前索引
      currentIndex = index;
    });
  });

  function updateContent(index) {
    const data = contentData[index];
    contentContainer.innerHTML = `
      <h6>${data.title}</h6>
      ${data.content.map((text) => `<p>${text}</p>`).join('')}
    `;
  }
});
