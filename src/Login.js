import React,{ useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Login.css'
const Login = () => {
    const [email, setEmail] = useState('.');
    const [password, setPassword] = useState('.');
    const navigate = useNavigate();
    const handleLogin = async (event) => {
        event.preventDefault();
        
            const res = await axios.post('http://localhost:3001/api/auth/login', { email, password });
        try{  
            if(res){
             localStorage.setItem('userEmail',email);
             navigate('/');    
            alert('Login successful');
        }
        else{
            alert('Login failed. Please check your credentials and try again.');
        } 
    }catch (err) {
            console.error('Error logging in:', err);
            alert(err.response ? err.response.data.message : 'An error occurred. Please try again.');
        }
    };
    return(
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                       type="text"
                       id="password"
                       value={password}
                       onChange={(e) => setPassword(e.target.value)}
                       required
                    />
                </div>
              <button type="submit" className="login-button">Login</button>  
            </form>
            <div className="signup-container">
                <p>Don't have an account</p>
                <Link to="/register" className="signup-button">Sign Up</Link>
            </div>
        </div>
    );
};
export default Login;