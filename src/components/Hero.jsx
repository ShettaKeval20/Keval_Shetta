import React, { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";
import { motion } from "framer-motion";
import { useProgress, Html } from "@react-three/drei";
import ScrollDown from "./ScrollDown.jsx"; // ✅ Corrected path
 // adjust path as needed



// === 3D MODEL ===
function GamingPCModel() {
  const gltf = useGLTF("/models/gaming_pc.glb");
  const modelRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += hovered ? 0.01 : 0.003;
    }
  });

  return (
    <primitive
      ref={modelRef}
      object={gltf.scene}
      scale={[0.7, 0.7, 0.7]}
      position={[0, -1.5, 0]}
      rotation={[0, Math.PI, 0]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    />
  );
}

useGLTF.preload("/models/gaming_pc.glb");

// === HERO SECTION ===
const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-start px-4 pt-10 md:pt-20 md:flex-row md:justify-between md:px-12 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">

      {/* Background Glow */}
      <div className="absolute w-[300px] h-[300px] bg-purple-700 rounded-full blur-3xl opacity-20 top-1/4 left-1/4 -z-10"></div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 md:bottom-[20%] z-20 text-white/60 text-sm flex flex-col items-center animate-fade-in-out pointer-events-none">
  <div className="text-2xl">🖱️</div>
  <div className="mt-1">Drag to rotate</div>
</div>

      {/* === 3D MODEL ON TOP FOR MOBILE === */}
      <div className="w-full h-[310px] xs:h-[310px] sm:h-[350px] md:h-[500px] max-w-[1200px] z-10 mb-8 md:order-2">
        <Canvas camera={{ position: [0, 0, 7] }}>
          <ambientLight intensity={0.8} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <Suspense fallback={null}>
            <GamingPCModel />
            <Environment preset="city" />
          </Suspense>
          <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
      </div>

      {/* === TEXT CONTENT === */}
      <div className="flex flex-col justify-center items-start space-y-5 w-full max-w-xl break-words z-20 md:mt-0">

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-fuchsia-500 font-body"
        >
          Hi, I&apos;m Keval Shetta
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-lg sm:text-xl md:text-3xl text-gray-100 font-light"
        >
          Full-Stack Developer & Android Specialist
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="text-sm sm:text-base md:text-xl text-gray-400 max-w-md"
        >
          I build high-performance Android & full-stack web apps using React, Kotlin, and Firebase. 🚀 My code scales across real-world use cases and optimizes UX for users.
        </motion.p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 mt-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:opacity-90 text-white font-medium shadow-lg transition-all duration-300"
          >
            🚀 Explore My Projects
          </a>
          <a
            href="/resume/Keval_Shetta_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-500 text-gray-300 hover:bg-white/10 hover:text-white font-medium transition-all duration-300"
          >
            📄 Download Resume
          </a>
        </div>

        {/* Quick Links */}
        <div className="flex gap-5 mt-4 text-sm text-gray-400">
          <a href="https://github.com/ShettaKeval20" target="_blank" className="hover:text-white transition">GitHub</a>
          <a href="mailto:kevalshetta@gmail.com" className="hover:text-white transition">Email</a>
          <a href="https://www.linkedin.com/in/kevalshetta/" target="_blank" className="hover:text-white transition">LinkedIn</a>
        </div>

        {/* Scroll Down Icon */}
        {/* <div className="absolute bottom-6 right-6 flex flex-col items-center text-white/60 z-30 animate-bounce">
  <span className="material-icons text-3xl">expand_more</span>
  <span className="text-xs mt-1">Scroll Down</span>
</div> */}

{/* ✅ Working ScrollDown Button */}
        {/* <ScrollDown to="#about" /> */}

        
      </div>
    </section>
  );
};

export default HeroSection;