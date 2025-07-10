import React, { useRef, useState, useEffect } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { TextureLoader } from "three";
import { Decal, Html } from "@react-three/drei";
import * as THREE from "three";
import { useNavigate } from "react-router-dom";

const MOUSE_ROTATE_SPEED = 0.003;
const RETURN_SPEED = 0.1;
const TOOLTIP_DELAY = 3000;

export default function SkillBall({ imgUrl, position, skill, scale }) {
  const meshRef = useRef();
  const texture = useLoader(TextureLoader, imgUrl);
  const [hovered, setHovered] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const tooltipTimeout = useRef(null);
  const navigate = useNavigate();

  useFrame(() => {
    const mesh = meshRef.current;
    if (!mesh) return;

    const targetX = hovered ? -mouse.y * MOUSE_ROTATE_SPEED : 0;
    const targetY = hovered ? mouse.x * MOUSE_ROTATE_SPEED : 0;

    mesh.rotation.x = THREE.MathUtils.lerp(mesh.rotation.x, targetX, RETURN_SPEED);
    mesh.rotation.y = THREE.MathUtils.lerp(mesh.rotation.y, targetY, RETURN_SPEED);
  });

  useEffect(() => {
    if (!hovered && showTooltip) {
      tooltipTimeout.current = setTimeout(() => {
        setShowTooltip(false);
      }, TOOLTIP_DELAY);
    }
    return () => clearTimeout(tooltipTimeout.current);
  }, [hovered]);

  const handleClick = () => {
    if (skill.projectLink && skill.projectLink !== "#") {
      navigate(skill.projectLink);
    }
  };

  return (
    <group>
      <mesh
        ref={meshRef}
        position={position}
        onPointerOver={(e) => {
          clearTimeout(tooltipTimeout.current);
          setHovered(true);
          setShowTooltip(true);
          e.stopPropagation();
        }}
        onPointerOut={() => setHovered(false)}
        onPointerMove={(e) => setMouse({ x: e.clientX, y: e.clientY })}
        onClick={handleClick}
        scale={hovered ? scale * 1.15 : scale}
        cursor={skill.projectLink ? "pointer" : "default"}
      >
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#ffffff"
          flatShading
          emissive={hovered ? "#8b5cf6" : "#000000"}
          emissiveIntensity={hovered ? 0.8 : 0}
        />
        <Decal map={texture} position={[0, 0, 1]} rotation={[0, 0, 0]} scale={1.3} flatShading />
      </mesh>

      {/* {showTooltip && (
        <Html position={[...position.slice(0, 2), position[2] + 1.8]} center>
          <div className="bg-black text-white px-4 py-3 rounded-xl shadow-lg text-xs md:text-sm leading-relaxed w-max text-left space-y-1 border border-fuchsia-400">
            <div className="font-bold text-fuchsia-400">{skill.name}</div>
            <div><span className="text-gray-400">Experience:</span> {skill.experience}</div>
            <div><span className="text-gray-400">Projects:</span> {skill.projects}+</div>
            <div><span className="text-gray-400">Proficiency:</span> {skill.proficiency}</div>
            {skill.projectLink && (
              <div className="pt-1 text-blue-400 underline text-xs">
                Click to view related project
              </div>
            )}
          </div>
        </Html>
      )} */}
    </group>
  );
}
