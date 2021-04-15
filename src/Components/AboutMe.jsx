import React from 'react'
import { Divider } from 'semantic-ui-react'
import MyPicture from '../Images/me.jpg'
import LucaPicture from '../Images/lucal.jpg'

const AboutMe = () => {
  let myPicture = <img src={ MyPicture } alt='Luca Lobacher' className='about-img' id='about-img-one' data-aos='fade-up' />
  let lucaPicture = <img src={ LucaPicture } alt='Luca Lobacher' className='about-img' data-aos='fade-up' />

  return (
    <>
      <div id='grid-container'>
        <div id='item-text' data-aos='fade-left'>
          <h2 id='about-header'>ABOUT</h2>
          <Divider section/>
          <div id='about-text'>
            <p id='about-intro'>Hi I'm Luca, 24 years old from Germany.</p>
            <p>Ever since programming caught my attention, I’ve been feeling the urge to learn about web development. In 2019, I was living in Stockholm where I attended a coding Bootcamp for full stack web development. Once there, my interest peaked even further and I got especially hooked on the front-end side of things along with design.</p>
            <p>So far I’ve been strictly working with test-driven development, along with the agile methodologies and scrum practices. I'm now excited to keep working on new projects and facing up to whatever challenges comes my way to learn and grow as a developer.</p>
          </div>
        </div>

        {myPicture}
        {lucaPicture}
      </div>
    </>
  )
}

export default AboutMe