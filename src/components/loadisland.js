import './App.css';
import { OrbitControls, Stars, softShadows } from '@react-three/drei'
import { Suspense } from 'react'

import { Canvas } from '@react-three/fiber'
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { useLoader } from '@react-three/fiber'

const Scene = () => {
  const materials = useLoader(MTLLoader, "/floating.mtl");
  const obj = useLoader(OBJLoader, "/floating.obj", (loader) => {
    materials.preload();
    loader.setMaterials(materials);
  });

  console.log(obj);
  return <primitive object={obj} scale={0.4} />;
};

function Box() {
  return (
    <mesh>
      <boxBufferGeometry attach='geometry' />
      <meshLambertMaterial attach='material' color='blue' />
    </mesh>
  )
}

function App() {

  return (
    <Canvas>
      <Suspense fallback={null}>
        <Scene />
        <OrbitControls />
        <Stars />
        <ambientLight intensity={0.3} />
        <spotLight position={[10, 15, 20]} angle={0.3} />
      </Suspense>
    </Canvas>
  );
}

export default App;
