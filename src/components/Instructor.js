import React from 'react';
import { instructorData } from '../data/instructorData';

import fotoBjj from '../assets/tiago-luta.png';
import fotoBombeiro from '../assets/bombeiro.jpeg';

const Instructor = () => {
  const sectionStyle = {
    padding: '80px 20px',
    backgroundColor: '#1a1a1a',
    color: '#ffffff',
    fontFamily: 'Arial, sans-serif'
  };

  const containerStyle = {
    maxWidth: '1100px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '40px'
  };

  const contentWrapperStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '40px',
    width: '100%'
  };

  const isDesktop = window.innerWidth > 768;
  
  const finalContentWrapperStyle = isDesktop 
    ? { ...contentWrapperStyle, flexDirection: 'row', alignItems: 'center' }
    : contentWrapperStyle;

  const textSideStyle = {
    flex: 1,
    textAlign: isDesktop ? 'left' : 'center'
  };

  const imageSideStyle = {
    flex: 1,
    display: 'flex',
    gap: '15px',
    justifyContent: 'center'
  };

  const imageStyle = {
    width: 'calc(50% - 7.5px)',
    borderRadius: '10px',
    objectFit: 'cover',
    height: '400px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)'
  };

  const titleStyle = {
    fontSize: '2.5rem',
    marginBottom: '30px',
    color: '#c7a143',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    textAlign: 'center'
  };

  const nameStyle = {
    fontSize: '2rem',
    color: '#c7a143',
    marginBottom: '10px'
  };

  const roleStyle = {
    fontSize: '1.2rem',
    color: '#aaaaaa',
    marginBottom: '20px',
    fontWeight: 'normal'
  };

  const listStyle = {
    listStyle: 'none',
    padding: '0',
    marginTop: '20px',
    display: 'inline-block',
    textAlign: 'left'
  };

  const listItemStyle = {
    marginBottom: '10px',
    fontSize: '1.1rem',
    display: 'flex',
    alignItems: 'center'
  };

  const checkIconStyle = {
    color: '#c7a143',
    marginRight: '10px',
    fontWeight: 'bold'
  };

  return (
    <section style={sectionStyle} id="instrutor">
      <div style={containerStyle}>
        <h2 style={titleStyle}>Conheça seu Instrutor</h2>
        
        <div style={finalContentWrapperStyle}>
          <div style={textSideStyle}>
            <h3 style={nameStyle}>{instructorData.name}</h3>
            <h4 style={roleStyle}>{instructorData.role}</h4>
            <p style={{ lineHeight: '1.6', marginBottom: '15px' }}>
              {instructorData.description}
            </p>
            <ul style={listStyle}>
              {instructorData.highlights.map((item, index) => (
                <li key={index} style={listItemStyle}>
                  <span style={checkIconStyle}>✓</span> {item}
                </li>
              ))}
            </ul>
          </div>

          <div style={imageSideStyle}>
            <img 
              src={fotoBjj} 
              alt={`Professor ${instructorData.name} praticando Jiu-Jitsu`} 
              style={imageStyle} 
            />
            <img 
              src={fotoBombeiro} 
              alt={`Professor ${instructorData.name} como Bombeiro Civil`} 
              style={imageStyle} 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instructor;