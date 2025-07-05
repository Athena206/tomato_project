const mongoose = require('mongoose');

const FoodItemSchema = new mongoose.Schema({
    name: String,
    price: Number,
    image: String
});

module.exports = mongoose.model('FoodItem', FoodItemSchema);
