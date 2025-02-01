import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
const Home = () => {
    return (
        <div className = "home-container">
            <h2>Welcome to our car dealership</h2>
            <p>This is the best website to get the best cars</p>
            <img 
               src="/image.png"
               alt="Car Dealership"
               className="center-image"
            />
            <div className="button-container">
                <Link to="/dealerships" className="view-dealership-button">
                     View Dealership
                </Link>
            </div>
            <ul>
                <li><Link to="/about">Learn More About Us</Link></li>
                <li><Link to="/contact">Contact US</Link></li>
            </ul>
        </div>
    );
};
export default Home;