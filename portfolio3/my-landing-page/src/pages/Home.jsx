import React from 'react';
import { Code2, ArrowRight, Layout, Terminal, Cpu, Briefcase } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FeatureCard from '../components/FeatureCard';

export default function Home() {
  const skills = [
    {
      icon: Layout,
      title: 'Frontend Development',
      description: 'Building responsive, reactive, and accessible user interfaces using React, Next.js, and modern CSS frameworks.'
    },
    {
      icon: Terminal,
      title: 'Backend Engineering',
      description: 'Designing RESTful APIs, microservices, and database schemas with Node.js, Express, and PostgreSQL.'
    },
    {
      icon: Cpu,
      title: 'UI/UX Design Systems',
      description: 'Crafting clean component libraries, wireframes, and interactive design prototypes using Figma and Tailwind.'
    }
  ];

  const projects = [
    { title: 'DevFlow Analytics', category: 'SaaS Platform', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80' },
    { title: 'Zenith E-Commerce', category: 'Full Stack App', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80' },
    { title: 'CryptoPulse Mobile', category: 'React Native', image: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=800&q=80' }
  ];

  const experience = [
    { role: 'Senior Frontend Engineer', company: 'TechCorp Labs (2023 - Present)', summary: 'Led a team of 5 developers building enterprise web portals. Improved core web vitals by 40% across flagship apps.' },
    { role: 'Full Stack Developer', company: 'Digital Nexus (2021 - 2023)', summary: 'Architected scalable Node.js microservices and integrated payment gateways handling over $2M in transactions.' }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans antialiased selection:bg-indigo-500 selection:text-white">
      <Navbar />

      {/* Hero / About Section */}
      <section id="about" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl -z-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-6">
            <Code2 className="w-3.5 h-3.5" />
            <span>Full-Stack Engineer & UI Architect</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6 max-w-4xl mx-auto leading-tight">
            Hi, I'm Alex. I turn ideas into high-performance web products.
          </h1>
          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Specializing in modern JavaScript frameworks, clean architecture, and intuitive user interface design with over 5 years of commercial experience.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#projects" className="w-full sm:w-auto px-8 py-3.5 text-base font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl shadow-xl shadow-indigo-600/30 transition-all flex items-center justify-center space-x-2">
              <span>View Portfolio</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#cta" className="w-full sm:w-auto px-8 py-3.5 text-base font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700/80 rounded-xl border border-slate-700/60 transition-all text-center">
              Let's Talk
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-slate-900/50 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Core Expertise</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Technologies and disciplines I utilize to build modern digital products.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((item, idx) => (
              <FeatureCard key={idx} icon={item.icon} title={item.title} description={item.description} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="py-20 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Selected Works</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              A collection of web applications, client projects, and open-source contributions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-800/30">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider">{project.category}</span>
                  <h3 className="text-xl font-bold text-white mt-1">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section id="experience" className="py-20 bg-slate-900/50 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Work Experience</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Highlights from my full-time roles and client engagements.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {experience.map((item, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-slate-800/40 border border-slate-800 flex flex-col justify-between">
                <div className="flex items-center space-x-3 mb-4 text-indigo-400">
                  <Briefcase className="w-5 h-5" />
                  <span className="font-semibold text-sm uppercase tracking-wide">{item.company}</span>
                </div>
                <p className="text-slate-300 mb-6 leading-relaxed">{item.summary}</p>
                <div>
                  <h4 className="font-bold text-white text-lg">{item.role}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-20 border-t border-slate-800 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-10 md:p-16 rounded-3xl bg-gradient-to-r from-indigo-900/50 to-violet-900/50 border border-indigo-500/20 text-center relative z-10 backdrop-blur-sm">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-6">
              Have a Project in Mind?
            </h2>
            <p className="text-slate-300 max-w-xl mx-auto mb-8 text-lg">
              I am available for freelance work, full-time engineering roles, and technical consultations.
            </p>
            <a 
              href="mailto:alex.rivera@example.com" 
              className="inline-flex items-center space-x-2 px-8 py-4 text-base font-semibold text-slate-900 bg-white hover:bg-slate-100 rounded-xl shadow-xl transition-all"
            >
              <span>Send Me a Message</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}