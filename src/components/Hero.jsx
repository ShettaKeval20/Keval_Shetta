// 
import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";

// 3D Gaming PC Model with auto-rotation
function GamingPCModel() {
  const gltf = useGLTF("/models/gaming_pc.glb");
  const modelRef = useRef();

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.003; // slow rotation
    }
  });

  return (
    <primitive
      ref={modelRef}
      object={gltf.scene}
      scale={[0.9, 0.9, 0.9]}         // nicely balanced scale
      position={[0, -1.2, 0]}         // better vertical position
      rotation={[0, Math.PI / 1, 0]}  // facing forward
    />
  );
}

useGLTF.preload("/models/gaming_pc.glb");

const HeroSection = () => {
  return (
    <section className="relative h-screen flex flex-col md:flex-row items-center justify-between px-8 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute w-[500px] h-[500px] bg-purple-700 rounded-full blur-3xl opacity-20 top-1/4 left-1/4 -z-10"></div>

      {/* Left Side */}
{/* <div className="flex-1 flex flex-col justify-center items-start space-y-6">
  <h1 className="text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-fuchsia-600 font-body">
    Hi, I'm Keval Shetta
  </h1>
  <h2 className="text-3xl md:text-4xl text-gray-100 font-body">
    I craft smart, future-ready Android & full-stack experiences.
  </h2>
  <p className="text-lg md:text-xl text-gray-400 max-w-lg font-body">
    Solving complex real-world problems with elegant code & innovative design.
  </p>
  <div className="flex flex-wrap gap-4">
    <a
      href="#projects"
      className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:opacity-90 text-white font-semibold shadow-lg transition-all duration-300"
    >
      🚀 Explore My Projects
    </a>
    <a
      href="/resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block px-6 py-3 rounded-full border border-gray-400 text-gray-200 hover:bg-gray-700 hover:text-white font-semibold transition-all duration-300"
    >
      📄 Download Resume
    </a>
  </div>
</div> */}

<div className="flex-1 flex flex-col justify-center items-start space-y-4">
  <h1 className="text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-fuchsia-500 font-body text-shadow">
    Hi, I'm Keval Shetta
  </h1>
  <h2 className="text-3xl md:text-4xl text-gray-100 font-light">
    Full-Stack Developer.
  </h2>
  <p className="text-lg md:text-xl text-gray-400 max-w-md font-body">
    Designing & developing smart, scalable solutions across Web, Mobile & Cloud.
  </p>
  <div className="flex flex-wrap gap-4">
    <a
      href="#projects"
      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:opacity-90 text-white font-medium shadow-lg transition-all duration-300"
    >
      🚀 Explore My Projects
    </a>
    <a
      href="/resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-500 text-gray-300 hover:bg-white/10 hover:text-white font-medium transition-all duration-300"
    >
      📄 Download Resume
    </a>
  </div>
</div>




      {/* Right Side - 3D Model */}
      <div className="flex-1 w-full h-[400px] md:h-[500px] max-w-[1200px] z-10">
        <Canvas camera={{ position: [0, 0, 7] }}>
          <ambientLight intensity={0.8} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <Suspense fallback={null}>
            <GamingPCModel />
            <Environment preset="city" /> {/* Realistic lighting */}
          </Suspense>
          <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
      </div>
    </section>
  );
};

export default HeroSection;
