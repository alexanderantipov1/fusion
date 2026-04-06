import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ReferralAIApp from './ReferralAI.jsx'

function Root() {
  const [view, setView] = useState(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash;
      if (hash === '#referral-portal') return 'portal';
    }
    return 'website';
  });

  return (
    <>
      {/* Floating Portal Toggle Button */}
      <button
        onClick={() => {
          const next = view === 'website' ? 'portal' : 'website';
          setView(next);
          window.location.hash = next === 'portal' ? 'referral-portal' : '';
          window.scrollTo(0, 0);
        }}
        style={{
          position: 'fixed',
          top: view === 'portal' ? 12 : 'auto',
          bottom: view === 'website' ? 24 : 'auto',
          left: view === 'portal' ? 'auto' : 24,
          right: view === 'portal' ? 24 : 'auto',
          zIndex: 9999,
          background: view === 'website' ? 'linear-gradient(135deg, #0B1D3A, #1a3a6b)' : '#C9A96E',
          color: view === 'website' ? '#C9A96E' : '#0B1D3A',
          border: view === 'website' ? '2px solid rgba(201,169,110,0.4)' : '2px solid rgba(11,29,58,0.3)',
          padding: view === 'website' ? '14px 24px' : '10px 20px',
          borderRadius: view === 'website' ? '12px' : '8px',
          fontWeight: 700,
          fontSize: view === 'website' ? '.88rem' : '.82rem',
          cursor: 'pointer',
          boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
          fontFamily: "'Inter', system-ui, sans-serif",
          letterSpacing: '0.5px',
          transition: 'all 0.3s',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        {view === 'website' ? (
          <><span style={{ fontSize: '1.1rem' }}>&#9733;</span> AI Referral Portal</>
        ) : (
          <><span style={{ fontSize: '1rem' }}>&#8592;</span> Back to Website</>
        )}
      </button>

      {view === 'website' ? <App /> : <ReferralAIApp />}
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
)
