import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { HashRouter } from 'react-router-dom';
// import { BrowserRouter } from 'react-router-dom';

/*
  Note for self: If I ever decide to host this somewhere
  different than GitHub Pages then change the routing to BrowserRouter.
  GitHub Pages does not support HTML5 pushState history API from
  BrowserRouter. Also, HashRouter is meant for legacy browsers.
*/

ReactDOM.render(
  <HashRouter basename='/'>
    <App />
  </HashRouter>
,
document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
