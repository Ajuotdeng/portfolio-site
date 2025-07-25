// src/components/Navbar.jsx
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-white shadow-md">
      <div className="flex items-center justify-between px-4 py-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
  <Link to="/" className="text-xl font-bold text-blue-600 hover:underline">
    Ajuot Deng
  </Link>


        {/* Desktop Menu */}
        <ul className="hidden space-x-6 font-medium text-gray-800 md:flex">
          <li><Link to="/" className="transition hover:text-blue-600">Home</Link></li>
          <li><Link to="/about" className="transition hover:text-blue-600">About</Link></li>
          <li><Link to="/projects" className="transition hover:text-blue-600">Projects</Link></li>
          <li><Link to="/contact" className="transition hover:text-blue-600">Contact</Link></li>
        </ul>

        {/* Hamburger Icon */}
        <button onClick={toggleMenu} className="text-gray-800 md:hidden">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="px-6 pb-4 space-y-2 font-medium text-gray-800 bg-white shadow md:hidden">
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
          <li><Link to="/projects" onClick={toggleMenu}>Projects</Link></li>
          <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
        </ul>
      )}
    </nav>
  );
}
