import React, { useEffect, useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars, useGLTF, Html } from "@react-three/drei";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

// Utility: Convert degrees to radians
const toRad = (deg) => (deg * Math.PI) / 180;

// 3D Earth with marker and popup
function EarthModel() {
  const gltf = useGLTF("/models/earth.glb");
  const SCALE = 4.5;
  const EARTH_Y_OFFSET = -1.2;

  return (
    <group>
      {/* Earth Model */}
      <primitive object={gltf.scene} scale={3.0} position={[0, EARTH_Y_OFFSET, 0]} />

      {/* Optional Glow Ring */}
      {/* <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, EARTH_Y_OFFSET - 0.1, 0]}>
        <ringGeometry args={[1.5, 1.7, 64]} />
        <meshBasicMaterial color="cyan" opacity={0.2} transparent />
      </mesh> */}
    </group>
  );
}

useGLTF.preload("/models/earth.glb");

// Main Footer Component
export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative mt-24 bg-[#0d1117] text-gray-300 px-6 py-16 overflow-hidden z-10"
    >
      {/* Top glow line */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[90%] h-[2px] bg-gradient-to-r from-purple-500 via-indigo-400 to-blue-500 blur-sm animate-pulse" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 z-10 relative">

              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 md:bottom-[20%] z-20 text-white/60 text-sm flex flex-col items-center animate-fade-in-out pointer-events-none">
  <div className="text-2xl">🖱️</div>
  <div className="mt-1">Drag to rotate</div>
</div>

        {/* Left - 3D Globe */}
        <div className="w-[280px] h-[280px] md:w-[360px] md:h-[360px] flex-shrink-0">
          <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
            <ambientLight intensity={0.7} />
            <directionalLight position={[5, 5, 5]} />
            <Stars radius={100} depth={50} count={5000} factor={4} fade />
            <Suspense fallback={null}>
              <EarthModel />
            </Suspense>
            <OrbitControls enableZoom autoRotate autoRotateSpeed={0.6} />
          </Canvas>
        </div>

        {/* Right - Info and Links */}
        <div className="text-center md:text-left space-y-6 flex-1">
          <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">
            Keval Shetta
          </h3>

          <p className="text-gray-400 text-base max-w-md mx-auto md:mx-0">
            Passionate about clean UI, meaningful UX, and scalable tech.
          </p>

          <div className="flex justify-center md:justify-start gap-6 text-gray-400 text-2xl">
            <a
              href="https://github.com/ShettaKeval20"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-transform hover:scale-110"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/kevalshetta/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-transform hover:scale-110"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:kevalshetta@gmail.com"
              className="hover:text-white transition-transform hover:scale-110"
            >
              <FaEnvelope />
            </a>
          </div>

          <p className="text-xs text-gray-600 pt-4">
            © {new Date().getFullYear()} Keval Shetta · Built with React & Three.js · All Rights Reserved
          </p>
        </div>
      </div>

      {/* Bottom glow line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500 blur-md opacity-50" />
    </footer>
  );
}
