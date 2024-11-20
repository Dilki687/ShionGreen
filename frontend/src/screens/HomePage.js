import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/HomePage.css";
import cinnamonImage1 from "../images/cinnamon1.jpeg";
import cinnamonImage2 from "../images/cinnamon2.jpeg";
import cinnamonImage3 from "../images/cinnamon3.jpeg";
import cinnamonImage4 from "../images/cinnamon4.jpeg";
import pepperImage1 from "../images/pepper1.jpeg";
import pepperImage2 from "../images/pepper2.jpeg";
import pepperImage3 from "../images/pepper3.jpeg";
import pepperImage4 from "../images/pepper4.jpeg";
import pepperImage5 from "../images/pepper5.jpeg";
import logo2 from "../images/logo2.jpeg";

const HomePage = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Function to handle button click
  const handleAddOrderClick = () => {
    navigate("/orderform"); // Redirect to the OrderForm route
  };

  return (
    <div>
      {/* Banner Image */}
      <div className="position-relative banner">
        {/* Overlay for darkening the background */}
        <div className="position-absolute top-0 start-0 w-100 h-100 banner-overlay"></div>

        {/* Content container */}
        <motion.div
          className="position-absolute banner-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1
            className="fw-bold"
            style={{
              fontFamily: "Poppins, Lato",
              fontSize: "4rem",
              lineHeight: "1.2",
            }}
          >
            Shion Green
          </h1>
          <p
            className="mt-3"
            style={{
              fontFamily: "Roboto, sans-serif",
              fontWeight: "normal",
              fontSize: "1.2rem",
              textAlign: "left",
              lineHeight: "1.6",
            }}
          >
            Savor the unique blend of rich Ceylon cinnamon and aromatic spices,
            sourced directly from Sri Lanka, combined with premium ingredients
            for an unforgettable experience.
          </p>
          <button
            className="btn fw-bold mt-4 custom-btn"
            onClick={handleAddOrderClick}
          >
            Add Order
          </button>
        </motion.div>
      </div>

      {/* Cinnamon and Pepper Boxes */}
      <div className="container mt-5">
        <div className="row">
          <motion.div
            className="col-md-6"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-3 bg-light text-dark rounded">
              <h3>Cinnamon</h3>
              <p>
                Experience the essence of Ceylon cinnamon, also known as "true
                cinnamon," sourced directly from Sri Lanka. Renowned for its
                delicate, sweet flavor and aromatic fragrance, Ceylon cinnamon
                stands out for its lower coumarin content and smooth, soft
                texture.
              </p>
              <a
                href="#"
                className="text-primary"
                onClick={(e) => {
                  e.preventDefault(); // Prevent default link behavior
                  document
                    .getElementById("cinnamonCarouselSection")
                    .scrollIntoView({
                      behavior: "smooth", // Smooth scroll effect
                      block: "start", // Scroll to the top of the section
                    });
                }}
              >
                Read More..
              </a>
            </div>
          </motion.div>
          <motion.div
            className="col-md-6"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-3 bg-light text-dark rounded">
              <h3>Pepper</h3>
              <p>
                Experience the essence of Ceylon pepper, sourced directly from
                Sri Lanka. Renowned for its bold, aromatic flavor and rich heat,
                Ceylon pepper stands out for its unique taste profile and high
                quality.
              </p>
              <a
                href="#"
                className="text-primary"
                onClick={(e) => {
                  e.preventDefault(); // Prevent default link behavior
                  document
                    .getElementById("pepperCarouselSection")
                    .scrollIntoView({
                      behavior: "smooth", // Smooth scroll effect
                      block: "start", // Scroll to the top of the section
                    });
                }}
              >
                Read More..
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* About Us Section */}
      <div id="aboutSection" className="container mt-5">
        <div className="p-4 bg-light text-dark border rounded">
          <h2 className="text-center mb-3">About Us</h2>
          <p>
            We are more than just an online spice store – we are a bridge to the
            rich, cultural heritage of Sri Lanka. Our mission is to bring the
            authentic flavors of Ceylon cinnamon and Ceylon pepper to kitchens
            around the world, connecting customers with nature's finest spices.
            Sourced from the lush, fertile lands of Sri Lanka, each batch is
            carefully cultivated, harvested, and processed using traditional
            methods to ensure the highest quality.
          </p>
          <p>
            We take pride in our dedication to sustainability and ethical
            sourcing, working closely with local farmers to promote fair trade
            practices and preserve the environment. Whether you are a
            professional chef or a home cook, our premium spices are designed to
            elevate your dishes with their unmatched freshness, aroma, and
            taste.
          </p>
          <p>
            We believe in the power of these exceptional spices to transform
            meals and improve well-being. With their proven health benefits,
            including antioxidant properties and digestive support, our Ceylon
            cinnamon and pepper are perfect additions to any pantry. Let us
            bring the warmth, depth, and richness of Sri Lanka's finest spices
            into your home - one spice at a time.
          </p>
        </div>
      </div>

      {/* Sliding Images Section for Cinnamon */}
      <div id="cinnamonCarouselSection" className="container mt-5">
        <h2 className="text-center mb-4"> Ceylon Cinnamon </h2>
        <div
          id="cinnamonCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="2000"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={cinnamonImage1}
                className="d-block w-100"
                alt="Cinnamon 1"
                style={{ height: "400px", objectFit: "cover" }}
              />
            </div>
            <div className="carousel-item">
              <img
                src={cinnamonImage2}
                className="d-block w-100"
                alt="Cinnamon 2"
                style={{ height: "400px", objectFit: "cover" }}
              />
            </div>
            <div className="carousel-item">
              <img
                src={cinnamonImage3}
                className="d-block w-100"
                alt="Cinnamon 3"
                style={{ height: "400px", objectFit: "cover" }}
              />
            </div>
            <div className="carousel-item">
              <img
                src={cinnamonImage4}
                className="d-block w-100"
                alt="Cinnamon 4"
                style={{ height: "400px", objectFit: "cover" }}
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#cinnamonCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#cinnamonCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <p className="slider-paragraph">
          At Shion Green, we are proud to bring you the finest, most authentic
          Ceylon cinnamon and Ceylon pepper directly from the heart of Sri
          Lanka. Our company was founded with a simple yet powerful mission: to
          provide premium, high-quality spices that enhance your culinary
          creations. At Cinnamon and Pepper Imports, we specialize in bringing
          the finest Ceylon cinnamon and Ceylon pepper directly from Sri Lanka
          to spice up your culinary creations. Ceylon cinnamon, often regarded
          as the “true cinnamon,” is renowned for its unique, sweet, and
          delicate flavor, paired with an aromatic fragrance that is
          incomparable to other varieties. Sourced from the lush, tropical
          forests of Sri Lanka, it is carefully harvested and processed using
          traditional methods to preserve its natural qualities. Known for its
          soft texture and lower coumarin content, Ceylon cinnamon offers a
          healthier alternative to the more common cassia cinnamon, making it
          ideal for everyday cooking, baking, and even health-related uses.
          Ceylon pepper, grown in the spice-rich soil of Sri Lanka, is a key
          ingredient in kitchens worldwide. Its bold, robust heat and complex
          flavor profile make it a perfect addition to any dish, from savory
          meals to delicate desserts. We hand-select our pepper to ensure that
          it maintains its intense aromatic heat, fresh flavor, and vibrant
          color, delivering an unforgettable taste experience. At Cinnamon and
          Pepper Imports, we take pride in ethically sourcing our products,
          ensuring sustainable farming practices that support Sri Lanka's local
          farming communities. By choosing our premium products, you are not
          only enhancing your dishes but also supporting fair trade,
          contributing to a more sustainable and equitable global spice
          industry. Our goal is to deliver the purest, highest quality cinnamon
          and pepper, bringing a true taste of Sri Lanka to your home with every
          purchase.
        </p>
      </div>

      {/* Sliding Images Section for Pepper */}
      <div id="pepperCarouselSection" className="container mt-5">
        <h2 className="text-center mb-4">Ceylon Pepper</h2>
        <div
          id="pepperCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="2000"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={pepperImage1}
                className="d-block w-100"
                alt="Pepper 1"
                style={{ height: "400px", objectFit: "cover" }}
              />
            </div>
            <div className="carousel-item">
              <img
                src={pepperImage2}
                className="d-block w-100"
                alt="Pepper 2"
                style={{ height: "400px", objectFit: "cover" }}
              />
            </div>
            <div className="carousel-item">
              <img
                src={pepperImage3}
                className="d-block w-100"
                alt="Pepper 3"
                style={{ height: "400px", objectFit: "cover" }}
              />
            </div>
            <div className="carousel-item">
              <img
                src={pepperImage4}
                className="d-block w-100"
                alt="Pepper 4"
                style={{ height: "400px", objectFit: "cover" }}
              />
            </div>
            <div className="carousel-item">
              <img
                src={pepperImage5}
                className="d-block w-100"
                alt="Pepper 5"
                style={{ height: "400px", objectFit: "cover" }}
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#pepperCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#pepperCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <p className="slider-paragraph">
          At Shion Green, we are proud to offer the finest Ceylon pepper,
          sourced directly from the fertile and spice-rich lands of Sri Lanka.
          Renowned for its bold, intense heat and complex flavor profile, Ceylon
          pepper is a favorite among chefs and home cooks alike for its ability
          to elevate a wide range of dishes. From savory stews and curries to
          delicate desserts and fresh salads, Ceylon pepper adds a depth of
          flavor that is unmatched by other varieties. Its unique combination of
          heat, richness, and aromatic fragrance enhances the taste of your food
          while providing a satisfying kick that lingers on the palate. Our
          Ceylon pepper is carefully hand-selected and processed using
          traditional, sustainable methods to preserve its natural qualities.
          Grown in the lush, tropical climate of Sri Lanka, the pepper is
          harvested at peak ripeness, ensuring that each peppercorn retains its
          full flavor and vibrant color. The result is a premium product that
          delivers an authentic, fresh taste every time you use it. At Cinnamon
          and Pepper Imports, we are committed to ethically sourcing our
          products, supporting fair trade, and working directly with Sri Lankan
          farmers who practice environmentally conscious and sustainable farming
          techniques. By choosing our Ceylon pepper, you are not only enhancing
          your culinary creations but also contributing to a more sustainable
          and equitable global spice industry. We take pride in offering the
          purest, highest quality Ceylon pepper, bringing the true taste of Sri
          Lanka to your kitchen with every order.
        </p>
      </div>

      {/* Our Brands Section */}
      <div className="container mt-5 text-center">
        <h2>Our Brands</h2>
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
