// About.jsx

export default function About() {
    return (
      <section className="min-h-screen flex flex-col justify-center items-center bg-white p-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
        <div className="max-w-3xl text-gray-700 space-y-4 text-lg">
          <p>
            I'm a passionate web developer with a focus on building responsive, fast, and accessible applications.
          </p>
          <p>
            My tech stack includes JavaScript, React, Node.js, Express, and MongoDB. I also love working with Tailwind CSS for modern UI design.
          </p>
          <p>
            When I'm not coding, I’m probably exploring new tech, contributing to open-source, or enjoying good coffee ☕.
          </p>
        </div>
        <a href="/resume.pdf" className="mt-8 inline-block px-6 py-3 border border-gray-800 rounded-2xl hover:bg-gray-100">
          Download Resume
        </a>
      </section>
    );
  }
  