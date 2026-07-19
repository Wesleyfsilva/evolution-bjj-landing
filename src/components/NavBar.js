import React from 'react';

const Navbar = () => {
  const navStyle = {
    padding: '20px',
    backgroundColor: '#000',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'sticky',
    top: 0,
    zIndex: 1000
  };

  const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    marginLeft: '20px',
    fontSize: '0.9rem'
  };

  return (
    <nav style={navStyle}>
      <div style={{ color: '#c7a143', fontWeight: 'bold' }}>EVOLUTION BJJ</div>
      <div>
        <a href="#instrutor" style={linkStyle}>Instrutor</a>
        <a href="#horarios" style={linkStyle}>Horários</a>
        <a href="#contato" style={linkStyle}>Agendar</a>
      </div>
    </nav>
  );
};

export default Navbar;