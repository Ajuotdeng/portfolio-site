// src/components/Navbar.jsx
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
  <Link to="/" className="text-xl font-bold text-blue-600 hover:underline">
    Ajuot Deng
  </Link>


        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-800 font-medium">
          <li><Link to="/" className="hover:text-blue-600 transition">Home</Link></li>
          <li><Link to="/about" className="hover:text-blue-600 transition">About</Link></li>
          <li><Link to="/projects" className="hover:text-blue-600 transition">Projects</Link></li>
          <li><Link to="/contact" className="hover:text-blue-600 transition">Contact</Link></li>
        </ul>

        {/* Hamburger Icon */}
        <button onClick={toggleMenu} className="md:hidden text-gray-800">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden px-6 pb-4 space-y-2 bg-white shadow text-gray-800 font-medium">
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
          <li><Link to="/projects" onClick={toggleMenu}>Projects</Link></li>
          <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
        </ul>
      )}
    </nav>
  );
}
