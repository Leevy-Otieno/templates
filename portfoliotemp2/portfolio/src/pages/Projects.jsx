import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Folder } from 'lucide-react';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const projectsData = [
    {
      id: 1,
      title: "AI Resume & ATS Analyzer",
      category: "AI / Python",
      description: "An automated candidate scoring engine that extracts skills from PDFs, parses structured data using NLP, and gives ATS compatibility scores.",
      tags: ["Python", "Streamlit", "spaCy", "PDFPlumber"],
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=600&auto=format&fit=crop",
      github: "https://github.com",
      demo: "https://example.com"
    },
    {
      id: 2,
      title: "Fintech Glass Dashboard",
      category: "Frontend",
      description: "Real-time cryptocurrency and stocks tracking dashboard featuring glassmorphic visual cues, dynamic dark mode, and interactive charts.",
      tags: ["React", "Vite", "Chart.js", "Tailwind"],
      image: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?q=80&w=600&auto=format&fit=crop",
      github: "https://github.com",
      demo: "https://example.com"
    },
    {
      id: 3,
      title: "Enterprise E-Commerce Engine",
      category: "Full Stack",
      description: "Full-stack e-commerce marketplace complete with Stripe payment integration, admin inventory controls, and order tracking.",
      tags: ["Next.js", "Node.js", "MongoDB", "Stripe"],
      image: "https://images.unsplash.com/photo-1556742049-0a670f4a4591?q=80&w=600&auto=format&fit=crop",
      github: "https://github.com",
      demo: "https://example.com"
    },
    {
      id: 4,
      title: "Smart AI Chat Assistant",
      category: "AI / Python",
      description: "Conversational AI agent capable of reading user documents, executing database operations, and offering contextual suggestions.",
      tags: ["React", "Python", "FastAPI", "OpenAI"],
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop",
      github: "https://github.com",
      demo: "https://example.com"
    }
  ];

  const filters = ["All", "Frontend", "Full Stack", "AI / Python"];

  const filteredProjects = activeFilter === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeFilter);

  return (
    <motion.div 
      className="page-container"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.3 }}
    >
      <h2>Featured <span>Projects</span></h2>
      <p className="section-subtitle">A showcase of production-ready web platforms, AI tools, and full-stack systems.</p>

      <div className="project-filters">
        {filters.map((filter) => (
          <button
            key={filter}
            className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <motion.div 
            className="project-card" 
            key={project.id}
            layout
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            <div className="card-image-wrapper">
              <img src={project.image} alt={project.title} className="project-thumbnail" />
              <div className="overlay-links">
                <a href={project.github} target="_blank" rel="noreferrer"><Github size={18} /> Code</a>
                <a href={project.demo} target="_blank" rel="noreferrer"><ExternalLink size={18} /> Demo</a>
              </div>
            </div>

            <div className="project-details">
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}