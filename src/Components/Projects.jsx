import React, { Component } from 'react'
import axios from 'axios'
import ProjectCard from './ProjectCard'
import { Container, Grid } from 'semantic-ui-react'
import BackgroundImg from '../Images/background2.jpg'

class Projects extends Component {
  state = {
    projects: []
  }

  async componentDidMount() {
    try { 
      let response = await axios.get('/data/projects.json')
      return (
        this.setState({
          projects: response.data
        })
      )
    } catch(error) {
      console.log(error)
    }    
  }

  render() {
    let projects = this.state.projects
    let projectsList
    let backgroundImg = <img src={BackgroundImg} alt='Plant' id='projects-background' />
    
    if (projects.length > 0) {
      projectsList = projects.map(project => {
        return (
          <div key={project.id}>
            <ProjectCard project={project} />
          </div>
        )
      })
    }

    return (
      <>
        <div id='wrapper'>
          {backgroundImg}
          <p id='image-text'>My Favorite Projects</p>
        </div>

        <div id='description-wrapper'>
          <p className='description' id='description-one'>I work with passion on my projects.</p>
          <p className='description' id='description-two'>Explore the portfolio</p>
        </div>
        
        <Container className='page-content'>          
          <Grid centered container columns={3}>
            <Grid.Row>
              {projectsList}
            </Grid.Row>
          </Grid>
        </Container>
      </>
    )
  }
}

export default Projects