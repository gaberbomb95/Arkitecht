'use client';

import { useEffect, useRef, useState } from 'react';

interface HeroSectionProps {
  isDark: boolean;
  toggleDark: () => void;
  isPricing: boolean;
  hidePricing: (e: React.MouseEvent) => void;
}

export default function HeroSection({ isDark, toggleDark, isPricing, hidePricing }: HeroSectionProps) {
  const keyboardRef = useRef<HTMLDivElement>(null);
  const [interceptEntries, setInterceptEntries] = useState<string[]>([]);
  const [logOpen, setLogOpen] = useState(false);

  // Staggered pricing animation states (match original HTML behavior)
  const [pricingMode, setPricingMode] = useState(false);
  const [leftActive, setLeftActive] = useState(false);
  const [centerActive, setCenterActive] = useState(false);
  const [rightActive, setRightActive] = useState(false);

  useEffect(() => {
    if (isPricing) {
      // Show: first add pricing-mode (hides default content), then stagger overlays
      const t1 = setTimeout(() => setPricingMode(true), 400);
      const t2 = setTimeout(() => setLeftActive(true), 600);
      const t3 = setTimeout(() => setCenterActive(true), 750);
      const t4 = setTimeout(() => setRightActive(true), 900);
      return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
    } else {
      // Hide: remove overlays immediately, then remove pricing-mode after transition
      setLeftActive(false);
      setCenterActive(false);
      setRightActive(false);
      const t1 = setTimeout(() => setPricingMode(false), 400);
      return () => clearTimeout(t1);
    }
  }, [isPricing]);

  // Live timestamp for intercept entries — only tick when log is visible
  const [ts, setTs] = useState(() =>
    new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' })
  );
  useEffect(() => {
    if (!logOpen) return;
    const update = () => {
      setTs(new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, [logOpen]);

  // Keyboard typing animation + intercept log
  useEffect(() => {
    const keyboard = keyboardRef.current;
    if (!keyboard) return;

    const allKeys = keyboard.querySelectorAll('.kb-key');
    const keyMap: Record<string, HTMLElement> = {};
    allKeys.forEach((key) => {
      const txt = key.textContent?.trim().toUpperCase() || '';
      if (txt.length === 1) keyMap[txt] = key as HTMLElement;
    });

    // Instant: all keys visible
    allKeys.forEach((k) => k.classList.add('placed'));

    // Wires connected + pulses active
    ['wireKbCenter', 'wireKbLeft', 'wireKbRight'].forEach((id) => {
      document.getElementById(id)?.classList.add('connected');
    });
    ['pulseKbCenter', 'pulseKbLeft', 'pulseKbRight'].forEach((id) => {
      document.getElementById(id)?.classList.add('active');
    });

    // Screens powered on
    ['screenCenter', 'screenLeft', 'screenRight'].forEach((id) => {
      document.getElementById(id)?.classList.add('powered');
    });

    // Monitors arrived
    ['monitorCenter', 'monitorLeft', 'monitorRight'].forEach((id) => {
      document.getElementById(id)?.classList.add('arrived');
    });

    // Mouse arrived
    document.getElementById('mouseWrap')?.classList.add('arrived');

    // Hero text in monitor
    document.getElementById('heroSection')?.classList.add('text-in-monitor');

    // Blueprints drawn
    ['bpLeft', 'bpRight'].forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      el.querySelectorAll('.bp-line, .bp-fill, .bp-text, .bp-dot, .bp-dim, .bp-label').forEach((l) =>
        l.classList.add('drawn')
      );
    });

    // Center overlay
    const overlay = document.getElementById('centerBpOverlay');
    if (overlay) {
      const svg = overlay.querySelector('svg');
      if (svg) svg.classList.add('active');
      overlay.querySelectorAll('.bp-line').forEach((l) => l.classList.add('drawn'));
    }

    // Subliminal message typing
    const phrases = [
      'SHIPPED TO PROD', 'PIXEL PERFECT', 'ZERO DOWNTIME', 'CLEAN MERGE',
      'TESTS PASSING', 'SPRINT COMPLETE', 'BUILD SUCCEEDED', 'DEPLOYED LIVE',
      'CODE REVIEWED', 'PR APPROVED', 'SCHEMA MIGRATED', 'PIPELINE GREEN',
      'BRANCH MERGED', 'TYPE SAFE', 'CRAFT NOT SPEED',
    ];
    let phraseIdx = 0;
    let typing = false;
    const pendingTimeouts: ReturnType<typeof setTimeout>[] = [];

    function typePhrase() {
      if (typing) return;
      typing = true;
      const phrase = phrases[phraseIdx % phrases.length];
      phraseIdx++;
      let charIdx = 0;

      function typeNext() {
        if (charIdx >= phrase.length) {
          setInterceptEntries((prev) => [...prev, phrase]);
          typing = false;
          return;
        }
        const ch = phrase[charIdx].toUpperCase();
        charIdx++;
        if (ch === ' ') {
          pendingTimeouts.push(setTimeout(typeNext, 250));
          return;
        }
        const key = keyMap[ch];
        if (key && key.classList.contains('placed')) {
          key.classList.add('pressed');
          key.classList.add('click-glow');
          pendingTimeouts.push(setTimeout(() => key.classList.remove('pressed'), 180));
          pendingTimeouts.push(setTimeout(() => key.classList.remove('click-glow'), 450));
        }
        pendingTimeouts.push(setTimeout(typeNext, 140 + Math.random() * 60));
      }
      typeNext();
    }

    const startTimeout = setTimeout(() => typePhrase(), 800);
    const interval = setInterval(typePhrase, 5000);

    // Click interaction
    function handleKeyClick(e: Event) {
      const target = e.target as HTMLElement;
      const key = target.closest('.kb-key') as HTMLElement | null;
      if (!key || !key.classList.contains('placed')) return;
      if (key.classList.contains('cta-space') || key.classList.contains('cta-enter')) return;
      key.classList.add('click-glow');
      key.classList.add('pressed');
      setTimeout(() => key.classList.remove('pressed'), 150);
      setTimeout(() => key.classList.remove('click-glow'), 600);
    }
    keyboard.addEventListener('click', handleKeyClick);

    return () => {
      clearTimeout(startTimeout);
      clearInterval(interval);
      pendingTimeouts.forEach(clearTimeout);
      keyboard.removeEventListener('click', handleKeyClick);
    };
  }, []);

  // Scroll-driven keyboard tilt + monitor lift
  useEffect(() => {
    const kb = keyboardRef.current;
    if (!kb) return;

    const startAngle = 36, endAngle = 2;
    const startScale = 1.25, endScaleVal = 1.35;
    const scrollStart = 80, scrollEnd = 500;
    const monitorLift = -140;
    let ticking = false;
    const monitorArray = document.querySelector('.monitor-array') as HTMLElement | null;

    function getBreakpoint() {
      const w = window.innerWidth;
      if (w <= 600) return { angle: 22, scale: 0.95, endScale: 1.05, perspective: 900 };
      if (w <= 900) return { angle: 28, scale: 1.08, endScale: 1.18, perspective: 1000 };
      return { angle: startAngle, scale: startScale, endScale: endScaleVal, perspective: 1000 };
    }

    function easeOutCubic(t: number) {
      return 1 - Math.pow(1 - t, 3);
    }

    function updateTilt() {
      ticking = false;
      if (!kb) return;
      const scrollY = window.scrollY;
      const bp = getBreakpoint();

      if (scrollY <= scrollStart) {
        kb.style.transform = `perspective(${bp.perspective}px) rotateX(${bp.angle}deg) scale(${bp.scale})`;
        if (monitorArray) monitorArray.style.transform = 'translateY(0)';
        return;
      }

      const raw = (scrollY - scrollStart) / (scrollEnd - scrollStart);
      const t = easeOutCubic(Math.min(Math.max(raw, 0), 1));
      const angle = bp.angle + (endAngle - bp.angle) * t;
      const scale = bp.scale + (bp.endScale - bp.scale) * t;
      const lift = monitorLift * t;

      kb.style.transform = `perspective(${bp.perspective}px) rotateX(${angle}deg) scale(${scale})`;
      if (monitorArray) monitorArray.style.transform = `translateY(${lift}px)`;
    }

    function onScroll() {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(updateTilt);
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Sync side monitor heights to center
  useEffect(() => {
    const centerScreen = document.querySelector('.monitor-unit.center .monitor-screen') as HTMLElement;
    const leftScreen = document.querySelector('.monitor-unit.left .monitor-screen') as HTMLElement;
    const rightScreen = document.querySelector('.monitor-unit.right .monitor-screen') as HTMLElement;
    if (!centerScreen || !leftScreen || !rightScreen) return;

    function syncHeights() {
      leftScreen.style.minHeight = '';
      rightScreen.style.minHeight = '';
      const h = (centerScreen.offsetHeight - 20) + 'px';
      leftScreen.style.minHeight = h;
      rightScreen.style.minHeight = h;
    }

    syncHeights();
    window.addEventListener('resize', syncHeights);
    window.addEventListener('load', syncHeights);
    return () => {
      window.removeEventListener('resize', syncHeights);
      window.removeEventListener('load', syncHeights);
    };
  }, []);

  // Webcam dot click outside handler
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const logEl = document.getElementById('interceptLog');
      const webcamDot = document.getElementById('webcamDot');
      if (logEl && !logEl.contains(e.target as Node) && e.target !== webcamDot) {
        setLogOpen(false);
      }
    }
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  const handleWebcamClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLogOpen((prev) => !prev);
  };

  return (
    <section className="hero" id="heroSection">
      {/* Architectural blueprint background */}
      <div className="hero-blueprint-bg">
        <svg viewBox="0 0 1400 900" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect className="bp-bg-fill" x="40" y="60" width="200" height="160" rx="1" fill="rgba(0,0,0,0.008)" />
          <rect className="bp-bg-line-accent" x="40" y="60" width="200" height="160" rx="1" stroke="rgba(0,0,0,0.04)" strokeWidth="1" />
          <line className="bp-bg-line" x1="40" y1="130" x2="160" y2="130" stroke="rgba(0,0,0,0.03)" strokeWidth="0.7" />
          <line className="bp-bg-line" x1="140" y1="60" x2="140" y2="220" stroke="rgba(0,0,0,0.03)" strokeWidth="0.7" />
          <path className="bp-bg-line-accent" d="M100 130 A18 18 0 0 1 118 130" stroke="rgba(0,0,0,0.04)" strokeWidth="0.8" fill="none" />
          <text className="bp-bg-text" x="55" y="100" fontFamily="monospace" fontSize="6" fill="rgba(0,0,0,0.04)">SRC-01</text>
          <text className="bp-bg-text" x="155" y="100" fontFamily="monospace" fontSize="6" fill="rgba(0,0,0,0.04)">API-02</text>
          <line className="bp-bg-line" x1="40" y1="42" x2="240" y2="42" stroke="rgba(0,0,0,0.025)" strokeWidth="0.5" strokeDasharray="4 3" />
          <line className="bp-bg-line" x1="40" y1="38" x2="40" y2="46" stroke="rgba(0,0,0,0.03)" strokeWidth="0.5" />
          <line className="bp-bg-line" x1="240" y1="38" x2="240" y2="46" stroke="rgba(0,0,0,0.03)" strokeWidth="0.5" />
          <text className="bp-bg-text" x="120" y="40" fontFamily="monospace" fontSize="5" fill="rgba(0,0,0,0.035)" textAnchor="middle">v2.4.0</text>
          <circle className="bp-bg-circle" cx="1200" cy="100" r="20" stroke="rgba(0,0,0,0.025)" strokeWidth="0.7" />
          <circle className="bp-bg-circle" cx="1200" cy="100" r="8" stroke="rgba(0,0,0,0.03)" strokeWidth="0.7" />
          <circle className="bp-bg-circle" cx="1300" cy="160" r="14" stroke="rgba(0,0,0,0.02)" strokeWidth="0.7" />
          <circle className="bp-bg-circle" cx="1100" cy="180" r="12" stroke="rgba(0,0,0,0.02)" strokeWidth="0.7" />
          <line className="bp-bg-line" x1="1200" y1="100" x2="1300" y2="160" stroke="rgba(0,0,0,0.02)" strokeWidth="0.5" />
          <line className="bp-bg-line" x1="1200" y1="100" x2="1100" y2="180" stroke="rgba(0,0,0,0.02)" strokeWidth="0.5" />
          <line className="bp-bg-line" x1="1100" y1="180" x2="1300" y2="160" stroke="rgba(0,0,0,0.015)" strokeWidth="0.5" strokeDasharray="3 2" />
          <line className="bp-bg-line" x1="0" y1="300" x2="400" y2="0" stroke="rgba(0,0,0,0.015)" strokeWidth="0.5" strokeDasharray="8 6" />
          <line className="bp-bg-line" x1="1400" y1="250" x2="1000" y2="0" stroke="rgba(0,0,0,0.015)" strokeWidth="0.5" strokeDasharray="8 6" />
          <line className="bp-bg-line" x1="0" y1="700" x2="500" y2="900" stroke="rgba(0,0,0,0.012)" strokeWidth="0.5" strokeDasharray="8 6" />
          <line className="bp-bg-line" x1="1400" y1="650" x2="900" y2="900" stroke="rgba(0,0,0,0.012)" strokeWidth="0.5" strokeDasharray="8 6" />
          <rect className="bp-bg-fill" x="20" y="680" width="160" height="120" rx="1" fill="rgba(0,0,0,0.006)" />
          <rect className="bp-bg-line" x="20" y="680" width="160" height="120" rx="1" stroke="rgba(0,0,0,0.025)" strokeWidth="0.7" />
          <line className="bp-bg-line" x1="20" y1="740" x2="180" y2="740" stroke="rgba(0,0,0,0.02)" strokeWidth="0.5" />
          <line className="bp-bg-line" x1="100" y1="680" x2="100" y2="800" stroke="rgba(0,0,0,0.02)" strokeWidth="0.5" />
          <text className="bp-bg-text" x="45" y="720" fontFamily="monospace" fontSize="5" fill="rgba(0,0,0,0.03)">DEV-C</text>
          <text className="bp-bg-text" x="115" y="720" fontFamily="monospace" fontSize="5" fill="rgba(0,0,0,0.03)">PROD-D</text>
          <circle className="bp-bg-circle" cx="700" cy="80" r="24" stroke="rgba(0,0,0,0.015)" strokeWidth="0.5" />
          <line className="bp-bg-line" x1="700" y1="52" x2="700" y2="108" stroke="rgba(0,0,0,0.02)" strokeWidth="0.5" />
          <line className="bp-bg-line" x1="672" y1="80" x2="728" y2="80" stroke="rgba(0,0,0,0.02)" strokeWidth="0.5" />
          <text className="bp-bg-text" x="700" y="120" fontFamily="monospace" fontSize="5" fill="rgba(0,0,0,0.025)" textAnchor="middle">REF: main</text>
          <path className="bp-bg-line" d="M320 50 L320 65 L335 65" stroke="rgba(0,0,0,0.025)" strokeWidth="0.7" />
          <path className="bp-bg-line" d="M1080 50 L1080 65 L1065 65" stroke="rgba(0,0,0,0.025)" strokeWidth="0.7" />
          <path className="bp-bg-line" d="M320 850 L320 835 L335 835" stroke="rgba(0,0,0,0.02)" strokeWidth="0.7" />
          <path className="bp-bg-line" d="M1080 850 L1080 835 L1065 835" stroke="rgba(0,0,0,0.02)" strokeWidth="0.7" />
          <path className="bp-bg-line-accent" d="M1220 750 A80 80 0 0 1 1340 750" stroke="rgba(0,0,0,0.025)" strokeWidth="0.8" fill="none" />
          <line className="bp-bg-line" x1="1220" y1="750" x2="1220" y2="820" stroke="rgba(0,0,0,0.02)" strokeWidth="0.5" />
          <line className="bp-bg-line" x1="1340" y1="750" x2="1340" y2="820" stroke="rgba(0,0,0,0.02)" strokeWidth="0.5" />
          <line className="bp-bg-line" x1="1220" y1="820" x2="1340" y2="820" stroke="rgba(0,0,0,0.025)" strokeWidth="0.7" />
          <text className="bp-bg-text" x="1260" y="800" fontFamily="monospace" fontSize="5" fill="rgba(0,0,0,0.03)">DEPLOY-B7</text>
          <line className="bp-bg-line" x1="500" y1="0" x2="500" y2="12" stroke="rgba(0,0,0,0.02)" strokeWidth="0.5" />
          <line className="bp-bg-line" x1="620" y1="0" x2="620" y2="12" stroke="rgba(0,0,0,0.02)" strokeWidth="0.5" />
          <line className="bp-bg-line" x1="780" y1="0" x2="780" y2="12" stroke="rgba(0,0,0,0.02)" strokeWidth="0.5" />
          <line className="bp-bg-line" x1="900" y1="0" x2="900" y2="12" stroke="rgba(0,0,0,0.02)" strokeWidth="0.5" />
          <line className="bp-bg-line" x1="1388" y1="300" x2="1388" y2="600" stroke="rgba(0,0,0,0.02)" strokeWidth="0.5" strokeDasharray="4 3" />
          <line className="bp-bg-line" x1="1384" y1="300" x2="1396" y2="300" stroke="rgba(0,0,0,0.025)" strokeWidth="0.5" />
          <line className="bp-bg-line" x1="1384" y1="600" x2="1396" y2="600" stroke="rgba(0,0,0,0.025)" strokeWidth="0.5" />
          <text className="bp-bg-text" x="1380" y="455" fontFamily="monospace" fontSize="5" fill="rgba(0,0,0,0.025)" textAnchor="end" transform="rotate(-90 1380 455)">v3.6.0</text>
        </svg>
      </div>

      {/* Wire layer */}
      <div className="wire-layer" id="wireLayer">
        <svg viewBox="0 0 1200 800" preserveAspectRatio="none">
          <defs>
            <linearGradient id="wireFadeCenter" x1="0" y1="1" x2="0" y2="0">
              <stop offset="0%" stopColor="white" stopOpacity={1} />
              <stop offset="85%" stopColor="white" stopOpacity={1} />
              <stop offset="100%" stopColor="white" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="wireFadeLeft" gradientUnits="userSpaceOnUse" x1="480" y1="750" x2="260" y2="320">
              <stop offset="0%" stopColor="white" stopOpacity={1} />
              <stop offset="80%" stopColor="white" stopOpacity={1} />
              <stop offset="100%" stopColor="white" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="wireFadeRight" gradientUnits="userSpaceOnUse" x1="720" y1="750" x2="940" y2="320">
              <stop offset="0%" stopColor="white" stopOpacity={1} />
              <stop offset="80%" stopColor="white" stopOpacity={1} />
              <stop offset="100%" stopColor="white" stopOpacity={0} />
            </linearGradient>
            <mask id="maskCenter"><rect x="480" y="310" width="240" height="470" fill="url(#wireFadeCenter)" /></mask>
            <mask id="maskLeft"><rect x="100" y="290" width="560" height="490" fill="url(#wireFadeLeft)" /></mask>
            <mask id="maskRight"><rect x="540" y="290" width="560" height="490" fill="url(#wireFadeRight)" /></mask>
          </defs>
          <g mask="url(#maskCenter)">
            <path className="wire-path" id="wireKbCenter" d="M600 750 C603 730 608 716 612 700 C618 682 606 662 598 648 C590 634 596 618 610 602 C624 586 642 572 648 556 C654 540 648 522 636 508 C624 494 614 480 620 462 C626 444 636 432 630 416 C624 400 616 386 610 372 C604 358 598 346 600 332" />
            <path className="wire-pulse" id="pulseKbCenter" d="M600 750 C603 730 608 716 612 700 C618 682 606 662 598 648 C590 634 596 618 610 602 C624 586 642 572 648 556 C654 540 648 522 636 508 C624 494 614 480 620 462 C626 444 636 432 630 416 C624 400 616 386 610 372 C604 358 598 346 600 332" />
          </g>
          <g mask="url(#maskLeft)">
            <path className="wire-path" id="wireKbLeft" d="M480 750 C476 736 470 720 462 706 C452 690 466 672 480 658 C494 644 514 628 534 614 C554 600 570 586 576 570 C582 554 576 538 558 524 C540 510 508 502 478 496 C448 490 414 488 384 480 C354 472 328 458 308 440 C288 422 274 406 268 388 C262 370 258 356 260 340" />
            <path className="wire-pulse" id="pulseKbLeft" d="M480 750 C476 736 470 720 462 706 C452 690 466 672 480 658 C494 644 514 628 534 614 C554 600 570 586 576 570 C582 554 576 538 558 524 C540 510 508 502 478 496 C448 490 414 488 384 480 C354 472 328 458 308 440 C288 422 274 406 268 388 C262 370 258 356 260 340" />
          </g>
          <g mask="url(#maskRight)">
            <path className="wire-path" id="wireKbRight" d="M720 750 C724 734 730 718 738 704 C748 688 734 670 718 656 C704 642 684 626 664 614 C644 602 628 588 622 572 C616 556 622 540 640 526 C658 512 690 504 720 498 C750 492 784 488 814 480 C844 472 870 458 890 440 C910 422 924 404 932 386 C938 368 940 354 940 340" />
            <path className="wire-pulse" id="pulseKbRight" d="M720 750 C724 734 730 718 738 704 C748 688 734 670 718 656 C704 642 684 626 664 614 C644 602 628 588 622 572 C616 556 622 540 640 526 C658 512 690 504 720 498 C750 492 784 488 814 480 C844 472 870 458 890 440 C910 422 924 404 932 386 C938 368 940 354 940 340" />
          </g>
          <circle cx="600" cy="335" r="3" fill="none" stroke="rgba(0,0,0,0.08)" strokeWidth="1" className="wire-port" />
          <circle cx="260" cy="335" r="3" fill="none" stroke="rgba(0,0,0,0.08)" strokeWidth="1" className="wire-port" />
          <circle cx="940" cy="335" r="3" fill="none" stroke="rgba(0,0,0,0.08)" strokeWidth="1" className="wire-port" />
        </svg>
      </div>

      {/* Keyboard */}
      <div className="keyboard-bg">
        <div className="keyboard-wrap" id="keyboard" ref={keyboardRef}>
          {/* Mouse */}
          <div className="mouse-wrap" id="mouseWrap">
            <div className="mouse-body">
              <div className="mouse-scroll" />
              <div className="mouse-divider" />
            </div>
          </div>

          {/* Desk lamp (theme toggle) */}
          <div className={`lamp-wrap${isDark ? ' off' : ''}`} id="deskLamp" title="Toggle light/dark mode" onClick={toggleDark}>
            <div className="lamp-label">light / dark</div>
            <div className="lamp">
              <div className="lamp-head">
                <span className="lamp-icon lamp-icon-sun">&#9728;</span>
                <span className="lamp-icon lamp-icon-moon">&#9790;</span>
              </div>
              <div className="lamp-chain" />
              <div className="lamp-cone" />
              <div className="lamp-arm" />
              <div className="lamp-base" />
            </div>
          </div>

          {/* Keyboard rows */}
          <div className="kb-row">
            <div className="kb-key">esc</div>
            <div className="kb-key">F1</div><div className="kb-key">F2</div><div className="kb-key">F3</div><div className="kb-key">F4</div>
            <div className="kb-key">F5</div><div className="kb-key">F6</div><div className="kb-key">F7</div><div className="kb-key">F8</div>
            <div className="kb-key">F9</div><div className="kb-key">F10</div><div className="kb-key">F11</div><div className="kb-key">F12</div>
            <div className="kb-key">&#9167;</div>
          </div>
          <div className="kb-row">
            <div className="kb-key">`</div><div className="kb-key">1</div><div className="kb-key">2</div><div className="kb-key">3</div>
            <div className="kb-key">4</div><div className="kb-key">5</div><div className="kb-key">6</div><div className="kb-key">7</div>
            <div className="kb-key">8</div><div className="kb-key">9</div><div className="kb-key">0</div><div className="kb-key">-</div>
            <div className="kb-key">=</div><div className="kb-key w-1-5">&#9003;</div>
          </div>
          <div className="kb-row">
            <div className="kb-key w-1-5">tab</div>
            <div className="kb-key">Q</div><div className="kb-key">W</div><div className="kb-key">E</div><div className="kb-key">R</div>
            <div className="kb-key">T</div><div className="kb-key">Y</div><div className="kb-key">U</div><div className="kb-key">I</div>
            <div className="kb-key">O</div><div className="kb-key">P</div><div className="kb-key">[</div><div className="kb-key">]</div>
            <div className="kb-key">\</div>
          </div>
          <div className="kb-row">
            <div className="kb-key w-1-75">caps</div>
            <div className="kb-key">A</div><div className="kb-key">S</div><div className="kb-key">D</div><div className="kb-key">F</div>
            <div className="kb-key">G</div><div className="kb-key">H</div><div className="kb-key">J</div><div className="kb-key">K</div>
            <div className="kb-key">L</div><div className="kb-key">;</div><div className="kb-key">&apos;</div>
            <a href="#" className="kb-key cta-enter"><span className="enter-symbol">&#8629;</span>Let&apos;s Build</a>
          </div>
          <div className="kb-row">
            <div className="kb-key w-2-25">&#8679;</div>
            <div className="kb-key">Z</div><div className="kb-key">X</div><div className="kb-key">C</div><div className="kb-key">V</div>
            <div className="kb-key">B</div><div className="kb-key">N</div><div className="kb-key">M</div><div className="kb-key">,</div>
            <div className="kb-key">.</div><div className="kb-key">/</div>
            <div className="kb-key w-2-25">&#8679;</div>
          </div>
          <div className="kb-row">
            <div className="kb-key">fn</div>
            <div className="kb-key w-1-25">&#8963;</div>
            <div className="kb-key w-1-25">&#8997;</div>
            <div className="kb-key w-1-5">&#8984;</div>
            <a href="#" className="kb-key cta-space">Start a Project</a>
            <div className="kb-key w-1-5">&#8984;</div>
            <div className="kb-key w-1-25">&#8997;</div>
            <div className="kb-key">&#9664;</div>
            <div className="kb-key" style={{ display: 'flex', flexDirection: 'column', gap: 0, padding: 0 }}>
              <span style={{ fontSize: '8px', lineHeight: 1 }}>&#9650;</span>
              <span style={{ fontSize: '8px', lineHeight: 1 }}>&#9660;</span>
            </div>
            <div className="kb-key">&#9654;</div>
          </div>
        </div>
      </div>

      {/* Hero content — Monitors */}
      <div className="hero-content">
        <div className="monitor-array">
          {/* LEFT MONITOR */}
          <div className="monitor-unit left" id="monitorLeft">
            <div className="monitor">
              <div className="monitor-screen">
                <div className={`monitor-screen-inner powered${pricingMode ? ' pricing-mode' : ''}`} id="screenLeft">
                  <div className="blueprint-screen" />
                  <div className="side-screen-content" id="bpLeft">
                    <div className="blueprint-svg">
                      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect className="bp-fill" x="10" y="10" width="180" height="180" rx="2" />
                        <circle className="bp-dot" cx="40" cy="40" /><circle className="bp-dot" cx="100" cy="30" /><circle className="bp-dot" cx="160" cy="45" />
                        <circle className="bp-dot" cx="30" cy="100" /><circle className="bp-dot" cx="100" cy="100" /><circle className="bp-dot" cx="170" cy="95" />
                        <circle className="bp-dot" cx="50" cy="160" /><circle className="bp-dot" cx="100" cy="170" /><circle className="bp-dot" cx="155" cy="155" />
                        <path className="bp-line" d="M40 40 L100 30 L160 45" />
                        <path className="bp-line" d="M30 100 L100 100 L170 95" />
                        <path className="bp-line" d="M50 160 L100 170 L155 155" />
                        <path className="bp-line dim" d="M40 40 L30 100 L50 160" />
                        <path className="bp-line dim" d="M100 30 L100 100 L100 170" />
                        <path className="bp-line dim" d="M160 45 L170 95 L155 155" />
                        <path className="bp-line accent" d="M40 40 L100 100 L155 155" />
                        <path className="bp-line accent" d="M160 45 L100 100 L50 160" />
                        <circle cx="100" cy="100" r="8" className="bp-line accent" style={{ strokeDasharray: 50, strokeDashoffset: 50 }} />
                        <circle cx="100" cy="100" r="14" className="bp-line dim" style={{ strokeDasharray: 88, strokeDashoffset: 88 }} />
                        <line className="bp-dim" x1="10" y1="195" x2="190" y2="195" />
                        <line className="bp-dim" x1="195" y1="10" x2="195" y2="190" />
                        <text className="bp-text" x="14" y="20">SYSTEM ARCHITECTURE</text>
                        <text className="bp-text" x="14" y="196">MOD:A-7 // SERVICE MAP</text>
                        <text className="bp-text" x="90" y="115">API</text>
                        <text className="bp-text" x="35" y="35">UI</text>
                        <text className="bp-text" x="163" y="40">DB</text>
                        <text className="bp-text" x="45" y="175">CDN</text>
                        <text className="bp-text" x="158" y="165">AUTH</text>
                      </svg>
                    </div>
                    <div className="bp-label">SERVICE TOPOLOGY</div>
                  </div>
                  {/* Pricing: MVP tier */}
                  <div className={`pricing-overlay${leftActive ? ' active' : ''}`} id="pricingLeft">
                    <div className="pricing-term-bar">
                      <div className="pricing-term-dot red" />
                      <div className="pricing-term-dot yellow" />
                      <div className="pricing-term-dot green" />
                      <span className="pricing-term-title">mvp.config</span>
                    </div>
                    <div className="pricing-single">
                      <div className="pricing-tier-name">MVP</div>
                      <div className="pricing-tier-price">$15K&ndash;30K</div>
                      <div className="pricing-tier-meta">4&ndash;8 weeks</div>
                    </div>
                    <div className="pricing-divider" />
                    <ul className="pricing-features">
                      <li className="highlight">Core feature build</li>
                      <li className="highlight">Design + development</li>
                      <li>Auth &amp; payments</li>
                      <li>Cloud deployment</li>
                      <li>30-day bug warranty</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="monitor-chin"><div className="monitor-brand">arkitecht</div></div>
            <div className="monitor-stand-wrap"><div className="m-stand" /><div className="m-base" /></div>
          </div>

          {/* CENTER MONITOR */}
          <div className="monitor-unit center" id="monitorCenter">
            <div className="monitor">
              <div className="webcam-dot recording" id="webcamDot" onClick={handleWebcamClick} />
              <div className={`intercept-log${logOpen ? ' open' : ''}`} id="interceptLog">
                <div className="intercept-header">
                  <div className="rec-dot" />
                  <span>Build Log</span>
                </div>
                <div id="interceptEntries">
                  {interceptEntries.length === 0 ? (
                    <div className="intercept-empty">Listening...</div>
                  ) : (
                    [...interceptEntries].reverse().map((msg, i) => (
                      <div key={i} className="intercept-entry">
                        <span className="ie-time">{ts}</span>
                        <span className="ie-msg">{msg}</span>
                      </div>
                    ))
                  )}
                </div>
              </div>
              <div className="monitor-screen">
                <div className={`monitor-screen-inner powered${pricingMode ? ' pricing-mode' : ''}`} id="screenCenter">
                  <div className="center-blueprint-overlay" id="centerBpOverlay">
                    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path className="bp-line dim" d="M0 150 Q100 80 200 150 Q300 220 400 150" style={{ strokeDasharray: 600, strokeDashoffset: 600 }} />
                      <path className="bp-line dim" d="M50 0 L50 300" style={{ strokeDasharray: 300, strokeDashoffset: 300 }} />
                      <path className="bp-line dim" d="M200 0 L200 300" style={{ strokeDasharray: 300, strokeDashoffset: 300 }} />
                      <path className="bp-line dim" d="M350 0 L350 300" style={{ strokeDasharray: 300, strokeDashoffset: 300 }} />
                      <circle cx="80" cy="80" r="4" className="bp-line dim" style={{ strokeDasharray: 25, strokeDashoffset: 25 }} />
                      <circle cx="200" cy="150" r="6" className="bp-line" style={{ stroke: 'rgba(0,240,255,0.15)', strokeDasharray: 38, strokeDashoffset: 38 }} />
                      <circle cx="320" cy="100" r="4" className="bp-line dim" style={{ strokeDasharray: 25, strokeDashoffset: 25 }} />
                      <rect x="140" y="60" width="120" height="80" rx="2" className="bp-line dim" style={{ strokeDasharray: 400, strokeDashoffset: 400 }} />
                      <line x1="140" y1="90" x2="260" y2="90" className="bp-line dim" style={{ strokeDasharray: 120, strokeDashoffset: 120 }} />
                      <line x1="200" y1="60" x2="200" y2="140" className="bp-line dim" style={{ strokeDasharray: 80, strokeDashoffset: 80 }} />
                    </svg>
                  </div>
                  <div className="hero-text" id="heroTextDefault">
                    <div className="monitor-prompt"><span>arkitecht@studio:~$</span> ./build --mode=production</div>
                    <h1>We Architect, Design, and Ship Digital Products</h1>
                    <p>
                      Arkitecht is a full-stack product studio for teams that need world-class software — from first
                      wireframe to global scale. We turn ambitious ideas into production-ready platforms.
                      <span className="monitor-cursor" />
                    </p>
                  </div>
                  {/* Pricing: PMF tier */}
                  <div className={`pricing-overlay${centerActive ? ' active' : ''}`} id="pricingCenter">
                    <div className="pricing-term-bar">
                      <div className="pricing-term-dot red" />
                      <div className="pricing-term-dot yellow" />
                      <div className="pricing-term-dot green" />
                      <span className="pricing-term-title">cat ./pmf-engagement.yml</span>
                    </div>
                    <div className="pricing-back" id="pricingBack" onClick={hidePricing}>
                      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 8L5 16L15 24V8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M27 8L17 16L27 24V8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className="pricing-single">
                      <div className="pricing-tier-name">PMF<span className="pricing-rec">most popular</span></div>
                      <div className="pricing-tier-price">$50K&ndash;120K</div>
                      <div className="pricing-tier-meta">2&ndash;5 months</div>
                    </div>
                    <div className="pricing-divider" />
                    <ul className="pricing-features">
                      <li className="highlight">Everything in MVP</li>
                      <li className="highlight">Dedicated senior team</li>
                      <li className="highlight">Analytics &amp; user tracking</li>
                      <li>A/B testing infrastructure</li>
                      <li>Iterate until product-market fit</li>
                      <li>Design system &amp; component library</li>
                      <li>Performance &amp; SEO optimization</li>
                      <li>90-day post-launch support</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="monitor-chin"><div className="monitor-brand">arkitecht</div></div>
            <div className="monitor-stand-wrap"><div className="m-stand" /><div className="m-base" /></div>
          </div>

          {/* RIGHT MONITOR */}
          <div className="monitor-unit right" id="monitorRight">
            <div className="monitor">
              <div className="monitor-screen">
                <div className={`monitor-screen-inner powered${pricingMode ? ' pricing-mode' : ''}`} id="screenRight">
                  <div className="blueprint-screen" />
                  <div className="side-screen-content" id="bpRight">
                    <div className="blueprint-svg">
                      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect className="bp-fill" x="10" y="10" width="180" height="180" rx="2" />
                        <rect className="bp-line accent" x="20" y="25" width="160" height="150" rx="1" />
                        <line className="bp-line" x1="20" y1="80" x2="120" y2="80" />
                        <line className="bp-line" x1="120" y1="25" x2="120" y2="130" />
                        <line className="bp-line" x1="80" y1="80" x2="80" y2="175" />
                        <line className="bp-line dim" x1="120" y1="130" x2="180" y2="130" />
                        <path className="bp-line accent" d="M55 80 A15 15 0 0 1 70 80" style={{ strokeDasharray: 24, strokeDashoffset: 24 }} />
                        <path className="bp-line accent" d="M120 55 A15 15 0 0 0 120 70" style={{ strokeDasharray: 24, strokeDashoffset: 24 }} />
                        <line className="bp-line dim" x1="20" y1="25" x2="120" y2="130" />
                        <line className="bp-line dim" x1="120" y1="25" x2="180" y2="175" />
                        <line className="bp-dim" x1="20" y1="185" x2="180" y2="185" />
                        <line className="bp-dim" x1="15" y1="25" x2="15" y2="175" />
                        <text className="bp-text" x="88" y="192">v2.4.0</text>
                        <text className="bp-text" x="5" y="105" transform="rotate(-90 5 105)">1080px</text>
                        <text className="bp-text" x="50" y="55">VIEWS</text>
                        <text className="bp-text" x="135" y="55">STATE</text>
                        <text className="bp-text" x="35" y="130">ROUTES</text>
                        <text className="bp-text" x="135" y="150">HOOKS</text>
                        <circle className="bp-dot" cx="20" cy="25" /><circle className="bp-dot" cx="180" cy="25" />
                        <circle className="bp-dot" cx="20" cy="175" /><circle className="bp-dot" cx="180" cy="175" />
                        <circle className="bp-dot" cx="120" cy="80" /><circle className="bp-dot" cx="80" cy="130" />
                        <text className="bp-text" x="14" y="20">COMPONENT TREE</text>
                        <text className="bp-text" x="14" y="196">MOD:B-3 // UI SCHEMA</text>
                      </svg>
                    </div>
                    <div className="bp-label">FRONTEND LAYOUT</div>
                  </div>
                  {/* Pricing: SCALE tier */}
                  <div className={`pricing-overlay${rightActive ? ' active' : ''}`} id="pricingRight">
                    <div className="squiggle-arrow">
                      <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 10 L25 2 L32 10" stroke="var(--cyan)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" className="squiggle-head" />
                        <path d="M25 50 C44 48, 8 38, 25 24 C32 16, 25 8, 25 4" stroke="var(--cyan)" strokeWidth="2.5" strokeLinecap="round" fill="none" className="squiggle-path" />
                      </svg>
                    </div>
                    <div className="pricing-term-bar">
                      <div className="pricing-term-dot red" />
                      <div className="pricing-term-dot yellow" />
                      <div className="pricing-term-dot green" />
                      <span className="pricing-term-title">scale.config</span>
                    </div>
                    <div className="pricing-single">
                      <div className="pricing-tier-name">SCALE</div>
                      <div className="pricing-tier-price">Let&apos;s Talk</div>
                      <div className="pricing-tier-meta">Ongoing retainer</div>
                    </div>
                    <div className="pricing-divider" />
                    <ul className="pricing-features">
                      <li className="highlight">Embedded eng pod</li>
                      <li className="highlight">Continuous shipping</li>
                      <li>Infra &amp; DevOps</li>
                      <li>On-call response</li>
                      <li>Fractional CTO option</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="monitor-chin"><div className="monitor-brand">arkitecht</div></div>
            <div className="monitor-stand-wrap"><div className="m-stand" /><div className="m-base" /></div>
          </div>
        </div>
      </div>
    </section>
  );
}

