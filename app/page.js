'use client';
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <main className="scroll-smooth">
      <Navbar />
      <section
        id="home"
        className="h-screen flex justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-center px-6"
      >
        <div>
          <h1 className="text-5xl font-bold mb-4">
            Hello World, I m <span className="text-cyan-300">Sandy!</span>
          </h1>
          <p className="text-lg text-white/80">
            I m passionate about building elegant web apps.
          </p>
        </div>
      </section>

      <section id="about" className="h-screen px-8 py-24 bg-white text-black">
        <h2 className="text-3xl font-bold mb-4">About</h2>
        <p>Halo! Saya Sandy, seorang developer dengan ketertarikan pada UI/UX dan sistem performa tinggi.</p>
      </section>

      <section id="experience" className="h-screen px-8 py-24 bg-gray-100">
        <h2 className="text-3xl font-bold mb-4">Experience</h2>
        <p>Saya pernah terlibat dalam berbagai proyek pengembangan frontend dan dokumentasi sistem berbasis web.</p>
      </section>

      <section id="projects" className="h-screen px-8 py-24 bg-white">
        <h2 className="text-3xl font-bold mb-4">Projects</h2>
        <p>Beberapa project saya meliputi aplikasi HRM, translator bahasa isyarat, dan sistem monitoring kinerja aplikasi.</p>
      </section>

      <section id="connect" className="h-screen px-8 py-24 bg-gray-100">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <p>Email saya: sandy@example.com — mari terhubung di LinkedIn juga!</p>
      </section>
    </main>
  );
}