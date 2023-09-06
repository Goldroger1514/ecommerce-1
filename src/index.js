import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './contexts/user-context.component.jsx';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <UserProvider>
      <App />
    </UserProvider>
  </BrowserRouter>
  /**
   * Any component inside of this user provider nested deep within the app can access the context value inside of the provider
   * So the user provider is solely menat to tell us , oh inside of my component tree which components to my context
   * It's going to be any component inside of the providerxxx
   * Anything outside will not be able to access the context
   */
);
reportWebVitals();
