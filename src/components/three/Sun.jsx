import React from 'react'
import texture from './utils/sun.jpeg'
import { useTexture } from '@react-three/drei'

export default function Sun({ pos }) {
  // const sunTexture = useTexture(texture);
  return (
    <mesh position={[pos.x, pos.y, pos.z]} castShadow receiveShadow>
      <sphereGeometry args={[0.5, 64, 64]}></sphereGeometry>
      <meshStandardMaterial color="#ff0000"></meshStandardMaterial>
    </mesh>
  )
}
