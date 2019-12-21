import React from 'react'
import { Container, Grid, Divider } from 'semantic-ui-react'
import MyPicture from '../Images/me.jpg'

const AboutMe = () => {
  let myPicture = <img src={ MyPicture } alt='Image of Luca' id='about-img' width='500' height='400' object-fit='cover' />

  return (
    <>
      <Container>
        <Grid>
          <Grid.Column width={8}>
            {myPicture}
          </Grid.Column>
          <Grid.Column width={8}>
            <h2 id='about-header'>ABOUT</h2>
            <Divider />
            <p>Yotec nisih tinanit rucila yetih do conule tusonu redil. Mo leri afoten enieb copeg no sesakim feruru.</p>
            <p> Edietunu unefel tuyehie asinec unienu casiti. Rap vul vaca tanara folu recur keref ileso tigeg. Ho tie titi wan ronu oyifiger na pusep had! Meca tatama elet fap tienap cid ana laramec tu, biel ciemo sal ciret elowados?</p>
            <p> Nowina dad xohonip lihu yot enonecuc. Nelice setegu sahilal te pep po tisepo voran! Tie ineti opunason detari cates site alelol muyesef ra boyiere? Ser kon ama odisis rer picol citera? Lito omurad sahal; laraya ateb oda okelam. Acetinal sotim lehide kip openaper pin cen di, kor arehiesat cavimel mie. Ronofif len tel arene ramatib fetono ve tahar ibemi ra. Tiererel nilahem ine samo. Gin pire osa luyu hilepat hanonit loru tasutu meha, vused dido do ceb epunebe ritorus tigus onie? Donila nid feno hetoneg asero can tehe zi sahadah redim.</p>
          </Grid.Column>
        </Grid>
      </Container>
    </>
  )
}

export default AboutMe