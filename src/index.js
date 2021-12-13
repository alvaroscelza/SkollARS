import React from 'react';
import ReactDOM from 'react-dom';
import './assets/theme.scss';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Home />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
