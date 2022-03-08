import './App.css';
import { Canvas, useLoader, useFrame } from '@react-three/fiber'

import React, { useMemo, Suspense, useRef } from "react"
import { TextureLoader } from 'three/src/loaders/TextureLoader'

function Particles({ pointCount }) {
  const ref = useRef()
  useFrame(() =>
    (ref.current.rotation.z += 0.002, ref.current.position.z += 0.2))

  useFrame(() => {
    if (ref.current.position.z >= 550) {
      ref.current.position.z = 0
    }
  })



  const texture = useLoader(TextureLoader, '/star.png')
  const [positions] = useMemo(() => {
    let positions = []
    for (let i = 0; i < pointCount; i++) {
      positions.push(Math.random() * 600 - 300)
      positions.push(Math.random() * 600 - 300)
      positions.push(Math.random() * 600 - 300)
    }
    return [new Float32Array(positions)]
  }, [pointCount])
  return (
    <points ref={ref} >
      <bufferGeometry attach="geometry">
        <bufferAttribute attachObject={["attributes", "position"]} count={positions.length / 3} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial attach="material" color='white' map={texture} size={0.7} sizeAttenuation={true} />
    </points>
  )
}
function App() {

  return (
    <Canvas camera={{ fov: 60, near: 1, far: 1000, position: [0, 0, 400] }}>
      <Suspense fallback={null}>
        <Particles pointCount={6000} />
      </Suspense>
    </Canvas>
  );
}

export default App;
