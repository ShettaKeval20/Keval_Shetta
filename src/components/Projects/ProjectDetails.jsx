import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  FaGithub,
  FaVideo,
  FaExternalLinkAlt,
  FaLightbulb,
  FaTools,
  FaCheckCircle,
  FaRocket,
  FaCode,
  FaKey,
  FaProjectDiagram,
  FaBrain,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import projects from "../../data/projects";

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);
  const [showCode, setShowCode] = useState(false);

  if (!project) {
    return (
      <div className="bg-[#0d1117] min-h-screen flex flex-col items-center justify-center text-white px-6">
        <h1 className="text-5xl font-extrabold mb-8">Project Not Found</h1>
        <Link
          to="/"
          className="text-blue-500 hover:text-blue-400 transition duration-200 text-lg"
        >
          ← Back to Home
        </Link>
      </div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3 },
    }),
  };

  return (
    <section className="relative bg-[#0d1117] min-h-screen px-6 py-20 md:py-32 text-white">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-indigo-900 via-purple-900 to-pink-900 opacity-30 filter blur-3xl"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 relative z-10">
        {/* Sidebar */}
        <motion.aside
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="md:col-span-4 bg-[#161b22]/70 backdrop-blur-md rounded-3xl p-8 flex flex-col sticky top-20 h-fit shadow-lg border border-gray-700"
        >
          <h2 className="text-4xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">
            {project.title}
          </h2>
          <img
            src={project.image}
            alt={project.title}
            className="rounded-2xl border border-gray-600 shadow-xl object-cover w-full mb-6"
          />

          <div className="space-y-5 text-gray-300 text-lg">
            <p><strong className="text-indigo-400">Year:</strong> {project.year}</p>
            <p><strong className="text-indigo-400">Team:</strong> {project.team}</p>
            <p><strong className="text-indigo-400">Category:</strong> {project.category}</p>

            <div>
              <strong className="text-indigo-400 block mb-2">Tech Stack</strong>
              <ul className="space-y-2">
                {project.tech.map((tech, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 bg-gradient-to-r from-purple-600 to-indigo-600 px-4 py-2 rounded-full shadow-md font-semibold text-white"
                  >
                    <FaRocket className="text-sm" />
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-auto pt-6 border-t border-gray-700 flex flex-col gap-4">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-blue-400 hover:text-blue-500 transition font-semibold text-lg">
                <FaGithub className="text-2xl" /> GitHub
              </a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-green-400 hover:text-green-500 transition font-semibold text-lg">
                <FaExternalLinkAlt className="text-2xl" /> Live Demo
              </a>
            )}
            {project.video && project.video !== "#" && (
              <a href={project.video} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-pink-400 hover:text-pink-500 transition font-semibold text-lg">
                <FaVideo className="text-2xl" /> Video
              </a>
            )}
          </div>
        </motion.aside>

        {/* Main Content */}
        <motion.div initial="hidden" animate="visible" variants={containerVariants} className="md:col-span-8 space-y-16">
          {/* Approach */}
          <motion.div custom={1} variants={containerVariants} className="bg-[#161b22]/70 backdrop-blur-md rounded-3xl p-12 shadow-xl border border-gray-700">
            <h3 className="flex items-center gap-4 text-indigo-400 text-4xl font-extrabold mb-6"><FaLightbulb /> Mindset & Approach</h3>
            <p className="text-gray-300 text-lg leading-relaxed">{project.detailedDescription}</p>
          </motion.div>

          {/* Challenges & Solutions */}
          <div className="grid md:grid-cols-2 gap-10">
            <motion.div custom={2} variants={containerVariants} className="bg-[#161b22]/70 rounded-3xl p-10 shadow-xl border border-red-700">
              <h4 className="flex items-center gap-3 text-red-500 text-3xl font-extrabold mb-4"><FaTools /> Challenges</h4>
              <p className="text-gray-300 text-lg">{project.challenges}</p>
            </motion.div>
            <motion.div custom={3} variants={containerVariants} className="bg-[#161b22]/70 rounded-3xl p-10 shadow-xl border border-green-600">
              <h4 className="flex items-center gap-3 text-green-400 text-3xl font-extrabold mb-4"><FaCheckCircle /> Solutions</h4>
              <p className="text-gray-300 text-lg">{project.solutions}</p>
            </motion.div>
          </div>

          {/* Features */}
          <motion.div custom={4} variants={containerVariants} className="bg-[#161b22]/70 rounded-3xl p-12 shadow-xl border border-indigo-600">
            <h3 className="text-indigo-400 text-4xl font-extrabold mb-8 flex items-center gap-4"><FaRocket /> Key Features</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300 text-lg">
              {project.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-4 p-4 bg-[#232a3a] rounded-lg shadow-md">
                  <FaCheckCircle className="text-green-400 text-xl" /> {feature}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* What I Learned */}
          <motion.div custom={5} variants={containerVariants} className="bg-[#161b22]/70 rounded-3xl p-12 shadow-xl border border-yellow-600">
            <h3 className="text-yellow-400 text-4xl font-extrabold mb-8 flex items-center gap-4"><FaBrain /> What I Learned</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              This project taught me how to structure scalable Firebase rules, implement OAuth securely, and handle real-time sync challenges. 
              I also learned to gather user feedback, iterate on UI/UX, and test security edge cases thoroughly.
            </p>
          </motion.div>

          {/* Key Decisions */}
          <motion.div custom={6} variants={containerVariants} className="bg-[#161b22]/70 rounded-3xl p-12 shadow-xl border border-purple-600">
            <h3 className="text-purple-400 text-4xl font-extrabold mb-8 flex items-center gap-4"><FaKey /> Key Decisions</h3>
            <ul className="list-disc list-inside text-gray-300 text-lg space-y-2">
              <li>Used Firebase Realtime DB over Firestore to ensure low-latency chat updates.</li>
              <li>Chose Google OAuth to remove friction from sign-up and keep auth secure.</li>
              <li>Integrated Retrofit for robust API calls and future scalability.</li>
            </ul>
          </motion.div>

          {/* Architecture Diagram */}
          <motion.div custom={7} variants={containerVariants} className="bg-[#161b22]/70 rounded-3xl p-12 shadow-xl border border-cyan-600">
            <h3 className="text-cyan-400 text-4xl font-extrabold mb-8 flex items-center gap-4"><FaProjectDiagram /> Architecture Diagram</h3>
            <p className="text-gray-300 text-lg mb-6">
              This diagram shows the data flow: Firebase Auth ➝ Realtime DB ➝ Users ➝ Posts ➝ Comments ➝ Conditional Chat logic.
            </p>
            <img
              src="/images/buddiesgram-architecture.png"
              alt="Architecture Diagram"
              className="w-full rounded-lg shadow-lg border border-gray-700"
            />
          </motion.div>
        </motion.div>
      </div>

      <Link to="/" className="fixed bottom-8 right-8 bg-indigo-600 hover:bg-indigo-700 shadow-lg rounded-full p-4 text-white text-xl transition transform hover:scale-110">←</Link>
    </section>
  );
}
