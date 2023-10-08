import React from 'react'
import texture from './utils/moon_texture.jpg';
import { useTexture } from '@react-three/drei';
export default function Moon({ pos }) {
  const moonTexture = useTexture(texture);
  return (
    <mesh position={[pos.x, pos.y, pos.z]} castShadow receiveShadow>
      <sphereGeometry args={[0.08, 64, 64]}></sphereGeometry>
      <meshStandardMaterial map={moonTexture}></meshStandardMaterial>
    </mesh>
  )
}
