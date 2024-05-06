import React from 'react';
import './Home.css';
import Quote from '../Quote/Quote';

const Home = () => {
  return (
    <div className="home">
      <div className="sub-container">
        <h1>Random Quote generator</h1>
      </div>
      <div className="sub-container">
        <p>
          Dive into the world of wisdom with our Random Quote Generator! Perfect for those seeking inspiration,motivation,
          {' '}
          <br />
          {' '}
          or a spark br of insight. Get random quotes and lighten up your day.
        </p>
      </div>
      <div className="main-container">
        <Quote />
      </div>
    </div>
  );
};

export default Home;
