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
        <Navbar />


        {/* Hero Section */}
        <section
  id="home"
  className="flex flex-col-reverse md:flex-row justify-center items-center md:justify-between text-center md:text-left py-20 md:py-32 px-4 md:px-20 relative overflow-hidden"
>
  {/* Star dots */}
  <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" fill="none" stroke="white" strokeWidth="1">
      {stars.map((star, i) => (
        <circle key={i} cx={star.cx} cy={star.cy} r="0.5" fill="white" />
      ))}
    </svg>
  </div>

  {/* Intro Text */}
  <div className="flex flex-col items-center md:items-start z-10 max-w-xl">
    <h1 className="text-3xl md:text-4xl text-red-500 font-bold">Introduce My Self</h1>

    <h1
      className="font-extrabold text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] leading-tight z-10 mt-2"
      style={{
        background: 'linear-gradient(90deg, #d07ad1 0%, #7db9d9 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}
    >
      Sandy Tampubolon
    </h1>

    <p className="text-gray-300 text-base sm:text-lg mt-4 z-10">
      Bachelor of <span className="text-purple-400 font-semibold">Computer Engineering</span> Graduate from Diponegoro University.
    </p>


<div className="flex space-x-6 mt-6 z-10 text-white">
  <a
    href="https://www.linkedin.com/in/sandy-tampubolon-1811942b6/"
    target="_blank"
    rel="noreferrer"
    className="hover:text-cyan-400 text-xl transition-colors duration-300"
  >
    <FaLinkedin />
  </a>

  <a
    href="https://github.com/sandyytampubolon"
    target="_blank"
    rel="noreferrer"
    className="hover:text-cyan-400 text-xl transition-colors duration-300"
  >
    <FaGithub />
  </a>

  <a
    href="mailto:sandy.putra0884@gmail.com"
    className="hover:text-cyan-400 text-xl transition-colors duration-300"
  >
    <FaEnvelope />
  </a>
</div>


    <a
      href="#projects"
      className="mt-10 inline-block px-6 py-2 border border-cyan-400 text-cyan-400 rounded hover:bg-cyan-400 hover:text-black transition"
    >
      View My Work
    </a>
  </div>

  {/* Profile Image */}
  <div className="relative z-10 mb-10 md:mb-0 md:-mt-24">
    <div className="rounded-full w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 border-4 border-blue-400 shadow-lg shadow-blue-500/30 hover:scale-105 transition duration-300 overflow-hidden">
      <img
        alt="Profile"
        src="/images/sandy.jpg"
        className="object-cover w-full h-full"
      />
    </div>
    <div className="absolute top-0 left-0 w-full h-full rounded-full border-2 border-blue-500 animate-ping opacity-20" />
  </div>
  <a
      href="#projects"
      className="mt-10 inline-block px-6 py-2 border border-cyan-400 text-cyan-400 rounded hover:bg-cyan-400 hover:text-black transition"
    >
      Coming soon, web masih dalam pengembangan lebih lanjut
    </a>
</section>




        {/* About */}
        <section id="about" className="py-24 bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl shadow-xl my-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">About Me</h2>
            <p className="max-w-2xl mx-auto text-gray-300 text-lg">
            Saya Sandy Tampubolon, lulusan Teknik Komputer Universitas Diponegoro dengan minat besar pada pengembangan solusi teknologi yang inklusif dan berdampak. Saya menyukai pengembangan aplikasi berbasis web, analis data, serta merancang sistem yang mengintegrasikan hardware dan software</p>
          </div>
        </section>

        {/* Experience */}
        <section
  id="experience"
  className="py-24 bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl shadow-xl my-12"
>
  <div className="text-center mb-12">
    <h2 className="text-3xl font-bold mb-4 text-white">Experience</h2>
    <p className="max-w-2xl mx-auto text-gray-300 text-lg">
      Berikut adalah pengalaman saya
    </p>
  </div>

  <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
    {/* Kolom Kiri - Gambar */}
    <div className="flex justify-center">
      <img
        src="/your-image.jpg"
        alt="Experience"
        className="rounded-2xl shadow-lg w-full max-w-sm"
      />
    </div>

    {/* Kolom Kanan - Deskripsi */}
    <div className="text-left">
      <h3 className="text-2xl font-semibold text-white mb-4">
        Judul Pengalaman
      </h3>
      <p className="text-gray-300 text-lg mb-4">
        Deskripsi pengalaman kamu bisa ditulis di sini. Gunakan teks yang
        menjelaskan gambar di samping kiri agar lebih interaktif.
      </p>
      <ul className="list-disc list-inside text-gray-400 space-y-2">
        <li>Mengelola proyek IT dengan tim lintas divisi</li>
        <li>Membuat sistem berbasis website untuk HRD</li>
        <li>Meningkatkan efisiensi operasional perusahaan</li>
      </ul>
    </div>
  </div>
</section>


        {/* Projects */}
        <section id="projects" className="py-24 bg-gradient-to-r from-gray-900 to-black rounded-xl shadow-xl my-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">Projects</h2>
            <p className="max-w-2xl mx-auto text-gray-300 text-lg">
            Pembuatan Real-time Sign Language Class Translation System Using a Camera and Machine Learning Associated with Diponegoro University and Pusat Bahasa Isyarat Indonesia (Pusbisindo Jateng)            </p>
            Tujuan: Membantu komunikasi antara penyandang tunarungu dengan masyarakat umum.
            Teknologi: Python, OpenCV, MediaPipe, TensorFlow, React (UI), Django (Backend).
            Hasil: Sistem mampu menerjemahkan gerakan tangan ke teks secara real-time. Dipilih sebagai salah satu proyek terbaik.
            Tautan: GitHub Repository (opsional jika tersedia)
            
            Pengembangan Human Resource Management Web Application Associated with Diponegoro University dan perusahaan Cuco Indonesia
            Posisi: Front-End Developer
            Teknologi: HTML, CSS, JavaScript, Bootstrap
            Deskripsi: Merancang UI dashboard dan komponen interaktif sistem HR berbasis web.
            Hasil: Aplikasi digunakan oleh tim HR untuk efisiensi rekrutmen dan manajemen pegawai.          
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="py-24 bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl shadow-xl my-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">Tech Stack</h2>
            <p className="max-w-2xl mx-auto text-gray-300 text-lg">
            💡 Teknis
Bahasa Pemrograman: JavaScript, Python, PHP, SQL

Web Development: HTML5, CSS3, React.js, Tailwind CSS, Bootstrap

Back-End (Dasar): -

Analisis Data: Python (Pandas), SQL, Google Sheets

Alat: Git & GitHub, Figma, VSCode, VirtualBox

Hardware: Perakitan PC, Jaringan Virtual(cisco), Troubleshooting Komputer, Integrasi Hardware-Software

🧠 Non-Teknis
Komunikasi Efektif

Kepemimpinan & Manajemen Tim

Penyelesaian Masalah

Ketelitian & Disiplin

Kerja Sama Tim            </p>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-24 text-center my-12">
          <h2 className="text-3xl font-bold mb-4 text-white">Contact</h2>
          <p className="text-lg text-gray-300">Let s build something great together!</p>
          <p className="mt-2 text-gray-400">sandy.putra0884@gmail.com</p>
        </section>
      </div>
    </main>
  );
}