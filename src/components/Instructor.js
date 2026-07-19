import React from 'react';
import { instructorData } from '../data/instructorData';

const Instructor = () => {
  return (
    <section style={{ padding: '60px 20px', backgroundColor: '#111', color: '#fff', textAlign: 'center' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#c7a143' }}>O Instrutor</h2>
        <div style={{ textAlign: 'left', marginTop: '30px' }}>
          <h3>{instructorData.name}</h3>
          <h4 style={{ color: '#888' }}>{instructorData.role}</h4>
          <p style={{ marginTop: '15px' }}>{instructorData.description}</p>
          <ul style={{ marginTop: '15px', listStyle: 'none' }}>
            {instructorData.highlights.map((item, index) => (
              <li key={index} style={{ marginBottom: '5px' }}>✓ {item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Instructor;