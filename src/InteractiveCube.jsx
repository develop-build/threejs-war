import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';

const Cube = () => {
  const cubeRef = useRef();
  useFrame(() => {
    if (cubeRef.current) {
      cubeRef.current.rotation.x += 0.01;
      cubeRef.current.rotation.y += 0.01;
    }
  });
  const [hovered, setHovered] = useState(false);

  return (
    <mesh
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      rotation={[0.5, 0.5, 0]}
      ref={cubeRef}
    >
      <boxGeometry />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  );
};

const InteractiveCube = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.3} />
      <directionalLight position={[2, 2, 5]} />
      <Cube />
    </Canvas>
  );
};

export default InteractiveCube;
