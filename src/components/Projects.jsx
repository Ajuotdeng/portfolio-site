// Projects.jsx

const projects = [
    {
      title: 'Motor Repair Website',
      description: 'Full-stack booking platform using the MERN stack.',
      tech: ['React', 'Tailwind', 'Node.js', 'MongoDB'],
      live: 'https://your-project-link.com',
      repo: 'https://github.com/ajuotdeng/motor-repair'
    },
    {
      title: 'Portfolio Site',
      description: 'This very portfolio, built with React and styled with Tailwind CSS.',
      tech: ['React', 'Tailwind'],
      live: 'https://yourportfolio.com',
      repo: 'https://github.com/ajuotdeng/portfolio'
    },
    // Add more projects here...
  ];
  
  export default function Projects() {
    return (
      <section className="min-h-screen bg-gray-50 p-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-2xl shadow p-6">
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <p className="text-sm text-gray-500 mb-4">Tech: {project.tech.join(', ')}</p>
              <div className="space-x-4">
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  Live Site
                </a>
                <a href={project.repo} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  