'use client';
import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi'; // icon menu

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between py-6 border-b border-gray-800 relative">
      <div className="text-purple-300 font-semibold text-xl">Sandy Portfolio</div>

      {/* Desktop Nav */}
      <ul className="hidden md:flex space-x-8 text-sm font-medium text-white">
        <li><a href="#home" className="text-cyan-400 border-b-2 border-cyan-400 pb-1">Home</a></li>
        <li><a href="#about" className="hover:text-gray-300">About</a></li>
        <li><a href="#experience" className="hover:text-gray-300">Experience</a></li>
        <li><a href="#projects" className="hover:text-gray-300">Projects</a></li>
        <li><a href="#skills" className="hover:text-gray-300">Skills</a></li>
        <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
      </ul>

      {/* Mobile Toggle */}
      <div className="md:hidden text-white text-2xl cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <HiX /> : <HiMenu />}
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="absolute top-full left-0 w-full bg-black flex flex-col items-center text-white py-4 space-y-4 z-50 md:hidden">
          <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
          <li><a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a></li>
          <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
          <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
          <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
        </ul>
      )}
    </nav>
  );
}
