import React, { useRef, useState } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { TextureLoader } from "three";
import { Decal, Html } from "@react-three/drei";
import * as THREE from "three";

const MOUSE_ROTATE_SPEED = 0.003;
const RETURN_SPEED = 0.1;

export default function SkillBall({ imgUrl, position, skill }) {
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
      mesh.rotation.x = THREE.MathUtils.lerp(mesh.rotation.x, 0, RETURN_SPEED);
      mesh.rotation.y = THREE.MathUtils.lerp(mesh.rotation.y, 0, RETURN_SPEED);
    }
  });

  return (
    <group>
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
        scale={hovered ? 1.15 : 1}
        cursor="pointer"
      >
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#ffffff"
          flatShading
          emissive={hovered ? "#00ffff" : "#000000"}
          emissiveIntensity={hovered ? 0.6 : 0}
        />
        <Decal
          map={texture}
          position={[0, 0, 1]}
          rotation={[0, 0, 0]}
          scale={1.5}
          flatShading
        />
      </mesh>

      {/* Tooltip */}
      {hovered && (
        <Html position={[...position.slice(0, 2), position[2] + 1.5]} center>
          <div className="text-xs md:text-sm bg-white text-black px-2 py-1 rounded shadow-md">
            <strong>{skill.name}</strong>
            <br />
            {skill.experience}, {skill.projects}+ Projects
          </div>
        </Html>
      )}
    </group>
  );
}
