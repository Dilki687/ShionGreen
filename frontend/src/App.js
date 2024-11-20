import React from 'react';
import './App.css';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <main className="container mt-4">
        <h1>Welcome to Shion Green!</h1>
        <p>Explore our products and services.</p>
      </main>
    </div>
  );
}

export default App;
