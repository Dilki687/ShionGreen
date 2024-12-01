import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/HomePage.css";
import cinnamonbanner from "../videos/cinnomanbanner.mp4";
import pepperbanner from "../videos/pepperbanner.mp4";
import bannervideo from "../videos/bannervideo.mp4";
import logo2 from "../images/logo2.jpeg";
import { useTranslation } from "react-i18next"; // Import useTranslation hook

const HomePage = () => {
  const { t } = useTranslation(); // Initialize translation function
  const navigate = useNavigate();

  const handleAddOrderClick = () => {
    navigate("/orderform");
  };

  return (
    <div>
      {/* Video Banner */}
      <div className="position-relative banner">
        <video
          className="w-100 h-100 position-absolute"
          autoPlay
          loop
          muted
          playsInline
          style={{ objectFit: "cover" }}
        >
          <source src={bannervideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="position-absolute top-0 start-0 w-100 h-100 banner-overlay"></div>

        {/* Content */}
        <div className="position-absolute banner-content text-center text-white p-3">
          <motion.h1
            className="fw-bold display-4"
            style={{
              fontFamily: "'Raleway', sans-serif",  // Using Raleway font
              fontWeight: "60",                    // Adjusted to a valid font weight (e.g., 300 for light)
              fontSize: "4rem",
              lineHeight: "1.2",
              letterSpacing: "0.1em",              // Adds space between letters
            }}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
          >
            {t("brandName")} {/* Use translation */}
          </motion.h1>
          <motion.p
            className="lead"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
          >
            {t("welcomeM")} {/* Use translation */}
          </motion.p>
          <button
            className="btn btn-primary btn-lg"
            onClick={handleAddOrderClick}
            style={{
              padding: "10px 20px",
              fontSize: "1rem",
              backgroundColor: "#113805",
              border: "none",
              outline: "none",
            }}
          >
            {t("placeOrder")} {/* Use translation */}
          </button>
        </div>
      </div>

   {/* Cinnamon and Pepper Boxes */}
<div className="container mt-5">
  <div className="row">
    {/* Cinnamon Box */}
    <motion.div
      className="col-md-6 custom-box"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      style={{
        backgroundColor: "#f8f9fa", // Light background color
        border: "1px solid #ddd",    // Border
        borderRadius: "10px",        // Rounded corners
        padding: "10px",             // Decreased inner padding
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Subtle shadow
        textAlign: "center",         // Center content
        cursor: "pointer",           // Pointer cursor
        width: "45%",                // Decreased width
        
      }}
    >
      <div className="p-3 bg-light text-dark rounded">
        <h3 style={{ fontFamily: "'Raleway', sans-serif", fontWeight: "700", letterSpacing: "0.1em" }}>
          {t("cinnamon1")} {/* Use translation */}
        </h3>

        <p>{t("cinnamonDescription")}</p> {/* Add new translation key */}
        
        <a
          href="#"
          className="text-primary"
          onClick={(e) => {
            e.preventDefault(); // Prevent default link behavior
            navigate("/"); // Navigate to the home page

            // Scroll to the section after navigating
            setTimeout(() => {
              const cinnamonSection = document.getElementById("cinnamonCarouselSection");
              if (cinnamonSection) {
                const navbarHeight = 70; // Adjust for your navbar height
                const topOffset = cinnamonSection.offsetTop - navbarHeight; // Offset by navbar height
                window.scrollTo({
                  top: topOffset,
                  behavior: "smooth", // Smooth scroll effect
                });
              }
            }, 0); // Timeout to ensure the page has time to load
          }}
        >
          {t("readMore")} {/* Use translation */}
        </a>
      </div>
    </motion.div>

    {/* Pepper Box */}
    <motion.div
      className="col-md-6 custom-box"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      style={{
        backgroundColor: "#f8f9fa", // Light background color
        border: "1px solid #ddd",    // Border
        borderRadius: "10px",        // Rounded corners
        padding: "10px",             // Decreased inner padding
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Subtle shadow
        textAlign: "center",         // Center content
        cursor: "pointer",           // Pointer cursor
        width: "45%",                // Decreased width
        marginLeft: "7%", 
        
                
      }}
    >
      <div className="p-3 bg-light text-dark rounded">
        <h3 style={{ fontFamily: "'Raleway', sans-serif", fontWeight: "700", letterSpacing: "0.1em" }}>
          {t("pepper1")} {/* Use translation */}
        </h3>

        <p>{t("pepperDescription")}</p> {/* Add new translation key */}
        
        <a
          href="#"
          className="text-primary"
          onClick={(e) => {
            e.preventDefault(); // Prevent default link behavior
            navigate("/"); // Navigate to the home page

            // Scroll to the section after navigating
            setTimeout(() => {
              const pepperSection = document.getElementById("pepperCarouselSection");
              if (pepperSection) {
                const navbarHeight = 70; // Adjust for your navbar height
                const topOffset = pepperSection.offsetTop - navbarHeight; // Offset by navbar height
                window.scrollTo({
                  top: topOffset,
                  behavior: "smooth", // Smooth scroll effect
                });
              }
            }, 0); // Timeout to ensure the page has time to load
          }}
        >
          {t("readMore")} {/* Use translation */}
        </a>
      </div>
    </motion.div>
  </div>
</div>


      {/* About Us Section */}
      <div id="aboutSection" className="container mt-5">
        <div className="p-4 bg-light text-dark border rounded">
          <h2 className="text-center mb-3" style={{ fontFamily: "'Raleway', sans-serif",fontWeight: "800",letterSpacing: "0.1em", }}>{t("aboutUs")}</h2> {/* Use translation */}
          <p>
            {t("aboutUsDescription")} {/* Add new translation key */}
          </p>
        </div>
      </div>
     {/* Video Section for Cinnamon */}
<div id="cinnamonCarouselSection" className="container mt-5">
  
        <h2 className="text-center mb-4" style={{ fontFamily: "'Raleway', sans-serif",fontWeight: "700",letterSpacing: "0.1em", }}>{t('cinnamon')}</h2>
        <div
  id="cinnamonVideoBanner"
  style={{
    position: "relative",
    width: "100%",
    height: "100%",
    overflow: "hidden",
  }}
>
  <video
    className="d-block w-100"
    style={{ objectFit: "cover" }}
    autoPlay
    loop
    muted
    playsInline
  >
    <source src={cinnamonbanner} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  </div>
        <p className="slider-paragraph">
          {t('cinnamonParagraph')}
        </p>
      </div>

    {/* Sliding Images Section for Pepper */}
<div id="pepperCarouselSection" className="container mt-5">
  <h2
    className="text-center mb-4"
    style={{
      fontFamily: "'Raleway', sans-serif",
      fontWeight: "700",
      letterSpacing: "0.1em",
    }}
  >
    {t('pepper')}
  </h2>
  {/* Pepper Video Banner */}
  <div
    id="pepperVideoBanner"
    style={{
      position: "relative",
      width: "100%",
      height: "100%",
      overflow: "hidden",
    }}
  >
    <video
      className="d-block w-100"
      style={{ objectFit: "cover" }}
      autoPlay
      loop
      muted
      playsInline
    >
      <source src={pepperbanner} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
  {/* Pepper Paragraph */}
  <p className="slider-paragraph">{t('pepperParagraph')}</p>
</div>


      {/* Our Brands Section */}
      <div className="container mt-5 text-center">
        <h2 style={{ fontFamily: "'Raleway', sans-serif",fontWeight: "700",letterSpacing: "0.1em", }}>{t('ourBrands')}</h2>
        <div
          className="brand-logo-container mt-4"
          style={{ marginBottom: "60px" }}
        >
          <img
            src={logo2} // Replace with your logo image path
            alt="Brand Logo"
            className="rounded-circle"
            style={{
              width: "150px", // You can adjust the size as needed
              height: "150px",
              objectFit: "cover", // Ensures the image fits well inside the circle
            }}
          />
        </div>
      </div>
    </div>
    
  );
};

export default HomePage;