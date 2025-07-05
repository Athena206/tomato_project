const mongoose = require('mongoose');
const FoodItem = require('./models/FoodItem');

mongoose.connect('mongodb://localhost:27017/tomato', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const items = [
    { name: 'Butter Naan', price: 49, image: '' },
    { name: 'Butter Chicken', price: 199, image: '' },
    { name: 'Fried Rice', price: 149, image: '' },
    { name: 'Chilli Chicken', price: 129, image: '' },
    { name: 'Pasta Alfredo', price: 249, image: '' },
    { name: 'Chole Bhature', price: 119, image: '' },
    { name: 'Garlic Bread', price: 99, image: '' },
    { name: 'Gulab Jamun', price: 79, image: '' },
    { name: 'Rasgulla', price: 79, image: '' },
    { name: 'Chicken Biriyani', price: 299, image: '' },
    { name: 'Mutton Biriyani', price: 399, image: '' },
    { name: 'Chicken Chowmin', price: 109, image: '' },
    { name: 'Chicken Roll', price: 89, image: '' },
    { name: 'Egg Roll', price: 79, image: '' },
    { name: 'Pan Fried momo', price: 199, image: '' }
];

FoodItem.insertMany(items)
    .then(() => {
        console.log('Sample food items inserted');
        mongoose.connection.close();
    })
    .catch(err => {
        console.error(err);
        mongoose.connection.close();
    });
