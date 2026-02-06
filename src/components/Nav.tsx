'use client';

import { useState } from 'react';

interface NavProps {
  showPricing: (e: React.MouseEvent) => void;
}

export default function Nav({ showPricing }: NavProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobile = () => setMobileOpen((prev) => !prev);

  return (
    <>
      <nav className="nav">
        <div className="nav-inner">
          <a href="/" className="nav-logo">
            <svg viewBox="0 0 26 26" fill="none">
              <path d="M13 1L1.5 7.5v11L13 25l11.5-6.5v-11L13 1z" stroke="#1A1A1A" strokeWidth="1.8" fill="none" />
              <path d="M13 1v24M1.5 7.5L13 13.5l11.5-6M1.5 18.5L13 13.5l11.5 5" stroke="#1A1A1A" strokeWidth="0.8" opacity="0.3" />
              <circle cx="13" cy="13" r="2.5" fill="#1A1A1A" />
            </svg>
            Arkitecht
          </a>

          <ul className="nav-links">
            <li>
              <a href="#" onClick={showPricing}>Pricing</a>
            </li>
            <li className="nav-dropdown">
              <button className="nav-dropdown-trigger">
                Work
                <svg viewBox="0 0 12 12" fill="none">
                  <path d="M3 5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
              <div className="nav-dropdown-menu">
                <a href="#">Blog</a>
                <a href="#">Videos</a>
                <a href="#">Events</a>
                <a href="#">News</a>
                <a href="#">Customer Stories</a>
                <a href="#">Whitepapers</a>
              </div>
            </li>
            <li className="nav-dropdown">
              <button className="nav-dropdown-trigger">
                Studio
                <svg viewBox="0 0 12 12" fill="none">
                  <path d="M3 5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
              <div className="nav-dropdown-menu">
                <a href="#">Careers</a>
                <a href="#">Leadership</a>
              </div>
            </li>
          </ul>

          <div className="nav-actions">
            <a href="#" className="btn-outline">View Our Work</a>
            <a href="#" className="btn-cyan">Start a Project</a>
          </div>

          <button className="nav-mobile-toggle" onClick={toggleMobile} aria-label="Menu">
            <span style={mobileOpen ? { transform: 'rotate(45deg) translate(5px, 5px)' } : {}} />
            <span style={mobileOpen ? { opacity: 0 } : {}} />
            <span style={mobileOpen ? { transform: 'rotate(-45deg) translate(5px, -5px)' } : {}} />
          </button>
        </div>
      </nav>

      <div className={`mobile-menu${mobileOpen ? ' open' : ''}`}>
        <a href="#" className="pricing-trigger" onClick={showPricing}>Pricing</a>
        <a href="#">Blog</a>
        <a href="#">Videos</a>
        <a href="#">Events</a>
        <a href="#">News</a>
        <a href="#">Customer Stories</a>
        <a href="#">Whitepapers</a>
        <a href="#">Careers</a>
        <a href="#">Leadership</a>
        <div className="mobile-menu-actions">
          <a href="#" className="btn-outline">View Our Work</a>
          <a href="#" className="btn-cyan">Start a Project</a>
        </div>
      </div>
    </>
  );
}

