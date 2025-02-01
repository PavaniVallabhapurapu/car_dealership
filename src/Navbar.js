import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
const Navbar = ({ isLoggedIn, userEmail, handleLogout }) => {
    const [showDropdown, setShowDropdown] = useState(false);
  
    const toggleDropdown = () => {
      setShowDropdown(!showDropdown);
    };
  
    const handleLogoutClick = () => {
      handleLogout();
      setShowDropdown(false); // Close dropdown after logout
    };
    return(
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/Contact">Contact Us</Link></li>
                {isLoggedIn ? (
          <li className="dropdown">
            <div className="profile" onClick={toggleDropdown}>
              <span className="user-icon">User</span>
              {showDropdown && (
                <div className="dropdown-content">
                  <p>{userEmail}</p>
                  <Link to="/profile">Profile</Link>
                  <button onClick={handleLogoutClick}>Logout</button>
                </div>
              )}
            </div>
          </li>
                ) : (
                    <>
                <li><Link to="/Login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
                </>
                )}
            </ul>
        </nav>
    );
};
export default Navbar;