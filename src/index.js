import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

import './include/bootstrap'
import './index.css';

import RouteManager from './components/RouteManager.jsx';

// ========================================
ReactDOM.render((
  <BrowserRouter>
    <RouteManager />
  </BrowserRouter>
), document.getElementById('root'))
