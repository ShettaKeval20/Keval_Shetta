import React, { useEffect, useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars, useGLTF } from "@react-three/drei";
import { FaLinkedin, FaGithub, FaEnvelope, FaXTwitter } from "react-icons/fa6";
import * as THREE from "three";

export default function Footer() {
  const [location, setLocation] = useState({ lat: 0, lon: 0 });

  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => {
        setLocation({ lat: data.latitude, lon: data.longitude });
      })
      .catch(() => setLocation({ lat: 0, lon: 0 }));
  }, []);

  useEffect(() => {
    console.log(
      "%cHey Recruiter! Let’s build amazing things together 🚀",
      "color: #00FFAA; font-size: 14px;"
    );
  }, []);

  return (
    <footer className="bg-black text-gray-300 px-6 py-12 flex flex-col items-center space-y-4">
      <div className="w-64 h-64">
        <Canvas>
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 2, 5]} />
          <Stars radius={100} depth={50} count={5000} factor={4} fade />
          <Suspense fallback={null}>
            <Earth location={location} />
          </Suspense>
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      <div className="flex space-x-6 mt-4">
        <a href="https://linkedin.com/in/YOUR_LINK" target="_blank" rel="noreferrer">
          <FaLinkedin size={24} className="hover:text-blue-400 transition" />
        </a>
        <a href="https://github.com/YOUR_GITHUB" target="_blank" rel="noreferrer">
          <FaGithub size={24} className="hover:text-gray-100 transition" />
        </a>
        <a href="mailto:youremail@example.com">
          <FaEnvelope size={24} className="hover:text-red-400 transition" />
        </a>
        <a href="https://x.com/YOUR_X" target="_blank" rel="noreferrer">
          <FaXTwitter size={24} className="hover:text-sky-400 transition" />
        </a>
      </div>

      <p className="text-xs text-gray-500">Crafted with ❤️ from Earth 🌍</p>
      <p className="text-xs text-gray-500">© {new Date().getFullYear()} Keval Shetta</p>
    </footer>
  );
}

// ---------------
// Earth component with pin
// ---------------

function Earth({ location }) {
  const earth = useGLTF("/models/earth.glb");
  const radius = 1; // Adjust if your Earth GLB scale is different

  // Convert lat/lon to XYZ
  const lat = location.lat;
  const lon = location.lon;

  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);

  const x = -radius * Math.sin(phi) * Math.cos(theta);
  const y = radius * Math.cos(phi);
  const z = radius * Math.sin(phi) * Math.sin(theta);

  return (
    <group>
      <primitive object={earth.scene} scale={2} />
      {/* User location pin */}
      <mesh position={[x * 2, y * 2, z * 2]}>
        <sphereBufferGeometry args={[0.02, 16, 16]} />
        <meshStandardMaterial color="red" emissive="red" emissiveIntensity={1} />
      </mesh>
    </group>
  );
}
