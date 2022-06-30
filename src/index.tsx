import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDiYBcz7veqA-dNJe4L2U5tJS8eslHCLXE",
  authDomain: "thenoto-app.firebaseapp.com",
  projectId: "thenoto-app",
  storageBucket: "thenoto-app.appspot.com",
  messagingSenderId: "464656538121",
  appId: "1:464656538121:web:ff6d3ef341d46f43edf6d8",
  measurementId: "G-8SX2WFFDS8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <App />
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
