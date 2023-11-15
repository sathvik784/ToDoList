import React from 'react';

const gif = () => {
  return (
    <div>
      <h1>Your React App</h1>
      <img src={process.env.PUBLIC_URL + 'https://media.giphy.com/media/OhkMiKX0uMmLC/giphy.gif'} alt="Your GIF" />
    </div>
  );
}

export default gif;
