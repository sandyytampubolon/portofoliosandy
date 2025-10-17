'use client';

import { useEffect, useState } from 'react';
import Navbar from "../components/Navbar";
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Analytics } from "@vercel/analytics/next"



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
  {/* <a
      href="#projects"
      className="mt-10 inline-block px-6 py-2 border border-cyan-400 text-cyan-400 rounded hover:bg-cyan-400 hover:text-black transition"
    >
      Coming soon, web masih dalam pengembangan lebih lanjut
    </a> */}
</section>




        {/* About */}
        <section id="about" className="py-24 bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl shadow-xl my-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">About Me</h2>
            <p className="max-w-2xl mx-auto text-gray-300 text-lg">
           Bachelor of Computer Engineering graduate with a strong understanding of IT, software engineering, and data 
analysis. Experienced in academic projects involving the development of a Human Resource Management 
website, a Sign Language Class website with automatic hand-sign translation features, and a personal project 
generating company income insights</p>
          </div>
        </section>

{/* Experience */}
<section
  id="experience"
  className="py-24 bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl shadow-xl my-12 relative"
>
  <div className="text-center mb-12">
    <h2 className="text-3xl font-bold mb-4 text-white">Experience</h2>
    <p className="max-w-2xl mx-auto text-gray-300 text-lg">
      Work Experience
    </p>
  </div>

  {/* Timeline Wrapper */}
  <div className="relative max-w-4xl mx-auto">
    {/* Garis Tengah */}
    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-purple-500"></div>

    {/* Timeline Item 1 - Data Analyst */}
    <div className="relative flex items-start mb-16">
      {/* Bulatan */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bg-gray-900 border-4 border-purple-500 w-6 h-6 rounded-full"></div>
      
      {/* Konten Card (kanan) */}
      <div className="ml-auto w-1/2 pl-8">
        <div className="bg-gray-800 border border-purple-600 rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-bold text-white mb-2">Software Development</h3>
          <p className="text-gray-400 text-sm mb-2">
            <strong>CUCO INDONESIA</strong> | Jakarta Pusat, Indonesia
          </p>
          <p className="text-gray-400 text-sm mb-4">Aug 2023 - Nov 2023</p>
         <ul className="list-disc list-inside text-gray-300 text-base leading-relaxed space-y-2 text-justify">

  <li>
    Performed troubleshooting and hardware maintenance in the IT division to ensure smooth company 
operations.
  </li>
  <li>
    Initiated an innovation project after identifying that employee data and payroll management were still 
conducted manually using separate spreadsheets, which caused administrative delays and frequent input 
errors.
  </li>
  <li>
    Solved the issue by developing a web-based Human Resource Management (HRM) system as a centralized 
platform for both HR and employees, featuring separate access levels based on user roles. The system also 
included an automated payroll calculation module based on predefined variables, successfully reducing 
potential human errors by up to 90% compared to the previous manual system.
  </li>
  <li>
    Designed and developed an interactive website using PHP, JavaScript, HTML, and CSS, with MySQL as 
the main database
  </li>

</ul>


        </div>
      </div>
    </div>

    {/* Timeline Item 2 - Developer Pusbisindo */}
    <div className="relative flex items-start mb-16">
      {/* Bulatan */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bg-gray-900 border-4 border-purple-500 w-6 h-6 rounded-full"></div>
      
      {/* Konten Card (kiri) */}
      <div className="mr-auto w-1/2 pr-8 text-left">
      
        <div className="bg-gray-800 border border-purple-600 rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-bold text-white mb-2">Software Development</h3>
          <p className="text-gray-400 text-sm mb-2">
            <strong>PUSBISINDO</strong> | Jakarta Selatan, Indonesia
          </p>
          <p className="text-gray-400 text-sm mb-4">Sep 2024 - Jun 2025</p>
          <ul className="list-disc list-inside text-gray-300 text-base leading-relaxed space-y-2 text-justify">
  <li>Designed and developed a Machine Learning–based Video Conference Website capable of automatically 
translating hand sign language to support communication between users with disabilities (deaf/mute) and 
non-disabled users. The project was tested by more than 10 users under the supervision of academic 
advisors from Diponegoro University to ensure system reliability and user experience. The website 
successfully improved accessibility and reduced operational costs by minimizing the need for special 
teaching staff without compromising the quality of online learning. The website was developed using 
machine learning technology integrated with a camera system, and was awarded 2nd Place in the Best Final 
Project Competition of the Computer Engineering Department, Diponegoro University, 2025.
</li>
  <li>
    Developed a website using Python (Django Framework), JavaScript, and HTML, supported by MongoDB 
as the main database, which significantly improved system efficiency and streamlined user data 
management
  </li>

</ul>
        </div>
      </div>
    </div>

        {/* Timeline Item 1 - Data Analyst */}
    <div className="relative flex items-start mb-16">
      {/* Bulatan */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bg-gray-900 border-4 border-purple-500 w-6 h-6 rounded-full"></div>
      
      {/* Konten Card (kanan) */}
      <div className="ml-auto w-1/2 pl-8">
        <div className="bg-gray-800 border border-purple-600 rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-bold text-white mb-2">Administration & Database</h3>
          <p className="text-gray-400 text-sm mb-2">
            <strong>UPTD SMP NEGERI 8 PEMATANGSIANTAR</strong> | Pematangsiantar, Sumatera Utara, Indonesia
          </p>
          <p className="text-gray-400 text-sm mb-4">Jul 2022 - Jun 2024</p>
         <ul className="list-disc list-inside text-gray-300 text-base leading-relaxed space-y-2 text-justify">
  <li>Conducted data analysis and validated more than 800 student records and 60 teacher and staff records using 
Microsoft Excel, including updating academic reports and managing school inventory data. The validated 
results were used in school decision-making processes. Collaborated with the school operator and student 
affairs team to ensure all data remained accurate and easily accessible. Observing challenges in the previous 
manual process, which was prone to errors and time-consuming, took the initiative to analyze student 
admission trends using Power BI, producing visual reports and insights that helped the school make datadriven decisions. This initiative improved data management efficiency by 40%.
</li>
  <li>
    Utilized Microsoft Excel for data management and validation, and Power BI for generating insights
  </li>
</ul>


        </div>
      </div>
    </div>

  </div>
</section>




{/* Projects */}
<section id="projects" className="py-24 bg-gradient-to-r from-gray-900 to-black rounded-xl shadow-xl my-12">
  <div className="text-center mb-12">
    <h2 className="text-3xl font-bold mb-4 text-white">Projects</h2>
    <p className="max-w-2xl mx-auto text-gray-300 text-lg">
      Here are some projects I have worked on
    </p>
  </div>

  {/* Swiper Carousel */}
  <div className="max-w-6xl mx-auto">
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      breakpoints={{
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      className="pb-12"
    >
      {/* Card 1 */}
      <SwiperSlide>
<div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-purple-700 h-[420px] flex flex-col"> 
          <img src="/images/myporto.jpg" alt="Sign Language System" className="w-full h-48 object-cover" />
          <div className="p-6 text-left">
            <h3 className="text-xl font-bold text-white mb-2">
              Portofolio Saya
            </h3>
            <p className="text-gray-400 text-sm mb-4 text-justify">
              Deskripsi diri, pengalaman, project dan skill 
            </p>
            <a href="https://github.com/sandyytampubolon/portofoliosandy" className="px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-lg">GitHub</a>
          </div>
        </div>
      </SwiperSlide>

      {/* Card 2 */}
      <SwiperSlide>
<div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-purple-700 h-[420px] flex flex-col"> 
          <img src="/images/inkopdit.jpg" alt="HRM Web App" className="w-full h-48 object-cover" />
          <div className="p-6 text-left">
            <h3 className="text-xl font-bold text-white mb-2">
              Website Human Resource Management Cuco Indonesia
            </h3>
            <p className="text-gray-400 text-sm mb-4 text-justify">
              Website Human Resource Cuco Indonesia
            </p>
            <a href="https://github.com/sandyytampubolon/webhrmcuco" className="px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-lg">GitHub</a>
          </div>
        </div>
      </SwiperSlide>

      {/* Card 3 */}
      <SwiperSlide>
<div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-purple-700 h-[420px] flex flex-col"> 
           <img src="/images/demoslc.jpg" alt="myporto web app" className="w-full h-48 object-cover" />
          <div className="p-6 text-left">
            <h3 className="text-xl font-bold text-white mb-2">
              Website Video Conference dengan Sistem Penerjemah Bahasa Isyarat Tangan
            </h3>
            <p className="text-gray-400 text-sm mb-4 text-justify">
              Website ini menyediakan layanan video conference dengan fitur penerjemah bahasa isyarat tangan secara real-time
            </p>
                        <a href="https://github.com/VinGreg/slc_new" className="px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-lg">GitHub</a>
          </div>
        </div>
      </SwiperSlide>

      {/* Card 4 */}
      <SwiperSlide>
<div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-purple-700 h-[420px] flex flex-col"> 
           <img src="/images/dataanalyst.png" alt="Spam Detection" className="w-full h-48 object-cover" />
          <div className="p-6 text-left">
            <h3 className="text-xl font-bold text-white mb-2">
              Data Analyst
            </h3>
            <p className="text-gray-400 text-sm mb-4 text-justify">
              Analyze supermarket sales data, Filter data by Branch, Product Line, Payment Method, and Date Range
            </p>
            <a href="https://sandyytampubolon-dataanalystdashboard-app-peypfu.streamlit.app/?embed_options=show_colored_line,light_theme,show_toolbar,show_padding,show_footer" className="px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-lg">Visit</a>
          </div>
        </div>
      </SwiperSlide>

      {/* Card 5 */}
      <SwiperSlide>
<div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-purple-700 h-[420px] flex flex-col"> 
           <img src="/images/sandy.jpg" alt="Spam Detection" className="w-full h-48 object-cover" />
          <div className="p-6 text-left">
            <h3 className="text-xl font-bold text-white mb-2">
              Next Project
            </h3>
            <p className="text-gray-400 text-sm mb-4 text-justify">
              Lets collab...
            </p>
            <a href="https://github.com/sandyytampubolon" className="px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-lg">GitHub</a>
          </div>
        </div>
      </SwiperSlide>
      {/* Tambahkan card lain tinggal copy <SwiperSlide> */}
    </Swiper>
  </div>
</section>



        {/*Skill Section -->*/}
<section id="skills" class="py-20 bg-gradient-to-r from-gray-900 to-black rounded-xl shadow-xl">
  <div class="text-center mb-12">
    <h2 class="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
      Skills
    </h2>
    <p class="max-w-2xl mx-auto text-gray-400 text-lg mt-4">
      Berikut adalah beberapa teknologi dan tools yang saya gunakan dalam pengembangan.
    </p>
  </div>

  <div class="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
    
    {/*frontend -->*/}
    <div class="bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-700">
      <h3 class="text-xl font-bold text-white mb-4 text-center">Frontend</h3>
      <div class="grid grid-cols-2 gap-3">
        <span class="px-3 py-2 bg-gray-900 rounded-lg text-gray-300 text-center">HTML</span>
        <span class="px-3 py-2 bg-gray-900 rounded-lg text-gray-300 text-center">CSS</span>
        <span class="px-3 py-2 bg-gray-900 rounded-lg text-gray-300 text-center">JavaScript</span>
        <span class="px-3 py-2 bg-gray-900 rounded-lg text-gray-300 text-center">TypeScript</span>
        <span class="px-3 py-2 bg-gray-900 rounded-lg text-gray-300 text-center">Next.js</span>
        <span class="px-3 py-2 bg-gray-900 rounded-lg text-gray-300 text-center">React</span>
      </div>
    </div>

    {/*Skill Section -->*/}
    <div class="bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-700">
      <h3 class="text-xl font-bold text-white mb-4 text-center">Backend</h3>
      <div class="grid grid-cols-2 gap-3">
        <span class="px-3 py-2 bg-gray-900 rounded-lg text-gray-300 text-center">PHP</span>
        <span class="px-3 py-2 bg-gray-900 rounded-lg text-gray-300 text-center">Laravel</span>
        <span class="px-3 py-2 bg-gray-900 rounded-lg text-gray-300 text-center">Node.js</span>
        <span class="px-3 py-2 bg-gray-900 rounded-lg text-gray-300 text-center">Django</span>
      </div>
    </div>

    {/*Skill Section -->*/}
    <div class="bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-700">
      <h3 class="text-xl font-bold text-white mb-4 text-center">Database</h3>
      <div class="grid grid-cols-2 gap-3">
        <span class="px-3 py-2 bg-gray-900 rounded-lg text-gray-300 text-center">MySQL</span>
        <span class="px-3 py-2 bg-gray-900 rounded-lg text-gray-300 text-center">MongoDB</span>
        <span class="px-3 py-2 bg-gray-900 rounded-lg text-gray-300 text-center">Oracle</span>
        <span class="px-3 py-2 bg-gray-900 rounded-lg text-gray-300 text-center">Phpmyadmin</span>

      </div>
    </div>

  </div>

 {/*Skill Section -->*/}
  <div class="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mt-8">
    
{/*Skill Section -->*/}
    <div class="bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-700">
      <h3 class="text-xl font-bold text-white mb-4 text-center">Machine Learning</h3>
      <div class="grid grid-cols-2 gap-3">
        <span class="px-3 py-2 bg-gray-900 rounded-lg text-gray-300 text-center">TensorFlow</span>
      </div>
    </div>

{/*Skill Section -->*/}
    <div class="bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-700">
      <h3 class="text-xl font-bold text-white mb-4 text-center">Cloud & DevOps</h3>
      <div class="grid grid-cols-2 gap-3">
        <span class="px-3 py-2 bg-gray-900 rounded-lg text-gray-300 text-center">Vercel</span>
      </div>
    </div>

{/*Skill Section -->*/}
    <div class="bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-700">
      <h3 class="text-xl font-bold text-white mb-4 text-center">Tools</h3>
      <div class="grid grid-cols-2 gap-3">
        <span class="px-3 py-2 bg-gray-900 rounded-lg text-gray-300 text-center">Git</span>
        <span class="px-3 py-2 bg-gray-900 rounded-lg text-gray-300 text-center">GitHub</span>
        <span class="px-3 py-2 bg-gray-900 rounded-lg text-gray-300 text-center">Visual Studio</span>
        <span class="px-3 py-2 bg-gray-900 rounded-lg text-gray-300 text-center">Figma</span>
        <span class="px-3 py-2 bg-gray-900 rounded-lg text-gray-300 text-center">Microsoft Office</span>
        <span class="px-3 py-2 bg-gray-900 rounded-lg text-gray-300 text-center">PowerBI</span>


      </div>
    </div>

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