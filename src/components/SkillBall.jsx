import React, { useRef, useState } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { TextureLoader } from "three";
import { Decal } from "@react-three/drei";
import * as THREE from "three";

// 👇 Tweak as needed
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
      // 🔁 Return to perfect front view
      mesh.rotation.x = THREE.MathUtils.lerp(mesh.rotation.x, 0, RETURN_SPEED);
      mesh.rotation.y = THREE.MathUtils.lerp(mesh.rotation.y, 0, RETURN_SPEED);
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
      {/* 🔵 Ball base */}
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial color="#ffffff" flatShading />

      {/* 🟣 Image on front face */}
      <Decal
        map={texture}
        position={[0, 0, 0.98]} // Right on front
        rotation={[0, 0, 0]}
        scale={1.5}
        flatShading
      />
    </mesh>
  );
}
