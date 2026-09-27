import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Award, Briefcase, Terminal } from 'lucide-react';

export default function Home() {
  const navigate = useNavigate();

  // High quality developer workspace photo
  const heroImage = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop";

  return (
    <motion.div 
      className="mainarea"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.3 }}
    >
      <div className="left">
        <div className="status-badge">
          <span className="dot"></span> Available for freelance & full-time roles
        </div>
        <h1>Hi, I'm Goutam</h1>
        <h3>
          Full-Stack Architect & <span>AI Developer</span>
        </h3>
        <h5>
          I specialize in building high-performance web applications, scalable cloud backends, and intuitive glassmorphic interfaces. Transforming complex problems into elegant code.
        </h5>

        <div className="cta-group">
          <button className="btn1" onClick={() => navigate('/projects')}>
            Explore My Work <ArrowRight size={18} />
          </button>
          <button className="btn-secondary" onClick={() => navigate('/contact')}>
            Let's Connect
          </button>
        </div>

        {/* Quick Stats Grid */}
        <div className="hero-stats">
          <div className="stat-card">
            <Briefcase size={18} className="stat-icon" />
            <div>
              <strong>4+ Years</strong>
              <span>Experience</span>
            </div>
          </div>
          <div className="stat-card">
            <Code2 size={18} className="stat-icon" />
            <div>
              <strong>30+</strong>
              <span>Projects Shipped</span>
            </div>
          </div>
          <div className="stat-card">
            <Award size={18} className="stat-icon" />
            <div>
              <strong>99%</strong>
              <span>Client Satisfaction</span>
            </div>
          </div>
        </div>
      </div>

      <div className="right">
        <div className="image-wrapper">
          <img src={heroImage} alt="Goutam Workspace" className="hero-img" />
          <div className="floating-badge">
            <Terminal size={18} /> <span>Clean Code & Architecture</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}