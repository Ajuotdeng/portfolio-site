export default function About() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen p-6 bg-white">
      <h2 className="mb-6 text-3xl font-bold text-center md:text-4xl">Ajuot Here</h2>

      <div className="flex flex-col items-center max-w-4xl gap-6 md:flex-row md:items-start md:gap-10">
        <img
          src="/assets/ajuot.jpg"
          alt="Ajuot Deng"
         className="object-contain w-40 h-40 p-1 bg-gray-100 rounded-full shadow-md sm:w-48 sm:h-48 md:w-56 md:h-56"
        />

        <div className="space-y-4 text-center md:text-left">
          <p className="text-gray-700">
            I'm a passionate web developer with a focus on building responsive, fast, and accessible applications.
          </p>
          <p className="text-gray-700">
            My tech stack includes JavaScript, React, Node.js, Express, MongoDB, PHP, and Laravel. I also love working with Tailwind CSS for modern UI design.
          </p>
          <p className="text-gray-700">
            When I'm not coding, I’m probably exploring new tech, contributing to open-source, or enjoying good coffee.
          </p>
        </div>
      </div>

      <a 
  href="https://docs.google.com/document/d/1MsObnYnRTG5lqIHHwnvHw2JS3KGap7kJB8YJpuS2lVE/export?format=pdf" 
  download
  target="_blank"
  rel="noopener noreferrer"
  className="px-4 py-2 text-white bg-blue-600 rounded-lg"
>
  Download Resume
</a>

    </section>
  );
}
