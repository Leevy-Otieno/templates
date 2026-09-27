import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layout, Smartphone, Cpu, Cloud, Database, CheckCircle } from 'lucide-react';

export default function Services() {
  const servicesList = [
    {
      icon: <Code size={30} />,
      title: "Full-Stack Web Development",
      description: "Custom web applications built with React, Next.js, and Node.js. Optimized for speed, SEO, and responsiveness.",
      deliverables: ["Single Page Applications", "REST & GraphQL APIs", "Performance Optimization"]
    },
    {
      icon: <Layout size={30} />,
      title: "UI/UX & Glassmorphic Design",
      description: "Modern component design systems with glassmorphic aesthetic touch, accessibility, and micro-interactions.",
      deliverables: ["Interactive Prototypes", "Design System Systems", "Figma to React Code"]
    },
    {
      icon: <Cpu size={30} />,
      title: "AI & LLM Integration",
      description: "Integrating intelligent AI models (Gemini, OpenAI, spaCy) into business workflows for resume parsing and chatbots.",
      deliverables: ["Resume Analysis Engines", "Custom AI Chatbots", "Automated Workflows"]
    },
    {
      icon: <Cloud size={30} />,
      title: "Cloud & DevOps Solutions",
      description: "Deployment, CI/CD pipelines, and hosting management on AWS, Vercel, and Docker environments.",
      deliverables: ["Docker Containerization", "Automated Deployments", "Serverless Architecture"]
    }
  ];

  return (
    <motion.div 
      className="page-container"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.3 }}
    >
      <h2>Professional <span>Services</span></h2>
      <p className="section-subtitle">End-to-end software solutions designed to scale your business.</p>

      <div className="services-grid">
        {servicesList.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h4>{service.title}</h4>
            <p>{service.description}</p>
            <ul className="deliverables-list">
              {service.deliverables.map((item, idx) => (
                <li key={idx}><CheckCircle size={14} /> {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.div>
  );
}