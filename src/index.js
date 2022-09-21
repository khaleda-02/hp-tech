import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'https://cdnjs.cloudflare.com/ajax/libs/simplex-noise/2.4.0/simplex-noise.min.js'
import "https://cdnjs.cloudflare.com/ajax/libs/chroma-js/2.0.3/chroma.min.js"
import "https://klevron.github.io/codepen/three.js/OrbitControls.js"
import { BrowserRouter } from "react-router-dom";
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter >
    
    <App />
  </BrowserRouter>
);

