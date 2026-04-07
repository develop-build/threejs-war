import * as THREE from 'three';

// Create a scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x111111);

// camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(5, 5, 8);
camera.lookAt(0, 0, 0);

// Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
document.body.appendChild(renderer.domElement);

// Ball
const ball = new THREE.Mesh(
  new THREE.SphereGeometry(0.5, 32, 32),
  new THREE.MeshStandardMaterial({ color: 'orange' })
);
ball.position.y = 3;
scene.add(ball);

// Floor
const floor = new THREE.Mesh(
  new THREE.PlaneGeometry(20, 20),
  new THREE.MeshStandardMaterial({ color: '#222' })
);
floor.rotation.x = -Math.PI / 2;
scene.add(floor);

// Lights
const light = new THREE.DirectionalLight('white', 1);
light.position.set(5, 10, 5);
scene.add(light);

const ambientLight = new THREE.AmbientLight('white', 0.3);
scene.add(ambientLight);

// Physics variables
let velocity = 0;
const gravity = -0.01;
const bounceFactor = 0.95; // Energy loss on bounce

// Animated Loop
function animate() {
  requestAnimationFrame(animate);

  // apply gravity
  velocity += gravity;
  ball.position.y += velocity;
  if (ball.position.y <= 0.5) {
    ball.position.y = 0.5; // Reset to floor level
    velocity = -velocity * bounceFactor; // Reverse velocity and apply bounce factor
  }

  renderer.render(scene, camera);
}

animate();
