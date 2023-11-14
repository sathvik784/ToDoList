import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePageList from './components/HomePageList';

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
