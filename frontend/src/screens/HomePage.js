import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import bannerImage from '../images/banner.jpeg';
import cinnamonImage1 from '../images/cinnamon1.jpeg';
import cinnamonImage2 from '../images/cinnamon2.jpeg';
import cinnamonImage3 from '../images/cinnamon3.jpeg';
import cinnamonImage4 from '../images/cinnamon4.jpeg';
import pepperImage1 from '../images/pepper1.jpeg';
import pepperImage2 from '../images/pepper2.jpeg';
import pepperImage3 from '../images/pepper3.jpeg';
import pepperImage4 from '../images/pepper4.jpeg';
import pepperImage5 from '../images/pepper5.jpeg';

const HomePage = () => {
  return (
    <div>
      {/* Banner Image */}
      <div
        className="position-relative"
        style={{
          backgroundImage: `url(${bannerImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '450px',
        }}
      >
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.4)', // Black overlay with opacity
          }}
        ></div>
        <h1 className="position-absolute top-50 start-0 translate-middle-y text-white fw-bold ms-4">
          Shion Green
        </h1>
        <p
          className="position-absolute top-50 start-0 translate-middle-y text-white ms-4 mt-5"
          style={{
            fontWeight: 'normal', // Not bold
          }}
        >
          Savor the unique blend of rich Ceylon cinnamon and aromatic spices, sourced directly from Sri Lanka, combined 
          with premium ingredients for an unforgettable experience.
        </p>
        <button
          className="btn position-absolute start-0 ms-4 mt-5 text-white fw-bold"
          style={{
            backgroundColor: '#113805',
            border: 'none',
            marginTop: '8rem', // Adjusted to move below the paragraph
          }}
        >
          Add Order
        </button>
      </div>

      {/* Cinnamon and Pepper Boxes */}
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <div className="p-3 bg-light text-dark rounded">
              <h3>Cinnamon</h3>
              <p>
                Experience the essence of Ceylon cinnamon, also known as "true cinnamon," sourced directly from Sri Lanka.
                Renowned for its delicate, sweet flavor and aromatic fragrance, Ceylon cinnamon stands out for its lower coumarin
                content and smooth, soft texture.
              </p>
              <a href="#" className="text-primary">Read More..</a>
            </div>
          </div>
          <div className="col-md-6">
            <div className="p-3 bg-light text-dark rounded">
              <h3>Pepper</h3>
              <p>
                Experience the essence of Ceylon pepper, sourced directly from Sri Lanka. Renowned for its bold, aromatic flavor
                and rich heat, Ceylon pepper stands out for its unique taste profile and high quality.
              </p>
              <a href="#" className="text-primary">Read More..</a>
            </div>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div className="container mt-5">
        <div className="p-4 bg-light text-dark border rounded">
          <h2 className="text-center mb-3">About Us</h2>
          <p>
            We are more than just an online spice store – we are a bridge to the rich, cultural heritage of Sri Lanka.
            Our mission is to bring the authentic flavors of Ceylon cinnamon and Ceylon pepper to kitchens around the world,
            connecting customers with nature's finest spices. Sourced from the lush, fertile lands of Sri Lanka, each batch is
            carefully cultivated, harvested, and processed using traditional methods to ensure the highest quality.
          </p>
          <p>
            We take pride in our dedication to sustainability and ethical sourcing, working closely with local farmers to promote fair
            trade practices and preserve the environment. Whether you are a professional chef or a home cook, our premium spices are
            designed to elevate your dishes with their unmatched freshness, aroma, and taste.
          </p>
          <p>
            We believe in the power of these exceptional spices to transform meals and improve well-being. With their proven health
            benefits, including antioxidant properties and digestive support, our Ceylon cinnamon and pepper are perfect additions to
            any pantry. Let us bring the warmth, depth, and richness of Sri Lanka's finest spices into your home - one spice at a time.
          </p>
        </div>
      </div>

      {/* Sliding Images Section for Cinnamon */}
      <div className="container mt-5">
        <h2 className="text-center mb-4"> Ceylon Cinnamon </h2>
        <div id="cinnamonCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={cinnamonImage1} className="d-block w-100" alt="Cinnamon 1" style={{ height: '400px', objectFit: 'cover' }} />
            </div>
            <div className="carousel-item">
              <img src={cinnamonImage2} className="d-block w-100" alt="Cinnamon 2" style={{ height: '400px', objectFit: 'cover' }} />
            </div>
            <div className="carousel-item">
              <img src={cinnamonImage3} className="d-block w-100" alt="Cinnamon 3" style={{ height: '400px', objectFit: 'cover' }} />
            </div>
            <div className="carousel-item">
              <img src={cinnamonImage4} className="d-block w-100" alt="Cinnamon 4" style={{ height: '400px', objectFit: 'cover' }} />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#cinnamonCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#cinnamonCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        
        <p>
          Ceylon Cinnamon, known for its superior quality and health benefits, has a rich, sweet flavor and smooth texture that
          distinguishes it from other varieties.
        </p>
      </div>

      {/* Sliding Images Section for Pepper */}
      <div className="container mt-5">
        <h2 className="text-center mb-4">Ceyon Pepper</h2>
        <div id="pepperCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={pepperImage1} className="d-block w-100" alt="Pepper 1" style={{ height: '400px', objectFit: 'cover' }} />
            </div>
            <div className="carousel-item">
              <img src={pepperImage2} className="d-block w-100" alt="Pepper 2" style={{ height: '400px', objectFit: 'cover' }} />
            </div>
            <div className="carousel-item">
              <img src={pepperImage3} className="d-block w-100" alt="Pepper 3" style={{ height: '400px', objectFit: 'cover' }} />
            </div>
            <div className="carousel-item">
              <img src={pepperImage4} className="d-block w-100" alt="Pepper 4" style={{ height: '400px', objectFit: 'cover' }} />
            </div>
            <div className="carousel-item">
              <img src={pepperImage5} className="d-block w-100" alt="Pepper 5" style={{ height: '400px', objectFit: 'cover' }} />
            </div>
            
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#pepperCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#pepperCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        
        <p>
          Known for its superior aroma and vibrant flavor, Ceylon Pepper is an essential ingredient for culinary excellence.
        </p>
      </div>
      

      {/* Our Brands Section */}
      <div className="container mt-5 text-center">
        <h2>Our Brands</h2>
      </div>
    </div>
  );
};

export default HomePage;
