import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import './FeaturedProjects.css';

export default function FeaturedProjects({ onSelectProject }) {
  const projects = [
    {
      id: 1,
      title: 'PayPulse — Modern Fintech Experience',
      category: 'Mobile & Web App',
      tag: 'Fintech',
      description: 'Streamlined cross-border peer-to-peer transfers with real-time currency conversion and biometric security.',
      previewBg: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4338ca 100%)',
      accentColor: '#818cf8',
      deliverables: ['Design System', 'User Research', 'Interactive Prototyping', 'Figma'],
      metrics: '34% increase in user retention & 4.9/5 store rating',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 2,
      title: 'Aura AI — Intelligent Analytics Suite',
      category: 'SaaS Dashboard',
      tag: 'AI / SaaS',
      description: 'Data visualization and predictive insights platform empowering growth teams to interpret metrics effortlessly.',
      previewBg: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
      accentColor: '#38bdf8',
      deliverables: ['Dashboard UI', 'Data Visualization', 'Component Library'],
      metrics: 'Cut data exploration time by 45%',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 3,
      title: 'Solace — Mindfulness & Telehealth',
      category: 'Health & Wellness',
      tag: 'Mobile App',
      description: 'An empathetic mobile companion connecting users with certified wellness mentors and guided micro-reflections.',
      previewBg: 'linear-gradient(135deg, #132a22 0%, #064e3b 50%, #047857 100%)',
      accentColor: '#34d399',
      deliverables: ['UX Architecture', 'Micro-interactions', 'Dark Mode UI'],
      metrics: 'Over 80k active monthly reflections logged',
      image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 4,
      title: 'Kinfolk Atelier — Luxury Commerce',
      category: 'Editorial E-Commerce',
      tag: 'Brand & Web',
      description: 'An editorial shopping destination celebrating artisan craft, slow fashion, and tactile visual storytelling.',
      previewBg: 'linear-gradient(135deg, #2a1b18 0%, #451a03 50%, #78350f 100%)',
      accentColor: '#fbbf24',
      deliverables: ['Art Direction', 'Custom Typography', 'Checkout Flow'],
      metrics: '28% higher checkout conversion',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=80',
    },
  ];

  return (
    <section id="work" className="projects-section">
      <div className="container">
        {/* Section Header */}
        <div className="projects-header">
          <h2 className="projects-title">Featured Projects</h2>
          <p className="projects-subtitle">
            A collection of projects where I have solved complex problems and created experiences that users actually like using.
          </p>
        </div>

        {/* 2x2 Projects Grid */}
        <div className="projects-grid">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card"
              onClick={() => onSelectProject && onSelectProject(project)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter') onSelectProject && onSelectProject(project);
              }}
            >
              {/* Card Thumbnail / Preview Frame */}
              <div className="project-thumbnail-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-thumbnail-img"
                  loading="lazy"
                />
                
                {/* Overlay hover effect */}
                <div className="project-card-overlay">
                  <span className="view-case-study-badge">
                    View Case Study <ArrowUpRight size={16} />
                  </span>
                </div>

                <div className="project-tag-pill">
                  {project.tag}
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="project-info">
                <div className="project-info-header">
                  <h3 className="project-item-title">{project.title}</h3>
                  <div className="project-arrow-icon">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
                <p className="project-item-desc">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
