export default function About() {
    return (
      <section className="flex flex-col items-center justify-center min-h-screen p-8 bg-white">
        <h2 className="mb-6 text-3xl font-bold md:text-4xl">About Me</h2>
          <div className="flex flex-col md:flex-row items-center gap-6">
  <img src="/assets/ajuot.jpg" alt="Ajuot Deng" className="w-48 h-48 rounded-full shadow-md object-cover" />
  <p className="text-gray-700"></p>
          <p>
            I'm a passionate web developer with a focus on building responsive, fast, and accessible applications.
          </p>
          <p>
            My tech stack includes JavaScript, React, Node.js, Express,MongoDB, PHP and Laravel. I also love working with Tailwind CSS for modern UI design.
          </p>
          <p>
            When I'm not coding, I’m probably exploring new tech, contributing to open-source, or enjoying good coffee ☕.
          </p>
        </div>
        <a href="/resume.pdf" className="inline-block px-6 py-3 mt-8 border border-gray-800 rounded-2xl hover:bg-gray-100">
          Download Resume
        </a>
      </section>
    );
  }
  





