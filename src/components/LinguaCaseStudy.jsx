import React from 'react';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import './LinguaCaseStudy.css';

export default function LinguaCaseStudy({ onBack, onNavigateNext }) {
  const processSteps = [
    {
      num: '01',
      title: 'Research & Discovery',
      items: [
        'Explored existing language learning apps e.g. Duolingo to understand common learning patterns and engagement strategies.',
        'Studied how conversational practice and gamification influence user motivation.',
        'Identified that many apps focus on vocabulary drills but provide limited opportunities for real conversation.'
      ]
    },
    {
      num: '02',
      title: 'User Personas & Scenarios',
      items: [
        'Considered user needs like quick daily practice, confidence in speaking, and practical conversations.',
        'Created usage scenarios to understand how users might interact with the app in everyday situations (e.g., practicing during short breaks or commuting).',
        'Defined potential learners such as beginners learning a new language for travel, work, or personal interest.'
      ]
    },
    {
      num: '03',
      title: 'Information Architecture & Flow',
      items: [
        'Key sections included Onboarding, Home, Scenarios, AI Chat, and Progress.',
        'Organized the app around a clear learning structure that balances guided lessons and free practice.',
        'Focused on creating a flow that allows users to quickly start learning while still tracking progress and achievements.'
      ]
    },
    {
      num: '04',
      title: 'Wireframing',
      items: [
        'Sketched early layouts to explore different structures for the dashboard, lesson flow, and chat interface.',
        'Focused on content hierarchy, navigation clarity, colors, typography and proper design system and interaction flow before visual styling.'
      ]
    },
    {
      num: '05',
      title: 'High-Fidelity design',
      items: [
        'Transformed wireframes into polished UI screens with a focus on playful visuals and gamification elements.',
        'Introduced colorful UI components, progress indicators, and mascot illustrations to create a friendly learning environment.',
        'Ensured the chat interface felt natural and conversational, similar to messaging apps users already understand.'
      ]
    },
    {
      num: '06',
      title: 'Iteration & Feedback',
      items: [
        'Simplified certain screens to reduce cognitive load for beginner learners.',
        'Refined layouts based on usability considerations and visual balance.',
        'Ensured the MVP supports users\' core needs.'
      ]
    }
  ];

  return (
    <article className="lingua-case-page">
      <div className="container lingua-case-container">

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
            <h1 className="case-hero-title">LINGUA AI APP – Gamified Language Learning Experience</h1>
            <p className="case-hero-desc">
              A UX case study on creating engaging language practice through conversational AI, scenario-based lessons, and gamified progress.
            </p>
          </div>

          <div className="case-hero-mockup">
            <div className="dual-phone-hero-wrapper">
              <div className="phone-mockup-frame">
                <img
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80"
                  alt="Lingua AI Dashboard Screen"
                  className="phone-mockup-img"
                />
              </div>
              <div className="phone-mockup-frame phone-offset">
                <img
                  src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80"
                  alt="Lingua AI Scenario Screen"
                  className="phone-mockup-img"
                />
              </div>
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
            <span className="meta-detail">1 Week</span>
          </div>
          <div className="meta-col">
            <span className="meta-header">Year</span>
            <span className="meta-detail">2026</span>
          </div>
          <div className="meta-col">
            <span className="meta-header">Industry</span>
            <span className="meta-detail">EdTech</span>
          </div>
          <div className="meta-col deliverables-col">
            <span className="meta-header">Deliverables</span>
            <span className="meta-detail">
              UX research, wireframes, high-fidelity UI, Interactive prototype, AI chat interface design, Gamified dashboard, scenario-based learning flows
            </span>
          </div>
        </div>

        {/* The Product */}
        <section className="case-content-section">
          <h2 className="case-heading">The Product</h2>
          <p className="case-paragraph">
            Learning a new language can feel overwhelming, especially when learners lack opportunities to practice real conversations. Many language learning apps focus heavily on vocabulary and grammar but provide limited ways for users to engage in natural dialogue.
          </p>
          <p className="case-paragraph">
            This project explores the design of a gamified mobile language learning app that helps users practice languages through AI-powered conversations and scenario-based lessons. The goal was to create an engaging experience that encourages daily practice while helping learners build confidence in real-life communication.
          </p>
          <p className="case-paragraph">
            The app combines interactive chat practice, real-world scenarios, and progress-based rewards to make language learning more immersive, motivating, and practical for everyday use.
          </p>
        </section>

        {/* Key Features & Mascot Screen */}
        <section className="case-content-section">
          <h2 className="case-heading">Key Features</h2>
          <div className="features-with-phone-grid">
            <ol className="case-numbered-list">
              <li>
                <strong>1. AI Chat Practice</strong>
                <p>Users can have natural conversations with an AI tutor to practice speaking and improve confidence.</p>
              </li>
              <li>
                <strong>2. Scenario-Based Lessons</strong>
                <p>Real-life situations such as ordering food, traveling, or meeting new people help learners practice practical conversations.</p>
              </li>
              <li>
                <strong>3. Gamified Learning</strong>
                <p>XP points, streaks, and rewards motivate users to stay consistent with their learning.</p>
              </li>
              <li>
                <strong>4. Personalized Learning Goals</strong>
                <p>Users can set daily practice goals based on their learning pace.</p>
              </li>
              <li>
                <strong>5. Progress Tracking</strong>
                <p>A dashboard that shows streaks, achievements, and learning milestones.</p>
              </li>
              <li>
                <strong>6. Voice Interaction</strong>
                <p>Users can listen to pronunciation and practice speaking through voice input.</p>
              </li>
            </ol>

            <div className="features-phone-side">
              <div className="phone-mockup-wrapper mascot-phone-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=700&q=80"
                  alt="Lingua Mascot Screen"
                  className="phone-mockup-img"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Visual Showcase 1: Onboarding 3 Screens */}
        <div className="case-visual-showcase">
          <div className="trio-phone-showcase">
            <div className="phone-trio-card">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=500&q=80"
                alt="Onboarding: How well do you speak"
              />
            </div>
            <div className="phone-trio-card">
              <img
                src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=500&q=80"
                alt="Onboarding: Language selection"
              />
            </div>
            <div className="phone-trio-card">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80"
                alt="Onboarding: Pick your learning buddy"
              />
            </div>
          </div>
          <p className="showcase-caption">
            (Introduces the app, sets learning goals, and allows users to choose their preferred language.)
          </p>
        </div>

        {/* Problem Statement & Goals with Scenario Mockups */}
        <section className="case-content-section">
          <h2 className="case-heading">Problem Statement</h2>
          <p className="case-paragraph">
            Many language learners struggle to practice real conversations in a safe and consistent way. While existing language apps focus heavily on vocabulary and grammar exercises, they often lack interactive experiences that simulate real-life communication. This can make learning feel repetitive and disconnected from real-world usage.
          </p>
          <p className="case-paragraph">
            The challenge was to design a mobile language learning experience that encourages consistent practice while helping users build confidence in everyday conversations through interactive and engaging methods.
          </p>
        </section>

        <section className="case-content-section">
          <div className="goals-with-scenario-grid">
            <div className="goals-text-side">
              <h2 className="case-heading">Goals</h2>
              <span className="case-list-intro">To:</span>
              <ul className="case-bullet-list">
                <li>Design an engaging mobile language learning experience that encourages users to practice consistently.</li>
                <li>Help learners build confidence in real-life conversations through scenario-based interactions.</li>
                <li>Incorporate AI chat to provide flexible and natural language practice.</li>
                <li>Use gamification elements such as streaks, rewards, and progress tracking to increase motivation.</li>
                <li>Create a simple and intuitive interface that makes language learning accessible and enjoyable for beginners.</li>
              </ul>
            </div>

            <div className="goals-scenario-side">
              <div className="dual-phone-hero-wrapper small-dual-phones">
                <div className="phone-mockup-frame">
                  <img
                    src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=500&q=80"
                    alt="Ordering Coffee in a cafe"
                  />
                </div>
                <div className="phone-mockup-frame phone-offset">
                  <img
                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=500&q=80"
                    alt="Cafe conversation screen"
                  />
                </div>
              </div>
              <p className="showcase-caption">
                (Conversations examples that help users practice real-life language situations.)
              </p>
            </div>
          </div>
        </section>

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

        {/* Visual Showcase 2: AI Chat & Translation Drawer */}
        <div className="case-visual-showcase">
          <div className="trio-phone-showcase">
            <div className="phone-trio-card">
              <img
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=500&q=80"
                alt="Lingua Chat Greeting with 3D Robot"
              />
            </div>
            <div className="phone-trio-card">
              <img
                src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=500&q=80"
                alt="Interactive Spanish Dialogue"
              />
            </div>
            <div className="phone-trio-card">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=500&q=80"
                alt="Ordering Coffee Translation Drawer"
              />
            </div>
          </div>
          <p className="showcase-caption">
            (A conversational AI chat where users can practice speaking naturally and improve confidence in real-time dialogue.)
          </p>
        </div>

        {/* Key take-away & Results with Time Goal Screen */}
        <div className="takeaways-with-mobile-grid">
          <div className="takeaways-text-side">
            <section className="case-content-section">
              <h2 className="case-heading">Key take-away</h2>
              <ul className="case-bullet-list">
                <li><strong>Practice should feel natural.</strong> Designing the chat experience showed how familiar messaging patterns can make language practice feel less intimidating and more conversational.</li>
                <li><strong>Conversation builds confidence.</strong> Designing features like AI chat and scenario-based practice highlighted the importance of helping users practice language in realistic contexts, not just through vocabulary drills.</li>
                <li><strong>Gamification encourages consistency.</strong> Elements such as streaks, rewards, and progress tracking can make learning feel more engaging and motivate users to return daily.</li>
                <li><strong>Simplicity improves learning.</strong> Keeping the interface clean and intuitive helps reduce cognitive load, allowing users to focus more on learning rather than navigating the app.</li>
              </ul>
            </section>

            <section className="case-content-section">
              <h2 className="case-heading">Results</h2>
              <p className="case-paragraph">
                The final design presents a gamified mobile language learning experience that combines structured lessons with conversational practice. By integrating AI chat and scenario-based interactions, the app encourages users to practice languages in a more natural and engaging way.
              </p>
              <p className="case-paragraph">
                The design focuses on creating a simple and motivating learning environment, where users can track their progress, maintain learning streaks, and gradually build confidence in real-life conversations.
              </p>
              <p className="case-paragraph">
                This project also strengthened my ability to design conversational interfaces, structure learning flows, and apply gamification principles to improve user engagement in educational products.
              </p>
            </section>
          </div>

          <div className="takeaways-mobile-side">
            <div className="phone-mockup-wrapper-large">
              <img
                src="https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=700&q=80"
                alt="Choose how much time per day flow"
                className="phone-mockup-img"
              />
            </div>
          </div>
        </div>

        {/* Visual Showcase 3: Flashcards, Scenarios & Dashboard */}
        <div className="case-visual-showcase">
          <div className="trio-phone-showcase">
            <div className="phone-trio-card">
              <img
                src="https://images.unsplash.com/photo-1509391365360-fe1338667e4e?auto=format&fit=crop&w=500&q=80"
                alt="Did you know? Cultural flashcards"
              />
            </div>
            <div className="phone-trio-card">
              <img
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=500&q=80"
                alt="Scenario-based practice cards"
              />
            </div>
            <div className="phone-trio-card">
              <img
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=500&q=80"
                alt="Main Student Gamified Dashboard"
              />
            </div>
          </div>
        </div>

        {/* Next Project Teaser */}
        <div className="case-next-project-teaser">
          <span className="next-project-label">Next Project</span>
          <button
            type="button"
            className="next-project-link"
            onClick={(e) => {
              e.preventDefault();
              if (onNavigateNext) onNavigateNext();
            }}
          >
            Corporate Distribution Website <ArrowUpRight size={22} className="teaser-arrow" />
          </button>
        </div>

      </div>
    </article>
  );
}
