import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { createScene } from './Setup';

const { scene, camera, renderer } = createScene();
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.enablePan = true;
controls.enableZoom = true;

// 🌐 Grid
const grid = new THREE.GridHelper(10, 10, 'cyan', 'cyan');
scene.add(grid);

// light
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 10, 7.5);
scene.add(directionalLight);

// floor
const floor = new THREE.Mesh(
  new THREE.PlaneGeometry(15, 15),
  new THREE.MeshStandardMaterial({ color: 'purple', side: THREE.DoubleSide })
);
floor.rotation.x = -Math.PI / 2;
floor.position.y = -0.01;
scene.add(floor);

camera.position.set(8, 6, 8);
camera.lookAt(0, 0, 0);

// 🔁 Animation loop
function animate() {
  requestAnimationFrame(animate);
  grid.rotation.y += 0.01;
  renderer.render(scene, camera);
}

animate();
