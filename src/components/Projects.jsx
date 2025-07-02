import React, { useState } from 'react';
import { FaGithub, FaVideo } from 'react-icons/fa';

// Example projects with image
const projects = [
  {
    title: "Portfolio Website",
    description: "Personal portfolio built using React, TailwindCSS, and Three.js. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget ipsum euismod, vulputate tellus in, dictum metus. Integer euismod metus at ligula vehicula, at dignissim nisi scelerisque.",
    github: "https://github.com/keval/portfolio",
    video: "#",
    tech: ["React", "Tailwind", "Three.js"],
    image: "https://via.placeholder.com/600x400.png?text=Portfolio+Image",
  },
  {
    title: "Task Manager App",
    description: "A full-featured To-Do app with CRUD operations and local storage. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    github: "https://github.com/keval/task-manager",
    video: "#",
    tech: ["JavaScript", "HTML", "CSS"],
    image: "https://via.placeholder.com/600x400.png?text=Task+Manager+Image",
  },
  // Add more projects...
];

export default function Projects() {
  return (
    <section id="projects" className="bg-[#0d1117] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold mb-10 text-center">Projects</h3>
        <div className="space-y-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  const [expanded, setExpanded] = useState(false);

  const shortDescription = project.description.slice(0, 120);

  return (
    <div className="flex flex-col md:flex-row bg-[#161b22] border border-[#30363d] rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
      {/* ✅ Left Side: Image */}
      <div className="md:w-1/2 h-60 md:h-auto">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* ✅ Right Side: Content */}
      <div className="md:w-1/2 p-6 flex flex-col justify-between">
        <div>
          <h4 className="text-xl font-semibold mb-2">{project.title}</h4>

          <p className="text-sm text-gray-300 mb-2">
            {expanded ? project.description : `${shortDescription}...`}
          </p>
          {project.description.length > 120 && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="text-blue-400 text-xs hover:underline mb-4"
            >
              {expanded ? "View Less" : "View More"}
            </button>
          )}

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech, i) => (
              <span
                key={i}
                className="bg-[#21262d] text-xs text-gray-300 px-3 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-4 mt-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-blue-400 hover:underline"
          >
            <FaGithub /> GitHub
          </a>
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
    </div>
  );
}
