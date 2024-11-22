import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap styles
import { useNavigate } from "react-router-dom";
import logo from "../images/logo.jpg"; // Corrected path to the logo

const NavBar = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Function to handle scroll to the About Us section
  const handleScrollToAbout = (e) => {
    e.preventDefault();
    navigate("/");

    setTimeout(() => {
      const aboutSection = document.getElementById("aboutSection");
      if (aboutSection) {
        const navbarHeight = document.querySelector(".navbar").offsetHeight; // Dynamically calculate navbar height
        const topOffset = aboutSection.offsetTop - navbarHeight; // Offset by navbar height
        window.scrollTo({
          top: topOffset,
          behavior: "smooth",
        });
      }
    }, 0);
  };

  // Function to handle scroll to the Products section
  const handleScrollToProducts = (e) => {
    e.preventDefault();
    navigate("/");

    setTimeout(() => {
      const productsSection = document.getElementById("cinnamonCarouselSection");
      if (productsSection) {
        const navbarHeight = document.querySelector(".navbar").offsetHeight;
        const topOffset = productsSection.offsetTop - navbarHeight;
        window.scrollTo({
          top: topOffset,
          behavior: "smooth",
        });
      }
    }, 0);
  };

  return (
    <header>
      <nav
          className="navbar navbar-expand-lg navbar-dark sticky-navbar"
          style={{
            backgroundColor: "#113805", // Custom color
            height: "70px", // Increased height of the navbar
            position: "fixed", // Make the navbar sticky
            top: 0, // Stick to the top of the viewport
            width: "100%", // Ensure it spans the full width
            zIndex: 1000, // Keep it above other content
          }}
      >
        <div className="container-fluid">
          {/* Logo and brand name */}
          <a className="navbar-brand d-flex align-items-center" href="/">
            <img
              src={logo}
              alt="Shion Green Logo"
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%", // Circular logo
                marginRight: "10px",
              }}
            />
            <span
              className="fw-bold text-white"
              style={{
                fontFamily: "Poppins, Lato",
                fontSize: "1.5rem",
              }}
            >
              Shion Green
            </span>
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
            <ul className="navbar-nav ms-auto text-center">
              <li className="nav-item">
                <a className="nav-link active" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={handleScrollToAbout}>
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contactus">
                  Contact Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={handleScrollToProducts}>
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/orderform">
                  Place Order
                </a>
              </li>
            </ul>
            <div className="d-flex justify-content-center align-items-center mt-3 mt-lg-0">
              <select className="form-select form-select-sm bg-light border-0 w-auto">
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
