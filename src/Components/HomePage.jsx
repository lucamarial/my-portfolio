import React from 'react'
import HomeImg from '../Images/marocco-wall.jpg'
import Bodensee from '../Images/bodensee.jpg'
import Mosaic from '../Images/mosaic.jpg'
import Technologies from './Technologies'
import { Icon } from 'semantic-ui-react'

const HomePage = () => {
  let homeImg = <img id='home-img' src={HomeImg} alt='Marocco' />
  let bodensee = <img id='bodensee-img' src={Bodensee} alt='Luca Lobacher' />
  let mosaic = <img id='mosaic-img' src={Mosaic} alt='Mosaic' />

  return (
    <>
      <div id='home-wrapper'>
        <div>{homeImg}</div>
        <div id='home-text'>
          <p id='text-one'>Front End Developer</p>
          <p id='text-two'>With a passion for design</p>
        </div>
        <svg className='draw' width='100%' height='25%' viewBox='0 0 100 10' preserveAspectRatio='none'>
          <path className='path' d='M0,0 L0,10 100,10 100,0 50,10 Z' />
        </svg>
      </div>

      <div id='home-info-grid'>
        <div id='home-item-img'>{bodensee}</div>
        <div id='home-header'><p>Hi, I'm Luca!</p></div>
        <div id='home-intro'>
          <p>For some time now, I've been learning both front and back end web development.
            During that time, I also discovered a growing interest for web design.
          </p>
          <p>Eager to learn, attentive and curious.</p>
        </div>
      </div>

      <div id='arrow-wrapper'>
        {mosaic}
        <div id='arrow-text'>
          <p id='arrow-text-one'>Here are some technologies & methodologies I've worked with</p>
        </div>
        <svg id='draw-two' width='100%' height='25%' viewBox='0 0 100 10' preserveAspectRatio='none'>
          <path id='path-two' d='M0,0 L50,10 100,0 Z' />
        </svg>
        <svg className='draw' width='100%' height='25%' viewBox='0 0 100 10' preserveAspectRatio='none'>
          <path className='path' d='M0,0 L0,10 100,10 100,0 50,10 Z' />
        </svg>
      </div>

      <Technologies />

      <footer>
        <div className='footer-container'>
          <p>Copyright © 2020 Luca Maria Lobacher</p>
          <div className='container-social'>
            <a href='https://github.com/lucamarial'>
              <Icon name='github' size='big' />
            </a>
            <a href='https://www.linkedin.com/in/luca-lobacher-9789021a0/'>
              <Icon name='linkedin' size='big' />
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default HomePage