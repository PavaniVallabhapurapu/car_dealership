import React,{useState} from 'react';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Navbar from './Navbar';
import About from './About';
import Home from './Home';
import Contact from './Contact';
import Login from './Login';
import Register from './Register';
import Dealerships from './Dealerships';
import Dealership from './Dealership';
import Logout from './Logout';
import Profile from './Profile';
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('userEmail') !== null);
  const [userEmail, setUserEmail] = useState(localStorage.getItem('userEmail'));

  const handleLogin = (email) => {
    localStorage.setItem('userEmail', email);
    setIsLoggedIn(true);
    setUserEmail(email);
  };

  const handleLogout = () => {
    localStorage.removeItem('userEmail');
    setIsLoggedIn(false);
    setUserEmail(null);
  };
  return(
    <Router>
      <div>
      <Navbar isLoggedIn={isLoggedIn} userEmail={userEmail} handleLogout={handleLogout} />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/login" element={<Login onLogin={handleLogin} />}/>
          <Route path="/register" element={<Register/>} />
          <Route path="/dealerships" element={<Dealerships/>} />
          <Route path="/dealership/:id" element={<Dealership />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/logout" element={<Logout onLogout={handleLogout} />} />
        </Routes>
      </div>
    </Router>
  );
};
export default App;