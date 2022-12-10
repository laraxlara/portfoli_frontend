import React, { Suspense, useRef, useState, useEffect } from 'react'
import * as THREE from 'three'
import { Canvas, useFrame } from '@react-three/fiber'
import { Html, useGLTF } from '@react-three/drei'
import { motion } from "framer-motion"

import Layout from '../components/layout'
import Laptop from '../components/Laptop'

import background from '../videos/background.mp4'

import '../styles/Home.css'

function Model(props) {
    const group = useRef()
    useFrame(({ pointer }) => (group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, pointer.x * (Math.PI / 5), 0.005)))
    return (
      <group ref={group} {...props}>
        <mesh castShadow receiveShadow rotation={[-Math.PI / 1.1, 3.4, -3.14]} scale={[0.19, 0.2, 0.224]} dispose={null}>
          <Laptop />
          <meshStandardMaterial roughness={0.9} metalness={0.5} color="#474747" />
        </mesh>
        <Lights />
      </group>
    )
  }
  
  
  const MyMesh = () => {
      const refMesh = useRef();
    
      useFrame(() => {
        if(refMesh.current) {
          refMesh.current.rotation.x += 0.002;
        }
      });
      return (<mesh ref={refMesh} position={[4, 0, -4]} ><Laptop /></mesh>);
    }
    
    const Greeting = () => {
      const [cursorPosition, setCursorPosition] = useState({
        x: 0,
        y: 0
      })
  
      const [cursorVariant, setCursorVariant] = useState('default')
    
      useEffect(() => {
        const mouseMove = e => {
          setCursorPosition({
            x: e.clientX,
            y: e.clientY
          })
        }
    
        window.addEventListener('mousemove', mouseMove)
    
        return () => {
          window.addEventListener('mousemove', mouseMove)
        }
      }, [])
  
      const variants = {
        default: {
          x: cursorPosition.x - 16,
          y: cursorPosition.y - 16
        },
        text: {
          height: 140,
          width: 140,
          x: cursorPosition.x - 75,
          y: cursorPosition.y - 75,
          mixBlendMode: 'difference'
        }
      }
  
      const textEnter = () => setCursorVariant('text')
      const textLeave = () => setCursorVariant('default')
  
      return (    
        <group position={[0, 0, 0]}>
          <Html fullscreen>
            <div className='greeting-wrapper'>
              <h2 onMouseEnter={textEnter} onMouseLeave={textLeave}>Hi, <br/> I'm Lara. <br/> Web Developer.</h2>
              <h1 onMouseEnter={textEnter} onMouseLeave={textLeave}>Website Design And Development Services Including SEO Optimization</h1>
              <motion.div className='cursor' variants={variants} animate={cursorVariant} />
            </div>
          </Html>
        </group>
      )
    }
  
    function Lights() {
      const groupL = useRef()
      const groupR = useRef()
      const front = useRef()
      useFrame(({ pointer }) => {
        groupL.current.rotation.y = THREE.MathUtils.lerp(groupL.current.rotation.y, -pointer.x * (Math.PI / 2), 0.1)
        groupR.current.rotation.y = THREE.MathUtils.lerp(groupR.current.rotation.y, pointer.x * (Math.PI / 2), 0.1)
        front.current.position.x = THREE.MathUtils.lerp(front.current.position.x, pointer.x * 12, 0.05)
        front.current.position.y = THREE.MathUtils.lerp(front.current.position.y, 7 + pointer.y * 4, 0.05)
      })
      return (
        <>
          <group ref={groupL}>
            <pointLight position={[0, 7, -15]} distance={15} intensity={100} />
          </group>
          <group ref={groupR}>
            <pointLight position={[0, 7, -15]} distance={15} intensity={10} />
          </group>
          <spotLight castShadow ref={front} penumbra={0.75} angle={Math.PI / 4} position={[0, 0, 6]} distance={10} intensity={15} shadow-mapSize={[2048, 2048]} />
        </>
      )
    }
  
    function Zoom() {
      useFrame((state) => {
        state.camera.position.lerp({ x: 0, y: 0, z: 12 }, 0.005)
        state.camera.lookAt(0, 0, 0)
      })
    }

    
const Home = () => {
  return (
    <Layout>
      <div className='canvas-container'>
          <video src={background} autoPlay muted loop />
            <Canvas shadows camera={{ position: [0, 1.5, 14], fov: 30 }} className='canvas'>
              <fog attach="fog" args={['black', 0, 20]} />
              <pointLight position={[0, 10, -10]} intensity={1} />
                <Suspense fallback={null}>    
                <Model position={[0, -1.5, 0]} rotation={[0, -0.2, 0]} />
                <Zoom />
                <Greeting />
                </Suspense>
            </Canvas>
        </div>
    </Layout>
  )
}

export default Home
