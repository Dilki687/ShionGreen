import React, { useState } from "react";
import "../styles/OrderForm.css";
import swal from "sweetalert";
import { useTranslation } from "react-i18next";
import { parsePhoneNumberFromString } from "libphonenumber-js";

const OrderForm = () => {
  const { t } = useTranslation(); // Use the translation hook
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    product: "",
    quantity: "",
    phone: "",
    address: "",
    description: "",
    customerType: "",
    productOptions: [],
  });

  const [validationErrors, setValidationErrors] = useState({});
  const productOptionsMap = {
    Cinnamon: [t("Cinnamon_Sticks"), t("Ground_Cinnamon"), t("Cinnamon_Chips")],
    Pepper: [t("White_Pepper"), t("Black_Pepper")],
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setValidationErrors({ ...validationErrors, [name]: "" }); // Clear error on input change
  };

  // const handleOptionChange = (option) => {
  //   const currentOptions = [...formData.productOptions];
  //   if (currentOptions.includes(option)) {
  //     setFormData({
  //       ...formData,
  //       productOptions: currentOptions.filter((opt) => opt !== option),
  //     });
  //   } else {
  //     setFormData({
  //       ...formData,
  //       productOptions: [...currentOptions, option],
  //     });
  //   }
  // };

  const handleProductChange = (e) => {
    const selectedProduct = e.target.value;
    setFormData({
      ...formData,
      product: selectedProduct,
      productOptions: [],
    });
  };

  const validateForm = () => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) {
      errors.name = t("NameRequired");
    } else if (!/^[\p{L}\p{Script=Han}\p{Script=Katakana}\p{Script=Hiragana}\s]+$/u.test(formData.name)) {
      errors.name = t("NameCanOnlyContainLettersSpacesAndJapaneseCharacters");
    }
    
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      errors.email = t("ValidEmailRequired");
    }
    if (!formData.product) {
      errors.product = t("ProductRequired");
    }
    if (
      !formData.quantity ||
      isNaN(formData.quantity) ||
      formData.quantity <= 0
    ) {
      errors.quantity = t("ValidQuantityRequired");
    }
    // Validate phone number for global formats
    if (!formData.phone) {
      errors.phone = t("PhoneNumberRequired");
    } else {
      const phoneNumber = parsePhoneNumberFromString(formData.phone, "INTL"); // INTL for international
      if (!phoneNumber || !phoneNumber.isValid()) {
        errors.phone = t("ValidPhoneRequired");
      }
    }
    if (!formData.address.trim()) {
      errors.address = t("AddressRequired");
    }
    if (!formData.customerType) {
      errors.customerType = t("CustomerTypeRequired");
    }
    if (
      formData.product &&
      (!formData.productOptions || formData.productOptions.length === 0)
    ) {
      errors.productOptions = t("Pleaseselectatleastoneoption");
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        swal({
          title: t("success"),
          text: `${t(
            "orderSuccess"
          )}\n\nWe will reply within 2-3 days via the provided email.`,
          icon: "success",
          button: t("okButton"),
        });
        setFormData({
          name: "",
          email: "",
          product: "",
          quantity: "",
          phone: "",
          address: "",
          description: "",
          customerType: "",
          productOptions: [],
        });
      } else {
        swal({
          title: t("error"),
          text: result.message,
          icon: "error",
          button: t("tryAgain"),
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      swal({
        title: t("error"),
        text: t("formError"),
        icon: "error",
        button: t("okButton"),
      });
    }
  };

  return (
    <div className="container my-5 order-form-container">
      <div className="card shadow order-form-card">
        <div className="card-body">
          <h2 className="text-center text-light mb-4">{t("placeOrder")}</h2>
          <form onSubmit={handleSubmit}>
            {/* Name */}
            <div className="mb-3">
              <label htmlFor="name" className="form-label order-form-label">
                {t("name")}
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder={t("enterName")}
              />
              {validationErrors.name && (
                <p style={{ color: "red" }}>{validationErrors.name}</p>
              )}
            </div>

            {/* Email */}
            <div className="mb-3">
              <label htmlFor="email" className="form-label order-form-label">
                {t("email")}
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder={t("enterEmail")}
              />
              {validationErrors.email && (
                <p style={{ color: "red" }}>{validationErrors.email}</p>
              )}
            </div>

            {/* Product & Quantity */}
            <div className="row g-3 mb-3">
              <div className="col-md-6">
                <label
                  htmlFor="product"
                  className="form-label order-form-label"
                >
                  {t("product")}
                </label>
                <select
                  className="form-select"
                  id="product"
                  name="product"
                  value={formData.product}
                  onChange={handleProductChange}
                >
                  <option value="" disabled>
                    {t("selectProduct")}
                  </option>
                  <option value="Cinnamon">{t("Cinnamon")}</option>
                  <option value="Pepper">{t("Pepper")}</option>
                </select>
                {validationErrors.product && (
                  <p style={{ color: "red" }}>{validationErrors.product}</p>
                )}

                {/* Sub-options based on product */}
                {formData.product && (
                  <div style={{ marginTop: "20px" }}>
                    <label>{t("SelectOptions")}</label>
                    {productOptionsMap[formData.product].map((option) => (
                      <div key={option} style={{ marginTop: "2px" }}>
                        <input
                          type="radio"
                          name="productOption"
                          value={option}
                          checked={formData.productOptions.includes(option)}
                          onChange={() =>
                            setFormData({
                              ...formData,
                              productOptions: [option],
                            })
                          }
                        />
                        {option}
                      </div>
                    ))}
                    {validationErrors.productOptions && (
                      <p style={{ color: "red" }}>
                        {validationErrors.productOptions}
                      </p>
                    )}
                  </div>
                )}
              </div>
              <div className="col-md-6">
                <label
                  htmlFor="quantity"
                  className="form-label order-form-label"
                >
                  {t("quantity")} (Kg)
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="quantity"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleInputChange}
                  placeholder={t("enterQuantity")}
                />
                {validationErrors.quantity && (
                  <p style={{ color: "red" }}>{validationErrors.quantity}</p>
                )}
              </div>
            </div>

            {/* Phone & Address */}
            <div className="row g-3 mb-3">
              <div className="col-md-6">
                <label htmlFor="phone" className="form-label order-form-label">
                  {t("phone")}
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder={t("enterPhone") + " (e.g., +11234567890)"}
                />

                {validationErrors.phone && (
                  <p style={{ color: "red" }}>{validationErrors.phone}</p>
                )}
              </div>
              <div className="col-md-6">
                <label
                  htmlFor="address"
                  className="form-label order-form-label"
                >
                  {t("address")}
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder={t("enterAddress")}
                />
                {validationErrors.address && (
                  <p style={{ color: "red" }}>{validationErrors.address}</p>
                )}
              </div>
            </div>

            {/* Customer Type */}
            <div className="mb-3">
              <label
                htmlFor="customerType"
                className="form-label order-form-label"
              >
                {t("customerType")}
              </label>
              <select
                className="form-select"
                id="customerType"
                name="customerType"
                value={formData.customerType}
                onChange={handleInputChange}
              >
                <option value="" disabled>
                  {t("selectCustomerType")}
                </option>
                <option value="Individual">{t("individual")}</option>
                <option value="Company">{t("company")}</option>
              </select>
              {validationErrors.customerType && (
                <p style={{ color: "red" }}>{validationErrors.customerType}</p>
              )}
            </div>

            {/* Description */}
            <div className="mb-3">
              <label
                htmlFor="description"
                className="form-label order-form-label"
              >
                {t("description")}
              </label>
              <textarea
                className="form-control"
                id="description"
                name="description"
                rows="3"
                value={formData.description}
                onChange={handleInputChange}
                placeholder={t("enterDescription")}
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="btn btn-success btn-lg px-4 order-form-submit"
              >
                {t("submit")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OrderForm;
