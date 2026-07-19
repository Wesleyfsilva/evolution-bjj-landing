import React from 'react';

const Schedule = () => {
  return (
    <section style={{ padding: '60px 20px', backgroundColor: '#f4f4f4', textAlign: 'center' }}>
      <h2 style={{ color: '#000', marginBottom: '30px' }}>Horários de Treino</h2>
      <div style={{ maxWidth: '600px', margin: '0 auto', background: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #c7a143' }}>
              <th style={{ padding: '10px' }}>Dia</th>
              <th style={{ padding: '10px' }}>Horário</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '10px' }}>Terças e Quintas</td>
              <td style={{ padding: '10px' }}>09:00 e 18:00</td>
            </tr>
          </tbody>
        </table>
        <p style={{ marginTop: '20px', fontSize: '0.9rem', color: '#666' }}>Público: Infantil e Adulto</p>
      </div>
    </section>
  );
};

export default Schedule;