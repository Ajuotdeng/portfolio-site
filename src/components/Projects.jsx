const projects = [
  {
    title: 'Pan-mabur web',
    description: 'This web was built with React and styled with Tailwind CSS',
    tech: ['React', 'Javascript', 'html','Tailwind CSS'],
    live: 'https://panmabur.netlify.app',
    repo: 'https://github.com/Ajuotdeng/Pan-mabur-web',
  },

   {
    title: 'Portfolio Site',
    description: 'This very portfolio, built with React and styled with Tailwind CSS.',
    tech: ['React', 'Javascript', 'Tailwind'],
    live: 'https://ajuotdeng.netlify.app',
    repo: 'https://github.com/Ajuotdeng/portfolio-site',
  },

  {
    title: 'Motor Repair Website',
    description: 'Full-stack booking platform using the MERN stack.',
    tech: ['React', 'Tailwind', 'Node.js', 'Javascript', 'MongoDB'],
    live: 'https://your-project-link.com',
    repo: 'https://github.com/Ajuotdeng/motor-repair',
  },
 
];

export default function Projects() {
  return (
    <section className="min-h-screen px-4 py-16 overflow-auto bg-gray-50">
      <h2 className="mb-12 text-4xl font-bold text-center">Projects</h2>
      <div className="grid max-w-6xl gap-8 mx-auto md:grid-cols-2">
        {projects.map((project, index) => (
          <div key={index} className="p-6 bg-white shadow rounded-2xl">
            <h3 className="mb-2 text-2xl font-semibold">{project.title}</h3>
            <p className="mb-4 text-gray-600">{project.description}</p>
            <p className="mb-4 text-sm text-gray-500">
              Tech: {project.tech.join(', ')}
            </p>
            <div className="space-x-4">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Live Site
              </a>
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
