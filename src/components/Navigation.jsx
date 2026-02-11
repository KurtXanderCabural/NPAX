import React from 'react';
import nOxImage from "../assets/NOX.png";
import { Globe } from 'lucide-react';

export default function Navigation() {
  return (
    <nav className="relative z-10 flex items-center justify-between px-8 py-6 bg-black/80">
      <div className="flex items-center">
        <img src={nOxImage} alt="N-PAX Logo" className="h-12 w-auto" />
      </div>

      <div className="flex items-center space-x-12">
        <a href="#home" className="text-white hover:text-blue-500 transition">Home</a>
        <a href="#services" className="text-white hover:text-blue-500 transition">Services</a>
        <a href="#blogs" className="text-white hover:text-blue-500 transition">Blogs</a>
        <a href="#careers" className="text-white hover:text-blue-500 transition">Careers</a>
        <a href="#about" className="text-white hover:text-blue-500 transition">Abouts Us</a>
      </div>

      <Globe className="w-8 h-8 text-white cursor-pointer hover:text-blue-500 transition" />
    </nav>
  );
}