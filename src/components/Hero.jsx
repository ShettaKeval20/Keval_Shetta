import React from "react";

const HeroSection = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-b from-black via-gray-900 to-black">
      <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 font-body mb-4 animate-fadeIn">
        Hi, I'm Keval Shetta
      </h1>
      <p className="text-lg md:text-2xl text-gray-300 font-body mb-8 max-w-2xl">
        Android Developer | Full-Stack Enthusiast | Building smart and
        futuristic digital experiences.
      </p>
      <a
        href="#projects"
        className="inline-block px-8 py-3 rounded-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold shadow-lg transition-all duration-300 animate-fadeIn delay-500"
      >
        View My Work
      </a>
    </section>
  );
};

export default HeroSection;
