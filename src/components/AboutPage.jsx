import React from 'react';
import { 
  Search, Target, Lightbulb, Palette, FlaskConical, Rocket, 
  Headphones, BookOpen, Heart
} from 'lucide-react';
import './AboutPage.css';

export default function AboutPage() {
  const processSteps = [
    {
      num: '01',
      title: 'Research',
      icon: <Search size={18} />,
      desc: 'Dig into the problem by talking to users, analyzing competitors, and gathering all the puzzle pieces before rushing anything.'
    },
    {
      num: '02',
      title: 'Define',
      icon: <Target size={18} />,
      desc: "Connect the dots from research to figure out what we're really solving. Clear problems lead to clear solutions."
    },
    {
      num: '03',
      title: 'Ideate',
      icon: <Lightbulb size={18} />,
      desc: 'This is where the fun begins — sketching, brainstorming, and exploring solutions. No idea is too crazy at this stage.'
    },
    {
      num: '04',
      title: 'Design',
      icon: <Palette size={18} />,
      desc: 'Taking the best ideas and turning them into polished, high-fidelity visuals and interactive prototypes.'
    },
    {
      num: '05',
      title: 'Test',
      icon: <FlaskConical size={18} />,
      desc: "Put designs in front of real people. True feedback is gold — it tells us what's working and what needs love."
    },
    {
      num: '06',
      title: 'Deliver & Collaborate',
      icon: <Rocket size={18} />,
      desc: 'Preparing pixel-perfect design systems, developer-ready specs, and maintaining close collaboration through launch and beyond.'
    }
  ];

  const skills = [
    'User researching',
    'Interactive prototyping',
    'Web design',
    'Responsive UI and modern UI'
  ];

  const tools = [
    'Figma',
    'FigJam',
    'Google docs',
    'Notion'
  ];

  const galleryImages = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
      alt: 'Smiling candid'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=400&q=80',
      alt: 'Wireframe sketch'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
      alt: 'Playful portrait'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=400&q=80',
      alt: 'Workspace and coffee'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80',
      alt: 'Warm smile'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=400&q=80',
      alt: 'UI dashboard review'
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=400&q=80',
      alt: 'Journal notes'
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=400&q=80',
      alt: 'Chic glasses portrait'
    },
    {
      id: 9,
      src: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=400&q=80',
      alt: 'Design presentation'
    },
    {
      id: 10,
      src: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=400&q=80',
      alt: 'Close-up smile'
    },
    {
      id: 11,
      src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=400&q=80',
      alt: 'Friends outdoors'
    },
    {
      id: 12,
      src: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
      alt: 'Studio portrait'
    }
  ];

  const thingsILove = [
    'Family',
    'The Gospel',
    'Books',
    'Songs',
    'Korean drama',
    'Arsenal',
    'Friends'
  ];

  const listeningList = [
    { title: 'Sixteen Thread', artist: 'Theophilus Sunday', tag: 'Track' },
    { title: 'Gratitude', artist: 'Brandon Lake', tag: 'Track' },
    { title: 'Burn', artist: 'Dunsin Oyekan', tag: 'Track' },
    { title: 'Goodbye yesterday', artist: 'Elevation Worship & Maverick City', tag: 'Track' },
    { title: 'Found a love', artist: 'Tribl Worship', tag: 'Track' },
    { title: 'Remember Anthems', artist: 'Tribl Worship', tag: 'Album' },
    { title: 'The design better podcast', artist: 'InVision', tag: 'Podcast' }
  ];

  const readingList = [
    { title: 'Holy Bible', meta: 'Inspired by God / A lamp to my feet' },
    { title: 'Refactoring UI', meta: 'Steve Schoger & Adam Wathan' },
    { title: 'Google design articles', meta: 'Google' },
    { title: 'Design Systems Handbook', meta: 'DesignBetter / InVision' },
    { title: 'The Design of Everyday Things', meta: 'Don Norman' },
    { title: 'Atomic Habits', meta: 'James Clear' },
    { title: 'Steal Like an Artist', meta: 'Austin Kleon' }
  ];

  return (
    <section className="about-page-view">
      <div className="container about-page-container">
        
        {/* Intro Paragraphs */}
        <div className="about-page-intro">
          <p>
            Hi, I'm Elizabeth — a UI/UX Designer interested in building digital experiences that feel simple, thoughtful, and human.
          </p>
          <p>
            My path into UX started with curiosity: why do some products just make sense while others don't? That question led me into user research, content, and hands-on design learning.
          </p>
          <p>
            I now approach design by understanding users deeply, defining problems clearly, and designing with empathy and intention.
          </p>
          <p>
            When I'm not designing, I enjoy writing, reflecting, and exploring how faith, creativity, and life intersect.
          </p>
        </div>

        {/* Section: How I Work */}
        <div className="process-section">
          <h2 className="section-title-center">How i work</h2>
          <p className="section-subtitle-center">
            Every great design starts with a solid process. Here's mine — a recipe that helps me go from "what's the problem?" to "wow, this is awesome."
          </p>

          <div className="process-cards-grid">
            {processSteps.map((step) => (
              <div key={step.num} className="process-card">
                <div className="process-card-top">
                  <div className="process-icon-box">
                    {step.icon}
                  </div>
                  <span className="process-step-number">{step.num}</span>
                </div>
                <h3 className="process-step-title">{step.title}</h3>
                <p className="process-step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section: Skills & Tools */}
        <div className="skills-tools-section">
          <h2 className="section-title-center">Skills & Tools</h2>
          <p className="section-subtitle-center">
            My toolkit for turning ideas into reality. Always exploring new tools, but these are my current favorites.
          </p>

          <div className="skills-tools-columns">
            {/* Skills */}
            <div className="category-group">
              <span className="category-label">Skills</span>
              <div className="tags-flex">
                {skills.map((skill, idx) => (
                  <span key={idx} className="skill-pill">{skill}</span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="category-group">
              <span className="category-label">Tools</span>
              <div className="tags-flex">
                {tools.map((tool, idx) => (
                  <span key={idx} className="tool-pill">{tool}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Section: A glimpse of my world */}
        <div className="glimpse-section">
          <h2 className="section-title-center">A glimpse of my world</h2>
          <p className="section-subtitle-center">
            A collection of snapshots from my everyday life, inspiration, sketchbooks, and things that catch my eye or make me smile.
          </p>

          <div className="glimpse-gallery-grid">
            {galleryImages.map((img) => (
              <div key={img.id} className="glimpse-photo-card">
                <img src={img.src} alt={img.alt} loading="lazy" />
              </div>
            ))}
          </div>
        </div>

        {/* Section: Things I Love */}
        <div className="things-love-section">
          <h2 className="section-title-center">Things i Love</h2>
          <p className="section-subtitle-center">
            Beyond design, these are the things that keep me inspired and happy.
          </p>

          <div className="things-love-pills">
            {thingsILove.map((item, idx) => (
              <div key={idx} className="love-pill">
                <Heart size={14} className="heart-icon" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Section: Listening To & Reading */}
        <div className="media-section-grid">
          {/* What I'm listening to */}
          <div className="media-box">
            <div className="media-box-header">
              <Headphones size={20} className="media-header-icon" />
              <h3>What I'm listening to</h3>
            </div>
            <div className="media-list">
              {listeningList.map((item, idx) => (
                <div key={idx} className="media-list-row">
                  <div className="media-item-info">
                    <span className="media-item-title">{item.title}</span>
                    <span className="media-item-sub">{item.artist}</span>
                  </div>
                  <span className="media-badge">{item.tag}</span>
                </div>
              ))}
            </div>
          </div>

          {/* What I'm Reading */}
          <div className="media-box">
            <div className="media-box-header">
              <BookOpen size={20} className="media-header-icon" />
              <h3>What I'm Reading</h3>
            </div>
            <div className="media-list">
              {readingList.map((item, idx) => (
                <div key={idx} className="media-list-row">
                  <div className="media-item-info">
                    <span className="media-item-title">{item.title}</span>
                    <span className="media-item-sub">{item.meta}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
