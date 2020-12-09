import React from 'react';
import { Link } from 'react-router-dom';
// import "../App.css";
import "./Login/login.css";
import google from '../img/google.svg';

function Login() {
    return (
        <div className="login center">
            <div className="card login__card">
                <h2 className="login__title text-center text-semibold">SnapIt</h2>
                <form>
                    <input 
                        className="field-text mb-1" 
                        type="email"
                        placeholder="Email" />
                    <input 
                        className="field-text mb-1" 
                        type="password" 
                        placeholder="Password" />
                    <button 
                        className="btn btn--primary"
                        type="submit">Login</button>
                </form>
                <p className="text-center text-regular">OR</p>

                <button className="btn btn--google text-bold">
                    <img src={google} className="btn--google__icon" alt="google icon" />
                    Login with Google
                </button>
                <a href="#" className="login__forgot-password text-small">Forgot password?</a>
            </div>

            <div className="card login__signup text-small text-center">
                <p>Don't have an account?</p>
                <Link to="/signup">Sign up</Link>
            </div>
        </div>
    )
}

export default Login
