export default function Testimonial() {
  return (
    <section className="testimonial">
      <div className="container">
        <div className="testimonial-inner">
          <div className="fade-up">
            <div className="section-label">From Our Clients</div>
            <blockquote>
              &ldquo;Arkitecht delivered in 8 weeks what our previous agency couldn&apos;t get right in 6 months.
              The code quality, the communication, the attention to detail — it&apos;s a different league entirely.&rdquo;
            </blockquote>
            <div className="testimonial-author">
              <div className="role">CTO, Series B SaaS</div>
              <div className="name">Confidential Client</div>
            </div>
          </div>
          <div className="testimonial-graphic fade-up stagger-2">
            <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
              <polygon points="200,40 360,120 360,280 200,360 40,280 40,120" stroke="rgba(255,255,255,0.08)" strokeWidth="1" fill="none" />
              <polygon points="200,100 300,150 300,250 200,300 100,250 100,150" stroke="rgba(255,255,255,0.12)" strokeWidth="1" fill="none" />
              <polygon points="200,140 260,170 260,230 200,260 140,230 140,170" stroke="rgba(0,240,255,0.2)" strokeWidth="1" fill="none" />
              <polygon points="200,170 230,185 230,215 200,230 170,215 170,185" stroke="rgba(0,240,255,0.35)" strokeWidth="1.2" fill="none" />
              <line x1="200" y1="40" x2="200" y2="100" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
              <line x1="360" y1="120" x2="300" y2="150" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
              <line x1="360" y1="280" x2="300" y2="250" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
              <line x1="200" y1="360" x2="200" y2="300" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
              <line x1="40" y1="280" x2="100" y2="250" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
              <line x1="40" y1="120" x2="100" y2="150" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
              <line x1="200" y1="100" x2="200" y2="140" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
              <line x1="300" y1="150" x2="260" y2="170" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
              <line x1="300" y1="250" x2="260" y2="230" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
              <line x1="200" y1="300" x2="200" y2="260" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
              <line x1="100" y1="250" x2="140" y2="230" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
              <line x1="100" y1="150" x2="140" y2="170" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
              <line x1="200" y1="40" x2="200" y2="360" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
              <line x1="40" y1="120" x2="360" y2="280" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
              <line x1="40" y1="280" x2="360" y2="120" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
              <ellipse cx="200" cy="200" rx="130" ry="40" transform="rotate(-30 200 200)" stroke="rgba(255,255,255,0.05)" strokeWidth="0.7" fill="none" />
              <ellipse cx="200" cy="200" rx="130" ry="40" transform="rotate(30 200 200)" stroke="rgba(255,255,255,0.05)" strokeWidth="0.7" fill="none" />
              <ellipse cx="200" cy="200" rx="130" ry="40" transform="rotate(90 200 200)" stroke="rgba(255,255,255,0.05)" strokeWidth="0.7" fill="none" />
              <circle cx="200" cy="40" r="3" fill="rgba(255,255,255,0.15)" />
              <circle cx="360" cy="120" r="3" fill="rgba(255,255,255,0.15)" />
              <circle cx="360" cy="280" r="3" fill="rgba(255,255,255,0.15)" />
              <circle cx="200" cy="360" r="3" fill="rgba(255,255,255,0.15)" />
              <circle cx="40" cy="280" r="3" fill="rgba(255,255,255,0.15)" />
              <circle cx="40" cy="120" r="3" fill="rgba(255,255,255,0.15)" />
              <circle cx="200" cy="170" r="3" fill="#00F0FF" opacity="0.5" />
              <circle cx="230" cy="185" r="3" fill="#00F0FF" opacity="0.4" />
              <circle cx="230" cy="215" r="3" fill="#00F0FF" opacity="0.4" />
              <circle cx="200" cy="230" r="3" fill="#00F0FF" opacity="0.5" />
              <circle cx="170" cy="215" r="3" fill="#00F0FF" opacity="0.4" />
              <circle cx="170" cy="185" r="3" fill="#00F0FF" opacity="0.4" />
              <circle cx="200" cy="200" r="5" fill="#00F0FF" opacity="0.6" />
              <circle cx="200" cy="200" r="12" stroke="#00F0FF" strokeWidth="0.8" fill="none" opacity="0.2" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

