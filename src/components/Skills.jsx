import React from "react";
import { Canvas } from "@react-three/fiber";
import { Html, Environment } from "@react-three/drei";
import SkillBall from "./SkillBall";

// ✅ Grouped skill categories with aligned positions
const skillCategories = [
  {
    title: "Website Development",
    position: [-7.5, 5, 0],
    skills: [
      { name: "React", img: "/public/icons/React.png", experience: "5 years", projects: 12, confidence: 5},
      { name: "HTML5", img: "/public/icons/HTML5.png",experience: "5 years", projects: 12, confidence: 5 },
      { name: "CSS3", img: "/public/icons/CSS3.png",experience: "5 years", projects: 12, confidence: 5 },
      { name: "Javascript", img: "/public/icons/Javascript.webp",experience: "5 years", projects: 12, confidence: 5 },
    ],
  },
  {
    title: "App Development",
    position: [7.5, 5, 0],
    skills: [
      { name: "Kotlin", img: "/public/icons/Kotlin.png",experience: "5 years", projects: 12, confidence: 5 },
      { name: "Firebase", img: "/public/icons/Jetpack.png",experience: "5 years", projects: 12, confidence: 5 },
      { name: "MySQL", img: "/public/icons/JAVA.svg",experience: "5 years", projects: 12, confidence: 5 },
      { name: "Jetpack", img: "/public/icons/Swift.png",experience: "5 years", projects: 12, confidence: 5 },
    ],
  },
  {
    title: "Backend Development",
    position: [-7.5, -1, 0],
    skills: [
      { name: "Figma", img: "/public/icons/Node.png" },
      { name: "Figma", img: "/public/icons/Mysql.png" },
      { name: "Figma", img: "/public/icons/Firebase.png" },
      { name: "Jetpack", img: "/public/icons/Python.png" },
    ],
  },
  {
    title: "Tools",
    position: [7.5, -1, 0],
    skills: [
      { name: "Jetpack", img: "/public/icons/Figma.png" },
      { name: "Jetpack", img: "/public/icons/Adobe.png" },
      { name: "Jetpack", img: "/public/icons/Git.png" },
      { name: "Jetpack", img: "/public/icons/Docker.png" },
    ],
  },
];

export default function Skills() {
  const spacing = 2.5; // horizontal distance between skill balls

  return (
    <section id="skills" className="h-screen bg-[#0f172a] text-white">
      <h2 className="text-center text-3xl font-bold py-6 text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-indigo-400">
        🚀 My Technical Skills
      </h2>

      <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[1.5, 1.5, 1.5]} />
        <Environment preset="studio" />

        {skillCategories.map((category, index) => {
          const [groupX, groupY, groupZ] = category.position;
          const count = category.skills.length;
          const totalWidth = (count - 1) * spacing;

          return (
            <group key={index} position={[groupX, groupY, groupZ]}>
              {/* Category Label */}
              <Html position={[0, 2.5, 0]} center>
                <div className="text-lg md:text-xl font-semibold bg-black/70 px-4 py-1 rounded-full shadow backdrop-blur">
                  {category.title}
                </div>
              </Html>

              {/* Skill Balls */}
              {category.skills.map((skill, i) => {
                const x = -totalWidth / 2 + i * spacing;
                return (
                  <SkillBall
                    key={i}
                    imgUrl={skill.img}
                    position={[x, 0, 0]}
                    skill={skill}
                    showPulse={true}
                    showHintText={index === 0 && i === 0}
                  />
                );
              })}
            </group>
          );
        })}
      </Canvas>
    </section>
  );
}
