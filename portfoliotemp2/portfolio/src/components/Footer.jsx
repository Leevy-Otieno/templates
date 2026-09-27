import React from 'react';
import { Globe, Share2, Code, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} Iron Coding. Built with <Heart size={14} className="heart-icon" /> by Goutam.
      </p>
      <div className="social-links">
        <a href="https://github.com" target="_blank" rel="noreferrer" title="GitHub"><Code size={18} /></a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer" title="LinkedIn"><Share2 size={18} /></a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer" title="Twitter"><Globe size={18} /></a>
      </div>
    </footer>
  );
}