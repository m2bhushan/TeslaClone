import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './app/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}> 
    <App />
    </Provider>,
  </React.StrictMode>
);
//keep remember at the provider wrapper it was getting error
// and I have resolve it by importing that store from app.
