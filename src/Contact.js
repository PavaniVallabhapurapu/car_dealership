import React from 'react';
import './ContactUs.css'; // Ensure you create this CSS file or adjust the path as needed

const Contact = () => {
  return (
    <div className="contact-us-container">
      <h1>Contact Us</h1>
      <p>Have questions or need assistance? Reach out to us through the following contact details:</p>
      <div className="contact-details">
        <h2>Best Car Dealership</h2>
        <p><strong>Address:</strong> 1234 Car Lane, Auto City, AC 56789</p>
        <p><strong>Phone:</strong> (123) 456-7890</p>
        <p><strong>Email:</strong> support@bestcardealership.com</p>
      </div>
    </div>
  );
};

export default Contact;
