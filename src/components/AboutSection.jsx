import React from 'react';
import './AboutSection.css';

export default function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-grid">
          {/* Left Column: Portrait Card */}
          <div className="about-image-wrapper">
            <div className="about-image-card">
              <div className="about-portrait-container">
                {/* Elizabeth's creative portrait visual */}
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
                  alt="Elizabeth - Creative UI/UX Designer"
                  className="about-portrait-img"
                  onError={(e) => {
                    // Fallback to stylized creative SVG placeholder if network fails
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling.style.display = 'flex';
                  }}
                />
                
                {/* Fallback & Ambient Studio Scene */}
                <div className="about-portrait-fallback" style={{ display: 'none' }}>
                  <div className="neon-sign-glow">make design inspire</div>
                  <div className="avatar-silhouette">
                    <span className="glasses-icon">🕶️</span>
                    <span className="laptop-icon">💻</span>
                  </div>
                </div>

                {/* Ambient glow badges */}
                <div className="portrait-neon-tag">
                  <span>✦ make design inspire</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Content */}
          <div className="about-content">
            <h2 className="about-title">Just me</h2>
            <div className="about-bio">
              <p>
                When I'm not obsessing over spacing, user flows, or whether a button should be 8px or 16px from the edge, you'll probably find me curled up with a book, watching sci-fi drama, or passionately supporting Arsenal through another emotional rollercoaster of a season!
              </p>
              <p>
                I enjoy learning new things, collecting random trivia, writing down thoughts in novel sketchbooks and finding inspiration in places most hear nothing to do with design. While design is a big part of my life, people with creativity, good stories, and the small moments that make everyday unpredictable memorable.
              </p>
            </div>

            {/* Metrics / Stats */}
            <div className="about-stats-grid">
              <div className="stat-card">
                <span className="stat-label">Experience</span>
                <span className="stat-value">5+ years</span>
              </div>
              <div className="stat-card">
                <span className="stat-label">Availability</span>
                <div className="stat-value-with-badge">
                  <span className="availability-dot"></span>
                  <span className="stat-value">Open</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
