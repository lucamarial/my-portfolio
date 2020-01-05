import React from 'react'
import HomeImg from '../Images/background1.jpg'

const HomePage = () => {
  let homeImg = <img id='home-img' src={HomeImg} alt='Plant' />

  return (
    <>
      <div id='home-wrapper'>
        <div>{homeImg}</div>
        <div id='home-text'>
          <p id='text-one'>Hey, my name is Luca Lobacher.</p>
          <p id='text-two'>I am a front-end developer and this is my portfolio.</p>
        </div>
      </div>
    </>
  )
}

export default HomePage