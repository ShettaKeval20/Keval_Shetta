import React, { useRef, useState, useEffect } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { TextureLoader } from "three";
import { Decal, Html } from "@react-three/drei";
import * as THREE from "three";

export default function SkillBall({ imgUrl, position, skill, showHintText }) {
  const meshRef = useRef();
  const texture = useLoader(TextureLoader, imgUrl);

  const [hovered, setHovered] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  // ✅ Always pulse for all balls
  const [pulsing, setPulsing] = useState(true);

  // ✅ After few sec, stop pulse
  useEffect(() => {
    const timer = setTimeout(() => setPulsing(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  useFrame(() => {
    const mesh = meshRef.current;
    if (!mesh) return;

    if (hovered) {
      const targetX = -mouse.y * 0.003;
      const targetY = mouse.x * 0.003;
      mesh.rotation.x = THREE.MathUtils.lerp(mesh.rotation.x, targetX, 0.1);
      mesh.rotation.y = THREE.MathUtils.lerp(mesh.rotation.y, targetY, 0.1);
    } else {
      mesh.rotation.x = THREE.MathUtils.lerp(mesh.rotation.x, 0, 0.1);
      mesh.rotation.y = THREE.MathUtils.lerp(mesh.rotation.y, 0, 0.1);
    }

    if (!hovered && pulsing) {
      const scale = 1 + 0.05 * Math.sin(Date.now() * 0.005);
      mesh.scale.set(scale, scale, scale);
    } else {
      const scale = hovered ? 1.1 : 1;
      mesh.scale.set(scale, scale, scale);
    }
  });

  return (
    <group position={position}>
      <mesh
        ref={meshRef}
        onPointerOver={(e) => {
          setHovered(true);
          e.stopPropagation();
        }}
        onPointerOut={() => setHovered(false)}
        onPointerMove={(e) => {
          setMouse({ x: e.clientX, y: e.clientY });
        }}
        cursor="pointer"
      >
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial color="#ffffff" flatShading />

        <Decal
          map={texture}
          position={[0, 0, 0.98]}
          rotation={[0, 0, 0]}
          scale={1.5}
          flatShading
        />
      </mesh>

      {/* ✅ Tooltip when hovered */}
      {hovered && (
        <Html
          position={[0, 3, 2]}
          center
          distanceFactor={12}
        >
          <div className="w-[400px] bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl p-8 text-center text-black">
            <p className="text-3xl font-extrabold mb-4">{skill.name}</p>
            <p className="text-xl mb-2">🗓️ Experience: {skill.experience}</p>
            <p className="text-xl mb-2">📂 Projects: {skill.projects}</p>
            <p className="text-xl">✅ Confidence: {skill.confidence}</p>
          </div>
        </Html>
      )}

      {/* ✅ Show hint text only if allowed */}
      {showHintText && pulsing && !hovered && (
        <Html
          position={[0, -2, 0]}
          center
          distanceFactor={8}
        >
          <div className="text-sm md:text-base bg-black/70 text-white px-3 py-1 rounded-full shadow-md animate-bounce">
            👆 Hover or Tap to see details!
          </div>
        </Html>
      )}
    </group>
  );
}
