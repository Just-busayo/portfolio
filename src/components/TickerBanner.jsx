import React from 'react';
import './TickerBanner.css';

export default function TickerBanner() {
  const quote = "Design is not just what it looks like and feels like. Design is how it works. — Steve Jobs   ✦   Good design is as little design as possible. — Dieter Rams   ✦   You can't make something memorable without taking risks.   ✦   Simplicity is about subtracting the obvious and adding the meaningful. — John Maeda   ✦   ";

  return (
    <div className="ticker-banner-wrapper">
      <div className="ticker-track">
        <span className="ticker-content">{quote}</span>
        <span className="ticker-content" aria-hidden="true">{quote}</span>
        <span className="ticker-content" aria-hidden="true">{quote}</span>
      </div>
    </div>
  );
}
