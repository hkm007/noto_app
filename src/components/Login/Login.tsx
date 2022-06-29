import React from 'react'
import './Login.css';
import google_icon from '../../assets/google_icon.png';

function Login() {
  return (
    <div className="login-page">
      <h1 className="display-1">Noto</h1>
      <p className="login-jargon-para">Smartest Online Notes Store for engineering students.</p>
      <button className="btn btn-outline-primary login-button">
        <img
            className='login-google-logo'
            src={google_icon}
            alt="google"
            style={{ height: "35px", width: "35px" }}
          />{" "}
        <span className="login-button-text">
          Continue with Google
        </span>
      </button>
    </div>
  )
}

export default Login;