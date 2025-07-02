import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import { FaGithub, FaVideo } from "react-icons/fa";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "Built with React, TailwindCSS, and Three.js. Features 3D animated skills, responsive layout, and optimized Lighthouse scores.",
    github: "https://github.com/keval/portfolio",
    video: "#",
    tech: ["React", "Tailwind", "Three.js"],
    image: "/icons/React.png",
    demo: "https://kevalshetta.com",
    year: "2025",
    team: "Solo",
  },
  {
    title: "Task Manager App",
    description:
      "A clean and modern To-Do app with CRUD, localStorage, and responsive UI. Built for fast productivity.",
    github: "https://github.com/keval/task-manager",
    video: "#",
    tech: ["JavaScript", "HTML", "CSS"],
    image: "/icons/adobe.png",
    demo: "https://taskapp.netlify.app",
    year: "2024",
    team: "Solo",
  },
  // More projects...
];

export default function Projects() {
  return (
    <section id="projects" className="bg-[#0d1117] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">
          💼 Projects Showcase
        </h3>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  const [expanded, setExpanded] = useState(false);
  const shortDescription = project.description.slice(0, 80);

  return (
    <Tilt
      glareEnable={true}
      glareMaxOpacity={0.15}
      glareColor="#ffffff"
      scale={1.01}
      className="w-full transition-transform"
    >
      <div className="bg-[#1a1f2c]/80 backdrop-blur-md border border-white/10 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group">
        {/* Image + Overlay */}
        <div className="relative h-40 w-full rounded-xl overflow-hidden mb-4">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80" />
        </div>

        {/* Title */}
        <h4 className="text-xl font-semibold mb-1">{project.title}</h4>
        <p className="text-xs text-gray-400 mb-2">
          {project.year} • Team: {project.team}
        </p>

        {/* Description */}
        <p className="text-sm text-gray-300 mb-2">
          {expanded ? project.description : `${shortDescription}...`}
        </p>
        {project.description.length > 80 && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-blue-400 text-xs hover:underline mb-4"
          >
            {expanded ? "View Less" : "View More"}
          </button>
        )}

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="bg-[#2a2f3c] text-xs text-gray-300 px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-4 mt-2">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-blue-400 hover:underline"
          >
            <FaGithub /> GitHub
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-green-400 hover:underline"
            >
              🌐 Live Demo
            </a>
          )}
          {project.video !== "#" && (
            <a
              href={project.video}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-pink-400 hover:underline"
            >
              <FaVideo /> Video
            </a>
          )}
        </div>
      </div>
    </Tilt>
  );
}
