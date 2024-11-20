import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/footer'; // Import Footer component
import ContactUs from './screens/ContactUs'; // Import ContactUs page
import OrderForm from './screens/OrderForm';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar /> {/* Header component */}
        <main className="container mt-4">
          <Routes>
            {/* Define routes for different pages */}
            <Route
              path="/"
              element={
                <div>
                  <h1>Welcome to Shion Green!</h1>
                  <p>Explore our products and services.</p>
                </div>
              }
            />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/orderform" element={<OrderForm />} />
          </Routes>
        </main>
        <Footer /> {/* Footer component */}
      </div>
    </Router>
  );
}

export default App;
