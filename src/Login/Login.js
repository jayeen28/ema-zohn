import React from 'react';
import './Login.css'
import { Link } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/shop';
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(res => {
                history.push(redirect_uri);
            })
    }
    return (
        <div className='login-form'>
            <h2>Please Login</h2>
            <form>
                <input type="email" placeholder='Your email' /><br />
                <input type="password" placeholder='Your password' /><br /><br />
                <input type="submit" value="Login" className='btn-regular' />
            </form>
            <p>New to Ema John <Link to='/register'>Create account</Link></p>
            <button className="btn-regular" onClick={handleGoogleLogin}>Google Login</button>
        </div>
    );
};

export default Login;