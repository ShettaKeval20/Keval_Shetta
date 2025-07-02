import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] px-4 sm:px-6 md:px-12 lg:px-24 py-12 sm:py-14 md:py-16 text-white overflow-hidden flex items-center justify-center"
    >
      {/* 🔮 Glowing Blobs */}
      <div className="absolute w-72 h-72 bg-purple-700 rounded-full blur-[120px] opacity-20 animate-pulse-slow top-[10%] left-[10%] -z-10" />
      <div className="absolute w-64 h-64 bg-fuchsia-600 rounded-full blur-[100px] opacity-15 animate-pulse-slower bottom-[15%] right-[5%] -z-10" />
      <div className="absolute w-40 h-40 bg-indigo-600 rounded-full blur-[100px] opacity-10 animate-pulse-slow top-[40%] right-[35%] -z-10" />

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 items-center z-10">
        {/* 🖼️ Image Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <img
            src="/about.jpeg" // Make sure this exists in the public folder
            alt="Keval Shetta"
            className="w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 object-cover rounded-2xl shadow-2xl border border-white/10"
          />
        </motion.div>

        {/* 📄 Text Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4">
            👨‍💻 About Me
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-fuchsia-500 mb-6 rounded-full mx-auto lg:mx-0" />

          <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
            I’m <span className="text-indigo-400 font-semibold">Keval Shetta</span>, a self-taught developer turning ideas into elegant code. From crafting Android apps in <span className="text-indigo-300">Kotlin</span> to building scalable full-stack apps with <span className="text-fuchsia-400">React</span> and <span className="text-purple-400">Firebase</span>, I enjoy solving real-world problems through clean code and modern design.
          </p>

          <p className="text-gray-400 mt-4 text-xs sm:text-sm md:text-base">
            I combine logic and aesthetics to build user-friendly digital experiences. Outside code, you’ll find me exploring new tech, sketching product flows, or reading.
          </p>

          {/* 🚀 Tech Tags */}
          <div className="mt-6 flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start">
            {[
              "React",
              "Next.js",
              "Kotlin",
              "Firebase",
              "Tailwind CSS",
              "Node.js",
              "Framer Motion",
              "MongoDB",
            ].map((tech, i) => (
              <span
                key={i}
                className="bg-white/10 border border-white/10 text-gray-200 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full hover:bg-white/20 transition text-xs sm:text-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* 📬 CTA Button */}
          <div className="mt-8">
            <a
              href="#contact"
              className="inline-block px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-600 hover:opacity-90 text-white font-semibold shadow-md transition-all duration-300 text-sm sm:text-base"
            >
              ✉️ Let's Connect
            </a>
          </div>
        </motion.div>

                {/* Scroll Down Icon */}
        <div className="absolute bottom-6 right-6 flex flex-col items-center text-white/60 z-30 animate-bounce">
  <span className="material-icons text-3xl">expand_more</span>
  <span className="text-xs mt-1">Scroll Down</span>
</div>

      </div>
    </section>
  );
}