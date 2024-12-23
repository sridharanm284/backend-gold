const express = require('express');
const mongoose = require('mongoose');
const goldEntryRoutes = require('./routes/goldEntryRoutes');

const app = express();
app.use(express.json());

app.use(goldEntryRoutes);

mongoose.connect('mongodb://localhost:27017/goldshop', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB:', err));

app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
});
