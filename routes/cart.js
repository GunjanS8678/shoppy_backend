const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Cart = require('../models/Cart');
const Product = require('../models/Product');

// Add to cart
router.post('/', auth, async (req, res) => {
    try {
        const { productId, quantity } = req.body;
        
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }

        let cart = await Cart.findOne({ userId: req.user.userId });
        if (!cart) {
            cart = new Cart({ userId: req.user.userId, items: [] });
        }

        const cartItem = cart.items.find(item => item.productId.toString() === productId);
        if (cartItem) {
            cartItem.quantity += quantity;
        } else {
            cart.items.push({ productId, quantity });
        }

        await cart.save();
        res.json(cart);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Update cart item
router.put('/:productId', auth, async (req, res) => {
    try {
        const { quantity } = req.body;
        const cart = await Cart.findOne({ userId: req.user.userId });
        
        const cartItem = cart.items.find(item => 
            item.productId.toString() === req.params.productId
        );

        if (!cartItem) {
            return res.status(404).json({ error: 'Item not found in cart' });
        }

        cartItem.quantity = quantity;
        await cart.save();
        res.json(cart);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Remove from cart
router.delete('/:productId', auth, async (req, res) => {
    try {
        const cart = await Cart.findOne({ userId: req.user.userId });
        cart.items = cart.items.filter(item => 
            item.productId.toString() !== req.params.productId
        );
        await cart.save();
        res.json(cart);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;