const express = require('express');
const router = express.Router();
const Order = require('../models/order');

// Create a new order
router.post('/', async (req, res) => {
  try {
    const { name, email, product, quantity, phone, address, description } = req.body;

    if (!name || !email || !product || !quantity || !phone || !address) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    const newOrder = new Order({ name, email, product, quantity, phone, address, description });
    await newOrder.save();

    res.status(201).json({ message: 'Order created successfully!', order: newOrder });
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});
router.delete('/:id', async (req, res) => {  // Remove the '/orders' from the delete path
  try {
    const { id } = req.params;
    const order = await Order.findByIdAndDelete(id);

    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    return res.status(200).json({ message: 'Order deleted successfully' });
  } catch (error) {
    console.error('Error deleting order:', error);
    return res.status(500).json({ message: 'Error deleting order' });
  }
});



// Get all orders
router.get('/', async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
