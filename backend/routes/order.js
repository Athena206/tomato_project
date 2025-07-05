const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

router.get('/', async (req, res) => {
    const orders = await Order.find();
    res.json(orders);
});

router.post('/', async (req, res) => {
    const newOrder = new Order({ items: req.body.items });
    await newOrder.save();
    res.sendStatus(201);
});

module.exports = router;
