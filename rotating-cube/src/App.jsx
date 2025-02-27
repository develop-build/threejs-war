import React, {useRef} from 'react'
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const App = ({ position = [-1, 0, 2.5], fov = 50 }) => {
  return (
    <Canvas
      camera={{position, fov}}
    >
      <Cube />
      <OrbitControls />
    </Canvas>
  )
}

const Cube = () => { 
  const ref = useRef();
  useFrame((_, delta) => {
    ref.current.rotation.y += delta;
    ref.current.rotation.x += delta;
  })
  return (
    <mesh ref={ref}>
      <boxGeometry args={[0.9, 0.9, 0.9]} />
      <meshNormalMaterial />
    </mesh>
  )
}

export default App