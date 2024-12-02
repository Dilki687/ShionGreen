import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../images/logo.jpg";
import { useTranslation } from "react-i18next";

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Hook to get the current path
  const { t, i18n } = useTranslation();

  // Function to change language
  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
    localStorage.setItem("language", selectedLanguage);
  };

  // Function to handle scrolling and navigation
  const handleScrollToSection = (e, sectionId, route) => {
    e.preventDefault();
    if (location.pathname !== route) {
      navigate(route);
      return;
    }
    const section = document.getElementById(sectionId);
    if (section) {
      const navbarHeight = document.querySelector(".navbar").offsetHeight;
      const topOffset = section.offsetTop - navbarHeight;
      window.scrollTo({
        top: topOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <header>
      <style>
        {`
          .nav-link.active {
            font-weight: bold;
            color: #FFFFFF !important; /* Highlight color */
          }
        `}
      </style>
      <nav
        className="navbar navbar-expand-lg navbar-dark sticky-navbar"
        style={{
          backgroundColor: "#113805",
          height: "70px",
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 1000,
        }}
      >
        <div className="container-fluid">
          <a className="navbar-brand d-flex align-items-center" href="/">
            <img
              src={logo}
              alt="Shion Green Logo"
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                marginRight: "10px",
              }}
            />
            <span
              className="fw-bold text-white"
              style={{
                fontFamily: "'Raleway', sans-serif",
                fontSize: "1rem",
              }}
            >
              {t("brandName")}
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

          <div
            className="collapse navbar-collapse"
            id="navbarNav"
            style={{ backgroundColor: "#113805" }}
          >
            <ul className="navbar-nav ms-auto text-center">
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                  href="/"
                >
                  {t("home")}
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    location.hash === "#aboutSection" ? "active" : ""
                  }`}
                  href="#"
                  onClick={(e) => handleScrollToSection(e, "aboutSection", "/")}
                >
                  {t("aboutUs")}
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    location.pathname === "/contactus" ? "active" : ""
                  }`}
                  href="/contactus"
                >
                  {t("contactUs")}
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    location.pathname === "/products" ? "active" : ""
                  }`}
                  href="/products"
                >
                  {t("productsnav")}
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    location.pathname === "/orderform" ? "active" : ""
                  }`}
                  href="/orderform"
                >
                  {t("placeOrder")}
                </a>
              </li>
            </ul>
            <div
              className="d-flex justify-content-center align-items-center mt-3 mt-lg-0"
              style={{
                marginBottom: "10px",
              }}
            >
              <select
                className="form-select form-select-sm bg-light border-0 w-auto"
                value={i18n.language}
                onChange={handleLanguageChange}
              >
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
