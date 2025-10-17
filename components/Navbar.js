'use client';

import { useState, useEffect } from 'react';
import { Menu, X, CalendarDays, Clock } from 'lucide-react';
import MiniPlayer from "../components/MiniPlayer";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  // Set tanggal saat mount
  useEffect(() => {
    const now = new Date();
    const optionsDate = { weekday: 'short', day: '2-digit', month: 'short', year: 'numeric' };
    setDate(now.toLocaleDateString('en-GB', optionsDate));
  }, []);

  // Update jam tiap menit
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formattedTime = now.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
      setTime(formattedTime);
    };
    updateTime(); // set initial
    const interval = setInterval(updateTime, 60000); // update tiap menit
    return () => clearInterval(interval);
  }, []);

  // Handle scroll untuk hide navbar di mobile
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && window.innerWidth < 768) {
        // scroll down
        setShowNav(false);
      } else {
        // scroll up
        setShowNav(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`sticky top-0 z-50 bg-black/70 backdrop-blur border-b border-gray-800 shadow-md px-4 py-1 md:py-2 transition-transform duration-300 ${showNav ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="container mx-auto flex flex-wrap items-center justify-between gap-2 md:gap-3 min-h-[56px]">

        {/* === KIRI: Logo + MiniPlayer + Date/Time === */}
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
              <span>{time}</span> {/* update tiap menit */}
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
