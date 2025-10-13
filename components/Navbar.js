'use client';

import { useState, useEffect } from 'react';
import { Menu, X, CalendarDays, Clock } from 'lucide-react';
import MiniPlayer from "../components/MiniPlayer";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  // Update waktu & tanggal setiap detik
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const optionsDate = { weekday: 'short', day: '2-digit', month: 'short', year: 'numeric' };
      setDate(now.toLocaleDateString('en-GB', optionsDate));
      setTime(now.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
<nav className="sticky top-0 z-50 bg-black/70 backdrop-blur border-b border-gray-800 shadow-md px-4 py-1 md:py-2">
  <div className="container mx-auto flex flex-wrap items-center justify-between gap-2 md:gap-3 min-h-[56px]">

        {/* === KIRI: Logo + MiniPlayer + Time/Date === */}
<div className="flex flex-wrap items-center gap-2 md:gap-3 w-full md:w-auto justify-center md:justify-start">
          {/* Logo */}
          <div className="text-lg md:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
            Sandy Portfolio
          </div>

          {/* MiniPlayer */}
          <MiniPlayer />

          {/* Time + Date Display */}
          <div className="flex items-center gap-3 ml-2 md:ml-6 px-3 py-1 rounded-full bg-black/40 border border-gray-700 shadow-sm text-white text-xs md:text-sm font-medium">
            <div className="flex items-center gap-1 text-cyan-300">
              <Clock size={14} className="text-purple-400" />
              <span>{time}</span>
            </div>
            <div className="flex items-center gap-1 text-purple-300">
              <CalendarDays size={14} className="text-cyan-400" />
              <span>{date}</span>
            </div>
          </div>
        </div>

        {/* === KANAN: Desktop Menu === */}
        <ul className="hidden md:flex items-center gap-5 text-sm font-medium">
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

        {/* === Mobile Menu Button === */}
        <div className="md:hidden ml-auto">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* === Mobile Dropdown === */}
      {isOpen && (
        <ul className="md:hidden mt-2 px-4 pb-3 space-y-2 text-sm font-medium bg-black/90 rounded shadow-md">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={() => setIsOpen(false)}
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
