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
  FaBrain,
  FaKey,
  FaProjectDiagram,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import projects from "../../data/projects";

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (!project) {
    return (
      <div className="bg-[#0d1117] min-h-screen flex flex-col items-center justify-center text-white px-6">
        <h1 className="text-5xl font-extrabold mb-8">Project Not Found</h1>
        <Link
          to="/"
          className="text-blue-500 hover:text-blue-400 transition text-lg"
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
      transition: { delay: i * 0.2 },
    }),
  };

  return (
    <section className="relative bg-[#0d1117] min-h-screen px-6 py-20 md:py-32 text-white">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-indigo-900 via-purple-900 to-pink-900 opacity-30 blur-3xl"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 relative z-10">
        {/* Sidebar */}
        <motion.aside
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="md:col-span-4 bg-[#161b22]/70 backdrop-blur-md rounded-3xl p-8 flex flex-col sticky top-20 h-fit shadow-lg border border-gray-700"
        >
          <h2 className="text-4xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">
            {project.title}
          </h2>
          <img
            src={project.image}
            alt={project.title}
            className="rounded-2xl border border-gray-600 shadow-xl object-cover w-full mb-6"
          />
          <p className="text-gray-300 mb-4">{project.description}</p>

          <div className="space-y-3 text-gray-300 text-lg">
            <p><strong className="text-indigo-400">Year:</strong> {project.year}</p>
            <p><strong className="text-indigo-400">Team:</strong> {project.team}</p>
            <p><strong className="text-indigo-400">Category:</strong> {project.category}</p>
            <div>
              <strong className="text-indigo-400 block mb-2">Tech Stack</strong>
              <ul className="space-y-2">
                {project.tech.map((tech, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 px-3 py-1 rounded-full shadow-md font-semibold text-sm"
                  >
                    <FaRocket /> {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-700 flex flex-col gap-3">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-400 hover:text-blue-500 transition font-semibold">
                <FaGithub /> GitHub
              </a>
            )}
            {/* {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-green-400 hover:text-green-500 transition font-semibold">
                <FaExternalLinkAlt /> Live Demo
              </a>
            )} */}
            {project.video && project.video !== "#" && (
              <a href={project.video} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-pink-400 hover:text-pink-500 transition font-semibold">
                <FaVideo /> Video Walkthrough
              </a>
            )}
          </div>
        </motion.aside>

        {/* Main Content */}
        <motion.div initial="hidden" animate="visible" variants={containerVariants} className="md:col-span-8 space-y-12">
          {/* Approach */}
          <motion.div custom={1} variants={containerVariants} className="bg-[#161b22]/70 rounded-3xl p-8 shadow-xl border border-gray-700">
            <h3 className="flex items-center gap-3 text-indigo-400 text-3xl font-bold mb-4">
              <FaLightbulb /> Approach
            </h3>
            <p className="text-gray-300 leading-relaxed">{project.detailedDescription}</p>
          </motion.div>

          {/* Challenges + Solutions */}
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div custom={2} variants={containerVariants} className="bg-[#161b22]/70 p-6 rounded-3xl shadow-xl border border-red-700">
              <h4 className="flex items-center gap-2 text-red-500 text-2xl font-bold mb-2"><FaTools /> Challenges</h4>
              <p className="text-gray-300">{project.challenges}</p>
            </motion.div>
            <motion.div custom={3} variants={containerVariants} className="bg-[#161b22]/70 p-6 rounded-3xl shadow-xl border border-green-600">
              <h4 className="flex items-center gap-2 text-green-400 text-2xl font-bold mb-2"><FaCheckCircle /> Solutions</h4>
              <p className="text-gray-300">{project.solutions}</p>
            </motion.div>
          </div>

          {/* Features */}
          <motion.div custom={4} variants={containerVariants} className="bg-[#161b22]/70 p-8 rounded-3xl shadow-xl border border-indigo-600">
            <h3 className="text-indigo-400 text-3xl font-bold mb-4 flex items-center gap-3">
              <FaRocket /> Key Features
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
              {project.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2 p-3 bg-[#232a3a] rounded-lg shadow-sm">
                  <FaCheckCircle className="text-green-400" /> {feature}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* View More Toggle */}
          <button
            onClick={() => setShowMore(!showMore)}
            className="mx-auto flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 transition px-5 py-3 rounded-full text-white font-bold"
          >
            {showMore ? <FaChevronUp /> : <FaChevronDown />}
            {showMore ? "Hide Details" : "Show More Details"}
          </button>

          <AnimatePresence>
            {showMore && (
              <>
                {/* Learnings */}
                <motion.div custom={5} variants={containerVariants} className="bg-[#161b22]/70 p-8 rounded-3xl shadow-xl border border-yellow-600">
                  <h3 className="text-yellow-400 text-3xl font-bold mb-4 flex items-center gap-3">
                    <FaBrain /> What I Learned
                  </h3>
                  <p className="text-gray-300">{project.whatILearned}</p>

                </motion.div>

                {/* Key Decisions */}
                {project.keyDecisions?.length > 0 && (
  <motion.div
    custom={6}
    variants={containerVariants}
    className="bg-[#161b22]/70 p-8 rounded-3xl shadow-xl border border-purple-600"
  >
    <h3 className="text-purple-400 text-3xl font-bold mb-4 flex items-center gap-3">
      <FaKey /> Key Decisions
    </h3>
    <ul className="list-disc pl-5 text-gray-300 space-y-2">
      {project.keyDecisions.map((decision, index) => (
        <li key={index}>{decision}</li>
      ))}
    </ul>
  </motion.div>
)}


                {/* Architecture */}
                {/* <motion.div custom={7} variants={containerVariants} className="bg-[#161b22]/70 p-8 rounded-3xl shadow-xl border border-cyan-600">
                  <h3 className="text-cyan-400 text-3xl font-bold mb-4 flex items-center gap-3">
                    <FaProjectDiagram /> Architecture Diagram
                  </h3>
                  <img
                    src="/images/buddiesgram-architecture.png"
                    alt="Architecture Diagram"
                    className="w-full rounded-lg shadow-md border border-gray-700"
                  />
                </motion.div> */}
              </>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      <Link to="/" className="fixed bottom-8 right-8 bg-indigo-600 hover:bg-indigo-700 shadow-lg rounded-full p-4 text-white text-xl transition transform hover:scale-110">
        ←
      </Link>
    </section>
  );
}
