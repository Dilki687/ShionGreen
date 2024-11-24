import React, { useState } from "react";
import "../styles/OrderForm.css";
import swal from "sweetalert";

const OrderForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    product: "",
    quantity: "",
    phone: "",
    address: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

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
        // SweetAlert for success
        swal({
          title: "Success!",
          text: "Order submitted successfully!",
          icon: "success",
          button: "OK",
        });
        setFormData({
          name: "",
          email: "",
          product: "",
          quantity: "",
          phone: "",
          address: "",
          description: "",
        });
      } else {
        // SweetAlert for error
        swal({
          title: "Error",
          text: result.message,
          icon: "error",
          button: "Try Again",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      // SweetAlert for error
      swal({
        title: "Error",
        text: "An error occurred while submitting the form.",
        icon: "error",
        button: "OK",
      });
    }
  };

  return (
    <div className="container my-5 order-form-container">
      <div className="card shadow order-form-card">
        <div className="card-body">
          <h2 className="text-center text-light mb-4">Add Order</h2>
          <form onSubmit={handleSubmit}>
            {/* Name */}
            <div className="mb-3">
              <label htmlFor="name" className="form-label order-form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your name"
                required
              />
            </div>

            {/* Email */}
            <div className="mb-3">
              <label htmlFor="email" className="form-label order-form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Product & Quantity */}
            <div className="row g-3 mb-3">
              <div className="col-md-6">
                <label
                  htmlFor="product"
                  className="form-label order-form-label"
                >
                  Product
                </label>
                <select
                  className="form-select"
                  id="product"
                  name="product"
                  value={formData.product}
                  onChange={handleInputChange}
                  required
                >
                  <option value="" disabled>
                    Select a product
                  </option>
                  <option value="cinnamon">Cinnamon</option>
                  <option value="pepper">Pepper</option>
                </select>
              </div>
              <div className="col-md-6">
                <label
                  htmlFor="quantity"
                  className="form-label order-form-label"
                >
                  Quantity (Kg)
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="quantity"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleInputChange}
                  placeholder="Enter quantity"
                  required
                />
              </div>
            </div>

            {/* Phone & Postal Code */}
            <div className="row g-3 mb-3">
              <div className="col-md-6">
                <label htmlFor="phone" className="form-label order-form-label">
                  Phone
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter phone number"
                  required
                />
              </div>
              <div className="col-md-6">
                <label
                  htmlFor="address"
                  className="form-label order-form-label"
                >
                  Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="Enter address"
                  required
                />
              </div>
            </div>

            {/* Description */}
            <div className="mb-3">
              <label
                htmlFor="description"
                className="form-label order-form-label"
              >
                Description
              </label>
              <textarea
                className="form-control"
                id="description"
                name="description"
                rows="3"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Enter description"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="btn btn-success btn-lg px-4 order-form-submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OrderForm;
