import React, { useEffect } from 'react'
import './Login.css';
import google_icon from '../../assets/google_icon.png';
import { Constants } from '../../utils/constants';
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";

function Login() {

  const handleLogin = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider);
  };

  return (
    <div className="login-page">
      <img className='noto-login-image' src={require('../../assets/noto_login.png')} alt='noto_login' />
      <h1 className="display-1">{Constants.APP_NAME}</h1>
      <p className="login-jargon-para">Smartest Online Notes Store for engineering students.</p>
      <button className="btn btn-outline-primary login-button" onClick={handleLogin}>
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