import React from 'react';
import { Code2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-slate-800 bg-slate-950 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-2">
            <Code2 className="w-5 h-5 text-indigo-400" />
            <span className="text-lg font-bold text-white">Alex Rivera</span>
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#cta" className="hover:text-white transition-colors">Contact</a>
          </div>
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Alex Rivera. Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}