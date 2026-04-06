import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// Create a scene
const scene = new THREE.Scene();

// Create a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 5, 10);

// Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Add OrbitControls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; // Enable damping for smoother controls
controls.target.set(0, 0, 0); // Set the target to look at the center of the scene
controls.enableZoom = true;
controls.enablePan = true;
controls.enableRotate = true;
controls.minDistance = 3; // Minimum zoom distance
controls.maxDistance = 10; // Maximum zoom distance
controls.maxPolarAngle = Math.PI / 2; // Limit vertical rotation to prevent flipping
controls.target.set(0, 0, 0); // Set the target to look at the center of the scene

// Grid
const gridHelper = new THREE.GridHelper(10, 10);
scene.add(gridHelper);

function animate() {
  requestAnimationFrame(animate);
  controls.update(); // Update controls for damping
  renderer.render(scene, camera);
}

animate();
