import * as THREE from 'three';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio, 2);
document.body.appendChild(renderer.domElement);

// sphere geometry
const geometry = new THREE.SphereGeometry(1, 32, 32);

// Material
const material = new THREE.MeshStandardMaterial({
  color: 'royalblue',
  roughness: 0.5,
  metalness: 0.5,
});

const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

// light
const light = new THREE.DirectionalLight('white', 1, 100);
light.position.set(2, 5, 5);
scene.add(light);

const ambientLight = new THREE.AmbientLight('white', 0.3);
scene.add(ambientLight);

function animate() {
  requestAnimationFrame(animate);
  sphere.rotation.y += 0.01;
  sphere.position.y = Math.sin(Date.now() * 0.002) * 0.5;
  renderer.render(scene, camera);
}

animate();
