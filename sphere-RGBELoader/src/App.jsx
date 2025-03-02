/* eslint-disable react/no-unknown-property */
import { useEffect } from 'react';
import * as THREE from 'three';
import { Canvas, useThree } from '@react-three/fiber';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader';
import { OrbitControls } from '@react-three/drei';

const App = () => {
  return (
    <Canvas>
      <Sphere />
      <OrbitControls />
    </Canvas>
  )
}

const Sphere = () => { 
  const { scene, gl } = useThree();

  useEffect(() => {
    const rgbeLoader = new RGBELoader();
    const pmremGenerator = new THREE.PMREMGenerator(gl);

    rgbeLoader.load('room.hdr', (texture) => {
      const envMap = pmremGenerator.fromEquirectangular(texture).texture;
      scene.environment = envMap;
      scene.background = envMap;
      texture.dispose();
      pmremGenerator.dispose();
    });
  }, [gl, scene]);
    
  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight position={[5, 5, 5]} />
      <mesh>
        <sphereGeometry args={[1, 64, 64]} />
        <meshPhysicalMaterial
          clearcoat={1}
          metalness={1}
          roughness={0}
        />
      </mesh>
    </>
  )
}

export default App
