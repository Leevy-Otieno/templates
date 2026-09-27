import React, { useState } from 'react';
import { Code2, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-indigo-600 rounded-lg text-white">
              <Code2 className="w-5 h-5" />
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-violet-400">
              Alex Rivera
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-sm font-medium text-slate-300 hover:text-indigo-400 transition-colors">About</a>
            <a href="#skills" className="text-sm font-medium text-slate-300 hover:text-indigo-400 transition-colors">Skills</a>
            <a href="#projects" className="text-sm font-medium text-slate-300 hover:text-indigo-400 transition-colors">Projects</a>
            <a href="#experience" className="text-sm font-medium text-slate-300 hover:text-indigo-400 transition-colors">Experience</a>
            <a href="#cta" className="px-4 py-2 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg shadow-lg shadow-indigo-600/30 transition-all duration-200">
              Contact Me
            </a>
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-400 hover:text-white focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-800 bg-slate-900 px-4 pt-2 pb-4 space-y-3">
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-indigo-400 py-1">About</a>
          <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-indigo-400 py-1">Skills</a>
          <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-indigo-400 py-1">Projects</a>
          <a href="#experience" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-indigo-400 py-1">Experience</a>
          <a href="#cta" onClick={() => setMobileMenuOpen(false)} className="inline-block w-full text-center px-4 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-lg">
            Contact Me
          </a>
        </div>
      )}
    </nav>
  );
}