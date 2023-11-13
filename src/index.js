import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HomePageList from './components/HomePageList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const benefitsInfo = [
  {
    "id": 1,
    "header": "Different styles for different people",
    "info": "Everyone is different, and our to-do list allows you to choose how you format your to-do list. From calendar styled, to list-styled, have your pick!"
  }
]

ReactDOM.render (
  <HomePageList cards={benefitsInfo}/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
