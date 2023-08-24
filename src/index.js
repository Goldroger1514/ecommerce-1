import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  /**
   * Right now App represents our entire application, however it renders the directory component directly
   * We don't want that anymore 
   * instead , now we want to render a home page and the directory kind of just lives on the home page
   * ###
   * routes is a folder that will hold all of our route top level components
   * The components inside of the routes folder are related to routes, they're not these generic components that we're building that we can use in numerous places
   * Essentially, these home components are these route level components are really only used for routing
   */

);
reportWebVitals();
