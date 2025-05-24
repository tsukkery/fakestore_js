import { createHashRouter, RouterProvider  } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';
import ProductPage from './companies/ProductPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
reportWebVitals();