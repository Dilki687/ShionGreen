import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/footer'; // Import Footer component

function App() {
  return (
    <div className="App">
      <NavBar />
      <main className="container mt-4">
        <h1>Welcome to Shion Green!</h1>
        <p>Explore our products and services.</p>
      </main>
      <Footer /> {/* Add Footer component here */}
    </div>
  );
}

export default App;
