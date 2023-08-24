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
