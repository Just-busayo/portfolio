import React from 'react';
import SparkleIcon from './SparkleIcon';
import { ArrowUpRight } from 'lucide-react';
import './ContactSection.css';

export default function ContactSection({ onOpenContact, onSelectProject }) {
  return (
    <section id="contact" className="contact-cta-section">
      <div className="container contact-container">
        {/* Reflection Note */}
        <p className="contact-reflection">
          I design experiences that people love, grow in faith every day, and sometimes get lost in a K-drama while dreaming up my next project. I'm curious, creative, and always learning — whether it's about design, life, or the little things that make the day brighter.
        </p>

        {/* Action Prompt */}
        <div className="contact-prompt-wrapper">
          {/* Floating Gold Sparkle Left */}
          <div className="contact-sparkle sparkle-gold-left glow-sparkle">
            <SparkleIcon size={18} color="#facc15" />
          </div>

          <h3 className="contact-prompt-title">
            Think we'd vibe? Don't be shy, drop a message and say hi!
          </h3>

          <button onClick={onOpenContact} className="btn-send-message">
            Send a message
          </button>

          {/* Floating Gold Sparkle Right */}
          <div className="contact-sparkle sparkle-gold-right float-sparkle">
            <SparkleIcon size={18} color="#facc15" />
          </div>
        </div>

        {/* Next Project Teaser */}
        <div className="next-project-teaser">
          <span className="next-project-label">Next Project</span>
          <button
            className="next-project-link"
            onClick={() => {
              if (onSelectProject) {
                onSelectProject({
                  id: 5,
                  title: 'HNG website Redesign',
                  category: 'Web Experience & Community Hub',
                  tag: 'Redesign',
                  description: 'A ground-up redesign of the HNG internship platform, focusing on seamless onboarding, mentor scheduling, and interactive community stages.',
                  accentColor: '#7059f6',
                  deliverables: ['Full Web Redesign', 'Design System', 'Responsive UI', 'Community Hub'],
                  metrics: 'Over 20,000 interns onboarded with 40% reduction in support tickets.',
                  image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=900&q=80',
                });
              }
            }}
          >
            HNG website Redesign <ArrowUpRight size={22} className="teaser-arrow" />
          </button>
        </div>
      </div>
    </section>
  );
}
