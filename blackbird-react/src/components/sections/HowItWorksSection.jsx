export default function HowItWorksSection() {
  return (
    <section className="how-section" id="how-it-works">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">How It Works</span>
          <h2 className="section-title">Protection in three simple steps</h2>
        </div>

        <div className="steps-container">
          <div className="step">
            <div className="step-number">01</div>
            <div className="step-content">
              <h3 className="step-title">Subscribe &amp; Receive</h3>
              <p className="step-description">
                Choose your plan and receive your Black Bird wristband within days.
                Everything you need is included in the box.
              </p>
            </div>
            <div className="step-visual">
              <div className="step-icon">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <rect x="8" y="16" width="32" height="24" rx="2" stroke="currentColor" strokeWidth="2" />
                  <path d="M8 22L24 32L40 22" stroke="currentColor" strokeWidth="2" />
                  <path d="M24 8V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M18 12L24 8L30 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>

          <div className="step-connector">
            <svg width="100" height="40" viewBox="0 0 100 40">
              <path d="M0 20H100" stroke="currentColor" strokeWidth="2" strokeDasharray="8 8" />
              <path d="M90 10L100 20L90 30" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <div className="step">
            <div className="step-number">02</div>
            <div className="step-content">
              <h3 className="step-title">Setup the App</h3>
              <p className="step-description">
                Download our app, pair the wristband via Bluetooth, and add your emergency contacts.
                The guided setup takes less than 5 minutes.
              </p>
            </div>
            <div className="step-visual">
              <div className="step-icon">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <rect x="14" y="6" width="20" height="36" rx="3" stroke="currentColor" strokeWidth="2" />
                  <path d="M20 10H28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="24" cy="36" r="2" stroke="currentColor" strokeWidth="2" />
                  <path d="M20 20L23 23L28 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>

          <div className="step-connector">
            <svg width="100" height="40" viewBox="0 0 100 40">
              <path d="M0 20H100" stroke="currentColor" strokeWidth="2" strokeDasharray="8 8" />
              <path d="M90 10L100 20L90 30" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <div className="step">
            <div className="step-number">03</div>
            <div className="step-content">
              <h3 className="step-title">Stay Connected</h3>
              <p className="step-description">
                Your loved one wears the comfortable wristband while you monitor their safety
                from anywhere in the world through our app.
              </p>
            </div>
            <div className="step-visual">
              <div className="step-icon">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="2" />
                  <circle cx="24" cy="24" r="8" stroke="currentColor" strokeWidth="2" />
                  <circle cx="24" cy="24" r="2" fill="currentColor" />
                  <path d="M24 6V10M24 38V42M6 24H10M38 24H42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
