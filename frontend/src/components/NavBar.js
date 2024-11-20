import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap styles
import logo from '../images/logo.jpg'; // Corrected path to the logo

const NavBar = () => {
  return (
    <header>
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{
          backgroundColor: '#113805', // Custom color
          height: '70px', // Increased height of the navbar
        }}
      >
        <div className="container-fluid">
          {/* Logo and brand name */}
          <a className="navbar-brand d-flex align-items-center" href="/">
            <img
              src={logo} // Use the imported image here
              alt="Shion Green Logo"
              style={{
                width: '40px', // Size of the logo
                height: '40px', // Make the logo circular
                borderRadius: '50%', // Circular logo
                marginRight: '10px', // Space between logo and brand name
              }}
            />
            Shion Green
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="ms-auto d-flex align-items-center">
              <ul className="navbar-nav me-3 mb-2 mb-lg-0 text-nowrap">
                <li className="nav-item">
                  <a className="nav-link active" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about">About Us</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/contact">Contact Us</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/products">Products</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/place-order">Place Order</a>
                </li>
              </ul>
              <select className="form-select form-select-sm bg-light border-0">
                <option value="en">English</option>
                <option value="jp">Japanese</option>
              </select>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
