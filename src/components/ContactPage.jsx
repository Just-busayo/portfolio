import React, { useState } from 'react';
import { Mail, MapPin, CheckCircle, Send, Check } from 'lucide-react';
import SparkleIcon from './SparkleIcon';
import './ContactPage.css';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ fullName: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section className="contact-page-section">
      <div className="contact-page-bg-glow"></div>

      {/* Floating Sparkles */}
      <div className="contact-page-sparkle page-sparkle-top-right float-sparkle">
        <SparkleIcon size={20} color="#7059f6" />
      </div>
      <div className="contact-page-sparkle page-sparkle-mid-left glow-sparkle">
        <SparkleIcon size={14} color="#8b5cf6" />
      </div>

      <div className="container contact-page-container">
        {/* Availability Pill */}
        <div className="availability-badge">
          <SparkleIcon size={12} color="#9d8df8" />
          <span>Available for projects</span>
        </div>

        {/* Hero Title */}
        <h1 className="contact-hero-title">
          Let's make something<br />
          <span className="contact-awesome-gradient">awesome</span> together
        </h1>

        {/* Subtitle */}
        <p className="contact-hero-subtext">
          Got a project in mind? Want to collaborate? Or just want to say hi? Drop me a message — I promise I don't bite (and I reply fast ⚡)
        </p>

        {/* Get in touch Info Details */}
        <div className="get-in-touch-block">
          <h2 className="get-in-touch-title">Get in touch</h2>
          <p className="get-in-touch-desc">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of something great.
          </p>

          <div className="contact-meta-cards">
            {/* Email Card */}
            <div className="contact-meta-item">
              <div className="contact-meta-icon">
                <Mail size={18} />
              </div>
              <div className="contact-meta-text">
                <span className="meta-label">Email</span>
                <a href="mailto:elizabetholuwanishola@gmail.com" className="meta-value link-value">
                  elizabetholuwanishola@gmail.com
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="contact-meta-item">
              <div className="contact-meta-icon">
                <MapPin size={18} />
              </div>
              <div className="contact-meta-text">
                <span className="meta-label">Location</span>
                <span className="meta-value">Ogun state</span>
              </div>
            </div>

            {/* Availability Card */}
            <div className="contact-meta-item">
              <div className="contact-meta-icon availability-icon-box">
                <CheckCircle size={18} />
              </div>
              <div className="contact-meta-text">
                <span className="meta-label">Availability</span>
                <span className="meta-value availability-green">Open for new projects</span>
              </div>
            </div>
          </div>
        </div>

        {/* Fun Fact Callout Box */}
        <div className="fun-fact-box">
          <p>
            <strong>Fun fact:</strong> I respond to emails almost as fast as a message... so if you're sending an email at 2am, don't worry I will probably be awake.
          </p>
        </div>

        {/* Contact Form */}
        <div className="contact-form-wrapper">
          {submitted ? (
            <div className="form-success-alert">
              <Check size={28} />
              <div>
                <h4>Message received with a smile!</h4>
                <p>Thank you for reaching out. Elizabeth will reply promptly!</p>
              </div>
            </div>
          ) : null}

          <form onSubmit={handleSubmit} className="contact-main-form">
            <div className="form-row-two-col">
              <div className="form-field">
                <label htmlFor="fullName">Full name</label>
                <input
                  id="fullName"
                  type="text"
                  required
                  placeholder="e.g. John Doe"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                />
              </div>

              <div className="form-field">
                <label htmlFor="pageEmail">Email</label>
                <input
                  id="pageEmail"
                  type="email"
                  required
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="subject">Subject</label>
              <input
                id="subject"
                type="text"
                required
                placeholder="What is this regarding?"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              />
            </div>

            <div className="form-field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                required
                rows={5}
                placeholder="Tell me about the project, your timeline and how I can help..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            <button type="submit" className="contact-submit-btn">
              <Send size={18} />
              <span>Send message</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
