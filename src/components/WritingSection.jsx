import React from 'react';
import './WritingSection.css';

export default function WritingSection({ onSelectArticle }) {
  const articles = [
    {
      id: 1,
      title: 'The UI habit I ignored for Months and now I love',
      readTime: '4 min read',
      date: 'Aug 2026',
      type: 'image',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=700&q=80',
      summary: 'For the longest time, I treated spacing scales and design tokens as rigid constraints that killed spontaneity. Here is why embracing systematic constraints unlocked my creative speed and clarity.'
    },
    {
      id: 2,
      title: 'Navigating my twenties without a map',
      readTime: '6 min read',
      date: 'Jul 2026',
      type: 'graphic',
      graphicText: 'A great designer never follows the trend.',
      summary: 'There is immense pressure to have every milestone scheduled by 25. Learning to embrace detours, messy drafts, and personal curiosities became the secret to staying grounded.'
    },
    {
      id: 3,
      title: 'Designing a calm space for dark times',
      readTime: '5 min read',
      date: 'Jun 2026',
      type: 'image',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=700&q=80',
      summary: 'How ambient physical environments, warm lighting, and clutter-free digital spaces dramatically lower cognitive fatigue when working on emotionally demanding design cycles.'
    }
  ];

  return (
    <section id="writing" className="writing-section">
      <div className="container">
        {/* Section Header */}
        <div className="writing-header">
          <h2 className="writing-title">Writing</h2>
          <p className="writing-subtitle">
            Short thoughts on design, learning, and building better user experiences.
          </p>
        </div>

        {/* 3 Articles Grid */}
        <div className="writing-grid">
          {articles.map((article) => (
            <article
              key={article.id}
              className="writing-card"
              onClick={() => onSelectArticle && onSelectArticle(article)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter') onSelectArticle && onSelectArticle(article);
              }}
            >
              <div className="writing-thumb-wrapper">
                {article.type === 'graphic' ? (
                  <div className="writing-graphic-banner">
                    <span className="graphic-lead">A great</span>
                    <span className="graphic-main">designer</span>
                    <span className="graphic-bold">never</span>
                    <span className="graphic-lead">follows</span>
                    <span className="graphic-accent">the trend.</span>
                  </div>
                ) : (
                  <img
                    src={article.image}
                    alt={article.title}
                    className="writing-thumb-img"
                    loading="lazy"
                  />
                )}
                
                <div className="writing-meta-pill">
                  {article.readTime}
                </div>
              </div>

              <div className="writing-card-body">
                <h3 className="writing-card-title">{article.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
