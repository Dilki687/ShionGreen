import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import logo from '../images/logo.jpg'; // Ensure the path is correct based on your folder structure

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#113805', color: 'white', padding: '20px 0' }}>
      <div className="container text-center">
        {/* Logo */}
        <div style={{ marginBottom: '15px' }}>
          <img
            src={logo}
            alt="Logo"
            style={{
              width: '60px', // Adjust the size as needed
              height: '60px',
              borderRadius: '50%', // Circular shape
              objectFit: 'cover', // Ensures the image fits nicely
            }}
          />
        </div>
        {/* Text */}
        <p className="mb-2">© PlayCine Media Direct, LLC. All rights reserved</p>
        {/* Links */}
        <div className="d-flex justify-content-center mb-3">
          <a href="#privacy" className="text-white mx-3 text-decoration-none">Privacy</a>
          <a href="#terms" className="text-white mx-3 text-decoration-none">Terms</a>
          <a href="#help" className="text-white mx-3 text-decoration-none">Help</a>
          <a href="#products" className="text-white mx-3 text-decoration-none">Products</a>
        </div>
        {/* Social Media Icons */}
        <div className="d-flex justify-content-center">
          <a href="#youtube" className="text-white mx-2">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="#twitter" className="text-white mx-2">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#facebook" className="text-white mx-2">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#instagram" className="text-white mx-2">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
