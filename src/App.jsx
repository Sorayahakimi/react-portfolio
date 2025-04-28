import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";
import profileImg from "./assets/profile.jpg"; // Update path if different

export default function App() {
  return (
    <div className="bg-gray-100 text-gray-800 font-sans">
      {/* Navbar */}
      <header className="bg-white shadow-md py-4">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">Thuraya</h1>
          <nav className="space-x-6 text-sm">
            <a href="#about" className="hover:text-blue-600">About</a>
            <a href="#projects" className="hover:text-blue-600">Projects</a>
            <a href="#skills" className="hover:text-blue-600">Skills</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-[url('https://images.unsplash.com/photo-1517433456452-f9633a875f6f')] bg-cover bg-center text-white text-center py-32">
        <div className="bg-black bg-opacity-60 p-10 rounded-md max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Hi, I'm Thuraya</h2>
          <p className="text-lg mb-6">A Frontend Developer focused on creating beautiful and functional web interfaces.</p>
          <a href="#projects" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md transition">View My Work</a>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20 bg-white text-center">
        <h3 className="text-3xl font-bold mb-12">What I Do</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-6 max-w-6xl mx-auto">
          <div className="p-6 border rounded-xl shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-2">Responsive Design</h4>
            <p>Websites that look great on all screen sizes.</p>
          </div>
          <div className="p-6 border rounded-xl shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-2">React & Tailwind</h4>
            <p>Building modern web apps with efficient UI frameworks.</p>
          </div>
          <div className="p-6 border rounded-xl shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-2">Clean Code</h4>
            <p>Readable, maintainable, and scalable frontend code.</p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 bg-gray-100 text-center">
        <h3 className="text-3xl font-bold mb-12">My Projects</h3>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition w-full max-w-sm">
              <img
                src={profileImg}
                alt="Portfolio Screenshot"
                className="rounded mb-4 w-full"
              />
              <h4 className="text-xl font-semibold mb-2">Portfolio Website</h4>
              <p className="mb-3">A modern personal website built with React and Tailwind CSS.</p>
              <a href="https://github.com/Sorayahakimi/react-portfolio" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:underline">
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white text-center">
        <h3 className="text-3xl font-bold mb-10">Get In Touch</h3>
        <form action="https://formsubmit.co/sorayahakimi121@gmail.com" method="POST" className="max-w-md mx-auto space-y-4">
          <input type="text" name="name" placeholder="Your Name" required className="w-full p-3 border rounded-md" />
          <input type="email" name="email" placeholder="Your Email" required className="w-full p-3 border rounded-md" />
          <textarea name="message" placeholder="Your Message" required className="w-full p-3 border rounded-md"></textarea>
          <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">Send</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-gray-200 py-6 text-center text-sm">
        <p>© {new Date().getFullYear()} Thuraya. All rights reserved.</p>
        <div className="mt-2 flex justify-center space-x-4">
          <a href="mailto:sorayahakimi121@gmail.com" aria-label="Email Thuraya"><Mail size={18} /></a>
          <a href="https://github.com/Sorayahakimi" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
  <Github size={18} />
</a>

          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
        </div>
      </footer>
    </div>
  );
}
