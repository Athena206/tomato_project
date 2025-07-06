const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const foodRoutes = require('./routes/food');
const orderRoutes = require('./routes/order');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/tomato';

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use('/api/food', foodRoutes);
app.use('/api/order', orderRoutes);

// Serve static files from React build
app.use(express.static(path.join(__dirname, '../frontend/build')));

// For any other route, serve index.html from React build
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
