import React, { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const phone = '5515996741812';
    const message = `Olá, meu nome é ${name} e gostaria de agendar uma aula experimental no Studio Evolution.`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section style={{ padding: '60px 20px', backgroundColor: '#fff', textAlign: 'center' }}>
      <h2 style={{ color: '#000', marginBottom: '20px' }}>Agende sua aula experimental</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <input 
          type="text" 
          placeholder="Seu nome" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required
          style={{ padding: '15px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
        <button type="submit" style={{ padding: '15px', backgroundColor: '#c7a143', border: 'none', borderRadius: '5px', color: '#fff', fontWeight: 'bold', cursor: 'pointer' }}>
          Enviar para o WhatsApp
        </button>
      </form>
    </section>
  );
};

export default ContactForm;