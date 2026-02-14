export default function TrustedSection() {
  return (
    <section className="trusted-section">
      <div className="container">
        <p className="trusted-label">Trusted by caregivers and families worldwide</p>
        <div className="trust-badges">
          <div className="trust-badge">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M16 2L4 8V16C4 23.2 9.12 29.84 16 32C22.88 29.84 28 23.2 28 16V8L16 2Z" stroke="currentColor" strokeWidth="2" />
              <path d="M12 16L15 19L21 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>HIPAA Compliant</span>
          </div>
          <div className="trust-badge">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="2" />
              <path d="M16 8V16L22 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <span>24/7 Monitoring</span>
          </div>
          <div className="trust-badge">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <rect x="4" y="8" width="24" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
              <path d="M10 4V8M22 4V8M10 24V28M22 24V28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <span>FCC Certified</span>
          </div>
          <div className="trust-badge">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M16 4L20 12H28L22 18L24 28L16 22L8 28L10 18L4 12H12L16 4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
            </svg>
            <span>4.9/5 Rating</span>
          </div>
        </div>
      </div>
    </section>
  );
}
