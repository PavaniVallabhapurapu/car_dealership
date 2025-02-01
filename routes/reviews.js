const express = require('express');
const mongoose = require('mongoose');
const Review = require('../models/Review');
const router = express.Router();

// Submit a review
router.post('/', async (req, res) => {
  console.log('Received review payload:', req.body);
  const newReview = new Review(req.body);
  try {
    await newReview.save();
    res.status(201).send('Review submitted successfully');
  } catch (error) {
    console.error('Error saving review:', error);
    res.status(400).send(error.message);
  }
});

// Get reviews by dealership ID
router.get('/:dealerId', async (req, res) => {
  const { dealerId } = req.params;
  try {
    const reviews = await Review.find({ dealerId });
    res.status(200).json(reviews);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
