'use client';
import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';

const sections = ['Home', 'About', 'Experience', 'Projects', 'Connect'];

export default function Navbar() {
  const [active, setActive] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      const offsets = sections.map((section) => {
        const el = document.getElementById(section.toLowerCase());
        return { section, offset: el?.offsetTop || 0 };
      });

      const current = offsets.reduce((acc, cur) => {
        return scrollY >= cur.offset - 200 ? cur.section : acc;
      }, 'Home');

      setActive(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 w-full bg-black/70 backdrop-blur z-50 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto px-4 py-4 text-white">
        <div className="font-bold text-xl text-cyan-400">Mataharian</div>
        <div className="space-x-6 hidden sm:flex">
          {sections.map((sec) => (
            <ScrollLink
              key={sec}
              to={sec.toLowerCase()}
              smooth={true}
              duration={500}
              offset={-80}
              className={`cursor-pointer ${
                active === sec ? 'text-cyan-400 border-b-2 border-cyan-400' : 'hover:text-cyan-400'
              }`}
            >
              {sec}
            </ScrollLink>
          ))}
        </div>
      </div>
    </nav>
  );
}