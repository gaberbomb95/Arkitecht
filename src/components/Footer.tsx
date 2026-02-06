export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-blueprint-bg">
        <svg viewBox="0 0 1400 400" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path className="fbp-line" d="M30 30 L30 50 L50 50" stroke="rgba(0,0,0,0.03)" strokeWidth="0.7" />
          <path className="fbp-line" d="M1370 30 L1370 50 L1350 50" stroke="rgba(0,0,0,0.03)" strokeWidth="0.7" />
          <path className="fbp-line" d="M30 370 L30 350 L50 350" stroke="rgba(0,0,0,0.025)" strokeWidth="0.7" />
          <path className="fbp-line" d="M1370 370 L1370 350 L1350 350" stroke="rgba(0,0,0,0.025)" strokeWidth="0.7" />
          <line className="fbp-line" x1="80" y1="30" x2="1320" y2="30" stroke="rgba(0,0,0,0.015)" strokeWidth="0.5" strokeDasharray="4 3" />
          <line className="fbp-line" x1="80" y1="26" x2="80" y2="34" stroke="rgba(0,0,0,0.025)" strokeWidth="0.5" />
          <line className="fbp-line" x1="1320" y1="26" x2="1320" y2="34" stroke="rgba(0,0,0,0.025)" strokeWidth="0.5" />
          <text className="fbp-text" x="700" y="25" fontFamily="monospace" fontSize="5" fill="rgba(0,0,0,0.025)" textAnchor="middle">MOD: F-1 // SITEMAP</text>
          <circle className="fbp-circle" cx="1250" cy="180" r="16" stroke="rgba(0,0,0,0.02)" strokeWidth="0.7" />
          <circle className="fbp-circle" cx="1320" cy="130" r="10" stroke="rgba(0,0,0,0.015)" strokeWidth="0.7" />
          <circle className="fbp-circle" cx="1340" cy="240" r="8" stroke="rgba(0,0,0,0.015)" strokeWidth="0.7" />
          <line className="fbp-line" x1="1250" y1="180" x2="1320" y2="130" stroke="rgba(0,0,0,0.015)" strokeWidth="0.5" />
          <line className="fbp-line" x1="1250" y1="180" x2="1340" y2="240" stroke="rgba(0,0,0,0.015)" strokeWidth="0.5" />
          <rect className="fbp-line-accent" x="60" y="120" width="100" height="80" rx="1" stroke="rgba(0,0,0,0.025)" strokeWidth="0.7" fill="none" />
          <line className="fbp-line" x1="60" y1="160" x2="120" y2="160" stroke="rgba(0,0,0,0.02)" strokeWidth="0.5" />
          <line className="fbp-line" x1="110" y1="120" x2="110" y2="200" stroke="rgba(0,0,0,0.02)" strokeWidth="0.5" />
          <path className="fbp-line-accent" d="M80 160 A12 12 0 0 1 92 160" stroke="rgba(0,0,0,0.03)" strokeWidth="0.7" fill="none" />
          <circle className="fbp-circle" cx="700" cy="340" r="18" stroke="rgba(0,0,0,0.015)" strokeWidth="0.5" />
          <line className="fbp-line" x1="700" y1="318" x2="700" y2="362" stroke="rgba(0,0,0,0.02)" strokeWidth="0.5" />
          <line className="fbp-line" x1="678" y1="340" x2="722" y2="340" stroke="rgba(0,0,0,0.02)" strokeWidth="0.5" />
          <line className="fbp-line" x1="0" y1="100" x2="200" y2="400" stroke="rgba(0,0,0,0.01)" strokeWidth="0.5" strokeDasharray="8 6" />
          <line className="fbp-line" x1="1400" y1="80" x2="1200" y2="400" stroke="rgba(0,0,0,0.01)" strokeWidth="0.5" strokeDasharray="8 6" />
        </svg>
      </div>
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="/" className="nav-logo">
              <svg viewBox="0 0 26 26" fill="none">
                <path d="M13 1L1.5 7.5v11L13 25l11.5-6.5v-11L13 1z" stroke="#1A1A1A" strokeWidth="1.8" fill="none" />
                <path d="M13 1v24M1.5 7.5L13 13.5l11.5-6M1.5 18.5L13 13.5l11.5 5" stroke="#1A1A1A" strokeWidth="0.8" opacity="0.3" />
                <circle cx="13" cy="13" r="2.5" fill="#1A1A1A" />
              </svg>
              Arkitecht
            </a>
            <p className="footer-brand-tagline">
              Full-stack product studio — enterprise-grade engineering at startup speed. From first commit to global scale.
            </p>
          </div>
          <div className="footer-col">
            <h4>Site Map</h4>
            <ul>
              <li><a href="#">Services</a></li>
              <li><a href="#">Work</a></li>
              <li><a href="#">Studio</a></li>
              <li><a href="#">Process</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Legal</h4>
            <ul>
              <li><a href="#">Terms of Use</a></li>
              <li><a href="#">Terms and Conditions</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Security Policy</a></li>
              <li><a href="#">Trust Center</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Connect</h4>
            <ul>
              <li><a href="#">Bluesky</a></li>
              <li><a href="#">X</a></li>
              <li><a href="#">LinkedIn</a></li>
              <li><a href="#">Mastodon</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom-bar">
        <div className="footer-copyright">&copy; 2026 Arkitecht USA Inc.</div>
        <div className="footer-ref">BUILD: ARK-2026-F1 // v1.03</div>
      </div>
    </footer>
  );
}

