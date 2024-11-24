const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  product: { type: String, required: true },
  quantity: { type: Number, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  description: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);
