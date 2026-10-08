import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import './WorksPage.css';

export default function WorksPage({ 
  onSelectProject, 
  onOpenCreatorFlow, 
  onOpenHngCaseStudy,
  onOpenLinguaCaseStudy,
  onOpenCorporateDistribution 
}) {
  const caseStudies = [
    {
      id: 'creator-flow',
      title: 'Creator Flow',
      category: 'Web Platform & Creator Economy',
      tag: 'Case Study',
      description: 'A website that is an all-in-one content platform for modern creators. Put your earnings on auto-pilot and send cash directly to your Nigerian bank account in seconds.',
      deliverables: ['Dashboard UI', 'Design System', 'Fintech Payout Flow', 'Figma Prototyping'],
      metrics: 'Over 12,000 active creators processed $450k+ in creator payouts.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
      mockupType: 'dashboard'
    },
    {
      id: 'hng-landing',
      title: 'HNG WEBSITE REDESIGN - LANDING PAGE',
      category: 'Web Experience & Educational Tech',
      tag: 'Web Redesign',
      description: 'A responsive web experience that communicates opportunities, mentorship, and structured learning for aspiring tech talents.',
      deliverables: ['Information Architecture', 'User Journey Mapping', 'High-Fidelity Web UI', 'Responsive Design'],
      metrics: '42% surge in internship applications and 65% faster registration completion.',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80',
      mockupType: 'browser'
    },
    {
      id: 'lingua-ai',
      title: 'LINGUA AI APP - Gamified Language Learning Experience',
      category: 'Mobile Application & AI UX',
      tag: 'Mobile App',
      description: 'A UX case study manifesting engaging language learning through conversational AI, scenario-based lessons, and gamified progress.',
      deliverables: ['Mobile UX/UI', 'Gamification Mechanics', 'Micro-interactions', 'iOS Guidelines'],
      metrics: 'Daily active learning streak completion rose to 78%.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80',
      mockupType: 'mobile-dual'
    },
    {
      id: 'corporate-distribution',
      title: 'CORPORATE DISTRIBUTION WEBSITE',
      category: 'Product distribution / E-commerce',
      tag: 'Case Study',
      description: 'Designing a product website for a company selling premium coffee and agricultural feed.',
      deliverables: ['Home page', 'Product page', 'Cart screen', 'Contact us page'],
      metrics: 'Seamless separation of direct e-commerce checkout and bulk feed enquiries.',
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80',
      mockupType: 'browser'
    }
  ];

  const showcases = [
    {
      id: 201,
      title: 'Luxe Salon & Hair Booking App',
      category: 'Mobile UX Showcase',
      tag: 'Showcase',
      description: 'Luxury salon booking application with tactile stylist selection, appointment scheduling, and rich dark/light mode aesthetics.',
      deliverables: ['Visual Design', 'Mobile UI', 'Booking Flow'],
      image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=900&q=80'
    },
    {
      id: 202,
      title: 'Talent & Model Discovery Network',
      category: 'Social Portfolio & Castings',
      tag: 'Showcase',
      description: 'Dark-themed discovery platform for models and visual creators featuring immersive portfolio reels and casting boards.',
      deliverables: ['Creative Direction', 'Dark Mode UI', 'Card Layouts'],
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80'
    },
    {
      id: 203,
      title: 'FitPulse — Activity & Calorie Tracker',
      category: 'Health & Fitness UI',
      tag: 'Showcase',
      description: 'Energetic fitness tracker using neon green glowing rings, dynamic habit dials, and dual light & dark interfaces.',
      deliverables: ['Data Visualization', 'Mobile UI Kit', 'Dark/Light Themes'],
      image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=900&q=80'
    },
    {
      id: 204,
      title: 'Helios Clean Energy Corporate Portal',
      category: 'Enterprise CleanTech Web',
      tag: 'Showcase',
      description: 'Corporate distributor and solar solution portal showcasing clean energy field facilities, investor relations, and sustainability impact.',
      deliverables: ['Web Design', 'Component System', 'Responsive Grid'],
      image: 'https://images.unsplash.com/photo-1668097613572-40b7c11c8727?auto=format&fit=crop&w=900&q=80'
    }
  ];

  const handleCardClick = (study) => {
    if (study.id === 'creator-flow' && onOpenCreatorFlow) {
      onOpenCreatorFlow();
    } else if (study.id === 'hng-landing' && onOpenHngCaseStudy) {
      onOpenHngCaseStudy();
    } else if (study.id === 'lingua-ai' && onOpenLinguaCaseStudy) {
      onOpenLinguaCaseStudy();
    } else if (study.id === 'corporate-distribution' && onOpenCorporateDistribution) {
      onOpenCorporateDistribution();
    } else if (onSelectProject) {
      onSelectProject(study);
    }
  };

  return (
    <section className="works-page-view">
      <div className="container works-container">

        {/* Section 1: UI Case studies */}
        <div className="works-section-block">
          <h2 className="works-section-heading">UI Case studies</h2>

          <div className="case-studies-list">
            {caseStudies.map((study) => (
              <div
                key={study.id}
                className="case-study-card"
                onClick={() => handleCardClick(study)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleCardClick(study);
                }}
              >
                <div className="case-study-info">
                  <h3 className="case-study-title">{study.title}</h3>
                  <p className="case-study-desc">{study.description}</p>
                  <div className="case-study-action">
                    <span>Read Full Case Study</span>
                    <ArrowUpRight size={16} />
                  </div>
                </div>

                <div className="case-study-mockup-wrapper">
                  <div className="browser-mockup-frame">
                    <div className="browser-mockup-bar">
                      <div className="browser-dots">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </div>
                    <img
                      src={study.image}
                      alt={study.title}
                      className="case-study-mockup-img"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: UI Showcases */}
        <div className="works-section-block showcases-block">
          <h2 className="works-section-heading">UI Showcases</h2>

          <div className="showcases-grid">
            {showcases.map((showcase) => (
              <div
                key={showcase.id}
                className="showcase-card"
                onClick={() => onSelectProject && onSelectProject(showcase)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') onSelectProject && onSelectProject(showcase);
                }}
              >
                <div className="showcase-media-frame">
                  <img
                    src={showcase.image}
                    alt={showcase.title}
                    className="showcase-img"
                    loading="lazy"
                  />
                  <div className="showcase-overlay">
                    <span className="showcase-view-btn">
                      Explore Design <ArrowUpRight size={16} />
                    </span>
                  </div>
                </div>

                <div className="showcase-caption">
                  <h4 className="showcase-title">{showcase.title}</h4>
                  <p className="showcase-category">{showcase.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Next Project Teaser */}
        <div className="works-next-project-teaser">
          <span className="next-project-label">Next Project</span>
          <button
            type="button"
            className="next-project-link"
            onClick={(e) => {
              e.preventDefault();
              if (onOpenCorporateDistribution) {
                onOpenCorporateDistribution();
              }
            }}
          >
            Corporate Distribution Website <ArrowUpRight size={22} className="teaser-arrow" />
          </button>
        </div>

      </div>
    </section>
  );
}
