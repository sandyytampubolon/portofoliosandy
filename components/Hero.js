'use client';
import { useEffect } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function Hero() {
  useEffect(() => {
    document.body.style.fontFamily = 'Inter, sans-serif';
  }, []);

  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center text-center relative overflow-hidden"
      style={{ background: 'radial-gradient(circle at center, #3a4a5a 0%, #000000 80%)' }}
    >
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" fill="none">
          {[...Array(20)].map((_, i) => (
            <circle key={i} cx={`${Math.random() * 100}%`} cy={`${Math.random() * 100}%`} r="0.5" fill="white" />
          ))}
        </svg>
      </div>

      <h1 className="font-extrabold text-5xl sm:text-6xl md:text-7xl leading-tight z-10 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
        Hello World, I&apos;m Sandy 👋
      </h1>
      <p className="text-gray-300 text-lg mt-4 z-10 max-w-xl">
        A passionate <span className="text-purple-400 font-semibold">Full Stack Developer</span> with an eye for elegant design & smooth user experience.
      </p>

      <div className="flex space-x-6 mt-6 z-10">
        <a href="https://linkedin.com/in/sandyytampubolon" target="_blank" rel="noreferrer" className="text-white hover:text-cyan-400 text-xl"><FaLinkedin /></a>
        <a href="https://github.com/sandyytampubolon" target="_blank" rel="noreferrer" className="text-white hover:text-cyan-400 text-xl"><FaGithub /></a>
        <a href="mailto:sandy@example.com" className="text-white hover:text-cyan-400 text-xl"><FaEnvelope /></a>
      </div>

      <a href="#projects" className="mt-10 inline-block px-6 py-2 border border-cyan-400 text-cyan-400 rounded hover:bg-cyan-400 hover:text-black transition z-10">
        View My Work
      </a>
    </section>
  );
}
