'use client';

import { useEffect, useState } from 'react';
import Navbar from "../components/Navbar";
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Analytics } from "@vercel/analytics/next";

export default function Home() {
const [stars, setStars] = useState([]);
  useEffect(() => {
    // Generate posisi bintang acak untuk background
    const randomStars = Array.from({ length: 30 }, () => ({
      cx: `${Math.random() * 100}%`,
      cy: `${Math.random() * 100}%`,
    }));
    setStars(randomStars);
  }, []);

  return (
    <main className="scroll-smooth bg-gradient-to-br from-black via-gray-900 to-black min-h-screen text-white overflow-x-hidden">
      <div className="container mx-auto px-4 md:px-8">

        {/* Navbar */}
        <Navbar />

        {/* HERO SECTION */}
        <section
          id="home"
          className="flex flex-col-reverse md:flex-row justify-center items-center md:justify-between text-center md:text-left py-16 md:py-28 relative overflow-hidden"
        >
          {/* Star dots background */}
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
            <svg className="w-full h-full opacity-40" xmlns="http://www.w3.org/2000/svg">
              {stars.map((star, i) => (
                <circle key={i} cx={star.cx} cy={star.cy} r="0.8" fill="white" />
              ))}
            </svg>
          </div>

          {/* Intro Text */}
          <div className="flex flex-col items-center md:items-start z-10 max-w-xl mt-8 md:mt-0">
            <span className="text-sm md:text-base font-semibold text-red-500 uppercase tracking-widest">
              Hello, I am
            </span>

            <h1
              className="font-extrabold text-4xl sm:text-5xl md:text-6xl leading-tight z-10 mt-2"
              style={{
                background: 'linear-gradient(90deg, #d07ad1 0%, #7db9d9 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Sandy Tampubolon
            </h1>

            <p className="text-gray-300 text-base sm:text-lg mt-4 z-10 leading-relaxed">
              Bachelor of <span className="text-purple-400 font-semibold">Computer Engineering</span> Graduate from Diponegoro University.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-6 mt-6 z-10 text-white">
              <a
                href="https://www.linkedin.com/in/sandy-tampubolon-1811942b6/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-400 text-2xl transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://github.com/sandyytampubolon"
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-400 text-2xl transition-colors duration-300"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>

              <a
                href="mailto:sandy.putra0884@gmail.com"
                className="hover:text-cyan-400 text-2xl transition-colors duration-300"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
            </div>

            <a
              href="#projects"
              className="mt-8 inline-block px-6 py-2.5 border border-cyan-400 text-cyan-400 font-medium rounded-lg hover:bg-cyan-400 hover:text-black transition duration-300"
            >
              View My Work
            </a>
          </div>

          {/* Profile Image */}
          <div className="relative z-10">
            <div className="rounded-full w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 border-4 border-blue-400 shadow-xl shadow-blue-500/20 hover:scale-105 transition duration-300 overflow-hidden">
              <img
                alt="Sandy Tampubolon Profile"
                src="/images/sandy.jpg"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute top-0 left-0 w-full h-full rounded-full border-2 border-blue-500 animate-ping opacity-20 pointer-events-none" />
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="py-16 md:py-20 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl shadow-xl my-12 px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">About Me</h2>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              Bachelor of Computer Engineering graduate with a strong understanding of IT, software engineering, and data 
              analysis. Experienced in academic and professional projects involving the development of a Human Resource Management 
              website, a Sign Language Video Conference platform with automatic hand-sign translation features, and interactive data analytics dashboards.
            </p>
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section
          id="experience"
          className="py-20 bg-gradient-to-b from-gray-900 to-gray-950 rounded-2xl shadow-2xl my-12 relative overflow-hidden"
        >
          <div className="text-center mb-16 px-4">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              Professional Experience
            </h2>
            <p className="max-w-2xl mx-auto text-gray-400 text-base md:text-lg">
              Delivering scalable solutions and driving engineering excellence.
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
            {/* Timeline Vertical Line: Kiri di Mobile, Tengah di Desktop */}
            <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500 via-blue-500 to-gray-900 rounded-full"></div>

            {/* Experience Item 1 - CUCO */}
            <div className="relative flex items-start mb-16 group">
              <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 bg-gray-900 border-4 border-purple-500 group-hover:border-blue-400 group-hover:scale-110 transition-all duration-300 w-5 h-5 rounded-full mt-6 z-10"></div>
              
              <div className="w-full md:w-1/2 ml-auto pl-12 md:pl-10">
                <div className="bg-gray-800/60 backdrop-blur-md border border-gray-700 hover:border-purple-500/50 rounded-2xl p-6 shadow-xl transition-all">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white">Software Engineer</h3>
                      <p className="text-purple-400 font-medium text-sm mt-0.5">CUCO INDONESIA | Jakarta Pusat</p>
                    </div>
                    <span className="text-gray-400 text-xs font-semibold mt-2 sm:mt-0 bg-gray-900 px-3 py-1 rounded-full border border-gray-700 w-max">
                      Aug 2023 - Nov 2023
                    </span>
                  </div>
                  
                  <ul className="list-none text-gray-300 text-sm leading-relaxed space-y-2.5">
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">▹</span>
                      <span>Engineered a centralized web-based Human Resource Management System (HRMS) featuring Role-Based Access Control (RBAC).</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">▹</span>
                      <span>Developed an automated payroll calculation module, reducing administrative overhead and human error by up to 90%.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">▹</span>
                      <span>Provided responsive IT support and hardware maintenance, ensuring smooth operational continuity.</span>
                    </li>
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {['PHP', 'JavaScript', 'MySQL', 'HTML/CSS'].map((tech) => (
                      <span key={tech} className="text-xs font-medium text-blue-300 bg-blue-900/30 px-2.5 py-1 rounded-md border border-blue-800/50">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Experience Item 2 - PUSBISINDO */}
            <div className="relative flex items-start mb-16 group">
              <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 bg-gray-900 border-4 border-blue-500 group-hover:border-purple-400 group-hover:scale-110 transition-all duration-300 w-5 h-5 rounded-full mt-6 z-10"></div>
              
              <div className="w-full md:w-1/2 mr-auto pl-12 md:pl-0 md:pr-10">
                <div className="bg-gray-800/60 backdrop-blur-md border border-gray-700 hover:border-blue-500/50 rounded-2xl p-6 shadow-xl transition-all">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white">Fullstack Developer</h3>
                      <p className="text-blue-400 font-medium text-sm mt-0.5">PUSBISINDO | Jakarta Selatan</p>
                    </div>
                    <span className="text-gray-400 text-xs font-semibold mt-2 sm:mt-0 bg-gray-900 px-3 py-1 rounded-full border border-gray-700 w-max">
                      Sep 2024 - Jun 2025
                    </span>
                  </div>
                  
                  <ul className="list-none text-gray-300 text-sm leading-relaxed space-y-2.5">
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">▹</span>
                      <span>Architected an ML-powered video conferencing platform with real-time sign language translation for accessibility.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">▹</span>
                      <span>Awarded 2nd Place in the Best Final Project Competition, Diponegoro University 2025.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">▹</span>
                      <span>Developed fullstack features using Python (Django) and MongoDB to streamline real-time user data management.</span>
                    </li>
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {['Python', 'Django', 'MongoDB', 'JavaScript', 'Machine Learning'].map((tech) => (
                      <span key={tech} className="text-xs font-medium text-purple-300 bg-purple-900/30 px-2.5 py-1 rounded-md border border-purple-800/50">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Experience Item 3 - SMPN 8 */}
            <div className="relative flex items-start mb-16 group">
              <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 bg-gray-900 border-4 border-purple-500 group-hover:border-blue-400 group-hover:scale-110 transition-all duration-300 w-5 h-5 rounded-full mt-6 z-10"></div>
              
              <div className="w-full md:w-1/2 ml-auto pl-12 md:pl-10">
                <div className="bg-gray-800/60 backdrop-blur-md border border-gray-700 hover:border-purple-500/50 rounded-2xl p-6 shadow-xl transition-all">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white">Data Administrator</h3>
                      <p className="text-purple-400 font-medium text-sm mt-0.5">UPTD SMPN 8 | Pematangsiantar</p>
                    </div>
                    <span className="text-gray-400 text-xs font-semibold mt-2 sm:mt-0 bg-gray-900 px-3 py-1 rounded-full border border-gray-700 w-max">
                      Jul 2022 - Jun 2024
                    </span>
                  </div>
                  
                  <ul className="list-none text-gray-300 text-sm leading-relaxed space-y-2.5">
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">▹</span>
                      <span>Analyzed and validated 800+ student records and 60+ staff datasets for data-driven administrative decisions.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">▹</span>
                      <span>Built interactive Power BI dashboards to analyze student admission trends, boosting data management efficiency by 40%.</span>
                    </li>
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {['Power BI', 'Excel', 'Data Analysis', 'Data Validation'].map((tech) => (
                      <span key={tech} className="text-xs font-medium text-blue-300 bg-blue-900/30 px-2.5 py-1 rounded-md border border-blue-800/50">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="py-20 bg-gradient-to-r from-gray-900 to-black rounded-2xl shadow-xl my-12 px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Featured Projects</h2>
            <p className="max-w-2xl mx-auto text-gray-400 text-base md:text-lg">
              Here are some key projects I have engineered and delivered
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={24}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="pb-14"
            >
              {/* Project Card 1 */}
              <SwiperSlide>
                <div className="bg-gray-800/80 rounded-xl shadow-lg overflow-hidden border border-purple-700/60 h-full min-h-[400px] flex flex-col justify-between hover:border-purple-500 transition"> 
                  <div>
                    <img src="/images/myporto.jpg" alt="Portofolio Personal Web" className="w-full h-48 object-cover" />
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2">Personal Portfolio</h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Responsive portfolio web application showcasing skills, experience, and projects built using Next.js & Tailwind CSS.
                      </p>
                    </div>
                  </div>
                  <div className="p-6 pt-0">
                    <a
                      href="https://github.com/sandyytampubolon/portofoliosandy"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded-lg transition"
                    >
                      View Code
                    </a>
                  </div>
                </div>
              </SwiperSlide>

              {/* Project Card 2 */}
              <SwiperSlide>
                <div className="bg-gray-800/80 rounded-xl shadow-lg overflow-hidden border border-purple-700/60 h-full min-h-[400px] flex flex-col justify-between hover:border-purple-500 transition"> 
                  <div>
                    <img src="/images/inkopdit.jpg" alt="HRM Web App" className="w-full h-48 object-cover" />
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2">HRM System</h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Human Resource Management System with automated payroll calculation and role-based access for Cuco Indonesia.
                      </p>
                    </div>
                  </div>
                  <div className="p-6 pt-0">
                    <a
                      href="https://github.com/sandyytampubolon/webhrmcuco"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded-lg transition"
                    >
                      View Code
                    </a>
                  </div>
                </div>
              </SwiperSlide>

              {/* Project Card 3 */}
              <SwiperSlide>
                <div className="bg-gray-800/80 rounded-xl shadow-lg overflow-hidden border border-purple-700/60 h-full min-h-[400px] flex flex-col justify-between hover:border-purple-500 transition"> 
                  <div>
                    <img src="/images/demoslc.jpg" alt="Sign Language Video Conference" className="w-full h-48 object-cover" />
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2">Sign Language Video Conf</h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Web-based video conference system integrated with real-time hand sign language translation powered by Machine Learning.
                      </p>
                    </div>
                  </div>
                  <div className="p-6 pt-0">
                    <a
                      href="https://github.com/VinGreg/slc_new"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded-lg transition"
                    >
                      View Code
                    </a>
                  </div>
                </div>
              </SwiperSlide>

              {/* Project Card 4 */}
              <SwiperSlide>
                <div className="bg-gray-800/80 rounded-xl shadow-lg overflow-hidden border border-purple-700/60 h-full min-h-[400px] flex flex-col justify-between hover:border-purple-500 transition"> 
                  <div>
                    <img src="/images/dataanalyst.png" alt="Supermarket Data Analytics Dashboard" className="w-full h-48 object-cover" />
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2">Sales Data Analytics</h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Interactive analytics dashboard analyzing supermarket sales with filtering across branches, product lines, and payment methods.
                      </p>
                    </div>
                  </div>
                  <div className="p-6 pt-0">
                    <a
                      href="https://sandyytampubolon-dataanalystdashboard-app-peypfu.streamlit.app/"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded-lg transition"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>

              {/* Project Card 5 */}
              <SwiperSlide>
                <div className="bg-gray-800/80 rounded-xl shadow-lg overflow-hidden border border-purple-700/60 h-full min-h-[400px] flex flex-col justify-between hover:border-purple-500 transition"> 
                  <div>
                    <img src="/images/sandy.jpg" alt="Upcoming Projects" className="w-full h-48 object-cover" />
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2">Next Projects</h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Open for exciting software engineering, fullstack web development, and data engineering collaborations.
                      </p>
                    </div>
                  </div>
                  <div className="p-6 pt-0">
                    <a
                      href="#contact"
                      className="inline-block px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white text-sm font-medium rounded-lg transition"
                    >
                      Let's Talk
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="py-20 bg-gradient-to-r from-gray-900 to-black rounded-2xl shadow-xl px-4 md:px-8 my-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Technical Skills
            </h2>
            <p className="max-w-2xl mx-auto text-gray-400 text-base md:text-lg mt-3">
              Technologies and tools I utilize to build end-to-end digital solutions.
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Frontend */}
            <div className="bg-gray-800/80 rounded-xl shadow-lg p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4 text-center">Frontend</h3>
              <div className="flex flex-wrap gap-2.5 justify-center">
                {['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Next.js', 'React'].map((skill) => (
                  <span key={skill} className="px-3.5 py-2 bg-gray-900/90 rounded-lg text-gray-300 text-sm font-medium border border-gray-800">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="bg-gray-800/80 rounded-xl shadow-lg p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4 text-center">Backend</h3>
              <div className="flex flex-wrap gap-2.5 justify-center">
                {['PHP', 'Laravel', 'Node.js', 'Django', 'Python'].map((skill) => (
                  <span key={skill} className="px-3.5 py-2 bg-gray-900/90 rounded-lg text-gray-300 text-sm font-medium border border-gray-800">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Database */}
            <div className="bg-gray-800/80 rounded-xl shadow-lg p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4 text-center">Database</h3>
              <div className="flex flex-wrap gap-2.5 justify-center">
                {['MySQL', 'MongoDB', 'Oracle', 'phpMyAdmin'].map((skill) => (
                  <span key={skill} className="px-3.5 py-2 bg-gray-900/90 rounded-lg text-gray-300 text-sm font-medium border border-gray-800">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Machine Learning */}
            <div className="bg-gray-800/80 rounded-xl shadow-lg p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4 text-center">Machine Learning</h3>
              <div className="flex flex-wrap gap-2.5 justify-center">
                {['TensorFlow', 'Computer Vision', 'Data Modeling'].map((skill) => (
                  <span key={skill} className="px-3.5 py-2 bg-gray-900/90 rounded-lg text-gray-300 text-sm font-medium border border-gray-800">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Cloud & DevOps */}
            <div className="bg-gray-800/80 rounded-xl shadow-lg p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4 text-center">Cloud & DevOps</h3>
              <div className="flex flex-wrap gap-2.5 justify-center">
                {['Vercel', 'CI/CD Basics', 'Git Version Control'].map((skill) => (
                  <span key={skill} className="px-3.5 py-2 bg-gray-900/90 rounded-lg text-gray-300 text-sm font-medium border border-gray-800">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="bg-gray-800/80 rounded-xl shadow-lg p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4 text-center">Tools</h3>
              <div className="flex flex-wrap gap-2.5 justify-center">
                {['Git', 'GitHub', 'VS Code', 'Figma', 'Microsoft Office', 'Power BI'].map((skill) => (
                  <span key={skill} className="px-3.5 py-2 bg-gray-900/90 rounded-lg text-gray-300 text-sm font-medium border border-gray-800">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-20 text-center my-12 bg-gradient-to-r from-gray-900/50 to-black rounded-2xl border border-gray-800 px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Let's Connect</h2>
          <p className="text-base md:text-lg text-gray-300 max-w-md mx-auto">
            I am always open to discussing new software development opportunities or potential collaborations.
          </p>
          <a
            href="mailto:sandy.putra0884@gmail.com"
            className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-medium rounded-xl shadow-lg transition duration-300"
          >
            <FaEnvelope /> Get In Touch
          </a>
          <p className="mt-4 text-sm text-gray-400">sandy.putra0884@gmail.com</p>
        </section>

      </div>

      {/* Vercel Analytics */}
      <Analytics />
    </main>
  );
}