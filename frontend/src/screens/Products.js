// src/components/Products.js
import React from "react";
import "../styles/Products.css";
import { useTranslation } from "react-i18next";  // Import useTranslation hook
import farmFresh from "../images/farm-fresh.jpg";
import premiumQuality from "../images/premium-quality.jpg";
import ecoFriendly from "../images/eco-friendly.jpg";
import cinnomonSticks from "../images/cinnomon-sticks.jpg";
import groundCinnomon from "../images/ground-cinnomon.jpg";
import cinnomonChips from "../images/cinnomon-chips.jpg";
import blackPepper from "../images/black-pepper.jpg";
import whitePepper from "../images/white-pepper.jpg";

const Products = () => {
  const { t } = useTranslation(); // Initialize t function

  return (
    <div className="products-container">
      {/* Cinnamon Section */}
      <section className="product-section">
        <h2 className="product-category text-center">{t("Cinnamon")}</h2>
        <div className="row justify-content-center">
          <div className="col-md-3">
            <div className="card product-card">
              <img
                src={cinnomonSticks}
                alt={t("Cinnamon_Sticks")}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">{t("Cinnamon_Sticks")}</h5>
                <p className="card-text">{t("Quills")}</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card product-card">
              <img
                src={groundCinnomon}
                alt={t('Ground_Cinnamon')}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">{t('Ground_Cinnamon')}</h5>
                <p className="card-text">{t('Powdered_Cinnamon')}</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card product-card">
              <img
                src={cinnomonChips}
                alt={t('Cinnamon_Chips')}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">{t('Cinnamon_Chips')}</h5>
                <p className="card-text">{t('Bark_Pieces')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pepper Section */}
      <section className="product-section">
        <h2 className="product-category text-center">{t('Pepper')}</h2>
        <div className="row justify-content-center">
          <div className="col-md-3">
            <div className="card product-card">
              <img
                src={blackPepper}
                alt={t('Black_Pepper')}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">{t('Black_Pepper')}</h5>
                <p className="card-text">{t('Rich_and_flavorful')}</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card product-card">
              <img
                src={whitePepper}
                alt={t('White_Pepper')}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">{t('White_Pepper')}</h5>
                <p className="card-text">{t('Subtle_and_refined_flavor')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      {/* Additional Information Section */}
      <section className="additional-info">
        <h3 className="additional-title text-center">{t('Product_Features')}</h3>
        <div className="row justify-content-center static-sections">
          <div className="col-md-5 feature-item">
            <h4>{t('Organic_and_Natural')}</h4>
            <p>
              {t(
                'Our_products'
              )}
            </p>
          </div>
          <div className="col-md-5 feature-item">
            <h4>{t('Handpicked_for_Quality')}</h4>
            <p>
              {t(
                'We_select'
              )}
            </p>
          </div>
          <div className="col-md-5 feature-item">
            <h4>{t('Ethically')}</h4>
            <p>
              {t(
                'Our_sourcing'
              )}
            </p>
          </div>
          <div className="col-md-5 feature-item">
            <h4>{t('Available_in_Various_Forms')}</h4>
            <p>
              {t(
                'We_offer'
              )}
            </p>
          </div>
          <div className="col-md-5 feature-item">
            <h4>{t('Ideal_for_Cooking')}</h4>
            <p>
              {t(
                'Perfect_for'
              )}
            </p>
          </div>
        </div>

        <h3 className="additional-title text-center">{t('How_to_Use_Our_Products')}</h3>
        <div className="row justify-content-center static-sections">
          <div className="col-md-5 use-item">
            <h4>{t('Cinnamon_Rolls')}</h4>
            <p>{t('Soft_and_flavorful')}</p>
          </div>
          <div className="col-md-5 use-item">
            <h4>{t('Spicy_Pepper_Soup')}</h4>
            <p>{t('A_hearty_soup')}</p>
          </div>
          <div className="col-md-5 use-item">
            <h4>{t('Cinnamon_Tea')}</h4>
            <p>{t('Warm_soothing')}</p>
          </div>
          <div className="col-md-5 use-item">
            <h4>{t('Seasoned_Roasted_Vegetables')}</h4>
            <p>{t('Perfectly_seasoned_veggies')}</p>
          </div>
        </div>
      </section>

 {/* Call to Action Section */}
<section className="call-to-action">
  <div className="text-center">
    <h3>{t('Ready_to_Experience_Our_Products')}</h3>
    <a href="/orderform" className="btn btn-primary my-3">{t('Shop_Now')}</a>
  </div>
</section>

{/* Information Cards Section */}
<section className="info-cards mt-5">
  <h3 className="text-center">{t('Why_Choose_Us')}</h3>
  <div className="row justify-content-center">
    <div className="col-md-4">
      <div className="info-card">
        <img
          src={farmFresh} // Replace with your image path
          alt={t('Farm_Fresh')}
          className="info-img"
        />
        <h5 className="info-title">{t('Farm_Fresh')}</h5>
        <p className="info-text">
          {t('Farm_Freshp')}
        </p>
      </div>
    </div>
          <div className="col-md-4">
            <div className="info-card">
              <img
                src={premiumQuality} // Replace with your image path
                alt={t('Premium_Quality')}
                className="info-img"
              />
              <h5 className="info-title">{t('Premium_Quality')}</h5>
              <p className="info-text">
                {t('Premium_Qualityp')}
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="info-card">
              <img
                src={ecoFriendly} // Replace with your image path
                alt={t('Eco_Friendly')}
                className="info-img"
              />
              <h5 className="info-title">{t('Eco_Friendly')}</h5>
              <p className="info-text">
                {t('Eco_Friendlyp')}
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Products;
