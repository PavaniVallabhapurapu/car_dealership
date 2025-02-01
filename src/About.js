import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-us-container">
            <h1>About Us</h1>
            <p>
                Welcome to Best Car Dealership! Our mission is to provide the best car buying experience to our customers. 
                We believe in transparency, customer satisfaction, and high-quality service.
            </p>
            <h2>Our Mission</h2>
            <p>
                Our mission is to offer a wide range of quality vehicles and unparalleled customer service. 
                We strive to build lasting relationships with our customers based on trust and integrity.
            </p>
            <h2>Our Values</h2>
            <p> Customer Focused,Integrity,Transparency,Innovation</p>
            <h2>Leadership Team</h2>
            <div className="leadership-team">
                <div className="leader">
                    <img src="/leader1.jpg" alt="Jane Doe" className="leader-img" />
                    <h3>Jane Doe</h3>
                    <p className="position">CEO</p>
                    <p>Jane brings over 20 years of experience in the automotive industry and is passionate about customer satisfaction.</p>
                </div>
                <div className="leader">
                    <img src="/leader3.jpg" alt="Vallabha Pavani" className="leader-img" />
                    <h3>Vallabha Pavani</h3>
                    <p className="position">CMO</p>
                    <p>Vallabha Pavani innovates marketing and customer engagement. She has 15 years of experience and plays a key role in the company's narrative and landscape.</p>
                </div>
            </div>
        </div>
    );
};

export default About;
