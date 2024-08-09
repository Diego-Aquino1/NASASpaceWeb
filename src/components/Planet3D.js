import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { useLoader } from '@react-three/fiber';

function Planet3D({ texture, position, size, onClick }) {
    const planetRef = useRef();
    const textureMap = useLoader(TextureLoader, texture);
  
    useFrame(() => {
      planetRef.current.rotation.y += 0.005;
    });
  
    return (
      <mesh ref={planetRef} position={position} onClick={onClick}>
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial map={textureMap} />
      </mesh>
    );
  }

export default Planet3D;
