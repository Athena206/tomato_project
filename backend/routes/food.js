const express = require('express');
const router = express.Router();
const FoodItem = require('../models/FoodItem');

router.get('/', async (req, res) => {
    const items = await FoodItem.find();
    res.json(items);
});

router.post('/', async (req, res) => {
    const newItem = new FoodItem(req.body);
    await newItem.save();
    res.sendStatus(201);
});

module.exports = router;
