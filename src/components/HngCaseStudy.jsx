import React from 'react';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import './HngCaseStudy.css';

export default function HngCaseStudy({ onBack, onNavigateNext }) {
  const processSteps = [
    {
      num: '01',
      title: 'Research & Discovery',
      items: [
        'Reviewed the HNG Learn brief and objectives.',
        'Studied target users: interns who exit early, beginners in tech.',
        'Explored competitor learning platforms for layout and content ideas.',
        'Gathered inspiration for visual style.'
      ]
    },
    {
      num: '02',
      title: 'User Personas & Scenarios',
      items: [
        'Created personas representing tech learners with varying skill levels.',
        'Mapped learner goals and frustrations to guide messaging and layout hierarchy.'
      ]
    },
    {
      num: '03',
      title: 'Information Architecture & Flow',
      items: [
        'Defined the structure: Hero → Why HNG → Target Audience → Tracks → Testimonials → CTA.',
        'Developed click-through wireflows for key actions like track discovery and registration.'
      ]
    },
    {
      num: '04',
      title: 'Wireframing',
      items: [
        'Low-fidelity sketches for desktop landing page and mobile screen adaptations.',
        'Focused on clarity, hierarchy, and ease of use.'
      ]
    },
    {
      num: '05',
      title: 'High-Fidelity design',
      items: [
        'Created polished screens using vivid tech cyan, dark mode accents, and 3D illustrations.',
        'Ensured readability, visual storytelling, and intuitive interactions.',
        'Designed track cards, motivation badges, and social proof elements.'
      ]
    },
    {
      num: '06',
      title: 'Iteration & Feedback',
      items: [
        'Reviewed flows for clarity and conversion efficiency.',
        'Adjusted layout hierarchy and microcopy to reduce confusion and build trust.',
        'Ensured the MVP supports beginners\' core educational needs.'
      ]
    }
  ];

  return (
    <article className="hng-case-page">
      <div className="container hng-case-container">

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
            <h1 className="case-hero-title">HNG WEBSITE REDESIGN – LANDING PAGE</h1>
            <p className="case-hero-desc">
              A responsive web experience that communicates opportunity, mentorship, and structured learning for aspiring tech interns.
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
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80"
                alt="HNG Learn Landing Page Hero"
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
            <span className="meta-detail">3 Days</span>
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
              UX research, wireframes, high-fidelity UI, Landing page design
            </span>
          </div>
        </div>

        {/* The Product */}
        <section className="case-content-section">
          <h2 className="case-heading">The Product</h2>
          <p className="case-paragraph">
            HNG Learn is a learning program designed to support interns who exit the HNG internship during the early stages. Instead of ending their journey, the program provides them with an opportunity to continue learning and strengthening the fundamentals of their chosen tech track.
          </p>
          <p className="case-paragraph">
            Through structured lessons, mentorship, and guided learning resources, HNG Learn helps participants build foundational skills in areas such as product design, frontend development, backend development, and other technology fields.
          </p>
          <p className="case-paragraph">
            The program aims to create a supportive environment where learners can regain momentum, improve their technical knowledge, and prepare themselves for future opportunities in the tech industry.
          </p>
        </section>

        {/* Key Features & Mobile Frame */}
        <section className="case-content-section">
          <h2 className="case-heading">Key Features</h2>
          <div className="hng-features-grid">
            <ol className="case-numbered-list">
              <li>
                <strong>1. Who the Program Is For</strong>
                <p>A dedicated section that explains the target audience, particularly interns who exited the HNG internship and beginners looking to strengthen their tech skills.</p>
              </li>
              <li>
                <strong>2. Motivational Testimonials</strong>
                <p>Learner stories that build trust and show how the program can help users grow and regain confidence in their tech journey.</p>
              </li>
              <li>
                <strong>3. Responsive Design</strong>
                <p>The page adapts seamlessly across desktop and mobile devices to ensure accessibility and a smooth user experience.</p>
              </li>
              <li>
                <strong>4. Clear Call-to-Action</strong>
                <p>Strategically placed buttons that guide users toward joining the program or starting their learning journey.</p>
              </li>
            </ol>

            <div className="hng-mobile-preview-frame">
              <div className="phone-mockup-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
                  alt="HNG Learn Mobile Interface"
                  className="phone-mockup-img"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Visual Showcase 1: Why HNG and Who it is for */}
        <div className="case-visual-showcase">
          <div className="showcase-frame">
            <img
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80"
              alt="HNG Learn Why and Who it is for"
              className="showcase-img"
            />
          </div>
          <p className="showcase-caption">
            (A transparent enlightenment on Why HNG and who it is for)
          </p>
        </div>

        {/* Problem Statement & Goals with Tablet Mockup */}
        <section className="case-content-section">
          <h2 className="case-heading">Problem Statement</h2>
          <p className="case-paragraph">
            Many interns exit the HNG internship early and lack a clear path to continue learning. Without guidance, they may feel discouraged or unsure how to grow their skills in tech.
          </p>
          <p className="case-paragraph">
            The challenge was to design a clear and engaging landing page that introduces HNG Learn, highlights its benefits, and motivates learners to continue their journey.
          </p>
        </section>

        <section className="case-content-section">
          <div className="goals-with-tablet-grid">
            <div className="goals-text-side">
              <h2 className="case-heading">Goals</h2>
              <span className="case-list-intro">HNG aims to help students:</span>
              <ul className="case-bullet-list">
                <li>Clearly communicate what HNG Learn is and who it's for.</li>
                <li>Highlight the benefits and learning tracks to motivate users.</li>
                <li>Encourage interns and beginners to sign up or start learning.</li>
                <li>Ensure the landing page is responsive and accessible across all devices.</li>
                <li>Use visual storytelling to make the content engaging and easy to understand.</li>
              </ul>
            </div>

            <div className="goals-tablet-side">
              <div className="tablet-frame-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=80"
                  alt="HNG Tablet Mockup"
                  className="tablet-mockup-img"
                />
              </div>
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

        {/* Visual Showcase 2: Choose Your Path Growth */}
        <div className="case-visual-showcase">
          <div className="showcase-frame">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80"
              alt="HNG Track Selection: Choose your path growth"
              className="showcase-img"
            />
          </div>
          <p className="showcase-caption">
            (A section that successfully explains what HNG offers so users can know what skills are available)
          </p>
        </div>

        {/* Key take-away & Results with Mobile Frame */}
        <div className="takeaways-with-mobile-grid">
          <div className="takeaways-text-side">
            <section className="case-content-section">
              <h2 className="case-heading">Key take-away</h2>
              <ul className="case-bullet-list">
                <li>Designing for users who are beginners requires clear, simple, and motivating content.</li>
                <li>Responsiveness is crucial — layouts must work across desktop and mobile.</li>
                <li>Visual storytelling and 3D illustrations can make learning programs more engaging.</li>
                <li>Planning layouts before designing saves time and improves clarity.</li>
                <li>Every project, even small ones, is an opportunity to practice UX thinking.</li>
              </ul>
            </section>

            <section className="case-content-section">
              <h2 className="case-heading">Results</h2>
              <ul className="case-bullet-list">
                <li>Designed a clean, responsive landing page introducing HNG Learn.</li>
                <li>Created visual hierarchy and storytelling to guide users through the program.</li>
                <li>Highlighted learning tracks, testimonials, and CTAs to encourage sign-ups.</li>
                <li>Produced a fully responsive design adaptable to desktop, tablet, and mobile screens.</li>
                <li>Gained hands-on experience in UX research, wireframing, and visual design for tech education platforms.</li>
              </ul>
            </section>
          </div>

          <div className="takeaways-mobile-side">
            <div className="phone-mockup-wrapper-large">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="HNG Mobile Full Experience"
                className="phone-mockup-img"
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
            onClick={onNavigateNext}
          >
            Lingua AI App <ArrowUpRight size={22} className="teaser-arrow" />
          </button>
        </div>

      </div>
    </article>
  );
}
