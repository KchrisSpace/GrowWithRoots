// 创建3D场景
const scene = new THREE.Scene();
// scene.background = new THREE.Color(0x000000, 0); // 这种写法不会让背景透明
scene.background = null; // 让场景背景透明（无颜色）
// 创建透视相机并设置其属性
const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 1000);
// 设置相机的位置并使其看向指定坐标点
camera.position.set(0, 0, 5);
// camera.lookAt(0, 0, 0);
// 创建WebGL渲染器并设置其大小antialias: true​​：开启抗锯齿，使渲染的边缘更平滑。这会消耗更多的性能，但能提高视觉质量
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
const container = document.querySelector('.modal-container');
if (!container) {
  console.error('请确保页面中存在该元素。');
}
container.appendChild(renderer.domElement);
// 创建OrbitControls实例以允许用户通过鼠标控制相机
const controls = new THREE.OrbitControls(camera, renderer.domElement);
const modelGroup = new THREE.Group(); // 存储所有模型
// 加载字体文件（Three.js 自带的示例字体）
const FontLoader = new THREE.FontLoader();

// 记录文字 mesh，便于后续操作
let textMeshes = [];
FontLoader.load(
  '../assets/fonts/AaJiJiaHei_Regular.json',
  function (font) {
    // 拆分文字
    const text = '你还记得粮荒的味道吗';
    // 需要放大的字索引（第五和第六个字，索引从0开始）
    const bigIndexes = [4, 5];
    // 每个字的大小
    const sizes = text.split('').map((_, i) => (bigIndexes.includes(i) ? 1.3 : 0.4));
    // 每个字的mesh
    const meshes = [];
    let offsetX = 0;

    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      const size = sizes[i];
      const geometry = new THREE.TextGeometry(char, {
        font: font,
        size: size,
        height: 0.1,
        curveSegments: 6,
        bevelEnabled: false,
      });
      geometry.computeBoundingBox();
      const width = geometry.boundingBox.max.x - geometry.boundingBox.min.x;

      const material = new THREE.MeshPhongMaterial({
        color: 0x137c41,
        specular: 0x111111,
        shininess: 30,
      });

      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.x = offsetX;
      // 逻辑：第五个前面的文字往左移，第六个后面的字往右移
      if (i < 4) {
        mesh.position.x -= 0.3; // 前四个字往左移
        mesh.position.y = 0.5;
      } else if (i > 5) {
        mesh.position.x += 0.3; // 第六个后面的字往右移
        mesh.position.y = -0.5;
      } else {
        mesh.position.y = -0.5; // 第五和第六个字保持原位
      }
      mesh.position.z = -1;
      meshes.push({ mesh, width });
      offsetX += width + 0.08; // 字间距
    }

    // 居中整体
    const totalWidth = meshes.reduce((sum, m) => sum + m.width, 0) + (meshes.length - 1) * 0.08;
    meshes.forEach(({ mesh, width }) => {
      mesh.position.x -= totalWidth / 2;
      scene.add(mesh);
    });
    // 记录所有文字 mesh
    textMeshes = meshes.map((m) => m.mesh);
  },
  undefined,
  function (error) {
    console.error('字体加载失败:', error);
  }
);
// 添加环境光
// 环境光
scene.add(new THREE.AmbientLight(0xffffff, 0.4));

// 主平行光（投射阴影）
const mainDirLight = new THREE.DirectionalLight(0xffffff, 1);
mainDirLight.position.set(0, -1, 10);
mainDirLight.castShadow = true;
mainDirLight.shadow.mapSize.width = 2048;
mainDirLight.shadow.mapSize.height = 2048;
mainDirLight.shadow.camera.near = 1;
mainDirLight.shadow.camera.far = 50;
mainDirLight.shadow.camera.left = -10;
mainDirLight.shadow.camera.right = 10;
mainDirLight.shadow.camera.top = 10;
mainDirLight.shadow.camera.bottom = -10;
scene.add(mainDirLight);

// 辅助平行光
[
  { intensity: 1.5, position: [-5, 2, 5] },
  { intensity: 1.2, position: [5, -2, -5] },
  { intensity: 1.0, position: [0, 5, 0] },
  { intensity: 1.0, position: [0, -5, 0] },
].forEach((cfg) => {
  const light = new THREE.DirectionalLight(0xffffff, cfg.intensity);
  light.position.set(...cfg.position);
  scene.add(light);
});

// 添加地面用于接收阴影
const groundGeo = new THREE.PlaneGeometry(100, 100);
const groundMat = new THREE.MeshStandardMaterial({
  color: 0x222222,
  metalness: 0.3,
  roughness: 0.7,
  envMap: scene.environment,
  envMapIntensity: 1.2,
});
const ground = new THREE.Mesh(groundGeo, groundMat);
ground.rotation.x = -Math.PI / 2;
ground.position.y = -30;
ground.receiveShadow = true;
scene.add(ground);

// 启用渲染器阴影
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
const loader = new THREE.GLTFLoader();
// 加载并复用模型
loader.load(
  '../assets/models/glass1.glb',
  (gltf) => {
    // 设置原始模型的材质
    gltf.scene.traverse((child) => {
      if (child.isMesh) {
        child.material = new THREE.MeshPhysicalMaterial({
          color: 0xffffff,
          metalness: 0.8, // 反射强度，0-1，越高越像金属
          roughness: 0.05, // 粗糙度，0为光滑镜面
          transmission: 1, // 玻璃透明度
          thickness: 10, // 玻璃厚度
          ior: 1.6, // 折射率，玻璃常用1.5-1.8
          transparent: true,
          opacity: 0.7, // 透明度
          // envMap: envMap, // 环境贴图用于反射
          envMapIntensity: 1.2, // 反射环境贴图强度
          clearcoat: 1, // 清漆层，增强高光
          clearcoatRoughness: 0, // 清漆层粗糙度
        });
      }
    });
    // 文字的z轴位置-1
    // 复用模型：创建多个副本并设置不同的位置/旋转/缩放
    const positions = [
      { x: 1.5, y: 0, z: 1, rx: 2, ry: 1.5, rz: 0, scale: 20 },
      { x: 2.5, y: -2, z: -4, rx: 1, ry: -3.2, rz: 0, scale: 50 },
      { x: 0, y: -1, z: -0.5, rx: 1, ry: 1, rz: 0, scale: 10 },
      { x: -1, y: 1.5, z: -3.5, rx: -2, ry: 0.5, rz: 0, scale: 5 },
      { x: 1, y: 1.5, z: -1.5, rx: 2, ry: 0.5, rz: 1, scale: 5 },
      { x: 1, y: 1, z: -2, rx: 1, ry: 1, rz: 0, scale: 5 },
      { x: 3, y: 1, z: -2, rx: 2, ry: 1, rz: 0, scale: 2 },
      { x: -3, y: 0, z: -1.5, rx: -2, ry: 1, rz: 1, scale: 2 },
      { x: -3, y: 1, z: -1.5, rx: 1, ry: 1, rz: 1, scale: 5 },
    ];

    positions.forEach((pos) => {
      const clone = gltf.scene.clone(true);
      clone.position.set(pos.x, pos.y, pos.z);
      clone.rotation.set(pos.rx, pos.ry, pos.rz);
      clone.scale.set(pos.scale, pos.scale, pos.scale);
      modelGroup.add(clone);
    });
  },
  function (xhr) {
    console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
  }
);
loader.load(
  '../assets/models/glass2.glb',
  (gltf) => {
    // 设置原始模型的材质
    gltf.scene.traverse((child) => {
      if (child.isMesh) {
        child.material = new THREE.MeshPhysicalMaterial({
          color: 0xffffff,
          metalness: 0.8, // 反射强度，0-1，越高越像金属
          roughness: 0.1, // 粗糙度，0为光滑镜面
          transmission: 1, // 玻璃透明度
          thickness: 10, // 玻璃厚度
          ior: 1.6, // 折射率，玻璃常用1.5-1.8
          transparent: true,
          opacity: 0.7, // 透明度
          // envMap: envMap, // 环境贴图用于反射
          envMapIntensity: 1.2, // 反射环境贴图强度
          clearcoat: 1, // 清漆层，增强高光
          clearcoatRoughness: 0, // 清漆层粗糙度
        });
      }
    });
    // 文字的z轴位置-1
    // 复用模型：创建多个副本并设置不同的位置/旋转/缩放
    const positions = [
      { x: -1, y: 2, z: -0.5, rx: 1, ry: 1, rz: 0, scale: 20 },
      { x: -1, y: 0, z: -1.5, rx: 1, ry: -1.2, rz: 0, scale: 35 },
      { x: 0, y: 1, z: -2.5, rx: 1, ry: 1, rz: 0, scale: 5 },
      { x: 0, y: 2.5, z: -4.5, rx: 1, ry: 1, rz: 0, scale: 5 },
      { x: -1, y: 2, z: -1.5, rx: 2, ry: 1, rz: 1, scale: 10 },
      { x: -1, y: 1, z: -1.5, rx: 2, ry: 1, rz: 1, scale: 5 },
      { x: 1, y: 1, z: -2, rx: 2, ry: 1, rz: 0, scale: 10 },
      { x: 3, y: 1, z: -2, rx: 2, ry: 1, rz: 0, scale: 2 },
      { x: -4, y: 0, z: -1.5, rx: 0, ry: 1, rz: 1, scale: 5 },
      { x: -3, y: 2, z: -1.5, rx: 1, ry: 1, rz: 1, scale: 5 },
      { x: -3, y: -2, z: -1.5, rx: 1, ry: 1, rz: 1, scale: 5 },
    ];

    positions.forEach((pos) => {
      const clone = gltf.scene.clone(true);
      clone.position.set(pos.x, pos.y, pos.z);
      clone.rotation.set(pos.rx, pos.ry, pos.rz);
      clone.scale.set(pos.scale, pos.scale, pos.scale);
      modelGroup.add(clone);
    });
    // 将加载的模型添加到模型组中
    modelGroup.add(gltf.scene);
  },
  function (xhr) {
    console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
  }
);
scene.add(modelGroup);
// console.log('模型加载完成，添加到场景中。', modelGroup);

// 加载环境贴图
const envMap = new THREE.CubeTextureLoader()
  .setPath('../assets/env/')
  .load(['px.jpg', 'nx.jpg', 'py.jpg', 'ny.jpg', 'pz.jpg', 'nz.jpg']);
scene.environment = envMap;
// scene.background = envMap; // 可选：让背景也用环境贴图

controls.enableDamping = true; // 启用阻尼（惯性效果）
controls.dampingFactor = 0.05; // 阻尼系数
// 鼠标移动控制相机
let mouseX = 0,
  mouseY = 0;
const windowHalfX = window.innerWidth / 2;
const windowHalfY = window.innerHeight / 2;

document.addEventListener('mousemove', (event) => {
  // 计算鼠标偏移量（标准化到 [-1, 1]）
  mouseX = (event.clientX - windowHalfX) / windowHalfX;
  mouseY = (event.clientY - windowHalfY) / windowHalfY;
});
// 窗口大小变化时更新相机和渲染器
// 响应式布局（不做高DPI适配）
function resizeRenderer() {
  const width = container.clientWidth;
  const height = container.clientHeight;

  renderer.setSize(width, height, false);

  camera.aspect = width / height;
  camera.updateProjectionMatrix();
}
window.addEventListener('resize', resizeRenderer);
resizeRenderer();
// 渲染场景的动画函数
function animate() {
  requestAnimationFrame(animate);
  controls.update(); // 更新控制器
  // 限制相机旋转幅度
  const maxAngle = Math.PI / 12; // 最大旋转角度为15度
  const xAngle = mouseX * maxAngle;
  camera.position.x = Math.sin(xAngle) * 5;
  camera.position.z = Math.cos(xAngle) * 5;
  camera.position.y = mouseY * 1; // 垂直移动幅度减小
  camera.lookAt(scene.position);
  renderer.render(scene, camera);
}
animate();
// 点击事件处理
const bgText = document.querySelector('.bg-text');
const bottomText = document.querySelector('.bottom-text');
const memoryContainer = document.querySelector('.memory-container');
document.querySelector('.clickable-glass').addEventListener('click', () => {
  // 1. 移除所有文字 mesh
  textMeshes.forEach((mesh) => scene.remove(mesh));
  textMeshes = [];

  // 2. 玻璃弹开动画
  modelGroup.children.forEach((obj, idx) => {
    const dir = idx % 2 === 0 ? -1 : 1;
    gsap.to(obj.position, {
      x: obj.position.x + dir * 5,
      y: obj.position.y + (Math.random() - 0.5) * 4,
      z: obj.position.z + (Math.random() - 0.5) * 2,
      duration: 1.2,
      ease: 'power2.out',
    });
    
    gsap.to(obj.rotation, {
      y: obj.rotation.y + dir * Math.PI * 0.5,
      x: obj.rotation.x + (Math.random() - 0.5) * Math.PI * 0.2,
      duration: 1.2,
      ease: 'power2.out',
      onComplete: () => {
        window.location.href = '../pages/disaster/index.html';
      },
    });
  });
// 4.让bgText文字变亮
  gsap.to(bgText, {
    // filter: 'brightness(2)', // 变亮，数值可调整
    textShadow: '0px 0px 4px 0px rgba(168, 168, 168, 1)', // 变亮
    opacity: 1, // 变为不透明
    duration: 1,
    ease: 'power1.inOut'
  });
  // 5.让bottomText文字消失
  gsap.to(bottomText, {
    opacity: 0, // 变为透明
    duration: 1,
    ease: 'power1.inOut',
    onComplete: () => {
      bottomText.style.display = 'none'; // 完成后隐藏元素
    }
  });
  
});
