import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'https://web.blackbirdtech.app';
const API_KEY = 'BlackBird@123*';

const AuthContext = createContext();

async function syncWithBackend(firebaseUser) {
  const idToken = await firebaseUser.getIdToken();
  const res = await fetch(`${BACKEND_URL}/api/auth/firebase`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'x-api-key': API_KEY,
    },
    body: JSON.stringify({ firebase_token: idToken }),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.message || 'Backend sync failed');
  }

  return res.json();
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [backendUser, setBackendUser] = useState(null);
  const [backendToken, setBackendToken] = useState(() => localStorage.getItem('bb_token'));
  const [backendLoading, setBackendLoading] = useState(false);
  const [backendError, setBackendError] = useState(null);

  const syncBackend = useCallback(async (firebaseUser) => {
    if (!firebaseUser) {
      setBackendUser(null);
      setBackendToken(null);
      localStorage.removeItem('bb_token');
      return;
    }

    setBackendLoading(true);
    setBackendError(null);
    try {
      const data = await syncWithBackend(firebaseUser);
      setBackendUser(data.data);
      setBackendToken(data.bearer_token);
      localStorage.setItem('bb_token', data.bearer_token);
    } catch (err) {
      console.error('Backend sync error:', err);
      setBackendError(err.message);
    } finally {
      setBackendLoading(false);
    }
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false);
      if (firebaseUser) {
        syncBackend(firebaseUser);
      } else {
        setBackendUser(null);
        setBackendToken(null);
        localStorage.removeItem('bb_token');
      }
    });
    return unsubscribe;
  }, [syncBackend]);

  const logout = async () => {
    await signOut(auth);
    setBackendUser(null);
    setBackendToken(null);
    localStorage.removeItem('bb_token');
  };

  return (
    <AuthContext.Provider value={{
      user,
      loading,
      backendUser,
      backendToken,
      backendLoading,
      backendError,
      syncBackend,
      logout,
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
