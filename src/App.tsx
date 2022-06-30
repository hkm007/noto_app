import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';

function App() {

  const isLoggedIn: boolean = false;

  return isLoggedIn ? <Dashboard /> : <Login />;
}

export default App;
