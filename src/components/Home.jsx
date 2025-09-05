import { Link } from 'react-router-dom';

export default function Home() {
  return (
  <section className="flex flex-col items-center justify-center min-h-screen px-4 py-12 text-center bg-gray-100">
  <h1 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">
    Hey, I'm Ajuot Deng
  </h1>
  <p className="max-w-md text-base text-gray-600 sm:text-lg md:text-xl">
    Front-end Developer crafting modern web experiences using the MERN Stack.
  </p>
  <div className="flex flex-col gap-4 mt-8 sm:flex-row">
    <Link
      to="/projects"
      className="px-6 py-3 text-center text-white bg-blue-600 shadow rounded-2xl hover:bg-blue-700"
    >
      View Projects
    </Link>
    <Link
      to="/contact"
      className="px-6 py-3 text-center text-blue-600 border border-blue-600 rounded-2xl hover:bg-blue-50"
    >
      Contact Me
    </Link>
  </div>
</section>

  );
}
