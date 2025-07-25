import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-gray-200 border-t-4 border-[#fcd346] py-8 mt-16">
      <div className="grid max-w-6xl grid-cols-1 gap-6 px-4 mx-auto md:grid-cols-3">
        {/* Left Column */}
        <div>
          <h3 className="mb-2 text-xl font-bold text-[#fcd346]">Ajuot Deng</h3>
          <p className="text-sm text-gray-200">
            Designing modern websites, crafted to your vision.
          </p>
        </div>

        {/* Middle Column */}
        <div>
          <h4 className="mb-2 text-lg font-semibold text-[#fcd346]">
            Quick Links
          </h4>
          <ul className="space-y-1 text-sm transition-colors duration-200">
            <li>
              <Link to="/" className="hover:text-[#fcd346]">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-[#fcd346]">
                About
              </Link>
            </li>
            <li>
              <Link to="/projects" className="hover:text-[#fcd346]">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-[#fcd346]">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Right Column */}
        <div>
          <h4 className="mb-2 text-lg font-semibold text-accent">Contact Us</h4>
          <p className="text-gray-200">
            Juba
            <br />
            South Sudan
          </p>
          <p className="mt-1 text-gray-200">
            Email:{" "}
            <a
              href="mailto:ajuotdeng800@gmail.com"
              className="hover:underline text-[#f87171]"
            >
              ajuotdeng800@gmail.com
            </a>
          </p>
        </div>
      </div>

      <div className="pt-4 mt-8 text-sm text-gray-300 border-t border-gray-500">
        <div className="max-w-6xl px-4 mx-auto text-center">
          © {new Date().getFullYear()} Ajuot Deng. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
