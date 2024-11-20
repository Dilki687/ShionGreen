import React, { useState } from "react";
import '../styles/OrderForm.css'; 

const OrderForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    product: "",
    quantity: "",
    phone: "",
    postalCode: "",
    description: "",
    file: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add backend submission logic here
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
                <label htmlFor="product" className="form-label order-form-label">
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
                  <option value="" disabled>Select a product</option>
                  <option value="Product 1">Product 1</option>
                  <option value="Product 2">Product 2</option>
                  <option value="Product 3">Product 3</option>
                </select>
              </div>
              <div className="col-md-6">
                <label htmlFor="quantity" className="form-label order-form-label">
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
                <label htmlFor="postalCode" className="form-label order-form-label">
                  Postal Code
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="postalCode"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleInputChange}
                  placeholder="Enter postal code"
                  required
                />
              </div>
            </div>

            {/* Description */}
            <div className="mb-3">
              <label htmlFor="description" className="form-label order-form-label">
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

            {/* File Upload */}
            <div className="mb-3">
              <label htmlFor="file" className="form-label order-form-label">
                Upload File
              </label>
              <div className="input-group">
                <input
                  type="file"
                  className="form-control"
                  id="file"
                  name="file"
                  onChange={handleFileChange}
                />
                <label className="input-group-text" htmlFor="file">Browse</label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button type="submit" className="btn btn-success btn-lg px-4 order-form-submit">
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
