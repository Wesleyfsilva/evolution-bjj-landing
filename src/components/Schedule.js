import React from 'react';

const Schedule = () => {
  const scheduleData = [
    { day: 'Segunda', adult: '08:00, 11:00, 19:00', kids: '-' },
    { day: 'Terça', adult: '08:00, 11:00, 19:00', kids: '09:00, 18:00' },
    { day: 'Quarta', adult: '08:00, 11:00, 19:00', kids: '-' },
    { day: 'Quinta', adult: '08:00, 11:00, 19:00', kids: '09:00, 18:00' },
    { day: 'Sexta', adult: '08:00, 11:00, 19:00', kids: '-' },
  ];

  return (
    <section style={{ padding: '60px 20px', backgroundColor: '#fff', textAlign: 'center' }}>
      <h2 style={{ color: '#c7a143', marginBottom: '30px' }}>Horários de Treino</h2>
      <div style={{ maxWidth: '800px', margin: '0 auto', overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', color: '#000' }}>
          <thead>
            <tr style={{ backgroundColor: '#1a1a1a', color: '#fff' }}>
              <th style={{ padding: '15px' }}>Dia</th>
              <th style={{ padding: '15px' }}>Adulto</th>
              <th style={{ padding: '15px' }}>Kids</th>
            </tr>
          </thead>
          <tbody>
            {scheduleData.map((row, index) => (
              <tr key={index} style={{ borderBottom: '1px solid #ddd' }}>
                <td style={{ padding: '15px', fontWeight: 'bold' }}>{row.day}</td>
                <td style={{ padding: '15px' }}>{row.adult}</td>
                <td style={{ padding: '15px' }}>{row.kids}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Schedule;