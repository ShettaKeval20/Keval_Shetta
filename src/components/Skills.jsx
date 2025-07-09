import React, { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import SkillBall from "./SkillBall";

// ✅ All skills list
const skills = [
  { name: "React", img: "icons/React.png", experience: "2 years", projects: 10, proficiency: "Advanced", projectLink: "#projects-react" },
  { name: "HTML5", img: "/icons/HTML5.png", experience: "3 years", projects: 12, proficiency: "Advanced" },
  { name: "CSS3", img: "/icons/CSS3.png", experience: "3 years", projects: 12, proficiency: "Advanced" },
  { name: "Javascript", img: "/icons/Javascript.webp", experience: "2.5 years", projects: 9, proficiency: "Advanced" },

  // Mobile Development
  { name: "JAVA", img: "/icons/JAVA.svg", experience: "2 years", projects: 5, proficiency: "Intermediate" },
  { name: "Kotlin", img: "/icons/Kotlin.png", experience: "1.5 years", projects: 4, proficiency: "Intermediate" },
  { name: "Jetpack", img: "/icons/Jetpack.png", experience: "1.5 years", projects: 4, proficiency: "Intermediate" },
  { name: "Swift", img: "/icons/Swift.png", experience: "1 year", projects: 2, proficiency: "Beginner" },

  // Backend
  { name: "MySQL", img: "/icons/Mysql.png", experience: "2 years", projects: 6, proficiency: "Intermediate" },
  { name: "Node.js", img: "/icons/Node.png", experience: "1 year", projects: 3, proficiency: "Intermediate" },
  { name: "Firebase", img: "/icons/Firebase.png", experience: "2 years", projects: 5, proficiency: "Advanced" },
  { name: "Python", img: "/icons/Python.png", experience: "3 years", projects: 8, proficiency: "Advanced" },

  // Design & DevOps
  { name: "Figma", img: "/icons/Figma.png", experience: "2 years", projects: 7, proficiency: "Advanced" },
  { name: "Docker", img: "/icons/Docker.png", experience: "1 year", projects: 3, proficiency: "Beginner" },
  { name: "Git", img: "/icons/Git.png", experience: "2 years", projects: 10, proficiency: "Advanced" },
];

const getBallScale = (width) => {
  if (width < 640) return 0.65;   // Mobile
  if (width < 1024) return 0.85;  // Tablet
  return 1.0;                     // Desktop
};


const getRowStructure = (width) => {
  if (width < 640) return [3, 3, 3, 3];     // Mobile
  if (width < 1024) return [6, 5, 4];       // Tablet
  return [7, 5, 3];                            // Laptop
};

export default function Skills() {
  const [rows, setRows] = useState(getRowStructure(window.innerWidth));
  const [scale, setScale] = useState(getBallScale(window.innerWidth));


  useEffect(() => {
    const handleResize = () => {
      setRows(getRowStructure(window.innerWidth));
      const handleResize = () => {
  setRows(getRowStructure(window.innerWidth));
  setScale(getBallScale(window.innerWidth));
};

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

  // ✅ Responsive Y Offset
  let yOffset = 0;
  if (window.innerWidth < 640) {
    yOffset = 2.5; // Mobile
  } else if (window.innerWidth < 1024) {
    yOffset = 1.5; // Tablet
  } else {
    yOffset = 0.5; // Laptop
  }

  const startY = totalHeight / 2.5 + yOffset;

  rows.forEach((itemsInRow, rowIndex) => {
    const offsetX = ((itemsInRow - 1) * spacing) / 2;
    const y = startY - rowIndex * rowHeight;

    for (let i = 0; i < itemsInRow; i++) {
      if (skillIndex >= skills.length) break;
      const x = i * spacing - offsetX;
      positions.push([x, y, 0]);
      skillIndex++;
    }
  });

  return positions;
};

  const positions = generatePositions();

  return (
    <section id="skills" 
    className="h-screen bg-[#0f172a] text-white">
      <h2 className="text-center text-3xl font-bold py-2 text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-indigo-400">
        🚀 Tech Stack - 3D Universe
      </h2>

        {/* 👇 New modern hover hint line */}
  {/* <p className="text-center text-sm md:text-base text-gray-400 mb-4 animate-fade-in">
    (Please hover on skill ball to explore my experience & proficiency.)
  </p> */}
  
      <Canvas camera={{ position: [0, 0, 12], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <Environment preset="sunset" />

        {positions.map((pos, index) => (
  <SkillBall
    key={index}
    imgUrl={skills[index].img}
    position={pos}
    skill={skills[index]}
    scale={scale}
    showHintText={index === 0}
  />
))}

      </Canvas>

              {/* Scroll Down Icon */}
        <div className="absolute bottom-6 right-6 flex flex-col items-center text-white/60 z-30 animate-bounce">
  <span className="material-icons text-3xl">expand_more</span>
  <span className="text-xs mt-1">Scroll Down</span>
</div>
    </section>
  );
}