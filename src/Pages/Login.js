import '../App.css';
import { Canvas, useLoader, useFrame } from '@react-three/fiber'
import { Html } from '@react-three/drei'
import { useNavigate } from 'react-router-dom';
import React, { useMemo, Suspense, useRef } from "react"
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import {useEffect, useState } from 'react'
import Web3Modal from "web3modal"
import { ethers } from 'ethers'
// Connect wallet function

// Add HTML to react three fiber

const HTMLContent = () => {
  const [address, setAddress] = useState([]);

  const connectToMetamask = async () => {
    const web3Modal = new Web3Modal()
    const connection = await web3Modal.connect()
    const provider = new ethers.providers.Web3Provider(connection)
    setAddress(connection.selectedAddress)
  }
  return (
    <Html scale={50} position={[-170, 100, 100]}>
      <div className="annotation">
        <span>WELCOME TO IDLEVERSE</span>
        <div className='box'>
          <button className='span' onClick={connectToMetamask}>
            connect
          </button>
          <div>address = {address}</div>
        </div>
      </div>
    </Html>
  )

}

// Star background
function Particles({ pointCount }) {
  // roate and move star Particles
  const ref = useRef()
  useFrame(() =>
    (ref.current.rotation.z += 0.002, ref.current.position.z += 0.2))

  useFrame(() => {
    if (ref.current.position.z >= 550) {
      ref.current.position.z = 0
    }
  })


  // load star texture
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
  // Return random points and attach geometry with mapped star texture 
  return (
    <points ref={ref} >
      <bufferGeometry attach="geometry">
        <bufferAttribute attachObject={["attributes", "position"]} count={positions.length / 3} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial attach="material" color='white' map={texture} size={0.7} sizeAttenuation={true} />
    </points>
  )
}
function Login() {
  const navigate = useNavigate();
  return (
    <div className='div'>
      <button className='span1' onClick={() => navigate('/island')}>Connect</button>

      <Canvas camera={{ fov: 60, near: 1, far: 1000, position: [0, 0, 400] }}>
        <HTMLContent />
        <Suspense fallback={null}>
          <Particles pointCount={6000} />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default Login;
