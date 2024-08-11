import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/New folder/pixlr-image-generator-9b5dd5fe-f9f4-4e40-b129-c10ca7d71a29.png'

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-left'>
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
            <div className='hero-hand-icon'>
                <p>new</p>
                <img src={hand_icon} alt=""/>
            </div>
            <p>collections</p>
            <p>for everyone</p>
        </div>
        <div className='hero-latest-btn'>
            <div>Latest Collection</div>
            <img src={arrow_icon} alt=""/>
        </div>
      </div>
      <div className='hero-right'>
        <img className='abc' src={hero_image} alt=''/>
      </div>
    </div>
  )
}

export default Hero
