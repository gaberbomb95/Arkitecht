'use client';

import { useEffect, useRef } from 'react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  theme: 'dark' | 'light';
}

export default function ContactModal({ isOpen, onClose, theme }: ContactModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  // Lock body scroll when open — preserve existing overflow state
  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className={`contact-modal-overlay${theme === 'dark' ? ' modal-dark' : ' modal-light'}`}
      ref={overlayRef}
      onClick={(e) => { if (e.target === overlayRef.current) onClose(); }}
    >
      <div className="contact-modal" ref={modalRef}>
        {/* Close button */}
        <button className="modal-close" onClick={onClose} aria-label="Close">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M18 6L6 18" /><path d="M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="modal-header">
          <div className="modal-terminal-dots">
            <span className="modal-dot red" onClick={onClose} style={{ cursor: 'pointer' }} />
            <span className="modal-dot yellow" />
            <span className="modal-dot green" />
          </div>
          <div className="modal-title-bar">
            <span className="modal-prompt">arkitecht@studio:~$</span>
            <span className="modal-cmd">./start-project.sh</span>
          </div>
        </div>

        {/* Body */}
        <div className="modal-body">
          <h2 className="modal-heading">Let&apos;s Build Something Great</h2>
          <p className="modal-subtext">Tell us about your project. We&apos;ll respond within 24 hours with a tailored plan.</p>

          <form className="modal-form" onSubmit={(e) => e.preventDefault()}>
            <div className="modal-form-row">
              <div className="modal-field">
                <label htmlFor="modal-name">Name</label>
                <input type="text" id="modal-name" placeholder="Jane Smith" autoComplete="name" />
              </div>
              <div className="modal-field">
                <label htmlFor="modal-email">Email</label>
                <input type="email" id="modal-email" placeholder="jane@company.com" autoComplete="email" />
              </div>
            </div>

            <div className="modal-field">
              <label htmlFor="modal-company">Company</label>
              <input type="text" id="modal-company" placeholder="Acme Corp" autoComplete="organization" />
            </div>

            <div className="modal-field">
              <label htmlFor="modal-budget">Budget Range</label>
              <select id="modal-budget" defaultValue="">
                <option value="" disabled>Select a range</option>
                <option value="15-30k">$15K – $30K (MVP)</option>
                <option value="50-120k">$50K – $120K (PMF)</option>
                <option value="120k+">$120K+ (Scale)</option>
                <option value="unsure">Not sure yet</option>
              </select>
            </div>

            <div className="modal-field">
              <label htmlFor="modal-message">Tell us about your project</label>
              <textarea id="modal-message" rows={4} placeholder="What are you building? What stage are you at? Any timeline constraints?" />
            </div>

            <button type="submit" className="modal-submit">
              <span>Send Message</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 2L11 13" /><path d="M22 2l-7 20-4-9-9-4 20-7z" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
