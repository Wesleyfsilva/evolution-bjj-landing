import React from 'react';
import Instructor from './components/Instructor';
import './App.css';

function App() {
  return (
    <div className="App">
      <header style={{ padding: '20px', textAlign: 'center', background: '#000', color: '#fff' }}>
        <h1>Studio Evolution BJJ</h1>
      </header>
      
      <main>
        <Instructor />
      </main>

      <footer style={{ padding: '20px', textAlign: 'center', background: '#000', color: '#888' }}>
        <p>© 2026 Studio Evolution BJJ</p>
      </footer>
    </div>
  );
}

export default App;