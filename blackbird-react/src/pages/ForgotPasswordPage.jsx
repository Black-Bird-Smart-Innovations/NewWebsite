import { useState } from 'react';
import { Link } from 'react-router-dom';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../firebase';
import AmbientBackground from '../components/layout/AmbientBackground';
import '../css/auth.css';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await sendPasswordResetEmail(auth, email);
      setSent(true);
    } catch (err) {
      switch (err.code) {
        case 'auth/user-not-found': setError('No account found with this email.'); break;
        case 'auth/invalid-email': setError('Please enter a valid email address.'); break;
        case 'auth/too-many-requests': setError('Too many attempts. Please try again later.'); break;
        default: setError('An error occurred. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <AmbientBackground orbCount={2} />
      <div className="auth-container">
        <div className="auth-branding">
          <Link to="/" className="auth-logo">
            <img className="logo-icon" src="/images/main-logo.png" alt="Black Bird Logo" />
            <span>lack Bird Smart Innovations<sup>TM</sup></span>
          </Link>
          <div className="branding-content">
            <h1 className="branding-title">Reset your password</h1>
            <p className="branding-description">Enter your email address and we'll send you a link to reset your password.</p>
          </div>
          <div className="branding-footer"><p>&copy; {new Date().getFullYear()} Black Bird Smart Innovations. All rights reserved.</p></div>
        </div>

        <div className="auth-form-wrapper">
          <div className="auth-form-container">
            {sent ? (
              <div className="auth-header">
                <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'var(--color-success-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto var(--space-lg)' }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M8 12L11 15L16 9" stroke="var(--color-success)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="12" r="10" stroke="var(--color-success)" strokeWidth="1.5"/></svg>
                </div>
                <h2 className="auth-title">Check your email</h2>
                <p className="auth-subtitle" style={{ marginBottom: 'var(--space-lg)' }}>We sent a password reset link to <strong>{email}</strong>. Check your inbox and follow the instructions.</p>
                <Link to="/login" className="btn btn-primary btn-large btn-full">
                  <span>Back to Log In</span>
                </Link>
              </div>
            ) : (
              <>
                <div className="auth-header">
                  <h2 className="auth-title">Forgot your password?</h2>
                  <p className="auth-subtitle">No worries, we'll send you a reset link.</p>
                </div>

                {error && <div style={{ background: 'rgba(236,28,36,0.1)', border: '1px solid rgba(236,28,36,0.3)', borderRadius: '0.75rem', padding: '0.75rem 1rem', marginBottom: '1rem', color: 'var(--color-primary)', fontSize: '0.875rem' }}>{error}</div>}

                <form className="auth-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <div className="input-wrapper">
                      <svg className="input-icon" width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M2 6L10 11L18 6" stroke="currentColor" strokeWidth="1.5"/></svg>
                      <input type="email" id="email" className="form-input" placeholder="you@example.com" required value={email} onChange={e => setEmail(e.target.value)} />
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary btn-large btn-full" disabled={loading}>
                    <span>{loading ? 'Sending...' : 'Send Reset Link'}</span>
                  </button>
                </form>

                <p className="auth-footer-text" style={{ marginTop: 'var(--space-lg)' }}>
                  <Link to="/login" style={{ color: 'var(--color-text-secondary)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.375rem' }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 4L6 8L10 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    Back to Log In
                  </Link>
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
