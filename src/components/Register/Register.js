import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css'
const Register = () => {
    return (
        <div className='register-form'>
            <div>
                <h2>Please register</h2>
                <form>
                    <input type="email" placeholder='Email' /><br />
                    <input type="password" placeholder='Password' /><br />
                    <input type="password" placeholder='Re enter password' /><br /><br />
                    <input type="submit" value='Register' className='btn-regular' />
                </form>
                <p>Already have an accoutn <Link to='/login'>Login</Link></p>
                <button className='btn-regular'>Google signin</button>
            </div>
        </div>
    );
};

export default Register;