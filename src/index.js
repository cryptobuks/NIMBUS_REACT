import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

import './include/bootstrap'
import './index.css';
import './css/responsive_carousel.css';

import App from './components/App.jsx';

// ========================================
ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'))
