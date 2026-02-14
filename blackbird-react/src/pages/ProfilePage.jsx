import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { updateProfile } from 'firebase/auth';
import { useAuth } from '../context/AuthContext';

export default function ProfilePage() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [editing, setEditing] = useState(false);
  const [displayName, setDisplayName] = useState(user?.displayName || '');
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');

  if (!user) {
    navigate('/login');
    return null;
  }

  const isPasswordUser = user.providerData?.some(p => p.providerId === 'password');
  const isGoogleUser = user.providerData?.some(p => p.providerId === 'google.com');

  const getInitials = (name, email) => {
    if (name) {
      const parts = name.trim().split(' ');
      return parts.length > 1
        ? (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
        : parts[0].slice(0, 2).toUpperCase();
    }
    return email ? email[0].toUpperCase() : '?';
  };

  const handleSaveName = async () => {
    if (!displayName.trim()) return;
    setSaving(true);
    setMessage('');
    try {
      await updateProfile(user, { displayName: displayName.trim() });
      setMessage('Name updated successfully.');
      setEditing(false);
    } catch {
      setMessage('Failed to update name.');
    } finally {
      setSaving(false);
    }
  };

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  return (
    <div className="profile-page">
      <div className="profile-container">
        <div className="profile-card">
          <div className="profile-header">
            <div className="profile-avatar-large">
              {user.photoURL ? (
                <img src={user.photoURL} alt="" className="profile-avatar-img" referrerPolicy="no-referrer" />
              ) : (
                <span className="profile-avatar-initials">{getInitials(user.displayName, user.email)}</span>
              )}
            </div>
            <div className="profile-identity">
              {editing ? (
                <div className="profile-edit-name">
                  <input
                    type="text"
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    className="profile-name-input"
                    autoFocus
                  />
                  <div className="profile-edit-actions">
                    <button className="btn btn-primary btn-sm" onClick={handleSaveName} disabled={saving}>
                      {saving ? 'Saving...' : 'Save'}
                    </button>
                    <button className="btn btn-outline btn-sm" onClick={() => { setEditing(false); setDisplayName(user.displayName || ''); }}>
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <h1 className="profile-name">{user.displayName || 'User'}</h1>
                  <button className="profile-edit-btn" onClick={() => setEditing(true)}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M10.5 1.5L12.5 3.5L4 12H2V10L10.5 1.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg>
                    Edit name
                  </button>
                </>
              )}
              <p className="profile-email">{user.email}</p>
            </div>
          </div>

          {message && (
            <div className={`profile-message${message.includes('Failed') ? ' error' : ''}`}>{message}</div>
          )}

          <div className="profile-section">
            <h2 className="profile-section-title">Account Details</h2>
            <div className="profile-details">
              <div className="profile-detail-row">
                <span className="profile-detail-label">Email</span>
                <span className="profile-detail-value">{user.email}</span>
              </div>
              <div className="profile-detail-row">
                <span className="profile-detail-label">Sign-in method</span>
                <span className="profile-detail-value">
                  {isGoogleUser && (
                    <span className="profile-provider-badge google">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M12.72 5.86H12.25V5.84H7V8.17H10.23C9.74 9.52 8.49 10.5 7 10.5C5.07 10.5 3.5 8.93 3.5 7C3.5 5.07 5.07 3.5 7 3.5C7.89 3.5 8.7 3.84 9.32 4.39L10.97 2.74C9.93 1.77 8.54 1.17 7 1.17C3.78 1.17 1.17 3.78 1.17 7C1.17 10.22 3.78 12.83 7 12.83C10.22 12.83 12.83 10.22 12.83 7C12.83 6.61 12.79 6.23 12.72 5.86Z" fill="#FFC107"/><path d="M1.84 4.28L3.76 5.69C4.27 4.41 5.53 3.5 7 3.5C7.89 3.5 8.7 3.84 9.32 4.39L10.97 2.74C9.93 1.77 8.54 1.17 7 1.17C4.76 1.17 2.82 2.43 1.84 4.28Z" fill="#FF3D00"/><path d="M7 12.83C8.51 12.83 9.88 12.26 10.91 11.32L9.11 9.79C8.51 10.25 7.77 10.5 7 10.5C5.53 10.5 4.28 9.53 3.78 8.18L1.81 9.65C2.77 11.54 4.73 12.83 7 12.83Z" fill="#4CAF50"/><path d="M12.72 5.86H12.25V5.83H7V8.17H10.23C10 8.81 9.57 9.38 9.01 9.79L10.91 11.32C10.78 11.43 12.83 9.92 12.83 7C12.83 6.61 12.79 6.23 12.72 5.86Z" fill="#1976D2"/></svg>
                      Google
                    </span>
                  )}
                  {isPasswordUser && <span className="profile-provider-badge email">Email &amp; Password</span>}
                </span>
              </div>
              <div className="profile-detail-row">
                <span className="profile-detail-label">Account created</span>
                <span className="profile-detail-value">{user.metadata?.creationTime ? new Date(user.metadata.creationTime).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : 'N/A'}</span>
              </div>
            </div>
          </div>

          <div className="profile-section">
            <h2 className="profile-section-title">Quick Links</h2>
            <div className="profile-links">
              <Link to="/orders" className="profile-link-card">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="3" y="3" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M6 7.5H14M6 10.5H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                <span>My Orders</span>
              </Link>
              <Link to="/products" className="profile-link-card">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.5"/><circle cx="10" cy="10" r="3" stroke="currentColor" strokeWidth="1.5"/></svg>
                <span>Browse Products</span>
              </Link>
            </div>
          </div>

          <div className="profile-actions">
            <button className="btn btn-outline btn-full" onClick={handleLogout}>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M6.75 2.25H4.5C3.25736 2.25 2.25 3.25736 2.25 4.5V13.5C2.25 14.7426 3.25736 15.75 4.5 15.75H6.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M11.8125 12.375L15.75 9L11.8125 5.625" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M15.75 9H6.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
              Log Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
