import React from 'react';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import './CorporateDistributionCaseStudy.css';

export default function CorporateDistributionCaseStudy({ onBack, onNavigateNext }) {
  const processSteps = [
    {
      num: '01',
      title: 'Research & Discovery',
      items: [
        'I began by understanding the nature of the business and the types of products offered. Since the company distributes both coffee products and animal feed, I explored how similar distribution or product websites structure their content and present different product categories.'
      ]
    },
    {
      num: '02',
      title: 'User Personas & Scenarios',
      items: [
        'I considered two main types of users: customers looking to purchase coffee products online and customers interested in buying animal feed in bulk. These scenarios helped shape how the website would guide each user toward the appropriate action.'
      ]
    },
    {
      num: '03',
      title: 'Information Architecture & Flow',
      items: [
        'One key focus was organizing the navigation so users could clearly differentiate between the two product types. The product section was structured to allow coffee products to follow a shopping flow while feed products lead users toward enquiry and contact.'
      ]
    },
    {
      num: '04',
      title: 'Wireframing',
      items: [
        'I created simple wireframes to explore layout structure and content hierarchy. This helped me focus on placement of sections such as the homepage highlights, product navigation, and product cards without being distracted by visual design.',
        'Focused on content hierarchy, navigation clarity, colors that represent both coffee and animal feeds, typography and proper design system and interaction flow before visual styling.'
      ]
    },
    {
      num: '05',
      title: 'High-Fidelity design',
      items: [
        'After defining the layout, I moved into high-fidelity designs to refine the visual presentation. The goal was to maintain a clean and professional look that reflects a reliable distribution business while keeping product browsing straightforward.'
      ]
    },
    {
      num: '06',
      title: 'Iteration & Feedback',
      items: [
        'Throughout the process, I made adjustments to the layout and navigation to ensure that both product flows remained clear and easy to follow.'
      ]
    }
  ];

  return (
    <article className="corp-dist-page">
      <div className="container corp-dist-container">

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
            <h1 className="case-hero-title">CORPORATE DISTRIBUTION WEBSITE</h1>
            <p className="case-hero-desc">
              Designing a product website for a company selling premium coffee and agricultural feed.
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
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80"
                alt="Corporate Distribution Website Hero"
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
            <span className="meta-detail">1 Month</span>
          </div>
          <div className="meta-col">
            <span className="meta-header">Year</span>
            <span className="meta-detail">2026</span>
          </div>
          <div className="meta-col">
            <span className="meta-header">Industry</span>
            <span className="meta-detail">Product distribution / E-commerce</span>
          </div>
          <div className="meta-col deliverables-col">
            <span className="meta-header">Deliverables</span>
            <span className="meta-detail">
              UX research, wireframes, high-fidelity UI, prototype, Home page, about us page, product page, Contact us page, cart screen
            </span>
          </div>
        </div>

        {/* The Product */}
        <section className="case-content-section">
          <h2 className="case-heading">The Product</h2>
          <p className="case-paragraph">
            The product is a corporate website designed for a distribution company that supplies both premium coffee products and agricultural animal feed.
          </p>
          <p className="case-paragraph">
            The website allows users to explore the company's offerings through clearly separated product sections. The coffee section functions as an e-commerce experience, where users can browse Nespresso coffee capsules, packs, and accessories, add items to a cart, and proceed to checkout.
          </p>
          <p className="case-paragraph">
            The animal feed section, on the other hand, provides product information and directs customers to contact the company directly to place orders.
          </p>
          <p className="case-paragraph">
            The platform serves as both a product showcase and a purchasing gateway, helping customers easily discover products and take the next step toward ordering.
          </p>
        </section>

        {/* Key Features */}
        <section className="case-content-section">
          <h2 className="case-heading">Key Features</h2>
          <ol className="case-numbered-list">
            <li>
              <strong>1. Product Navigation:</strong>
              <p>A clear product structure that separates coffee products and animal feed to help users quickly find what they are looking for.</p>
            </li>
            <li>
              <strong>2. Informative Homepage:</strong>
              <p>A homepage that introduces the company, highlights its products, and guides users to the appropriate product sections.</p>
            </li>
            <li>
              <strong>3. Coffee Product Purchase:</strong>
              <p>The coffee section allows users to browse products, add items to a cart, and proceed with their order.</p>
            </li>
            <li>
              <strong>4. Feed Product Enquiry:</strong>
              <p>Animal feed products provide an enquiry and contact option, allowing customers to reach out directly to place orders.</p>
            </li>
          </ol>
        </section>

        {/* Goals */}
        <section className="case-content-section">
          <h2 className="case-heading">Goals</h2>
          <span className="case-list-intro">To:</span>
          <ul className="case-bullet-list">
            <li><strong>Create a Clear Product Structure:</strong> Organize the website so users can easily distinguish between coffee products and animal feed.</li>
            <li><strong>Support Different Ordering Flows:</strong> Allow coffee products to follow an add-to-cart purchase process while guiding feed customers toward enquiry and direct contact.</li>
            <li><strong>Maintain a Professional Brand Presence:</strong> Design a clean and trustworthy interface that reflects a reliable distribution company.</li>
            <li><strong>Improve Product Discoverability:</strong> Present products in a structured layout that makes browsing simple and intuitive.</li>
          </ul>
        </section>

        {/* Visual Showcase 1: Premium Coffee & Accessories Store */}
        <div className="case-visual-showcase">
          <div className="showcase-frame">
            <img
              src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=80"
              alt="Premium Nespresso Coffee & Accessories Store Grid"
              className="showcase-img"
            />
          </div>
          <p className="showcase-caption">
            (A structured layout displaying available coffee accessories varieties.)
          </p>
        </div>

        {/* Visual Showcase 2: Feed Catalog */}
        <div className="case-visual-showcase">
          <div className="showcase-frame">
            <img
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80"
              alt="Feed Catalog for Agricultural Distribution"
              className="showcase-img"
            />
          </div>
          <p className="showcase-caption">
            (Overview of available feed brands and product offerings. Users can contact directly to place bulk orders.)
          </p>
        </div>

        {/* Visual Showcase 3: Shopping Cart Drawer */}
        <div className="case-visual-showcase">
          <div className="showcase-frame">
            <img
              src="https://images.unsplash.com/photo-1556742049-0a67e557224d?auto=format&fit=crop&w=1200&q=80"
              alt="Slide-over Shopping Cart Drawer"
              className="showcase-img"
            />
          </div>
          <p className="showcase-caption">
            (Simple and seamless product Cart flow)
          </p>
        </div>

        {/* Problem Statement */}
        <section className="case-content-section">
          <h2 className="case-heading">Problem Statement</h2>
          <p className="case-paragraph">
            Designing a website for a company that sells two very different types of products presented a structural challenge. Premium coffee products require an e-commerce flow where users can browse items, add them to a cart, and complete a purchase, while animal feed products require a more direct enquiry and contact-based ordering process.
          </p>
          <p className="case-paragraph">
            The challenge was to design a clear structure that allows users to easily understand these different paths without confusion, while keeping the website simple, organized, and easy to navigate.
          </p>
        </section>

        {/* Visual Showcase 4: Clean Hero & Why Choose */}
        <div className="case-visual-showcase">
          <div className="showcase-frame">
            <img
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80"
              alt="Clean hero section and Why Choose value props"
              className="showcase-img"
            />
          </div>
          <p className="showcase-caption">
            (A clean hero section introducing the brand and its dual product offerings. Communicating trust, quality, and reliable partnerships.)
          </p>
        </div>

        {/* Visual Showcase 5: Coffee Capsules & Testimonials */}
        <div className="case-visual-showcase">
          <div className="showcase-frame">
            <img
              src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=80"
              alt="Product varieties and customer trust reviews"
              className="showcase-img"
            />
          </div>
          <p className="showcase-caption">
            (A structured layout displaying available coffee capsules and accessories in different varieties)
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

        {/* Visual Showcase 6: Order, Partner, Connect */}
        <div className="case-visual-showcase">
          <div className="showcase-frame">
            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80"
              alt="Contact and Enquiries Portal"
              className="showcase-img"
            />
          </div>
          <p className="showcase-caption">
            (Contact & Enquiries - providing multiple ways to connect with the company.)
          </p>
        </div>

        {/* Key take-away & Corporate Team */}
        <section className="case-content-section">
          <h2 className="case-heading">Key take-away</h2>
          <ul className="case-bullet-list">
            <li><strong>Designing for two very different product types taught me the importance of clear structure and navigation.</strong></li>
            <li><strong>Even a simple layout can improve user understanding if product flows are well-defined.</strong></li>
            <li><strong>Thinking about different user goals (purchase vs enquiry) early in the process prevents confusion later.</strong></li>
            <li><strong>Iteration is key:</strong> small adjustments to hierarchy and section placement can make the interface much more intuitive.</li>
          </ul>
        </section>

        {/* Visual Showcase 7: Built on Trust Team */}
        <div className="case-visual-showcase">
          <div className="showcase-frame">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
              alt="Built on Trust, Driven by Quality Team"
              className="showcase-img"
            />
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
            Creator Flow <ArrowUpRight size={22} className="teaser-arrow" />
          </button>
        </div>

      </div>
    </article>
  );
}
