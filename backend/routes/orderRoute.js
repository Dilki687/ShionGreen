const express = require('express');
const {
  createOrder,
  deleteOrder,
  getAllOrders,
} = require('../controllers/orderController'); // Import controller functions

const router = express.Router();

// Routes
router.post('/', createOrder); // Create a new order
router.delete('/:id', deleteOrder); // Delete an order by ID
router.get('/', getAllOrders); // Get all orders

module.exports = router;
