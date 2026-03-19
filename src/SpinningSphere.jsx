import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';

const Sphere = () => {
  const ref = useRef();

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="royalblue" roughness={0.4} metalness={0.3} />
    </mesh>
  );
};

const SpinningSphere = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      {/* Lights */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 5, 5]} intensity={1} />
      <Sphere />
    </Canvas>
  );
};

export default SpinningSphere;
