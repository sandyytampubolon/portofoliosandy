'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // lucide-react for icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-black/70 backdrop-blur border-b border-gray-800 shadow-md px-6 py-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
          Sandy Portfolio
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex flex-wrap gap-6 text-sm font-medium">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="text-white hover:text-cyan-400 transition duration-200 ease-in-out"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <ul className="md:hidden mt-4 px-4 pb-4 space-y-2 text-sm font-medium bg-black/90 rounded shadow-md">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={() => setIsOpen(false)} // close menu on click
                className="block py-2 px-3 text-white hover:text-cyan-400 transition"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
