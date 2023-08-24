import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
/**
 * BorwserRouter is a component
 * BorwserRouter is the generic router it leverages the URL in order to keep track of the history of where the user is navigating through and it behaves
 * as you typically would expect any kind of routing based on your URL to behave
 * There are other forms of routers inside of react-router-dom , but we won't really use them a lot
 * Now because we've wrapped our application component inside of our browser router component, we can access all of the different features that come in react-router-dom
 * specific to this browserRouter that is now going to control all of routing inside of our nested application
 */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>

);
reportWebVitals();
