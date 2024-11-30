import React from "react";
import "../styles/Products.css"; // Ensure this path matches your folder structure
import farmFresh from "../images/farm-fresh.jpg";
import premiumQuality from "../images/premium-quality.jpg";
import ecoFriendly from "../images/eco-friendly.jpg";
import cinnomonSticks from "../images/cinnomon-sticks.jpg";
import groundCinnomon from "../images/ground-cinnomon.jpg";
import cinnomonChips from "../images/cinnomon-chips.jpg";
import blackPepper from "../images/black-pepper.jpg";
import whitePepper from "../images/white-pepper.jpg";

const Products = () => {
  return (
    <div className="products-container">
      {/* Cinnamon Section */}
      <section className="product-section">
        <h2 className="product-category text-center">Cinnamon</h2>
        <div className="row justify-content-center">
          <div className="col-md-3">
            <div className="card product-card">
              <img
                src={cinnomonSticks} // Replace with your image path
                alt="Cinnamon Sticks"
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">Cinnamon Sticks</h5>
                <p className="card-text">Quills (short and long sticks).</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card product-card">
              <img
                src={groundCinnomon} // Replace with your image path
                alt="Ground Cinnamon"
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">Ground Cinnamon</h5>
                <p className="card-text">Powdered Cinnamon.</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card product-card">
              <img
                src={cinnomonChips} // Replace with your image path
                alt="Cinnamon Chips"
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">Cinnamon Chips</h5>
                <p className="card-text">Bark Pieces.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pepper Section */}
      <section className="product-section">
        <h2 className="product-category text-center">Pepper</h2>
        <div className="row justify-content-center">
          <div className="col-md-3">
            <div className="card product-card">
              <img
                src={blackPepper} // Replace with your image path
                alt="Black Pepper"
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">Black Pepper</h5>
                <p className="card-text">Rich and flavorful spice.</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card product-card">
              <img
                src={whitePepper} // Replace with your image path
                alt="White Pepper"
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">White Pepper</h5>
                <p className="card-text">Subtle and refined flavor.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information Section */}
      <section className="additional-info">
        <h3 className="additional-title text-center">Product Features</h3>
        <div className="row justify-content-center static-sections">
          <div className="col-md-5 feature-item">
            <h4>100% Organic and Natural</h4>
            <p>
              Our products are carefully grown and processed without the use of
              harmful chemicals, ensuring you get the purest ingredients.
            </p>
          </div>
          <div className="col-md-5 feature-item">
            <h4>Handpicked for Quality</h4>
            <p>
              We select only the best items, ensuring consistency in flavor and
              quality with every product.
            </p>
          </div>
          <div className="col-md-5 feature-item">
            <h4>Ethically Sourced from Sustainable Farms</h4>
            <p>
              Our sourcing practices support sustainable and ethical farming to
              protect the planet for future generations.
            </p>
          </div>
          <div className="col-md-5 feature-item">
            <h4>Available in Various Forms</h4>
            <p>
              We offer our products in multiple forms—whole, ground, and
              powdered—to suit all your culinary needs.
            </p>
          </div>
          <div className="col-md-5 feature-item">
            <h4>Ideal for Cooking, Baking, and Beverages</h4>
            <p>
              Perfect for adding flavor to dishes, beverages, or baked goods,
              our products are versatile and enhance any recipe.
            </p>
          </div>
        </div>

        <h3 className="additional-title text-center">
          How to Use Our Products
        </h3>
        <div className="row justify-content-center static-sections">
          <div className="col-md-5 use-item">
            <h4>Cinnamon Rolls</h4>
            <p>Soft and flavorful, perfect for breakfast or dessert.</p>
          </div>
          <div className="col-md-5 use-item">
            <h4>Spicy Pepper Soup</h4>
            <p>A rich, flavorful soup perfect for a warm, cozy meal.</p>
          </div>
          <div className="col-md-5 use-item">
            <h4>Cinnamon Tea</h4>
            <p>A comforting drink for any time of the day.</p>
          </div>
          <div className="col-md-5 use-item">
            <h4>Seasoned Roasted Vegetables</h4>
            <p>Add a sprinkle of pepper for a bold flavor.</p>
          </div>
        </div>

        <h3 className="additional-title text-center">
          Ready to Experience Our Products?
        </h3>
        <div className="text-center">
          <a href="/orderform" className="btn btn-primary">
            Shop Now
          </a>
        </div>
      </section>

      {/* Information Cards */}
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="info-card">
            <img
              src={farmFresh} // Replace with your image path
              alt="Farm Fresh"
              className="info-img"
            />
            <h5 className="info-title">Farm Fresh</h5>
            <p className="info-text">
              Sourced directly from sustainable farms, preserving the natural
              essence.
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="info-card">
            <img
              src={premiumQuality} // Replace with your image path
              alt="Premium Quality"
              className="info-img"
            />
            <h5 className="info-title">Premium Quality</h5>
            <p className="info-text">
              Handpicked and processed with care for the highest quality.
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="info-card">
            <img
              src={ecoFriendly} // Replace with your image path
              alt="Eco-Friendly"
              className="info-img"
            />
            <h5 className="info-title">Eco-Friendly</h5>
            <p className="info-text">
              Our practices ensure environmental sustainability for a greener
              planet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
