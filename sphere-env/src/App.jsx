/* eslint-disable react/no-unknown-property */
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
const App = () => {
  return (
    <Canvas>
      <Environment preset="sunset" background />
      <Sphere />
      <OrbitControls />
    </Canvas>
  )
}


const Sphere = () => { 

  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight position={[5, 5, 5]} intensity={1}/>
      <mesh position={[0, 1, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial metalness={1} roughness={0} />
      </mesh>
    </>
  )
}

export default App
