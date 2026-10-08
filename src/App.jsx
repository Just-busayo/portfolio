import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import FeaturedProjects from './components/FeaturedProjects';
import TickerBanner from './components/TickerBanner';
import WritingSection from './components/WritingSection';
import ContactSection from './components/ContactSection';
import ContactPage from './components/ContactPage';
import AboutPage from './components/AboutPage';
import WorksPage from './components/WorksPage';
import CreatorFlowCaseStudy from './components/CreatorFlowCaseStudy';
import HngCaseStudy from './components/HngCaseStudy';
import LinguaCaseStudy from './components/LinguaCaseStudy';
import CorporateDistributionCaseStudy from './components/CorporateDistributionCaseStudy';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import ProjectModal from './components/ProjectModal';
import './App.css';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedArticle, setSelectedArticle] = useState(null);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash.includes('creator-flow')) {
        setCurrentPage('creator-flow');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash.includes('corporate') || hash.includes('distribution')) {
        setCurrentPage('corporate-distribution');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash.includes('lingua')) {
        setCurrentPage('lingua-case-study');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash.includes('hng')) {
        setCurrentPage('hng-case-study');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash.includes('work')) {
        setCurrentPage('works');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash.includes('about')) {
        setCurrentPage('about');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash.includes('contact')) {
        setCurrentPage('contact');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash.includes('home')) {
        setCurrentPage('home');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page, sectionId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const targetHash = page === 'creator-flow' ? '#creator-flow'
      : page === 'corporate-distribution' ? '#corporate-distribution'
      : page === 'lingua-case-study' ? '#lingua-ai'
      : page === 'hng-case-study' ? '#hng-case-study'
      : page === 'works' ? '#works'
      : page === 'about' ? '#about'
      : page === 'contact' ? '#contact'
      : '#home';

    if (window.location.hash !== targetHash) {
      window.history.pushState(null, '', targetHash);
    }

    if (page === 'home' && sectionId && sectionId !== 'home') {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    }
  };

  const handleOpenContactModal = () => setIsContactOpen(true);
  const handleCloseContactModal = () => setIsContactOpen(false);

  const handleSelectProject = (project) => {
    if (project) {
      if (project.id === 'creator-flow' || project.id === 1) {
        handleNavigate('creator-flow');
        return;
      }
      if (project.id === 'hng-landing' || (typeof project.title === 'string' && project.title.toLowerCase().includes('hng'))) {
        handleNavigate('hng-case-study');
        return;
      }
      if (project.id === 'lingua-ai' || (typeof project.title === 'string' && project.title.toLowerCase().includes('lingua'))) {
        handleNavigate('lingua-case-study');
        return;
      }
      if (project.id === 'corporate-distribution' || (typeof project.title === 'string' && (project.title.toLowerCase().includes('corporate') || project.title.toLowerCase().includes('distribution') || project.title.toLowerCase().includes('coffee')))) {
        handleNavigate('corporate-distribution');
        return;
      }
    }
    setSelectedProject(project);
    setSelectedArticle(null);
  };

  const handleSelectArticle = (article) => {
    setSelectedArticle(article);
    setSelectedProject(null);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    setSelectedArticle(null);
  };

  return (
    <div className="portfolio-app">
      {/* Top Navigation */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      <main>
        {currentPage === 'creator-flow' ? (
          <CreatorFlowCaseStudy
            onBack={() => handleNavigate('works')}
            onNavigateNext={() => handleNavigate('hng-case-study')}
          />
        ) : currentPage === 'hng-case-study' ? (
          <HngCaseStudy
            onBack={() => handleNavigate('works')}
            onNavigateNext={() => handleNavigate('lingua-case-study')}
          />
        ) : currentPage === 'lingua-case-study' ? (
          <LinguaCaseStudy
            onBack={() => handleNavigate('works')}
            onNavigateNext={() => handleNavigate('corporate-distribution')}
          />
        ) : currentPage === 'corporate-distribution' ? (
          <CorporateDistributionCaseStudy
            onBack={() => handleNavigate('works')}
            onNavigateNext={() => handleNavigate('creator-flow')}
          />
        ) : currentPage === 'works' ? (
          <WorksPage
            onSelectProject={handleSelectProject}
            onOpenCreatorFlow={() => handleNavigate('creator-flow')}
            onOpenHngCaseStudy={() => handleNavigate('hng-case-study')}
            onOpenLinguaCaseStudy={() => handleNavigate('lingua-case-study')}
            onOpenCorporateDistribution={() => handleNavigate('corporate-distribution')}
          />
        ) : currentPage === 'about' ? (
          <AboutPage />
        ) : currentPage === 'contact' ? (
          <ContactPage />
        ) : (
          <>
            {/* Hero Section */}
            <Hero
              onOpenContact={() => handleNavigate('contact')}
              onNavigateWorks={() => handleNavigate('works')}
            />

            {/* Just Me / About Section */}
            <AboutSection />

            {/* Featured Projects (2x2 Grid) */}
            <FeaturedProjects
              onSelectProject={(project) => {
                if (project.id === 1) {
                  handleNavigate('creator-flow');
                } else if (project.id === 2 || (typeof project.title === 'string' && project.title.toLowerCase().includes('hng'))) {
                  handleNavigate('hng-case-study');
                } else if (project.id === 3 || (typeof project.title === 'string' && project.title.toLowerCase().includes('lingua'))) {
                  handleNavigate('lingua-case-study');
                } else if (project.id === 4 || (typeof project.title === 'string' && (project.title.toLowerCase().includes('corporate') || project.title.toLowerCase().includes('atelier') || project.title.toLowerCase().includes('coffee')))) {
                  handleNavigate('corporate-distribution');
                } else {
                  handleNavigate('works');
                }
              }}
            />

            {/* Continuous Quote Ticker Marquee Ribbon */}
            <TickerBanner />

            {/* Writing & Thoughts Section */}
            <WritingSection onSelectArticle={handleSelectArticle} />

            {/* Reflection & Contact Section with Next Project */}
            <ContactSection
              onOpenContact={() => handleNavigate('contact')}
              onSelectProject={() => handleNavigate('hng-case-study')}
            />
          </>
        )}
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={handleCloseContactModal}
      />

      <ProjectModal
        project={selectedProject}
        article={selectedArticle}
        onClose={handleCloseModal}
      />
    </div>
  );
}
