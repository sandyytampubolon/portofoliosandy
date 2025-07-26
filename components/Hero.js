import React from 'react';

const PortfolioPage = () => {
  return (
    <div className="bg-black text-white font-[Inter]">
      {/* Navbar */}
      <nav className="bg-[#111111] px-6 py-4 flex justify-center space-x-8 text-[10px] font-normal text-[#666666]">
        <a className="hover:text-white transition" href="#">Home</a>
        <a className="hover:text-white transition" href="#">Case Studies</a>
        <a className="hover:text-white transition" href="#">Testimonials</a>
        <a className="hover:text-white transition" href="#">Recent Work</a>
        <a className="hover:text-white transition" href="#">Get In Touch</a>
        <div className="flex space-x-4 ml-6 opacity-40">
          <a aria-label="LinkedIn" className="hover:opacity-100 transition" href="#">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a aria-label="Behance" className="hover:opacity-100 transition" href="#">Bē</a>
          <a aria-label="Twitter" className="hover:opacity-100 transition" href="#">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#111111] px-6 py-12 md:py-20 max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-10 md:gap-20">
        <div className="max-w-xl text-left">
          <h1 className="text-white font-extrabold text-2xl md:text-3xl mb-3">Your Name Here</h1>
          <p className="text-[#999999] text-xs md:text-sm leading-relaxed mb-6 max-w-md">
            Tailor has a lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="bg-[#3B7D00] text-white text-xs md:text-sm font-semibold px-6 py-2 rounded shadow-[0_0_15px_#3B7D00] hover:shadow-[0_0_25px_#3B7D00] transition">
            Let’s get started &gt;
          </button>
        </div>
        <div className="flex-shrink-0">
          <img
            alt="Portrait"
            className="rounded-full w-60 h-60 object-cover"
            src="https://storage.googleapis.com/a1aa/image/53d5af59-90ee-4ebd-0f96-cae3627e3038.jpg"
          />
        </div>
      </section>

{/* Case Studies Section */}
<section className="bg-black text-white px-6 py-16 space-y-16">
  {/* Case Study 1 */}
  <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-12 max-w-5xl mx-auto">
    <div className="md:w-1/2 space-y-3">
      <span className="inline-block bg-[#FFB347] text-[9px] font-semibold text-black px-2 py-0.5 rounded">
        Fintech
      </span>
      <h3 className="font-extrabold text-base md:text-lg">Work name here</h3>
      <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit...
      </p>
      <button className="bg-[#FF9C00] text-white text-xs md:text-sm font-semibold px-4 py-1 rounded shadow-[0_0_10px_#FF9C00] hover:shadow-[0_0_20px_#FF9C00] transition">
        View case study &gt;
      </button>
    </div>
    <div className="md:w-1/2">
      <img
        alt="UX design workspace"
        className="rounded-lg object-cover w-full h-48 md:h-40"
        src="https://storage.googleapis.com/a1aa/image/2a42c53b-0a1c-454e-642c-dd4137a1eb9d.jpg"
      />
    </div>
  </div>

  {/* Case Study 2 */}
  <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-6 md:gap-12 max-w-5xl mx-auto">
    <div className="md:w-1/2 space-y-3">
      <span className="inline-block bg-[#007BFF] text-[9px] font-semibold text-white px-2 py-0.5 rounded">
        EdTech
      </span>
      <h3 className="font-extrabold text-base md:text-lg">Work name here</h3>
      <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit...
      </p>
      <button className="bg-[#003FFF] text-white text-xs md:text-sm font-semibold px-4 py-1 rounded shadow-[0_0_10px_#003FFF] hover:shadow-[0_0_20px_#003FFF] transition">
        View case study &gt;
      </button>
    </div>
    <div className="md:w-1/2">
      <img
        alt="Tablet with charts"
        className="rounded-lg object-cover w-full h-48 md:h-40"
        src="https://storage.googleapis.com/a1aa/image/49170c2c-a25c-4cdb-0912-8e4c27cff85b.jpg"
      />
    </div>
  </div>

  {/* Case Study 3 */}
  <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-12 max-w-5xl mx-auto">
    <div className="md:w-1/2 space-y-3">
      <span className="inline-block bg-[#00BFA6] text-[9px] font-semibold text-black px-2 py-0.5 rounded">
        Pharma
      </span>
      <h3 className="font-extrabold text-base md:text-lg">Work name here</h3>
      <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit...
      </p>
      <button className="bg-[#00BFA6] text-white text-xs md:text-sm font-semibold px-4 py-1 rounded shadow-[0_0_10px_#00BFA6] hover:shadow-[0_0_20px_#00BFA6] transition">
        View case study &gt;
      </button>
    </div>
    <div className="md:w-1/2">
      <img
        alt="Pharma dashboard"
        className="rounded-lg object-cover w-full h-48 md:h-40"
        src="https://storage.googleapis.com/a1aa/image/dd245888-ced7-4bb9-e889-8ec117273281.jpg"
      />
    </div>
  </div>
</section>

{/* Testimonials Section */}
<section className="bg-black text-white max-w-7xl mx-auto px-6 py-16 space-y-8">
  <div className="text-center max-w-xl mx-auto">
    <h2 className="font-extrabold text-lg md:text-xl mb-2">Testimonials</h2>
    <p className="text-xs md:text-sm text-gray-500 leading-relaxed">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit...
    </p>
  </div>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
    {[1, 2, 3, 4].map((_, i) => (
      <div key={i} className="border border-gray-700 p-6 rounded-md space-y-4">
        <div className="text-gray-400 text-3xl leading-none">“</div>
        <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit...
        </p>
        <div className="flex items-center space-x-3">
          <img
            className="w-8 h-8 rounded-full object-cover"
            src={`https://storage.googleapis.com/a1aa/image/${[
              "7ca55c0d-af37-4be2-2df0-5a54acdf1e43",
              "dcb89ecd-9d1e-4c55-456a-67804eb4c48c",
              "f5ff4c2f-2352-4c1e-99d4-bd2fba37263e",
              "410dd857-0373-46f5-d5f3-f9b8a6528eb3",
            ][i]}.jpg`}
            alt="Client Avatar"
          />
          <span className="font-semibold text-white text-xs md:text-sm">
            Client Name
          </span>
        </div>
      </div>
    ))}
  </div>
</section>

{/* Recent Work Section */}
<section className="bg-white text-black max-w-7xl mx-auto px-6 py-16 space-y-12">
  <div className="text-center max-w-xl mx-auto">
    <h2 className="font-extrabold text-lg md:text-xl mb-2">Recent Work</h2>
    <p className="text-xs md:text-sm text-gray-500 leading-relaxed">
      Solving user & business problems since last 15+ years...
    </p>
  </div>
  <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 md:gap-12">
    {[1, 2].map((_, i) => (
      <div key={i} className="md:w-1/2 space-y-3">
        <img
          alt="Work Showcase"
          className="rounded-lg object-cover w-full h-48 md:h-40"
          src={`https://storage.googleapis.com/a1aa/image/${[
            "f5ac3cf4-f874-46f4-83c2-414169a21d44",
            "c218e63b-1e6c-4a27-f71a-ad412adb3164",
          ][i]}.jpg`}
        />
        <h3 className="font-extrabold text-base md:text-lg">Work name here</h3>
        <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
          Lorem ipsum dolor sit amet...
        </p>
        <button className="bg-[#3B7D00] text-white text-xs md:text-sm font-semibold px-4 py-1 rounded shadow-[0_0_10px_#3B7D00] hover:shadow-[0_0_20px_#3B7D00] transition">
          Know more &gt;
        </button>
      </div>
    ))}
  </div>
</section>

{/* Get In Touch Section */}
<section className="bg-black text-white max-w-7xl mx-auto px-6 py-16">
  <div className="text-center max-w-xl mx-auto mb-8">
    <h2 className="font-extrabold text-lg md:text-xl mb-2">Get In Touch</h2>
    <p className="text-xs md:text-sm text-gray-500 leading-relaxed">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit...
    </p>
  </div>
  <form className="max-w-md mx-auto space-y-4">
    <div>
      <label className="block text-xs font-semibold mb-1" htmlFor="email">Email</label>
      <input
        className="w-full rounded px-3 py-2 text-black text-xs md:text-sm"
        id="email"
        type="email"
        placeholder="Please enter your email"
      />
    </div>
    <div>
      <label className="block text-xs font-semibold mb-1" htmlFor="mobile">Mobile</label>
      <input
        className="w-full rounded px-3 py-2 text-black text-xs md:text-sm"
        id="mobile"
        type="tel"
        placeholder="Enter mobile"
      />
    </div>
    <div>
      <label className="block text-xs font-semibold mb-1" htmlFor="message">Message</label>
      <textarea
        className="w-full rounded px-3 py-2 text-black text-xs md:text-sm resize-none"
        id="message"
        rows="4"
        placeholder="Enter your message"
      ></textarea>
    </div>
    <button
      className="bg-[#3B7D00] w-full text-white text-xs md:text-sm font-semibold px-6 py-2 rounded shadow-[0_0_15px_#3B7D00] hover:shadow-[0_0_25px_#3B7D00] transition"
      type="submit"
    >
      Submit &gt;
    </button>
  </form>
</section>


      {/* Footer */}
      <footer className="bg-black text-white text-center py-6 text-xs md:text-sm">
        <p>
          Made with <span className="text-red-600">❤️</span>
        </p>
      </footer>
    </div>
  );
};

export default PortfolioPage;

