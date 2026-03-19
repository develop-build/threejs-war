import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';

const Cube = () => {
  const cubeRef = useRef();
  useFrame(() => {
    if (cubeRef.current) {
      cubeRef.current.rotation.x += 0.01;
      cubeRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={cubeRef}>
      <boxGeometry />
      <meshBasicMaterial color="red" attach="material-0" />
      <meshBasicMaterial color="green" attach="material-1" />
      <meshBasicMaterial color="blue" attach="material-2" />
      <meshBasicMaterial color="yellow" attach="material-3" />
      <meshBasicMaterial color="magenta" attach="material-4" />
      <meshBasicMaterial color="cyan" attach="material-5" />
    </mesh>
  );
};

const RotatingCube = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
      <Cube />
    </Canvas>
  );
};

export default RotatingCube;
