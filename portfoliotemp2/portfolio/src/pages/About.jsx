import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Cpu, GraduationCap, Download } from 'lucide-react';

export default function About() {
  const skillsList = [
    { name: "React / Next.js", level: "95%" },
    { name: "JavaScript / TypeScript", level: "90%" },
    { name: "Python / AI Engineering", level: "85%" },
    { name: "Node.js & Express", level: "88%" },
    { name: "CSS3 / Glassmorphism / Tailwind", level: "95%" },
    { name: "MongoDB & PostgreSQL", level: "82%" }
  ];

  return (
    <motion.div 
      className="page-container"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.3 }}
    >
      <h2>About <span>Me</span></h2>
      
      <div className="about-layout">
        <div className="about-bio">
          <p>
            I am a dedicated Software Engineer with a strong focus on building resilient web applications, intuitive user experiences, and AI integrations.
          </p>
          <p>
            With experience spanning full-stack frontend frameworks and Python backend engines, I bridge the gap between design and complex technical architecture.
          </p>

          <div className="resume-cta">
            <button className="btn1 flex-btn" onClick={() => alert("Downloading CV...")}>
              <Download size={18} /> Download CV / Resume
            </button>
          </div>
        </div>

        <div className="about-skills">
          <h3>Technical Expertise</h3>
          <div className="skills-progress-list">
            {skillsList.map((skill, index) => (
              <div className="skill-bar-item" key={index}>
                <div className="skill-info">
                  <span>{skill.name}</span>
                  <span>{skill.level}</span>
                </div>
                <div className="progress-bg">
                  <div className="progress-fill" style={{ width: skill.level }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}