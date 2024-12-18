const Order = require('../models/order');

// Create a new order
exports.createOrder = async (req, res) => {
  try {
    const { name, email, product, quantity, phone, address, description, customerType, productOptions } = req.body;

    if (!name || !email || !product || !quantity || !phone || !address || !customerType) {
      return res.status(400).json({ message: "All fields are required." });
    }

    if (["Cinnamon", "Pepper"].includes(product) && (!productOptions || productOptions.length === 0)) {
      return res.status(400).json({ message: "At least one option must be selected for the chosen product." });
    }

    const newOrder = new Order({ name, email, product, quantity, phone, address, description, customerType, productOptions });
    await newOrder.save();

    res.status(201).json({ message: "Order created successfully!", order: newOrder });
  } catch (error) {
    console.error("Error creating order:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Delete an order
exports.deleteOrder = async (req, res) => {
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
};

// Get all orders
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
