import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Check } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSent(true);
    setTimeout(() => {
      setIsSent(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <motion.div 
      className="page-container"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.3 }}
    >
      <h2>Get In <span>Touch</span></h2>
      <p className="section-subtitle">Have a project idea or job opportunity? Send me a message and let's discuss.</p>
      
      <div className="contact-grid">
        <div className="contact-info">
          <div className="info-card">
            <Mail className="info-icon" size={22} />
            <div>
              <strong>Email Me</strong>
              <p>goutam@ironcoding.com</p>
            </div>
          </div>

          <div className="info-card">
            <Phone className="info-icon" size={22} />
            <div>
              <strong>Call Me</strong>
              <p>+1 (555) 019-2834</p>
            </div>
          </div>

          <div className="info-card">
            <MapPin className="info-icon" size={22} />
            <div>
              <strong>Location</strong>
              <p>New York, NY - Available Globally</p>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="input-row">
            <input 
              type="text" 
              placeholder="Your Name" 
              required 
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <input 
              type="email" 
              placeholder="Your Email" 
              required 
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          <input 
            type="text" 
            placeholder="Subject" 
            required 
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          />
          <textarea 
            rows="5" 
            placeholder="Tell me about your project or inquiry..." 
            required 
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          ></textarea>

          <button type="submit" className="btn1 flex-btn">
            {isSent ? (
              <>Message Sent <Check size={18} /></>
            ) : (
              <>Send Message <Send size={16} /></>
            )}
          </button>
        </form>
      </div>
    </motion.div>
  );
}