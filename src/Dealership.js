import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReviewForm from './ReviewForm';
import axios from 'axios';
import './Dealership.css';

const Dealership = () => {
  const { id } = useParams();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [showReviewForm, setShowReviewForm] = useState(false);

  const dealerships = [
    { id: 1, dealerName: 'Auto World', city: 'Los Angeles', address: '1234 Sunset Blvd', zip: '90001', state: 'California' },
    { id: 2, dealerName: 'Car Nation', city: 'San Francisco', address: '5678 Market St', zip: '94103', state: 'California' },
    { id: 3, dealerName: 'DriveTime', city: 'San Diego', address: '9101 Ocean Dr', zip: '92101', state: 'California' },
    { id: 4, dealerName: 'Luxury Motors', city: 'Sacramento', address: '1213 Capitol Ave', zip: '95814', state: 'California' },
    { id: 5, dealerName: 'Prestige Auto', city: 'Fresno', address: '1415 Main St', zip: '93722', state: 'California' },
    { id: 6, dealerName: 'Big Apple Cars', city: 'New York', address: '1617 Broadway', zip: '10001', state: 'New York' },
    { id: 7, dealerName: 'Empire State Autos', city: 'Buffalo', address: '1819 Elmwood Ave', zip: '14201', state: 'New York' },
    { id: 8, dealerName: 'Metro Motors', city: 'Rochester', address: '2021 University Ave', zip: '14607', state: 'New York' },
    { id: 9, dealerName: 'Premier Auto', city: 'Albany', address: '2223 State St', zip: '12203', state: 'New York' },
    { id: 10, dealerName: 'Upstate Cars', city: 'Syracuse', address: '2425 Onondaga Blvd', zip: '13215', state: 'New York' },
    { id: 11, dealerName: 'Lone Star Autos', city: 'Houston', address: '2627 Westheimer Rd', zip: '77002', state: 'Texas' },
    { id: 12, dealerName: 'Texas Prime', city: 'Dallas', address: '2829 Commerce St', zip: '75201', state: 'Texas' },
    { id: 13, dealerName: 'Cowboy Cars', city: 'Austin', address: '3031 Guadalupe St', zip: '78705', state: 'Texas' },
    { id: 14, dealerName: 'Rodeo Drive', city: 'San Antonio', address: '3233 Broadway', zip: '78209', state: 'Texas' },
    { id: 15, dealerName: 'Alamo Autos', city: 'El Paso', address: '3435 Mesa St', zip: '79902', state: 'Texas' },

];

  useEffect(() => {
    const email = localStorage.getItem('userEmail');
    setIsLoggedIn(!!email);

    // Fetch reviews from the backend
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/reviews/${id}`);
        setReviews(response.data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, [id]);

  const dealership = dealerships.find(d => d.id === parseInt(id));
  if (!dealership) {
    return <div>Dealership not found</div>;
  }

  const handleReviewSubmit = (newReview) => {
    setReviews((prevReviews) => [...prevReviews, newReview]);
    setShowReviewForm(false);
  };

  return (
    <div className="dealership-container">
      <h2>{dealership.dealerName}</h2>
      <p>{dealership.address}, {dealership.city}, {dealership.state} {dealership.zip}</p>
      <h3>Reviews</h3>
      <div className="reviews-container">
        {reviews.map((review, index) => (
          <div className="review-card" key={index}>
            <h4>{review.user}</h4>
            <p>{review.review}</p>
            <div className="sentiment">
              <img src={`/${review.sentiment.toLowerCase()}.png`} alt={review.sentiment} />
              <span>{review.sentiment}</span>
            </div>
            <div className="details">
              {review.carMake}, {new Date(review.purchaseDate).toLocaleDateString()} ({review.year})
            </div>
          </div>
        ))}
      </div>
      {isLoggedIn && (
        <button onClick={() => setShowReviewForm(!showReviewForm)}>
          {showReviewForm ? 'Cancel' : 'Write a Review'}
        </button>
      )}
      {showReviewForm && (
        <ReviewForm dealerId={dealership.id} onReviewSubmit={handleReviewSubmit} />
      )}
    </div>
  );
};

export default Dealership;
