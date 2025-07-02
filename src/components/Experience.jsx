import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Android Developer (Co-op)",
    company: "Escrow Infotech",
    location: "Surat, India",
    period: "Jan 2024 – Apr 2024",
    icon: "/android.svg", // Place this in the public folder
    highlights: [
      "Modernized a legacy Android app using MVVM, Jetpack Compose & Kotlin, cutting tech debt by 35%.",
      "Improved Firebase + REST sync speed by 25%, enhancing stability for 1K+ users.",
      "Wrote automated test suites using Espresso & JUnit, reducing bugs by 45%.",
      "Revamped onboarding UX with design/QA teams, reducing user drop-off by 20%",
    ],
    stack: ["Kotlin", "Jetpack Compose", "Firebase", "Espresso", "JUnit"],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white py-20 px-6 sm:px-8 md:px-12 lg:px-24"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-indigo-400"
        >
          💼 Experience
        </motion.h2>

        {/* Experience Blocks */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="bg-[#1e293b]/70 backdrop-blur-sm border border-fuchsia-500/30 rounded-2xl p-6 shadow-[0_0_15px_#c026d3] hover:shadow-[0_0_25px_#e879f9] transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
                {/* Left: SVG Icon */}
                <div className="lg:col-span-2 flex justify-center lg:justify-start">
                  <img
                    src={exp.icon}
                    alt={`${exp.role} logo`}
                    className="w-40 h-40 sm:w-44 sm:h-44 object-contain hover:drop-shadow-[0_0_15px_#22d3ee] transition duration-300"
                  />
                </div>

                {/* Right: Content */}
                <div className="lg:col-span-3">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                    <h3 className="text-xl font-semibold text-white">
                      {exp.role} –{" "}
                      <span className="text-fuchsia-400">{exp.company}</span>
                    </h3>
                    <p className="text-sm text-gray-400 mt-1 sm:mt-0">
                      {exp.period} · {exp.location}
                    </p>
                  </div>

                  <ul className="list-disc list-inside text-sm text-gray-300 space-y-2 mt-2">
                    {exp.highlights.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>

                  {/* Stack Tags */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.stack.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-fuchsia-700/20 border border-fuchsia-500/30 text-xs text-fuchsia-100 px-3 py-1 rounded-full shadow-[0_0_10px_#d946ef] hover:shadow-[0_0_15px_#f0abfc] transition"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ✅ Scroll Down Indicator (outside .space-y-12) */}
      <div className="absolute bottom-6 right-6 flex flex-col items-center text-white/60 z-30 animate-bounce">
        <span className="material-icons text-3xl">expand_more</span>
        <span className="text-xs mt-1">Scroll Down</span>
      </div>
    </section>
  );
}