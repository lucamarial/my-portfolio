import React from 'react'
import { Container, Grid, Header, Image } from 'semantic-ui-react'
import MyPicture from '../Images/me.jpg'

const AboutMe = () => {
  let myPicture = <img src={ MyPicture} alt='Image of Luca' /> 
  return (
    <>
      <Container>
        <Grid>
          <Grid.Column width={4}>
            {myPicture}
          </Grid.Column>
          <Grid.Column width={5}>
            <Header as='h3'>About</Header>
          </Grid.Column>
        </Grid>
      </Container>
    </>
  )
}

export default AboutMe