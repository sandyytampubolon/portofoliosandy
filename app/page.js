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

{/* About */}
        <section id="about" className="py-16 md:py-24 bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl shadow-xl my-12 px-4 md:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">About Me</h2>
            <p className="max-w-2xl mx-auto text-gray-300 text-base md:text-lg text-justify md:text-center leading-relaxed">
              Saya adalah lulusan S-1 Teknik Komputer Universitas Diponegoro dengan pengalaman magang dan proyek di
              bidang IT, software engineering, data management, serta pengembangan sistem berbasis website. Kompetensi
              saya meliputi perencanaan proyek yang berdasarkan agile method, pengembangan perangkat lunak dan keras, AI
              dan analisis data, serta manajemen database dan administrasi sistem, yang mendukung minat saya untuk berkarier
              sebagai Fullstack Developer, IT & Software/Hardware Engineer, Data Analyst dan bidang lain yang terkait dengan
              computer technology. Saya terbuka untuk mempelajari keterampilan baru, cepat beradaptasi dengan
              lingkungan kerja, serta mampu berkolaborasi dan berkomunikasi secara efektif.
            </p>
          </div>
        </section>

        {/* Experience */}
        <section
          id="experience"
          className="py-16 md:py-24 bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl shadow-xl my-12 relative px-4 md:px-8"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white">Experience</h2>
            <p className="max-w-2xl mx-auto text-gray-300 text-base md:text-lg">
              Berikut adalah pengalaman saya
            </p>
          </div>

          {/* Timeline Wrapper */}
          <div className="relative max-w-5xl mx-auto">
            {/* Garis Vertikal: Di Kiri untuk HP, Di Tengah untuk Desktop */}
            <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 h-full w-1 bg-purple-500 rounded-full"></div>

            {/* Timeline Item 1 - CUCO */}
            <div className="relative flex items-start mb-12 md:mb-16">
              {/* Bulatan */}
              <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 bg-gray-900 border-4 border-purple-500 w-5 h-5 md:w-6 md:h-6 rounded-full mt-6 md:mt-8 z-10"></div>
              
              {/* Konten Card (Kanan di Desktop, Full di HP) */}
              <div className="w-full md:w-1/2 md:ml-auto pl-14 md:pl-10">
                <div className="bg-gray-800 border border-purple-600 rounded-xl p-5 md:p-6 shadow-lg hover:shadow-purple-500/20 transition duration-300">
                  <h3 className="text-xl font-bold text-white mb-1">Software Development</h3>
                  <p className="text-gray-400 text-sm mb-1">
                    <strong>CUCO INDONESIA</strong> | Jakarta Pusat, Indonesia
                  </p>
                  <p className="text-purple-400 font-semibold text-xs mb-4">Agustus 2023 - November 2023</p>
                  <ul className="list-disc list-inside text-gray-300 text-sm md:text-base leading-relaxed space-y-2 text-justify">
                    <li>Membantu perbaikan hardware yang ada dalam divisi IT</li>
                    <li>
                      Menyampaikan ide dan solusi untuk mengatasi permasalahan pengelolaan data karyawan
                      yang masih manual dengan beralih ke sistem berbasis website, yang dapat diakses oleh dua kategori pengguna,
                      yaitu HRD dan karyawan
                    </li>
                    <li>
                      Membuat perhitungan gaji secara otomatis dengan memasukkan faktor golongan, jam lembur,
                      waktu cuti, tanggungan keluarga karyawan, serta aspek terkait lainnya
                    </li>
                    <li>Membuat Website Human Resource Management</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Timeline Item 2 - PUSBISINDO */}
            <div className="relative flex items-start mb-12 md:mb-16">
              {/* Bulatan */}
              <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 bg-gray-900 border-4 border-purple-500 w-5 h-5 md:w-6 md:h-6 rounded-full mt-6 md:mt-8 z-10"></div>
              
              {/* Konten Card (Kiri di Desktop, Full di HP) */}
              <div className="w-full md:w-1/2 md:mr-auto pl-14 md:pl-0 md:pr-10 text-left">
                <div className="bg-gray-800 border border-purple-600 rounded-xl p-5 md:p-6 shadow-lg hover:shadow-purple-500/20 transition duration-300">
                  <h3 className="text-xl font-bold text-white mb-1">Software Development</h3>
                  <p className="text-gray-400 text-sm mb-1">
                    <strong>PUSBISINDO</strong> | Jakarta Selatan, Indonesia
                  </p>
                  <p className="text-purple-400 font-semibold text-xs mb-4">September 2024 - Juni 2025</p>
                  <ul className="list-disc list-inside text-gray-300 text-sm md:text-base leading-relaxed space-y-2 text-justify">
                    <li>Membantu proses komunikasi dalam pembelajaran secara online</li>
                    <li>
                      Efisiensi biaya terkait tenaga kerja menjadi lebih sedikit dimana tidak perlu banyak pengajar karena sudah ada tools penerjemah dimana orang awam juga bisa mengaksesnya
                    </li>
                    <li>Juara II Best Project Tugas Akhir siklus S2T24 Teknik Komputer, Universitas Diponegoro</li>
                    <li>Membuat Website Video Conference dengan fitur Penerjemah Bahasa Isyarat Tangan secara Online</li>
                    <li>Membangun jembatan interaksi antara disabilitas dan non-disabilitas</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Timeline Item 3 - SMP NEGERI 8 */}
            <div className="relative flex items-start mb-12 md:mb-16">
              {/* Bulatan */}
              <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 bg-gray-900 border-4 border-purple-500 w-5 h-5 md:w-6 md:h-6 rounded-full mt-6 md:mt-8 z-10"></div>
              
              {/* Konten Card (Kanan di Desktop, Full di HP) */}
              <div className="w-full md:w-1/2 md:ml-auto pl-14 md:pl-10">
                <div className="bg-gray-800 border border-purple-600 rounded-xl p-5 md:p-6 shadow-lg hover:shadow-purple-500/20 transition duration-300">
                  <h3 className="text-xl font-bold text-white mb-1">Administration & Database</h3>
                  <p className="text-gray-400 text-sm mb-1">
                    <strong>UPTD SMP NEGERI 8 PEMATANGSIANTAR</strong> | Pematangsiantar, Sumatera Utara
                  </p>
                  <p className="text-purple-400 font-semibold text-xs mb-4">Juli 2022 - Juni 2024</p>
                  <ul className="list-disc list-inside text-gray-300 text-sm md:text-base leading-relaxed space-y-2 text-justify">
                    <li>Mengelola, memvalidasi, dan memperbarui lebih dari 800+ data siswa yang mencakup identitas pribadi, capaian akademik, serta prestasi, sehingga mendukung penyusunan laporan sekolah yang akurat</li>
                    <li>
                      Menangani administrasi penerimaan siswa baru dengan melakukan input, verifikasi, serta penyusunan database untuk lebih dari 8x32 atau 256 peserta didik per tahun
                    </li>
                    <li>
                      Mendukung administrasi sarana dan prasarana sekolah melalui pendataan inventaris, serta penyusunan kebutuhan perawatan secara berkala
                    </li>
                  </ul>
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
                      Lets Talk
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Lets Connect</h2>
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
