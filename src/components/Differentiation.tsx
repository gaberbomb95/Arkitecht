export default function Differentiation() {
  return (
    <section className="differentiation" id="differentiation">
      <div className="container">
        <h2 className="diff-title fade-up">What Sets Us Apart</h2>
        <div className="diff-grid">
          {/* Card 1: Pixel-Perfect Craft */}
          <div className="diff-card fade-up stagger-1">
            <div className="diff-card-body">
              <h3>Pixel-Perfect Craft</h3>
              <p>
                Design and engineering aren&apos;t separate departments here. Every interface we build is
                obsessed over at the pixel level — because users notice the difference between good enough
                and exceptional, even if they can&apos;t articulate it.
              </p>
            </div>
            <div className="diff-card-img">
              <svg viewBox="0 0 260 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="20" y1="160" x2="20" y2="20" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                <line x1="20" y1="160" x2="240" y2="160" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                <line x1="20" y1="120" x2="240" y2="120" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" strokeDasharray="3 3" />
                <line x1="20" y1="80" x2="240" y2="80" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" strokeDasharray="3 3" />
                <line x1="20" y1="40" x2="240" y2="40" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" strokeDasharray="3 3" />
                <path d="M20 150 Q60 145 80 130 T140 90 T200 50" stroke="rgba(255,255,255,0.2)" strokeWidth="1" fill="none" />
                <path d="M80 130 Q100 115 120 105 T160 75" stroke="#00F0FF" strokeWidth="1.5" fill="none" />
                <circle cx="120" cy="105" r="6" fill="none" stroke="#00F0FF" strokeWidth="1.2" />
                <circle cx="120" cy="105" r="2" fill="#00F0FF" />
                <circle cx="80" cy="155" r="5" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
                <text x="77" y="158" fontSize="6" fill="rgba(255,255,255,0.4)" fontFamily="monospace">&#8981;</text>
              </svg>
            </div>
          </div>

          {/* Card 2: Architecture That Scales (featured) */}
          <div className="diff-card diff-featured fade-up stagger-2">
            <div className="diff-card-body">
              <h3>Architecture That Scales</h3>
              <p>
                We don&apos;t build prototypes that need to be rebuilt at scale. Every system we deliver is
                engineered with clean separation of concerns, thoughtful data modeling, and infrastructure
                that grows with your business — not against it.
              </p>
            </div>
            <div className="diff-card-img">
              <svg viewBox="0 0 260 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M130 200 A100 100 0 0 1 30 200" stroke="rgba(255,255,255,0.08)" strokeWidth="1" fill="none" />
                <path d="M130 200 A80 80 0 0 1 50 200" stroke="rgba(255,255,255,0.1)" strokeWidth="1" fill="none" />
                <path d="M130 200 A60 60 0 0 1 70 200" stroke="rgba(255,255,255,0.12)" strokeWidth="1" fill="none" />
                <path d="M130 200 A100 100 0 0 0 230 200" stroke="rgba(255,255,255,0.08)" strokeWidth="1" fill="none" />
                <path d="M130 200 A80 80 0 0 0 210 200" stroke="rgba(255,255,255,0.1)" strokeWidth="1" fill="none" />
                <path d="M130 200 A60 60 0 0 0 190 200" stroke="rgba(255,255,255,0.12)" strokeWidth="1" fill="none" />
                <circle cx="90" cy="120" r="16" stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="none" />
                <circle cx="90" cy="120" r="3" fill="#00F0FF" opacity="0.6" />
                <circle cx="175" cy="100" r="16" stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="none" />
                <circle cx="175" cy="100" r="3" fill="#00F0FF" opacity="0.6" />
                <circle cx="130" cy="175" r="14" stroke="#00F0FF" strokeWidth="1" fill="none" opacity="0.5" />
                <line x1="124" y1="175" x2="136" y2="175" stroke="#00F0FF" strokeWidth="1.5" />
                <line x1="130" y1="169" x2="130" y2="181" stroke="#00F0FF" strokeWidth="1.5" />
                <circle cx="55" cy="155" r="2" fill="rgba(255,255,255,0.2)" />
                <circle cx="200" cy="140" r="2" fill="rgba(255,255,255,0.2)" />
                <circle cx="160" cy="60" r="2" fill="rgba(255,255,255,0.15)" />
                <circle cx="75" cy="80" r="2" fill="rgba(255,255,255,0.15)" />
              </svg>
            </div>
          </div>

          {/* Card 3: Senior Engineers Only */}
          <div className="diff-card fade-up stagger-3">
            <div className="diff-card-body">
              <h3>Senior Engineers Only</h3>
              <p>
                No bait-and-switch. No juniors learning on your project. Every member of your team has 7+
                years of production experience and has shipped software used by millions. You get the people
                we promise, every sprint, every standup.
              </p>
            </div>
            <div className="diff-card-img">
              <svg viewBox="0 0 260 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M30 100 Q60 100 80 80 T130 80 Q160 80 170 100 T220 100" stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="none" />
                <circle cx="80" cy="80" r="14" stroke="rgba(255,255,255,0.2)" strokeWidth="1" fill="none" />
                <circle cx="80" cy="80" r="6" stroke="#00F0FF" strokeWidth="1" fill="none" opacity="0.7" />
                <circle cx="80" cy="80" r="2" fill="#00F0FF" />
                <circle cx="170" cy="50" r="4" fill="#00F0FF" opacity="0.8" />
                <line x1="170" y1="54" x2="170" y2="100" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" strokeDasharray="2 2" />
                <circle cx="220" cy="100" r="5" fill="#00F0FF" opacity="0.5" />
                <g transform="translate(195,60)" opacity="0.3">
                  <line x1="-3" y1="-3" x2="3" y2="3" stroke="#fff" strokeWidth="0.8" />
                  <line x1="3" y1="-3" x2="-3" y2="3" stroke="#fff" strokeWidth="0.8" />
                </g>
                <g transform="translate(145,120)" opacity="0.3">
                  <line x1="-3" y1="-3" x2="3" y2="3" stroke="#fff" strokeWidth="0.8" />
                  <line x1="3" y1="-3" x2="-3" y2="3" stroke="#fff" strokeWidth="0.8" />
                </g>
              </svg>
            </div>
          </div>

          {/* Card 4: Your Team, Extended (featured) */}
          <div className="diff-card diff-featured fade-up stagger-4">
            <div className="diff-card-body">
              <h3>Your Team, Extended</h3>
              <p>
                We don&apos;t disappear after handoff. Arkitecht embeds with your workflow — same tools,
                same standups, same Slack channels. We operate as a true extension of your team, not a
                vendor you have to manage.
              </p>
            </div>
            <div className="diff-card-img">
              <svg viewBox="0 0 260 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g>
                  <circle cx="60" cy="20" r="4" fill="rgba(255,255,255,0.5)" /><circle cx="95" cy="20" r="4" fill="rgba(255,255,255,0.5)" /><circle cx="130" cy="20" r="4" fill="rgba(255,255,255,0.5)" /><circle cx="165" cy="20" r="4" fill="rgba(255,255,255,0.5)" /><circle cx="200" cy="20" r="4" fill="rgba(255,255,255,0.5)" />
                  <circle cx="60" cy="50" r="4" fill="rgba(255,255,255,0.4)" /><circle cx="95" cy="50" r="4" fill="rgba(255,255,255,0.5)" /><circle cx="130" cy="50" r="4" fill="rgba(255,255,255,0.5)" /><circle cx="165" cy="50" r="4" fill="rgba(255,255,255,0.4)" /><circle cx="200" cy="50" r="4" fill="rgba(255,255,255,0.4)" />
                  <circle cx="60" cy="80" r="4" fill="rgba(255,255,255,0.2)" /><circle cx="95" cy="80" r="4" fill="rgba(255,255,255,0.3)" />
                  <circle cx="130" cy="80" r="12" stroke="#00F0FF" strokeWidth="1.5" fill="none" />
                  <circle cx="130" cy="80" r="5" fill="#00F0FF" opacity="0.7" />
                  <circle cx="165" cy="80" r="3" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" /><circle cx="200" cy="80" r="3" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
                  <circle cx="60" cy="110" r="3" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8" /><circle cx="95" cy="110" r="3" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8" /><circle cx="130" cy="110" r="3" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8" /><circle cx="165" cy="110" r="3" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8" /><circle cx="200" cy="110" r="3" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8" />
                  <circle cx="60" cy="140" r="3" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" /><circle cx="95" cy="140" r="3" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" /><circle cx="130" cy="140" r="3" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" /><circle cx="165" cy="140" r="3" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" /><circle cx="200" cy="140" r="3" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" />
                </g>
                <rect x="45" y="5" width="170" height="150" rx="10" stroke="rgba(255,255,255,0.1)" strokeWidth="1" fill="none" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

