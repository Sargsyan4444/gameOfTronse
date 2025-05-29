

import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-10">
      <div className="max-w-6xl mx-auto px-5 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo / Title */}
        <div className="text-2xl font-bold text-yellow-400">
          ThronesVerse
        </div>

        {/* Links */}
        <ul className="flex space-x-6 text-gray-300">
          <li>
            <a href="#" className="hover:text-yellow-400 transition">Home</a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-400 transition">Characters</a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-400 transition">About</a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-400 transition">Contact</a>
          </li>
        </ul>

        {/* Social Icons */}
        <div className="flex space-x-4 text-gray-300">
          <a href="#" className="hover:text-yellow-400 transition">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-yellow-400 transition">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-yellow-400 transition">
            <FaInstagram />
          </a>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-6">
        &copy; {new Date().getFullYear()} ThronesVerse. All rights reserved.
      </div>
    </footer>
  );
}
