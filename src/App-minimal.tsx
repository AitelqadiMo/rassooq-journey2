import React from 'react';

const App = () => {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      fontFamily: 'Arial, sans-serif',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{
        background: 'rgba(255,255,255,0.1)',
        padding: '40px',
        borderRadius: '20px',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255,255,255,0.2)',
        textAlign: 'center',
        maxWidth: '600px',
        width: '100%'
      }}>
        <h1 style={{ 
          color: '#FFD700', 
          fontSize: '3em', 
          marginBottom: '20px',
          textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
        }}>
          🏪 Rassooq
        </h1>
        <p style={{ 
          fontSize: '1.5em', 
          marginBottom: '10px',
          fontWeight: 'bold'
        }}>
          راس السوق
        </p>
        <p style={{ 
          fontSize: '1.2em', 
          marginBottom: '30px',
          opacity: 0.9
        }}>
          Your Trusted Marketplace
        </p>
        
        <div style={{
          background: 'rgba(40, 167, 69, 0.8)',
          padding: '15px',
          borderRadius: '10px',
          marginBottom: '20px',
          fontWeight: 'bold'
        }}>
          ✅ React App: Successfully Loaded!
        </div>
        
        <div style={{
          background: 'rgba(40, 167, 69, 0.8)',
          padding: '15px',
          borderRadius: '10px',
          marginBottom: '20px',
          fontWeight: 'bold'
        }}>
          ✅ JavaScript: Working Properly!
        </div>
        
        <div style={{
          background: 'rgba(23, 162, 184, 0.8)',
          padding: '15px',
          borderRadius: '10px',
          marginBottom: '30px',
          fontWeight: 'bold'
        }}>
          🚀 Deployment: {new Date().toISOString()}
        </div>
        
        <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <a 
            href="/test-simple.html"
            style={{
              background: '#FFD700',
              color: '#333',
              padding: '12px 24px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 'bold',
              display: 'inline-block'
            }}
          >
            Static Test Page
          </a>
          <a 
            href="/debug.html"
            style={{
              background: '#17a2b8',
              color: 'white',
              padding: '12px 24px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 'bold',
              display: 'inline-block'
            }}
          >
            Debug Page
          </a>
        </div>
        
        <div style={{ marginTop: '30px', fontSize: '14px', opacity: 0.8 }}>
          <p>If you see this page, React is working correctly!</p>
          <p>Timestamp: {new Date().toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default App;


