export default function PricingSection() {
  return (
    <section className="pricing-section" id="pricing">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Pricing</span>
          <h2 className="section-title">Simple, transparent pricing</h2>
          <p className="section-description">
            No hidden fees. No long-term contracts. Cancel anytime.
          </p>
        </div>

        <div className="pricing-card">
          <div className="pricing-badge">Most Popular</div>
          <div className="pricing-header">
            <h3 className="pricing-name">Premium Protection</h3>
            <div className="pricing-amount">
              <span className="currency">$</span>
              <span className="price">39</span>
              <span className="cents">.99</span>
              <span className="period">/month</span>
            </div>
            <p className="pricing-subtitle">Everything you need for complete peace of mind</p>
          </div>

          <div className="pricing-features">
            <div className="pricing-feature">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5" />
                <path d="M6 10L9 13L14 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>Black Bird Smart Wristband</span>
            </div>
            <div className="pricing-feature">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5" />
                <path d="M6 10L9 13L14 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>Real-time GPS Tracking</span>
            </div>
            <div className="pricing-feature">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5" />
                <path d="M6 10L9 13L14 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>One-Touch SOS Emergency Button</span>
            </div>
            <div className="pricing-feature">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5" />
                <path d="M6 10L9 13L14 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>Automatic Fall Detection</span>
            </div>
            <div className="pricing-feature">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5" />
                <path d="M6 10L9 13L14 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>Health &amp; Temperature Monitoring</span>
            </div>
            <div className="pricing-feature">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5" />
                <path d="M6 10L9 13L14 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>24/7 Emergency Support Line</span>
            </div>
            <div className="pricing-feature">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5" />
                <path d="M6 10L9 13L14 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>iOS &amp; Android Mobile App</span>
            </div>
            <div className="pricing-feature">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5" />
                <path d="M6 10L9 13L14 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>Unlimited Caregiver Contacts</span>
            </div>
          </div>

          <a href="#pricing" className="btn btn-primary btn-large pricing-cta">
            <span>Start Your Protection</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>

          <p className="pricing-note">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z" stroke="currentColor" strokeWidth="1.5" />
              <path d="M8 5V8M8 11H8.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            Month-to-month billing. No contracts. Cancel anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
