const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const dbConfig = require('./db')
const orderRoutes = require('./routes/orderRoute');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/orders', orderRoutes);


const port = process.env.PORT || 5000;

app.listen(port, () => console.log('Node server started'));