import React from 'react';
import { X, ExternalLink, Check, Sparkles } from 'lucide-react';
import './Modal.css';

export default function ProjectModal({ project, article, onClose }) {
  if (!project && !article) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content modal-content-wide" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        {project && (
          <div className="project-detail-view">
            <div className="project-detail-header">
              <span className="modal-pill">{project.tag}</span>
              <h2>{project.title}</h2>
              <p className="project-detail-subtitle">{project.category}</p>
            </div>

            {project.image && (
              <div className="project-detail-banner">
                <img src={project.image} alt={project.title} />
              </div>
            )}

            <div className="project-detail-body">
              <div className="detail-section">
                <h3>Overview</h3>
                <p>{project.description}</p>
              </div>

              {project.metrics && (
                <div className="detail-metric-card">
                  <Sparkles size={20} className="metric-icon" />
                  <div>
                    <h4>Key Impact</h4>
                    <p>{project.metrics}</p>
                  </div>
                </div>
              )}

              {project.deliverables && (
                <div className="detail-section">
                  <h3>Deliverables & Tools</h3>
                  <div className="deliverable-tags">
                    {project.deliverables.map((item, index) => (
                      <span key={index} className="deliverable-tag">
                        <Check size={14} /> {item}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {article && (
          <div className="article-detail-view">
            <div className="project-detail-header">
              <span className="modal-pill">{article.date || 'Article'} • {article.readTime}</span>
              <h2>{article.title}</h2>
            </div>

            {article.image && (
              <div className="project-detail-banner">
                <img src={article.image} alt={article.title} />
              </div>
            )}

            <div className="project-detail-body">
              <p className="article-lead">{article.summary}</p>
              <div className="article-full-text">
                <p>
                  Great digital design is an ongoing conversation between human intent and system affordances. 
                  When we peel back the unnecessary noise and elevate what truly matters to the user, interfaces 
                  cease being barriers and transform into intuitive extensions of thought.
                </p>
                <p>
                  Whether crafting intricate design tokens in Figma or refining micro-interactions, 
                  the core philosophy remains consistent: empathy, intentional hierarchy, and joyful clarity.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
