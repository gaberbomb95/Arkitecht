export default function Logos() {
  return (
    <section className="logos-section">
      <div className="container">
        <h2 className="fade-up">Built For Teams That Ship</h2>
        <div className="logos-row fade-up stagger-1">
          <div className="logo-card">
            <svg viewBox="0 0 40 40" fill="none" width="40" height="40">
              <circle cx="20" cy="16" r="8" stroke="#888" strokeWidth="1.2" fill="none" />
              <path d="M14 28c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="#888" strokeWidth="1.2" fill="none" />
            </svg>
            <span>Bloompath</span>
          </div>
          <div className="logo-card">
            <svg viewBox="0 0 40 40" fill="none" width="40" height="40">
              <rect x="8" y="10" width="24" height="20" rx="3" stroke="#888" strokeWidth="1.2" fill="none" />
              <path d="M14 20h12M14 25h8" stroke="#888" strokeWidth="1.2" />
            </svg>
            <span>Seznam.cz</span>
          </div>
          <div className="logo-card">
            <svg viewBox="0 0 40 40" fill="none" width="40" height="40">
              <path d="M12 30V14l8-4 8 4v16" stroke="#888" strokeWidth="1.2" fill="none" />
              <path d="M20 10v20" stroke="#888" strokeWidth="1.2" />
              <circle cx="20" cy="20" r="3" stroke="#888" strokeWidth="1.2" fill="none" />
            </svg>
            <span>Moderna</span>
          </div>
          <div className="logo-card">
            <svg viewBox="0 0 40 40" fill="none" width="40" height="40">
              <text x="20" y="24" textAnchor="middle" fontFamily="monospace" fontSize="14" fontWeight="700" fill="#888">UKG</text>
            </svg>
            <span>UKG</span>
          </div>
          <div className="logo-card">
            <svg viewBox="0 0 40 40" fill="none" width="40" height="40">
              <text x="20" y="24" textAnchor="middle" fontFamily="monospace" fontSize="11" fontWeight="700" fill="#888">Five9</text>
            </svg>
            <span>Five9</span>
          </div>
        </div>
      </div>
    </section>
  );
}

