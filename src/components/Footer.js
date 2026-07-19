import React from 'react';

const Footer = () => {
  return (
    <footer style={{ padding: '40px 20px', backgroundColor: '#000', color: '#888', textAlign: 'center' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <h3 style={{ color: '#fff', marginBottom: '15px' }}>Studio Evolution BJJ</h3>
        <p style={{ marginBottom: '10px' }}>Av. Getúlio Vargas, 400 - Jd. São Paulo, Sorocaba - SP</p>
        <p style={{ marginBottom: '20px' }}>
          <a 
            href="https://maps.app.goo.gl/YourLinkHere" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ color: '#c7a143', textDecoration: 'none' }}
          >
            Ver no Google Maps
          </a>
        </p>
        <p style={{ fontSize: '0.8rem' }}>© 2026 Studio Evolution BJJ</p>
      </div>
    </footer>
  );
};

export default Footer;