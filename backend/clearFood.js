const mongoose = require('mongoose');
const FoodItem = require('./models/FoodItem');

mongoose.connect('mongodb://localhost:27017/tomato', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

FoodItem.deleteMany({})
    .then(() => {
        console.log('All food items removed');
        mongoose.connection.close();
    })
    .catch(err => {
        console.error(err);
        mongoose.connection.close();
    });
