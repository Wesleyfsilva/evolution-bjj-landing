import React from 'react';
import Navbar from './components/NavBar';
import Instructor from './components/Instructor';
import Schedule from './components/Schedule';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <section id="instrutor"><Instructor /></section>
        <section id="horarios"><Schedule /></section>
        <section id="contato"><ContactForm /></section>
      </main>
      <Footer />
    </div>
  );
}

export default App;