import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import Menu from './components/MenuComponent';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(   //rendering the view to the DOM It is rendered in index.html
  <React.StrictMode>
    <App />
    <Menu />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
