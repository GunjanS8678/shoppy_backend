const express = require('express');
const connectDB = require('./config/db');

const app = express();


connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/auth', require('./routes/auth'));
app.use('/products', require('./routes/product'));
app.use('/cart', require('./routes/cart'));

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));