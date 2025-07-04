// components/ScrollDown.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

export default function ScrollDown({ to = "#next", isRoute = false }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (isRoute) {
      navigate(to); // Navigate to route like "/about"
    } else {
      const section = document.querySelector(to);
      section?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      onClick={handleClick}
      className="absolute bottom-6 right-6 flex flex-col items-center text-white/60 z-30 animate-bounce cursor-pointer"
    >
      <span className="material-icons text-3xl">expand_more</span>
      <span className="text-xs mt-1">Scroll Down</span>
    </div>
  );
}
