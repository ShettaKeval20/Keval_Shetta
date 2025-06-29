import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto'
  }, [menuOpen])

  return (
    <nav className="bg-[#0f172a] text-white fixed w-full z-50 shadow-md transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Branding */}
          <div className="text-xl font-bold text-sky-400 tracking-wide hover:scale-105 transition duration-300 cursor-pointer">
            {/* You can add a logo <img> here */}
            Keval Shetta
          </div>

          {/* Desktop Nav */}
          <ul className="hidden md:flex gap-8 text-sm font-medium">
            {['about', 'experience', 'skills', 'projects', 'contact'].map((link) => (
              <li key={link}>
               <a
  href={`#${link}`}
  className="relative group nav-hover"
>
  <span className="text-white group-hover:text-sky-400 transition-colors duration-300">
    {link.charAt(0).toUpperCase() + link.slice(1)}
  </span>
  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-sky-400 transition-all duration-500 group-hover:w-full"></span>
</a>

              </li>
            ))}
          </ul>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu Toggle">
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="flex flex-col bg-[#0f172a] text-white px-6 pt-4 pb-6 space-y-4">
          {['about', 'experience', 'skills', 'projects', 'contact'].map((link) => (
            <a
              key={link}
              href={`#${link}`}
              onClick={() => setMenuOpen(false)}
              className="hover:text-sky-400 transition text-lg"
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}