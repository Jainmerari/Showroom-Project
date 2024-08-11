import React from 'react'
import { useState } from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  const [isBouncing, setIsBouncing] = useState(false);

  const handleClick = () => {
    setIsBouncing(true);
    setTimeout(() => setIsBouncing(false), 2000); // Reset after 2 seconds
  };

  return (
    <div className='newsletter'>
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe to our newletter and stay updated</p>
      <div className='sub'>
      <input type="email" placeholder="Enter Your Email" />
      <button 
          className={isBouncing ? 'bounce' : ''} 
          onClick={handleClick}>
          <span className={isBouncing ? 'small-ball' : ''}></span>
          {!isBouncing && "SUBSCRIBE!"}
        </button>
      </div>
    </div>
  )
}

export default NewsLetter
