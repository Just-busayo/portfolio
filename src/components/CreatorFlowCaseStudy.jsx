import React from 'react';
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import './CreatorFlowCaseStudy.css';

export default function CreatorFlowCaseStudy({ onBack, onNavigateNext }) {
  const processSteps = [
    {
      num: '01',
      title: 'Research & Discovery',
      items: [
        'Conducted secondary research on content creator finances and payout systems.',
        'Studied competitor dashboards and fintech solutions for creators.',
        'Identified pain points: multiple currencies, platform tracking, confusing withdrawals.'
      ]
    },
    {
      num: '02',
      title: 'User Personas & Scenarios',
      items: [
        'Created personas representing content creators with multi-platform earnings.',
        'Mapped user goals and frustrations to guide dashboard and wallet design.'
      ]
    },
    {
      num: '03',
      title: 'Information Architecture & Flow',
      items: [
        'Defined the structure: Onboarding → Dashboard → Wallet → Earning Sources → Withdrawal.',
        'Developed click-through flows for key tasks like tracking earnings and withdrawing funds.'
      ]
    },
    {
      num: '04',
      title: 'Wireframing',
      items: [
        'Low-fidelity sketches for homepage, dashboard, wallet, and withdrawal flows.',
        'Focused on clarity, hierarchy, and ease of use.'
      ]
    },
    {
      num: '05',
      title: 'High-Fidelity design',
      items: [
        'Created polished screens using Midnight Blue and Vibrant Teal.',
        'Ensured readability, visual hierarchy, and intuitive interactions.',
        'Included wallet balances, multi-currency handling, and withdrawal confirmations.'
      ]
    },
    {
      num: '06',
      title: 'Iteration & Feedback',
      items: [
        'Reviewed flows for clarity and efficiency.',
        'Adjusted dashboard layout and microcopy to reduce confusion.',
        'Ensured the MVP supports creators\' core needs.'
      ]
    }
  ];

  return (
    <article className="creator-flow-page">
      <div className="container creator-flow-container">

        {/* Back Link */}
        <button 
          type="button" 
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            if (onBack) onBack();
          }} 
          className="back-to-projects-btn"
        >
          <ArrowLeft size={18} />
          <span>Back to all projects</span>
        </button>

        {/* Hero Section */}
        <div className="case-hero-grid">
          <div className="case-hero-text">
            <h1 className="case-hero-title">Creator Flow:</h1>
            <p className="case-hero-desc">
              A web dashboard that helps content creators track earnings, manage multi-currency payouts, and withdraw funds from different platforms in one place.
            </p>
          </div>

          <div className="case-hero-mockup">
            <div className="browser-mockup-frame">
              <div className="browser-mockup-bar">
                <div className="browser-dots">
                  <span></span><span></span><span></span>
                </div>
              </div>
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
                alt="Creator Flow Dashboard Overview"
                className="case-mockup-img"
              />
            </div>
          </div>
        </div>

        {/* Project Meta Details Bar */}
        <div className="project-meta-bar">
          <div className="meta-col">
            <span className="meta-header">Project Role</span>
            <span className="meta-detail">UI/UX Designer</span>
          </div>
          <div className="meta-col">
            <span className="meta-header">Duration</span>
            <span className="meta-detail">6 weeks</span>
          </div>
          <div className="meta-col">
            <span className="meta-header">Year</span>
            <span className="meta-detail">2026</span>
          </div>
          <div className="meta-col">
            <span className="meta-header">Industry</span>
            <span className="meta-detail">Fintech / Creator Economy</span>
          </div>
          <div className="meta-col deliverables-col">
            <span className="meta-header">Deliverables</span>
            <span className="meta-detail">
              UX research, wireframes, high-fidelity UI, Onboarding, dashboard design, wallet & withdrawal flows
            </span>
          </div>
        </div>

        {/* The Product */}
        <section className="case-content-section">
          <h2 className="case-heading">The Product</h2>
          <p className="case-paragraph">
            Creator Flow is a web-based dashboard designed to help content creators manage and understand their earnings across different platforms. Many creators earn revenue from sources such as YouTube, brand partnerships, and social media platforms, often in different currencies and through separate payout systems. This makes it difficult to track income, monitor payouts, and maintain financial clarity.
          </p>
          <p className="case-paragraph">
            Creator Flow provides a centralized interface where creators can view their earnings, monitor payout statuses, manage multi-currency balances, and withdraw funds to their bank accounts. By bringing these financial activities into one simple dashboard, the platform helps creators stay organized, make informed decisions, and gain better control over their income.
          </p>
          <div className="case-list-block">
            <span className="case-list-intro">Creator Flow solves this by offering a single dashboard where creators can:</span>
            <ul className="case-bullet-list">
              <li>View total earnings (multi-currency)</li>
              <li>Track which platforms are sending money</li>
              <li>Manage bank accounts for withdrawals</li>
              <li>See pending payouts and recent transactions</li>
              <li>Convert and withdraw funds easily</li>
            </ul>
          </div>
        </section>

        {/* Key Features */}
        <section className="case-content-section">
          <h2 className="case-heading">Key Features</h2>
          <ol className="case-numbered-list">
            <li><strong>Onboarding</strong> — Quick setup for new creators: select platforms, currencies, and linked bank accounts.</li>
            <li><strong>Dashboard</strong> — Centralized overview of earnings, growth, and payout statuses.</li>
            <li><strong>Wallet</strong> — Multi-currency balances with pending and available funds.</li>
            <li><strong>Withdrawal</strong> — Transfer money to bank accounts with clear conversion rates and processing times.</li>
            <li><strong>Earning Sources</strong> — Track revenue by platform, donations, and brand deals.</li>
          </ol>
        </section>

        {/* Visual Showcase 1: Onboarding Login */}
        <div className="case-visual-showcase">
          <div className="showcase-frame">
            <img
              src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80"
              alt="Creator Flow Onboarding Flow"
              className="showcase-img"
            />
          </div>
          <p className="showcase-caption">
            (A quick onboarding flow that allows creators to set up their profile, select earnings sources, and link payout accounts.)
          </p>
        </div>

        {/* Visual Showcase 2: Withdrawal Screen */}
        <div className="case-visual-showcase">
          <div className="showcase-frame">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
              alt="Creator Flow Transparent Withdrawal Flow"
              className="showcase-img"
            />
          </div>
          <p className="showcase-caption">
            (A transparent withdrawal flow where creators select an amount, choose a bank account, and confirm the transfer.)
          </p>
        </div>

        {/* Visual Showcase 3: Wallets Screen */}
        <div className="case-visual-showcase">
          <div className="showcase-frame">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
              alt="Creator Flow Wallets Tab"
              className="showcase-img"
            />
          </div>
          <p className="showcase-caption">
            (Wallet tab to view the existing balance by currency.)
          </p>
        </div>

        {/* Problem Statement & Goals */}
        <section className="case-content-section">
          <h2 className="case-heading">Problem Statement</h2>
          <p className="case-paragraph">
            Creators earn from multiple platforms—YouTube, Instagram, TikTok, brand deals—often in different currencies. Tracking total earnings, pending payouts, and withdrawing money is confusing and time-consuming.
          </p>
          <p className="case-paragraph">
            Creator Flow solves this by giving creators a single dashboard to see all earnings, manage multi-currency balances, and withdraw funds easily.
          </p>
          <p className="case-paragraph highlight-text">
            <strong>Core problem:</strong> Creators need a simple, centralized, and transparent system to manage their money so they can focus on creating content.
          </p>
        </section>

        <section className="case-content-section">
          <h2 className="case-heading">Goals</h2>
          <div className="case-list-block">
            <span className="case-list-intro">Creator Flow aims to help content creators:</span>
            <ul className="case-bullet-list">
              <li>Easily track all earnings from multiple platforms in one place</li>
              <li>Understand pending vs available funds at a glance</li>
              <li>Manage multi-currency balances with clear exchange rates</li>
              <li>Withdraw money safely and quickly to linked bank accounts</li>
              <li>Stay organized and focused on creating content, not finances</li>
            </ul>
          </div>
        </section>

        {/* Visual Showcase 4: Currency Selection */}
        <div className="case-visual-showcase">
          <div className="showcase-frame">
            <img
              src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80"
              alt="Currency Selection Flow"
              className="showcase-img"
            />
          </div>
          <p className="showcase-caption">
            (A dedicated page from the onboarding process asking the creators what currency they earn in.)
          </p>
        </div>

        {/* Visual Showcase 5: Earning Sources */}
        <div className="case-visual-showcase">
          <div className="showcase-frame">
            <img
              src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=1200&q=80"
              alt="Connected Earning Sources Dashboard"
              className="showcase-img"
            />
          </div>
          <p className="showcase-caption">
            (A dedicated page showing connected earning platforms and how each contributes to the creator's total revenue.)
          </p>
        </div>

        {/* Design Process */}
        <section className="case-content-section">
          <h2 className="case-heading">Design Process</h2>
          <div className="case-process-grid">
            {processSteps.map((step) => (
              <div key={step.num} className="case-process-card">
                <div className="case-process-card-header">
                  <h3 className="case-step-name">{step.title}</h3>
                  <span className="case-step-num">{step.num}</span>
                </div>
                <ul className="case-step-items">
                  {step.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Visual Showcase 6: Platform Selection */}
        <div className="case-visual-showcase">
          <div className="showcase-frame">
            <img
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80"
              alt="Platform Selection Flow"
              className="showcase-img"
            />
          </div>
          <p className="showcase-caption">
            (A dedicated page from the onboarding process asking the creators what Platforms they earn from.)
          </p>
        </div>

        {/* Key take-away & Results */}
        <section className="case-content-section">
          <h2 className="case-heading">Key take-away</h2>
          <ul className="case-bullet-list">
            <li><strong>Simplicity is critical for financial products.</strong> Creators need clear information about earnings, balances, and withdrawals without unnecessary complexity.</li>
            <li><strong>Transparency builds trust.</strong> Showing currency conversions, processing times, and withdrawal summaries helps users feel confident about their money.</li>
            <li><strong>Information hierarchy matters.</strong> Prioritizing total earnings and available balances on the dashboard helps creators quickly understand their financial status.</li>
            <li><strong>User flows should mirror real creator behavior.</strong> Structuring the product around onboarding → dashboard → wallet → withdrawal makes financial management more intuitive.</li>
          </ul>
        </section>

        <section className="case-content-section">
          <h2 className="case-heading">Results</h2>
          <ul className="case-bullet-list">
            <li>Designed a centralized dashboard experience that allows creators to track earnings from multiple sources in one place.</li>
            <li>Created a clear wallet and withdrawal flow for managing multi-currency balances and bank transfers.</li>
            <li>Developed high-fidelity interfaces for onboarding, earnings tracking, wallet management, and withdrawals.</li>
            <li>Produced a complete product concept addressing financial management challenges in the creator economy.</li>
          </ul>
        </section>

        {/* Next Project Teaser */}
        <div className="case-next-project-teaser">
          <span className="next-project-label">Next Project</span>
          <button
            className="next-project-link"
            onClick={onNavigateNext}
          >
            HNG website Redesign <ArrowUpRight size={22} className="teaser-arrow" />
          </button>
        </div>

      </div>
    </article>
  );
}
