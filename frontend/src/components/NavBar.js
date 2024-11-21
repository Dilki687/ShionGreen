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
        const navbarHeight = 70; // Adjust for your navbar height
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
    e.preventDefault(); // Prevent default link behavior
    navigate("/"); // Navigate to home page

    // Scroll to the Products section after the page has loaded
    setTimeout(() => {
      const productsSection = document.getElementById(
        "cinnamonCarouselSection"
      );
      if (productsSection) {
        const navbarHeight = 70; // Adjust for your navbar height
        const topOffset = productsSection.offsetTop - navbarHeight; // Offset by navbar height
        window.scrollTo({
          top: topOffset,
          behavior: "smooth", // Smooth scroll effect
        });
      }
    }, 0); // Timeout to ensure the page has time to load
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
              src={logo} // Use the imported image here
              alt="Shion Green Logo"
              style={{
                width: "40px", // Size of the logo
                height: "40px", // Make the logo circular
                borderRadius: "50%", // Circular logo
                marginRight: "10px", // Space between logo and brand name
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
                  <a className="nav-link active" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#"
                    onClick={handleScrollToAbout} // Handle scroll to About Us section
                  >
                    About Us
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="/contactus">
                    Contact Us
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#"
                    onClick={handleScrollToProducts} // Handle scroll to Products section
                  >
                    Products
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/orderform">
                    Place Order
                  </a>
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
