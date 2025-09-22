import React from 'react';
import { Link} from 'react-router-dom';
import About from "../About";
import Projects from "../Projects";
import Contact from '../Contact';

export default function Home() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen px-4 py-12 text-center">
        <h1 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl">
          Hey, I'm Ajuot Deng
        </h1>
        <p className="max-w-md mb-8 text-gray-600 sm:text-lg md:text-xl">
          Front-end Developer crafting modern web experiences using the MERN Stack.
        </p>
        <div className="flex flex-col gap-4 mt-8 sm:flex-row">
          <Link
            to="/projects"
            className="px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            View Projects
          </Link>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-6 py-3 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50"
          >
            Contact Me
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 md:py-16">
        <div className="container px-4 mx-auto">
          <About />
        </div>
      </section>

      {/* Projects Preview Section */}
      <section  className="py-12 md:py-16">
        <div className="container px-4 mx-auto">
          <Projects />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 md:py-16">
        <div className="container px-4 mx-auto">
          <Contact />
        </div>
      </section>
    </div>
  );
}
