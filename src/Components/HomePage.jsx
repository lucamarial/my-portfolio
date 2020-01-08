import React from 'react'
import HomeImg from '../Images/background1.jpg'
import Bodensee from '../Images/bodensee.jpg'

const HomePage = () => {
  let homeImg = <img id='home-img' src={HomeImg} alt='Plant' />
  let bodensee = <img id='bodensee-img' src={Bodensee} alt='Luca Lobacher' />
  return (
    <>
      <div id='home-wrapper'>
        <div>{homeImg}</div>
        <div id='home-text'>
          <p id='text-one'>Hey, my name is Luca Lobacher.</p>
          <p id='text-two'>I am a front-end developer and this is my portfolio.</p>
        </div>
        <svg id='draw' width='100%' height='10%' viewBox='0 0 100 10' preserveAspectRatio='none'>
          <path id='path' d='M0,0 L0,10 100,10 100,0 50,10 Z' />
        </svg>
      </div>
      <div id='home-info-grid'>
        <div id='home-item-img'>{bodensee}</div>
        <p id='home-header'>Yotec nisih tinanit</p>
        <div id='home-intro'>
          <p>Yotec nisih tinanit rucila yetih do conule tusonu redil. Mo leri afoten enieb copeg no sesakim feruru.</p>
          <p>Yotec nisih tinanit rucila yetih do conule tusonu redil. Mo leri afoten enieb copeg no sesakim feruru.</p>
        </div>
      </div>
    </>
  )
}

export default HomePage