import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './ReviewForm.css';

const ReviewForm = ({ dealerId, onReviewSubmit }) => {
  const [review, setReview] = useState('');
  const [purchaseDate, setPurchaseDate] = useState('');
  const [carMake, setCarMake] = useState('');
  const [year, setYear] = useState('');
  const [sentiment, setSentiment] = useState('Positive');
  const {id} = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userEmail = localStorage.getItem('userEmail');
    const newReview = {
      review,
      purchaseDate,
      carMake,
      year: parseInt(year), 
      sentiment,
      user: userEmail,
      dealerId: id
    };

    console.log('Submitting review:', newReview);

    try {
      const response = await axios.post('http://localhost:3001/api/reviews', newReview);
      console.log('Review submitted:', response.data);
      alert('Review added successfully');
      onReviewSubmit(newReview);
    } catch (error) {
      console.error('Error posting review:', error);
      alert('Error posting review: ' + error.message);
    }
  };

  return (
    <form className="review-form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="review">Review:</label>
        <textarea id="review" value={review} onChange={(e) => setReview(e.target.value)} required />
      </div>
      <div>
        <label htmlFor="purchaseDate">Purchase Date:</label>
        <input type="date" id="purchaseDate" value={purchaseDate} onChange={(e) => setPurchaseDate(e.target.value)} required />
      </div>
      <div>
        <label htmlFor="carMake">Car Make:</label>
        <input type="text" id="carMake" value={carMake} onChange={(e) => setCarMake(e.target.value)} required />
      </div>
      <div>
        <label htmlFor="year">Year of Manufacture:</label>
        <input type="number" id="year" value={year} onChange={(e) => setYear(e.target.value)} required />
      </div>
      <div>
        <label htmlFor="sentiment">Sentiment:</label>
        <select id="sentiment" value={sentiment} onChange={(e) => setSentiment(e.target.value)}>
          <option value="Positive">Positive</option>
          <option value="Neutral">Neutral</option>
          <option value="Negative">Negative</option>
        </select>
      </div>
      <button type="submit">Submit Review</button>
    </form>
  );
};

export default ReviewForm;
