import React from 'react';
import './Login.css'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='form-container'>
            <h2 className='form-title'>Please Login</h2>
            <form>
                <div className='form-control'>
                    <label htmlFor='email'>Email</label>
                    <input type="email" name='email' required />
                </div>
                <div className='form-control'>
                    <label htmlFor='password'>Password</label>
                    <input type="password" name='password' required />
                </div>
                <input type="submit" className="btn-submit" value='Login' />
            </form>
            <p><small>New to Ema-John? <Link to="/signup">Create New account</Link></small></p>
            
        </div>
    );
};

export default Login;