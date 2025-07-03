import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaVideo } from "react-icons/fa";
import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";
import projects from "../../data/projects"; // ✅ Your data file

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", ...new Set(projects.map((p) => p.category))];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section
      id="projects"
      className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] py-20 px-6 text-white"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-indigo-400"
        >
          💻 Projects That Define Me
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition duration-300 border backdrop-blur-md shadow-md hover:shadow-fuchsia-500/30 ${
                selectedCategory === cat
                  ? "bg-fuchsia-600 text-white"
                  : "bg-white/5 text-gray-300 hover:bg-fuchsia-800/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {filteredProjects.length === 0 ? (
          <p className="text-center text-gray-400">No projects found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
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
    <Tilt
      glareEnable
      glareMaxOpacity={0.2}
      glareColor="#f0abfc"
      scale={1.02}
      transitionSpeed={1500}
      className="w-full"
    >
      <Link
        to={`/projects/${project.id}`}
        className="block bg-[#1e1b2e]/70 backdrop-blur-md border border-fuchsia-500/20 rounded-2xl p-5 transition-all shadow-[0_0_20px_#c084fc44] hover:shadow-[0_0_35px_#d946ef] group"
      >
        <div className="relative h-44 w-full rounded-xl overflow-hidden mb-4">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>

        <h4 className="text-xl font-bold mb-1 text-white">{project.title}</h4>
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
              className="bg-purple-700/30 border border-purple-400/20 text-xs text-purple-100 px-3 py-1 rounded-full shadow-[0_0_8px_#c084fc33]"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between text-sm text-purple-300">
          <span className="flex items-center gap-1 hover:text-fuchsia-400">
            <FaGithub /> GitHub
          </span>

          {project.video !== "#" && (
            <span className="flex items-center gap-1 hover:text-pink-400">
              <FaVideo /> Video
            </span>
          )}
        </div>

        <div className="text-right mt-4">
          <span className="text-xs text-fuchsia-400 hover:underline">
            View More →
          </span>
        </div>
      </Link>
    </Tilt>
  );
}
