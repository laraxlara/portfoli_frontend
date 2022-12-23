import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/styles/index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

console.log =
  process.env.REACT_APP_NODE_ENV === "development"
    ? console.log
    : function () {
        //
      };
console.warn =
  process.env.REACT_APP_NODE_ENV === "development"
    ? console.warn
    : function () {
        //
      };
console.error =
  process.env.REACT_APP_NODE_ENV === "development"
    ? console.error
    : function () {
        //
      };

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
