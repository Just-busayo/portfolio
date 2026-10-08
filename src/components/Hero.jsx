import React from 'react';
import SparkleIcon from './SparkleIcon';
import './Hero.css';

export default function Hero({ onOpenContact, onNavigateWorks }) {
  const handleViewCaseStudies = () => {
    if (onNavigateWorks) {
      onNavigateWorks();
    } else {
      const el = document.getElementById('work');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadCV = () => {
    alert('Resume download initiated for Elizabeth (UI/UX Designer).');
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-bg-glow"></div>
      
      {/* Decorative Sparkles */}
      <div className="hero-sparkle sparkle-top-right float-sparkle">
        <SparkleIcon size={20} color="#7059f6" />
      </div>
      <div className="hero-sparkle sparkle-mid-left glow-sparkle">
        <SparkleIcon size={14} color="#8b5cf6" />
      </div>

      <div className="container hero-container">
        {/* Availability Badge */}
        <div className="availability-badge">
          <SparkleIcon size={12} color="#9d8df8" />
          <span>Available for projects</span>
        </div>

        {/* Hero Headings */}
        <h1 className="hero-title">
          Hi, i'm <span className="hero-name-gradient">Elizabeth</span>
          <br />
          A fun and creative designer
        </h1>

        {/* Hero Description */}
        <p className="hero-description">
          A UI/UX designer who feels a good design should feel like magic. I design thoughtful digital products and I care a lot about how people feel while using them.
        </p>

        {/* CTA Buttons */}
        <div className="hero-actions">
          <button type="button" onClick={handleViewCaseStudies} className="btn-primary">
            View case studies
          </button>
          <button type="button" onClick={handleDownloadCV} className="btn-secondary">
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
}
