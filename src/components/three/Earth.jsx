import React, { useState } from 'react'
import { useTexture } from '@react-three/drei';
import texture from './utils/7MXox.jpg';
import { EqualDepth, Euler } from 'three';
import { useFrame } from '@react-three/fiber';
export default function Earth({ pos }) {

  const earthTexture = useTexture(texture);
    const [rotation, setRotation] = useState([0, 0, 0]);

    useFrame(() => {
      setRotation([rotation[0] , rotation[1]+ 0.01, rotation[2]]);
    });
  
  return (

    <mesh position={[pos.x, pos.y, pos.z]} castShadow receiveShadow rotation={rotation}>
      <sphereGeometry args={[0.20, 64, 64]}></sphereGeometry>
      <meshStandardMaterial map={earthTexture} ></meshStandardMaterial>
    </mesh>
  )
}
