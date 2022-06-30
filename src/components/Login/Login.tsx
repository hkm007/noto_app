import React, { useEffect } from 'react'
import './Login.css';
import google_icon from '../../assets/google_icon.png';
import { Constants } from '../../utils/constants';

function Login() {
  return (
    <div className="login-page">
      <img className='noto-login-image' src={require('../../assets/noto_login.png')} alt='noto_login' />
      <h1 className="display-1">{Constants.APP_NAME}</h1>
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