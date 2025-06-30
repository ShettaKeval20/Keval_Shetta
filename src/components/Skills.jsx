import React from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import SkillBall from "./SkillBall";

const skills = [
  { name: "React", img: "/public/icons/React.png", shouldRotate: true },   // ✅ this will spin
  { name: "JavaScript", img: "/public/icons/HTML5.png" },
  { name: "Tailwind", img: "/public//icons/CSS3.png" },
  { name: "Figma", img: "/public//icons/Javascript.webp" },
  { name: "Next.js", img: "/public//icons/JAVA.svg" },
  { name: "Firebase", img: "/public//icons/Kotlin.png" },
  { name: "Node.js", img: "/public//icons/Jetpack.png" },
  { name: "Kotlin", img: "/public//icons/Firebase.png" },
  { name: "Framer", img: "/public//icons/Mysql.png" },
  { name: "GitHub", img: "/public//icons/React.png" },
];



const generatePosition = (index) => {
  const itemsInFirstRow = 6;
  const rowHeight = 2.5;
  const spacing = 2.5;

  const row = index < itemsInFirstRow ? 0 : 1;
  const indexInRow = index < itemsInFirstRow ? index : index - itemsInFirstRow;

  const rowCount = row === 0 ? itemsInFirstRow : skills.length - itemsInFirstRow;
  const offset = ((rowCount - 1) * spacing) / 2;

  return [
    indexInRow * spacing - offset, // x
    row === 0 ? 2 : -1,            // y
    0                              // z
  ];
};

export default function Skills() {
  return (
    <section id="skills" className="h-screen bg-[#0f172a] text-white">
      <h2 className="text-center text-3xl font-bold py-6 text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-indigo-400">
        🚀 Tech Stack - 3D Universe
      </h2>
      <Canvas camera={{ position: [0, 0, 12], fov: 60 }}>
  <ambientLight intensity={0.5} />
  <directionalLight position={[5, 5, 5]} />
  {/* ❌ Remove or lock OrbitControls */}
  {/* <OrbitControls enableZoom={true} enableRotate={false} /> */}
  <Environment preset="sunset" />

  {skills.map((skill, index) => (
    <SkillBall
      key={index}
      imgUrl={skill.img}
      position={generatePosition(index)}
    />
  ))}
</Canvas>

    </section>
  );
}