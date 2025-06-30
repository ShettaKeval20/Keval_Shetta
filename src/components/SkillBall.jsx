import React, { useRef, useState } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { TextureLoader } from "three";
import { Decal } from "@react-three/drei";
import * as THREE from "three";

// Tweakable values
const AUTO_ROTATE_SPEED = 0.005;
const MOUSE_ROTATE_SPEED = 0.003;
const RETURN_SPEED = 0.1;

export default function SkillBall({ imgUrl, position }) {
  const meshRef = useRef();
  const texture = useLoader(TextureLoader, imgUrl);
  const [hovered, setHovered] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useFrame(() => {
    const mesh = meshRef.current;
    if (!mesh) return;

    if (hovered) {
      const targetX = -mouse.y * MOUSE_ROTATE_SPEED;
      const targetY = mouse.x * MOUSE_ROTATE_SPEED;
      mesh.rotation.x = THREE.MathUtils.lerp(mesh.rotation.x, targetX, RETURN_SPEED);
      mesh.rotation.y = THREE.MathUtils.lerp(mesh.rotation.y, targetY, RETURN_SPEED);
    } else {
      mesh.rotation.x += AUTO_ROTATE_SPEED * 0.5;
      mesh.rotation.y += AUTO_ROTATE_SPEED;
    }
  });

  return (
    <mesh
      ref={meshRef}
      position={position}
      onPointerOver={(e) => {
        setHovered(true);
        e.stopPropagation();
      }}
      onPointerOut={() => setHovered(false)}
      onPointerMove={(e) => {
        setMouse({ x: e.clientX, y: e.clientY });
      }}
      scale={hovered ? 1.1 : 1}
      cursor="pointer"
    >
      {/* 🟣 BALL */}
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial color="#ffffff" flatShading />

      {/* 🔵 IMAGE Decal perfectly centered on ball front */}
      <Decal
        map={texture}
        position={[0, 0, 0.98]}   // Centered on front face of ball
        rotation={[0, 0, 0]}
        scale={1.5}                // You can make this 0.5 or 0.4 to shrink
        flatShading
      />
    </mesh>
  );
}
