import React from 'react'
// import "../App.css";
import "./Login/login.css";

function Login() {
    return (
        <div className="login center">
            <div className="card login__card">
                <h2 className="text-center text-semibold">SnapIt</h2>
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

                <button className="btn btn--google">Login with Google</button>
            </div>
        </div>
    )
}

export default Login
