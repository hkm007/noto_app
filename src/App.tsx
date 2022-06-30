import React, { useState, useEffect } from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';
import { getAuth, onAuthStateChanged } from "firebase/auth"


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, user => {
      if(user) {
        localStorage.setItem("noto_user", JSON.stringify({
          name: user.displayName,
          avatar: user.photoURL
        }))
        setIsLoggedIn(true);
      } else {
        localStorage.removeItem("noto_user");
        setIsLoggedIn(false);
      }
    })
  }, [isLoggedIn])

  return isLoggedIn ? <Dashboard setIsLoggedIn={setIsLoggedIn} /> : <Login />;
}

export default App;
