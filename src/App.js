import React from 'react';
import Instructor from './components/Instructor';
import Schedule from './components/Schedule';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer'; // Importe o novo Footer
import './App.css';

function App() {
  return (
    <div className="App">
      <header style={{ padding: '20px', textAlign: 'center', background: '#000', color: '#fff' }}>
        <h1>Studio Evolution BJJ</h1>
      </header>
      
      <main>
        <Instructor />
        <Schedule />
        <ContactForm />
      </main>

      <Footer /> {/* Utilize o componente Footer */}
    </div>
  );
}

export default App;