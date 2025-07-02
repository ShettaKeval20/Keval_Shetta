import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import { FaGithub, FaVideo } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import projects from "../../data/projects"; // ✅ use your shared data

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...new Set(projects.map((p) => p.category))];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="bg-[#0d1117] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl md:text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">
          💼 Projects Showcase
        </h3>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full border border-gray-600 text-sm transition ${
                selectedCategory === cat
                  ? "bg-purple-600 text-white"
                  : "bg-transparent text-gray-400 hover:bg-gray-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {filteredProjects.length === 0 ? (
          <p className="text-center text-gray-400">No projects found.</p>
        ) : (
          <div className="grid md:grid-cols-2 gap-10">
            {filteredProjects.map((project, index) => (
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
        )}
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <Link to={`/projects/${project.id}`} className="block group">
      <Tilt
        glareEnable
        glareMaxOpacity={0.15}
        glareColor="#ffffff"
        scale={1.01}
        className="w-full transition-transform"
      >
        <div className="bg-[#1a1f2c]/80 p-6 rounded-2xl border border-white/10 shadow-lg hover:shadow-2xl transition group-hover:scale-[1.02]">
          <div className="relative h-40 w-full rounded-xl overflow-hidden mb-4">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80" />
          </div>

          <h4 className="text-xl font-semibold mb-1">{project.title}</h4>
          <p className="text-xs text-gray-400 mb-2">
            {project.year} • Team: {project.team}
          </p>

          <p className="text-sm text-gray-300 mb-4 line-clamp-3">
            {project.description}
          </p>

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

          <div className="flex flex-wrap gap-4 mt-2">
            <span className="flex items-center gap-2 text-sm text-blue-400">
              <FaGithub /> GitHub
            </span>
            {project.demo && (
              <span className="flex items-center gap-2 text-sm text-green-400">
                🌐 Live Demo
              </span>
            )}
            {project.video !== "#" && (
              <span className="flex items-center gap-2 text-sm text-pink-400">
                <FaVideo /> Video
              </span>
            )}
          </div>
        </div>
      </Tilt>
    </Link>
  );
}
