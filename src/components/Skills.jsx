import React, { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import SkillBall from "./SkillBall";

// ✅ All skills list
const skills = [
  { name: "React", img: "/public/icons/React.png" },
  { name: "JavaScript", img: "/public/icons/HTML5.png" },
  { name: "Tailwind", img: "/public/icons/CSS3.png" },
  { name: "Figma", img: "/public/icons/Javascript.webp" },
  { name: "Next.js", img: "/public/icons/JAVA.svg" },
  { name: "Firebase", img: "/public/icons/Kotlin.png" },
  { name: "Node.js", img: "/public/icons/Jetpack.png" },
  { name: "Kotlin", img: "/public/icons/Firebase.png" },
  { name: "Framer", img: "/public/icons/Mysql.png" },
  { name: "GitHub", img: "/public/icons/Figma.png" },
];

const getRowStructure = (width) => {
  if (width < 640) return [3, 3, 3, 1];     // Mobile
  if (width < 1024) return [4, 4, 2];       // Tablet
  return [6, 4];                            // Laptop
};

export default function Skills() {
  const [rows, setRows] = useState(getRowStructure(window.innerWidth));

  useEffect(() => {
    const handleResize = () => {
      setRows(getRowStructure(window.innerWidth));
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const spacing = 2.5;
  const rowHeight = 2.5;

  const generatePositions = () => {
    const positions = [];
    let skillIndex = 0;

    const totalRows = rows.length;
    const totalHeight = (totalRows - 1) * rowHeight;

    // ✅ Add an upward offset to lift the grid closer to the heading
    const yOffset = 2.5; // tweak this value as needed
    const startY = totalHeight / 2.5 + yOffset;

    rows.forEach((itemsInRow, rowIndex) => {
      const offsetX = ((itemsInRow - 1) * spacing) / 2;
      const y = startY - rowIndex * rowHeight;

      for (let i = 0; i < itemsInRow; i++) {
        if (skillIndex >= skills.length) break; // prevent overflow
        const x = i * spacing - offsetX;
        positions.push([x, y, 0]);
        skillIndex++;
      }
    });

    return positions;
  };

  const positions = generatePositions();

  return (
    <section id="skills" className="h-screen bg-[#0f172a] text-white">
      <h2 className="text-center text-3xl font-bold py-6 text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-indigo-400">
        🚀 Tech Stack - 3D Universe
      </h2>
      <Canvas camera={{ position: [0, 0, 12], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <Environment preset="sunset" />

        {positions.map((pos, index) => (
          <SkillBall key={index} imgUrl={skills[index].img} position={pos} />
        ))}
      </Canvas>
    </section>
  );
}
