import React, { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import SkillBall from "./SkillBall";

// ✅ All skills list
const skills = [
  // Webiste Development Skills
  { name: "React", img: "/public/icons/React.png", experience: "2 years", Projects: 5, confidence: 4 },
  { name: "HTML5", img: "/public/icons/HTML5.png", experience: "2 years", Projects: 5, confidence: 4  },
  { name: "CSS3", img: "/public/icons/CSS3.png", experience: "2 years", Projects: 5, confidence: 4  },
  { name: "Javascript", img: "/public/icons/Javascript.webp", experience: "2 years", Projects: 5, confidence: 4  },
  
  // Mobile Development Skills
  { name: "JAVA", img: "/public/icons/JAVA.svg", experience: "2 years", Projects: 5, confidence: 4  },
  { name: "Kotlin", img: "/public/icons/Kotlin.png", experience: "2 years", Projects: 5, confidence: 4  },
  { name: "Jetpack", img: "/public/icons/Jetpack.png", experience: "2 years", Projects: 5, confidence: 4  },
  { name: "Swift", img: "/public/icons/Swift.png", experience: "2 years", Projects: 5, confidence: 4  },
  
  // Backend Skills
  { name: "Mysql", img: "/public/icons/Mysql.png", experience: "2 years", Projects: 5, confidence: 4  },
  { name: "Figma", img: "/public/icons/Node.png", experience: "2 years", Projects: 5, confidence: 4  },
  { name: "Firebase", img: "/public/icons/Firebase.png", experience: "2 years", Projects: 5, confidence: 4  },
  { name: "Python", img: "/public/icons/Python.png", experience: "2 years", Projects: 5, confidence: 4  },

  // Design Skills
  { name: "Figma", img: "/public/icons/Figma.png", experience: "2 years", Projects: 5, confidence: 4  },
  { name: "Adobe", img: "/public/icons/Adobe.png", experience: "2 years", Projects: 5, confidence: 4  },
  { name: "Docker", img: "/public/icons/Docker.png", experience: "2 years", Projects: 5, confidence: 4  },
  { name: "Git", img: "/public/icons/Git.png", experience: "2 years", Projects: 5, confidence: 4  },
];

const getRowStructure = (width) => {
  if (width < 640) return [3, 3, 3, 3];     // Mobile
  if (width < 1024) return [4, 4, 4];       // Tablet
  return [7, 5, 4];                            // Laptop
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
    <section id="skills" className="h-screen bg-[#0f172a] text-white">
      <h2 className="text-center text-3xl font-bold py-2 text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-indigo-400">
        🚀 Tech Stack - 3D Universe
      </h2>
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
    showHintText={index === 0}
  />
))}

      </Canvas>
    </section>
  );
}