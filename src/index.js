import React from 'react';
import ReactDOM from 'react-dom';
import './assets/custom.css';
import './assets/theme.scss';
import Header from './Header';
import Home from './Home';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);
