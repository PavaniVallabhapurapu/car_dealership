// Example backend server using Express and Mongoose
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;


app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/car_dealership', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
console.log('JWT_SECRET:', process.env.JWT_SECRET);
console.log('MONGO_URI:', process.env.MONGO_URI);

const userRoutes = require('./routes/auth');
const reviewRoutes = require('./routes/reviews');
app.use('/api/auth', userRoutes);
app.use('/api/reviews', reviewRoutes);
// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
