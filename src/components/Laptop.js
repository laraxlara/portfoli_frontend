import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/laptop.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0, 0.98, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.Frame_ComputerFrame_0.geometry} material={materials.ComputerFrame} />
          </group>
          <group position={[0, 0.65, -10.3]} rotation={[Math.PI, 0, -Math.PI]} scale={[100, 100, 88.24]}>
            <mesh geometry={nodes.Screen_ComputerScreen_0.geometry} material={materials.ComputerScreen} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/laptop.gltf')
