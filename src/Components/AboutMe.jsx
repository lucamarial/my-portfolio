import React from 'react'
import { Divider } from 'semantic-ui-react'
import MyPicture from '../Images/me.jpg'
import LucaPicture from '../Images/lucal.jpg'

const AboutMe = () => {
  let myPicture = <img src={ MyPicture } alt='Luca Lobacher' className='about-img' />
  let lucaPicture = <img src={ LucaPicture } alt='Luca Lobacher' className='about-img' />

  return (
    <>
      <div id='grid-container'>
        <div id='item-img-one'>{myPicture}</div>
        <div id='item-img-two'>{lucaPicture}</div>
        <div id='item-text'>
          <h2 id='about-header'>ABOUT</h2>
          <Divider section/>
          <div id='about-text'>
            <p id='about-intro'>Yotec nisih tinanit rucila yetih do conule tusonu redil. Mo leri afoten enieb copeg no sesakim feruru.</p>
            <p> Edietunu unefel tuyehie asinec unienu casiti. Rap vul vaca tanara folu recur keref ileso tigeg. Ho tie titi wan ronu oyifiger na pusep had! Meca tatama elet fap tienap cid ana laramec tu, biel ciemo sal ciret elowados?</p>
            <p> Nowina dad xohonip lihu yot enonecuc. Nelice setegu sahilal te pep po tisepo voran! Tie ineti opunason detari cates site alelol muyesef ra boyiere? Ser kon ama odisis rer picol citera? Lito omurad sahal; laraya ateb oda okelam. Acetinal sotim lehide kip openaper pin cen di, kor arehiesat cavimel mie. Ronofif len tel arene ramatib fetono ve tahar ibemi ra. Tiererel nilahem ine samo. Gin pire osa luyu hilepat hanonit loru tasutu meha, vused dido do ceb epunebe ritorus tigus onie? Donila nid feno hetoneg asero can tehe zi sahadah redim.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutMe