import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import './Navbar.css';

export default function Navbar({ currentPage, onNavigate }) {
  const [theme, setTheme] = useState('dark');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleNavClick = (page, sectionId) => {
    if (onNavigate) {
      onNavigate(page, sectionId);
    }
  };

  return (
    <header className={`navbar-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <button 
          type="button"
          className="navbar-logo" 
          onClick={() => handleNavClick('home', 'home')}
        >
          Home
        </button>

        <nav className="navbar-nav">
          <button 
            type="button"
            onClick={() => handleNavClick('home', 'home')} 
            className={`nav-link ${currentPage === 'home' ? 'active-nav-link' : ''}`}
          >
            Home
          </button>
          <button 
            type="button"
            onClick={() => handleNavClick('works')} 
            className={`nav-link ${currentPage === 'works' || currentPage === 'creator-flow' || currentPage === 'hng-case-study' || currentPage === 'lingua-case-study' || currentPage === 'corporate-distribution' ? 'active-nav-link' : ''}`}
          >
            Works
          </button>
          <button 
            type="button"
            onClick={() => handleNavClick('about')} 
            className={`nav-link ${currentPage === 'about' ? 'active-nav-link' : ''}`}
          >
            About
          </button>
          <button 
            type="button"
            onClick={() => handleNavClick('contact')} 
            className={`nav-link ${currentPage === 'contact' ? 'active-nav-link' : ''}`}
          >
            Contact
          </button>
          
          <button 
            type="button"
            onClick={toggleTheme} 
            className="theme-toggle-btn"
            aria-label="Toggle theme"
            title="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
          </button>
        </nav>
      </div>
    </header>
  );
}
