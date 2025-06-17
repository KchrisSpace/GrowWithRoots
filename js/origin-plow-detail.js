const footerText = document.querySelectorAll('footer > span > p');
const scrollItems = document.querySelectorAll('footer > span');
const scrollBar = document.querySelector('.scroll-bar');
const moveSvg = document.querySelector('.move-svg');
const footer = document.querySelector('footer');

footer.addEventListener(
  'wheel',
  function (event) {
    event.preventDefault();
    this.scrollLeft += event.deltaY;

    // 计算scrollBar的位置
    // const scrollPercentage =
    //   this.scrollLeft / (this.scrollWidth - this.clientWidth);
    // scrollBar.style.transform = `translateX(${scrollPercentage * 133}%)`;
  },
  { passive: false }
);

document.addEventListener('DOMContentLoaded', () => {
  const plowDetail = document.getElementById('plowDetail');
  const footerItems = document.querySelectorAll('footer span');

  // 初始化显示第一个项目
  updatePlowDetail('浸种');
  updateFooterTextColor('浸种');

  // 为每个footer项添加点击事件
  footerItems.forEach((item) => {
    item.addEventListener('click', () => {
      const title = item.querySelector('p').textContent;
      updatePlowDetail(title);
      updateFooterTextColor(title);
    });
  });

  function updatePlowDetail(title) {
    const data = plowData[title];
    if (data) {
      plowDetail.setAttribute('title', data.title);
      plowDetail.setAttribute('poem', data.poem);
      plowDetail.setAttribute('description', data.description);
      plowDetail.setAttribute('image', data.image);
    }
  }

  function updateFooterTextColor(activeTitle) {
    footerText.forEach((text) => {
      if (text.textContent === activeTitle) {
        text.style.color = '#137C41'; // 选中项的颜色
      } else {
        text.style.color = '#6b401d'; // 未选中项的颜色
      }
    });
  }
});
const plowData = {
  浸种: {
    title: '浸种',
    poem: `溪头夜雨足，门外春水生。
          筠篮浸浅碧，嘉谷抽新萌。
          西畴将有事，耒耜随晨兴。
          只鸡祭勾芒，再拜祈秋成。`,
    description: '将稻种浸泡于水中，促其发芽，为播种做准备。',
    image: '../assets/imgs/origin/plow-detail/01.png',
  },
  耕: {
    title: '耕',
    poem: `东皋一犁雨，布谷初催耕。
            绿野暗春晓，乌犍苦肩赪。
            我衔劝农字，杖策东郊行。
            永怀历山下，法事关圣情。`,
    description: '用犁翻松土地，使土壤透气，便于后续播种。',
    image: '../assets/imgs/origin/plow-detail/02.png',
  },
  耙: {
    title: '耙',
    poem: `雨笠冒宿雾，风蓑拥春寒。
            破块得甘澍，啮塍浸微澜。
            泥深四蹄重，日暮两股酸。
            谓彼牛后人，著鞭无作难。`,
    description: '用耙子打碎土块、平整田地，使土壤更细腻，利于秧苗生长。',
    image: '../assets/imgs/origin/plow-detail/03.png',
  },
  耖: {
    title: '耖',
    poem: `脱绔下田中，盎浆著塍尾。
          巡行遍畦畛，扶耖均泥滓。
          迟迟春日斜，稍稍樵歌起。
          薄暮佩牛归，共浴前溪水。`,
    description: '进一步平整水田，使泥浆均匀，便于插秧时秧苗扎根。',
    image: '../assets/imgs/origin/plow-detail/04.png',
  },
  碌碡: {
    title: '碌碡',
    poem: `力田巧机事，利器由心匠。
            翩翩转圜枢，衮衮鸣翠浪。
            三春欲尽头，万顷平如掌。
            渐暄牛已喘，长怀丙丞相。`,
    description: '用石磙碾压田地，压实松软的泥土，防止水分过快流失。',
    image: '../assets/imgs/origin/plow-detail/05.png',
  },
  布秧: {
    title: '布秧',
    poem: `旧谷发新颖，梅黄雨生肥。
    下田初播殖，却行手奋挥。
    明朝望平畴，绿针刺风漪。
    审此一寸根，行作合穗期。`,
    description: '将发芽的稻种均匀撒播在秧田里，等待长成秧苗。',
    image: '../assets/imgs/origin/plow-detail/06.png',
  },
  淤荫: {
    title: '淤荫',
    poem: `杀草闻吴儿，洒灰传自祖。
    田田皆沃壤，泫泫流膏乳。
    塍头乌啄泥，谷口鸠唤雨。
    敢望稼如云，工夫盖如许。`,
    description: '施肥培土，增强土壤肥力，促进秧苗茁壮成长。',
    image: '../assets/imgs/origin/plow-detail/07.png',
  },
  拔秧: {
    title: '拔秧',
    poem: `新秧初出水，渺渺翠琰齐。
    清晨且拔擢，父子争提携。
    既沐青满握，再栉根无泥。
    及时趁芒种，散著畦东西。`,
    description: '待秧苗长成后，从秧田里拔出，准备移栽至大田。',
    image: '../assets/imgs/origin/plow-detail/08.png',
  },
  插秧: {
    title: '插秧',
    poem: `晨雨麦秋润，午风槐夏凉。
    溪南与溪北，啸歌插新秧。
    抛掷不停手，左右无乱行。
    我将教秧马，代劳民莫忘。`,
    description: '将秧苗整齐插入水田，行列有序，确保生长空间。',
    image: '../assets/imgs/origin/plow-detail/09.png',
  },
  一耘: {
    title: '一耘',
    poem: `时雨既已降，良苗日怀新。
    去草如去恶，务令尽陈根。
    泥蟠任犊鼻，膝行生浪纹。
    眷惟圣天子，党亦思鸟耘。`,
    description: '第一次除草松土，清除杂草，避免养分被争夺。',
    image: '../assets/imgs/origin/plow-detail/10.png',
  },
  二耘: {
    title: '二耘',
    poem: `解衣日炙背，戴笠汗濡首。
    敢辞冒炎蒸，但欲去莨莠。
    壶浆与箪食，亭午来饷妇。
    要儿知稼穑，岂曰事携幼。`,
    description: '再次除草，并检查秧苗生长情况，确保田间管理到位。',
    image: '../assets/imgs/origin/plow-detail/11.png',
  },
  三耘: {
    title: '三耘',
    poem: `农田亦甚劬，三复事耘秄。
    经年苦艰食，喜见苗薿薿。
    老农念一饱，对此出馋水。
    愿天均雨旸，满野如云委。`,
    description: '最后一次精细除草，确保稻苗不受杂草干扰，茁壮成长。',
    image: '../assets/imgs/origin/plow-detail/12.png',
  },
  灌溉: {
    title: '灌溉',
    poem: `揠苗鄙宋人，抱瓮惭蒙庄。
    何如衔尾鸦，倒流竭池塘。
    䆉稏舞翠浪，蘧蒢生昼凉。
    斜阳耿衰柳，笑歌闲女郎。`,
    description: '适时引水灌溉，保持田间水分充足，促进稻谷生长。',
    image: '../assets/imgs/origin/plow-detail/13.png',
  },
  收刈: {
    title: '收刈',
    poem: `田家刈获时，腰镰竞仓卒。
    霜浓手龟坼，日永息罄折。
    儿童行拾穗，风色凌短褐。
    欢呼荷担归，望望屋山月。`,
    description: '稻谷成熟后，用镰刀收割，确保颗粒归仓。',
    image: '../assets/imgs/origin/plow-detail/14.png',
  },
  登场: {
    title: '登场',
    poem: `禾黍已登场，稍觉农事优。
    黄云满高架，白水空西畴。
    用此可卒岁，愿言免防秋。
    太平本无象，村舍炊烟浮。`,
    description: '将收割的稻谷运至晒场，摊开晾晒，防止霉变。',
    image: '../assets/imgs/origin/plow-detail/15.png',
  },
  持穗: {
    title: '持穗',
    poem: `霜时天气佳，风劲木叶脱。
    持穗及此时，连枷声乱发。
    黄鸡啄遗粒，乌鸟喜聒聒。
    归家抖尘埃，夜屋烧榾柮。`,
    description: '用连枷拍打稻穗，使谷粒脱落，便于后续加工。',
    image: '../assets/imgs/origin/plow-detail/16.png',
  },
  簸扬: {
    title: '簸扬',
    poem: `临风细扬簸，糠秕零风前。
    倾泻雨声碎，把玩玉粒圆。
    短裙箕帚妇，收拾亦已专。
    岂图较斗升，未敢忘凶年。`,
    description: '借助风力扬去谷壳、碎草等杂质，留下饱满的稻谷。',
    image: '../assets/imgs/origin/plow-detail/17.png',
  },
  砻: {
    title: '砻',
    poem: `推挽人摩肩，展转石砺齿。
    殷床作春雷，旋风落云子。
    有如布山川，部娄势相峙。
    前持斗量珠，满眼俄有此。`,
    description: '用磨盘脱去稻壳，得到糙米，为后续精加工做准备。',
    image: '../assets/imgs/origin/plow-detail/18.png',
  },
  舂碓: {
    title: '舂碓',
    poem: `娟娟月过墙，簌簌风吹叶。
    田家当此时，村舂响相答。
    行闻炊玉香，会见流匙滑。
    更须水转轮，地碓劳蹴踏。`,
    description: '用杵臼舂米，去除米糠，使大米更加洁白细腻。',
    image: '../assets/imgs/origin/plow-detail/19.png',
  },
  筛: {
    title: '筛',
    poem: `茅檐闲杵臼，竹屋细筛簸。
    照人珠琲光，奋臂风雨过。
    计功初不浅，饱食良自贺。
    西邻华屋儿，醉饱正高卧。`,
    description: '用筛子分离米粒与碎糠，确保大米纯净无杂质。',
    image: '../assets/imgs/origin/plow-detail/20.png',
  },
  入仓: {
    title: '入仓',
    poem: `天寒牛在牢，岁暮粟入庾。
    田父有余乐，炙背卧檐庑。
    却愁催赋租，胥吏来旁午。
    输官王事了，索饭儿叫怒。`,
    description: '将加工好的稻谷储存入库，以备日常食用或交纳税粮。',
    image: '../assets/imgs/origin/plow-detail/21.png',
  },
};
