'use client';

import { useEffect, useState } from 'react';
import Navbar from "../components/Navbar";
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function Home() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    document.body.style.fontFamily = 'Inter, sans-serif';

    const randomStars = Array.from({ length: 20 }, () => ({
      cx: `${Math.random() * 100}%`,
      cy: `${Math.random() * 100}%`,
    }));
    setStars(randomStars);
  }, []);

  return (
    <main className="scroll-smooth bg-gradient-to-br from-black via-gray-900 to-black min-h-screen text-white">
      <div className="container mx-auto px-4">
        {/* Navbar */}
        <nav className="flex items-center justify-between py-6 border-b border-gray-800">
          <div className="text-purple-300 font-semibold text-xl">Sandy Portfolio</div>
          <ul className="hidden md:flex space-x-8 text-sm font-medium">
            <li><a href="#home" className="text-cyan-400 border-b-2 border-cyan-400 pb-1">Home</a></li>
            <li><a href="#about" className="hover:text-gray-300">About</a></li>
            <li><a href="#experience" className="hover:text-gray-300">Experience</a></li>
            <li><a href="#projects" className="hover:text-gray-300">Projects</a></li>
            <li><a href="#skills" className="hover:text-gray-300">Skills</a></li>
            <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
          </ul>
        </nav>

        {/* Hero Section */}
        <section
          id="home"
          className="flex flex-col justify-center items-center text-center py-32 relative overflow-hidden"
        >
          {/* Star dots */}
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" fill="none" stroke="white" strokeWidth="1">
              {stars.map((star, i) => (
                <circle key={i} cx={star.cx} cy={star.cy} r="0.5" fill="white" />
              ))}
            </svg>
          </div>

          <h1
            className="font-extrabold text-[3rem] sm:text-[4rem] md:text-[5rem] leading-[1.1] max-w-5xl z-10"
            style={{
              background: 'linear-gradient(90deg, #d07ad1 0%, #7db9d9 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Hello World, I m Sandy 👋
          </h1>
          <p className="text-gray-300 text-lg mt-4 z-10 max-w-xl">
            A passionate <span className="text-purple-400 font-semibold">Full Stack Developer</span> with an eye for elegant design & smooth user experience.
          </p>

          <div className="flex space-x-6 mt-6 z-10">
            <a href="https://linkedin.com/in/sandyytampubolon" target="_blank" rel="noreferrer" className="hover:text-cyan-400 text-xl">
              <FaLinkedin />
            </a>
            <a href="https://github.com/sandyytampubolon" target="_blank" rel="noreferrer" className="hover:text-cyan-400 text-xl">
              <FaGithub />
            </a>
            <a href="mailto:sandy@example.com" className="hover:text-cyan-400 text-xl">
              <FaEnvelope />
            </a>
          </div>

          <a
            href="#projects"
            className="mt-10 inline-block px-6 py-2 border border-cyan-400 text-cyan-400 rounded hover:bg-cyan-400 hover:text-black transition"
          >
            View My Work
          </a>
        </section>

        {/* About */}
        <section id="about" className="py-24 bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl shadow-xl my-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">About Me</h2>
            <p className="max-w-2xl mx-auto text-gray-300 text-lg">
              I m Sandy, a Computer Engineering graduate from Universitas Diponegoro with a strong interest in UI/UX and high-performance web systems. I m currently focused on building scalable, accessible, and visually elegant applications.
            </p>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="py-24 bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl shadow-xl my-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">Experience</h2>
            <p className="max-w-2xl mx-auto text-gray-300 text-lg">
              I’ve worked on various frontend and backend web projects, technical documentation, and system performance monitoring including internships and real-world collaborative projects.
            </p>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-24 bg-gradient-to-r from-gray-900 to-black rounded-xl shadow-xl my-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">Projects</h2>
            <p className="max-w-2xl mx-auto text-gray-300 text-lg">
              My recent projects include a Human Resource Management System for INKOPDIT, a real-time sign language translator app, and a system performance dashboard.
            </p>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="py-24 bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl shadow-xl my-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">Tech Stack</h2>
            <p className="max-w-2xl mx-auto text-gray-300 text-lg">
              JavaScript, React, Next.js, Node.js, Tailwind CSS, PostgreSQL, Firebase, Git, REST APIs.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-24 text-center my-12">
          <h2 className="text-3xl font-bold mb-4 text-white">Contact</h2>
          <p className="text-lg text-gray-300">Let s build something great together!</p>
          <p className="mt-2 text-gray-400">sandy@example.com</p>
        </section>
      </div>
    </main>
  );
}