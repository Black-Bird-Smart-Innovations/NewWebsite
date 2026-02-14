import { Link } from 'react-router-dom';

export default function FooterMinimal() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Black Bird Smart Innovations. All rights reserved.</p>
          <div className="footer-legal-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
