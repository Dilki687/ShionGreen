import React from "react";
import { useNavigate } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import logo from "../images/logo.jpg"; // Ensure the path is correct based on your folder structure

const Footer = () => {
  const navigate = useNavigate();

  const handleScrollToProducts = (e) => {
    e.preventDefault(); // Prevent default link behavior
    navigate("/"); // Navigate to the home page

    // Scroll to the cinnamon section after navigating to the homepage
    setTimeout(() => {
      const cinnamonSection = document.getElementById(
        "cinnamonCarouselSection"
      );
      if (cinnamonSection) {
        const navbarHeight = 70; // Adjust for your navbar height
        const topOffset = cinnamonSection.offsetTop - navbarHeight; // Offset by navbar height
        window.scrollTo({
          top: topOffset,
          behavior: "smooth", // Smooth scroll effect
        });
      }
    }, 0); // Timeout to ensure the page has time to load
  };

  return (
    <footer
      style={{ backgroundColor: "#113805", color: "white", padding: "20px 0" }}
    >
      <div className="container text-center">
        {/* Logo */}
        <div style={{ marginBottom: "15px" }}>
          <img
            src={logo}
            alt="Logo"
            style={{
              width: "60px", // Adjust the size as needed
              height: "60px",
              borderRadius: "50%", // Circular shape
              objectFit: "cover", // Ensures the image fits nicely
            }}
          />
        </div>
        {/* Text */}
        <p className="mb-2">
          © PlayCine Media Direct, LLC. All rights reserved
        </p>
        {/* Links */}
        <div className="d-flex justify-content-center mb-3">
          <a href="#privacy" className="text-white mx-3 text-decoration-none">
            Privacy
          </a>
          <a href="#terms" className="text-white mx-3 text-decoration-none">
            Terms
          </a>
          <a href="/contactus" className="text-white mx-3 text-decoration-none">
            Help
          </a>
          <a
            href="#"
            className="text-white mx-3 text-decoration-none"
            onClick={handleScrollToProducts} // Use the handleScrollToProducts function
          >
            Products
          </a>
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
