import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// Create a scene
const scene = new THREE.Scene();

// Camera setup
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(5, 5, 8);
camera.lookAt(0, 0, 0);

// Renderer setup
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.maxPolarAngle = Math.PI / 2;
controls.update();

// Day light
const sunlight = new THREE.DirectionalLight(0xffffff, 1);
sunlight.position.set(5, 10, 5);
scene.add(sunlight);

// Night light
const moonlight = new THREE.DirectionalLight(0x6699ff, 0.5);
moonlight.position.set(-5, 10, -5);
scene.add(moonlight);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
scene.add(ambientLight);

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
cube.position.y = 1;
scene.add(cube);

// Plane
const planeGeometry = new THREE.PlaneGeometry(20, 20);
const planeMaterial = new THREE.MeshStandardMaterial({ color: 0xaaaaaa });
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.rotation.x = -Math.PI / 2;
scene.add(plane);

// state
let isDay = true;

// Toggle day/night on click
window.addEventListener('click', () => {
  isDay = !isDay;
  sunlight.intensity = isDay ? 1 : 0;
  moonlight.intensity = isDay ? 0.5 : 1;
  ambientLight.intensity = isDay ? 0.3 : 0.5;
});

// Animation loop
function animate() {
  requestAnimationFrame(animate);

  // Rotate the cube for some animation
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
}

animate();
