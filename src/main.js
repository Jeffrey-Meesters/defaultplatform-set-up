// When creating scss files require them here
require('./assets/stylesheets/imports.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App.js';

import { BrowserRouter } from 'react-router-dom';

ReactDOM.render((
    <BrowserRouter>
      <App />
    </BrowserRouter>
  ), document.getElementById('root'))