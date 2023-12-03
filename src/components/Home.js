import React from 'react';
import '../styles/App.css';
import benefitsInfo from './benefitsInfo';
import HomePageList from './HomePageList';
import gif from './HomePageGif';
import '../styles/Home.css'

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 id='title'>
          To-Do List
        </h1>

        <button id='login-button'>
          Sign In
        </button>

        <h2 id='blurb'>
          A place to keep track of all your assignments and events neatly.
        </h2>

        <div class="container">
          <HomePageList cards={benefitsInfo}/>
        </div>
      </header>
    </div>
  );
}

export default Home;