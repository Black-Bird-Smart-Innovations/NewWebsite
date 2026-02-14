import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <img className="logo-icon" src="/images/main-logo.png" alt="Black Bird Logo" />
              <span>lack Bird Smart Innovations<sup>TM</sup></span>
            </Link>
            <p className="footer-tagline">
              Protective technology for vulnerable individuals.
              Keeping families connected, keeping loved ones safe.
            </p>
            <div className="footer-contact">
              <a href="tel:917-977-0949" className="contact-item">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M2.5 3.5C2.5 2.67157 3.17157 2 4 2H6.5C6.86836 2 7.19499 2.23053 7.31831 2.57655L8.28324 5.85607C8.42225 6.24584 8.26178 6.68036 7.89897 6.8842L6.17899 7.85034C7.08984 9.85409 8.64593 11.4102 10.6497 12.321L11.6158 10.601C11.8196 10.2382 12.2542 10.0778 12.6439 10.2168L15.9234 11.3101C16.2695 11.4334 16.5 11.76 16.5 12.1284V15C16.5 15.8284 15.8284 16.5 15 16.5H14C7.37258 16.5 2.5 11.6274 2.5 5V3.5Z" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
                917-977-0949
              </a>
              <a href="mailto:blackbird_tech@yahoo.com" className="contact-item">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <rect x="2" y="4" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M2 6L9 10L16 6" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
                blackbird_tech@yahoo.com
              </a>
            </div>
          </div>

          <div className="footer-links-group">
            <div className="footer-column">
              <h4 className="footer-heading">Product</h4>
              <a href="#features" className="footer-link">Features</a>
              <a href="#products" className="footer-link">Products</a>
              <a href="#pricing" className="footer-link">Pricing</a>
              <a href="#how-it-works" className="footer-link">How It Works</a>
            </div>
            <div className="footer-column">
              <h4 className="footer-heading">Company</h4>
              <Link to="/about" className="footer-link">About Us</Link>
              <a href="#" className="footer-link">Contact</a>
              <a href="#" className="footer-link">Careers</a>
              <a href="#" className="footer-link">Press</a>
            </div>
            <div className="footer-column">
              <h4 className="footer-heading">Legal</h4>
              <Link to="/privacy" className="footer-link">Privacy Policy</Link>
              <Link to="/terms" className="footer-link">Terms of Service</Link>
              <Link to="/terms" className="footer-link">EULA</Link>
              <Link to="/privacy" className="footer-link">HIPAA Notice</Link>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">&copy; 2024 Black Bird Smart Innovations. All rights reserved.</p>
          <div className="footer-social">
            <a href="#" className="social-link" aria-label="Facebook">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.0079 4.92548 17.3068 8.75 17.9034V12.3125H6.71875V10H8.75V8.23438C8.75 6.23438 9.94434 5.125 11.7717 5.125C12.6467 5.125 13.5625 5.28125 13.5625 5.28125V7.25H12.5537C11.5599 7.25 11.25 7.86667 11.25 8.5V10H13.4688L13.1141 12.3125H11.25V17.9034C15.0745 17.3068 18 14.0079 18 10Z" fill="currentColor"/>
              </svg>
            </a>
            <a href="#" className="social-link" aria-label="Twitter">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M17.5 4.41667C16.875 4.70833 16.2083 4.90833 15.5 5.01667C16.225 4.575 16.775 3.88333 17.0417 3.05833C16.3583 3.46667 15.6 3.76667 14.7917 3.93333C14.1417 3.24167 13.2333 2.83333 12.2417 2.83333C10.3 2.83333 8.74167 4.39167 8.74167 6.325C8.74167 6.61667 8.775 6.9 8.83333 7.16667C5.95833 7.025 3.4 5.63333 1.68333 3.48333C1.35833 4.03333 1.175 4.66667 1.175 5.35C1.175 6.625 1.825 7.75 2.8 8.41667C2.2 8.4 1.64167 8.23333 1.15833 7.96667V8.00833C1.15833 9.70833 2.35 11.1333 3.94167 11.4833C3.625 11.5667 3.29167 11.6083 2.95 11.6083C2.70833 11.6083 2.475 11.5833 2.24167 11.5417C2.71667 12.9333 4.00833 13.9583 5.54167 13.9917C4.325 14.9417 2.79167 15.5 1.13333 15.5C0.833333 15.5 0.533333 15.4833 0.241667 15.45C1.80833 16.45 3.68333 17.0333 5.7 17.0333C12.2333 17.0333 15.8 11.6667 15.8 7.01667C15.8 6.86667 15.7917 6.71667 15.7833 6.56667C16.4667 6.06667 17.0583 5.44167 17.5 4.73333V4.41667Z" fill="currentColor"/>
              </svg>
            </a>
            <a href="#" className="social-link" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <rect x="2" y="2" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="1.5"/>
                <circle cx="10" cy="10" r="4" stroke="currentColor" strokeWidth="1.5"/>
                <circle cx="15" cy="5" r="1" fill="currentColor"/>
              </svg>
            </a>
            <a href="#" className="social-link" aria-label="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <rect x="2" y="2" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M6 8V14M6 5.5V5.51M10 14V10.5C10 9.5 10.5 8.5 12 8.5C13.5 8.5 14 9.5 14 10.5V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
