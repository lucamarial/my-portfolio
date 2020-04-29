import React, { Component } from 'react'
import axios from 'axios'
import ProjectCard from './ProjectCard'
import { Container, Grid } from 'semantic-ui-react'

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
          <p id='image-text'>My Favorite Projects</p>
        </div>

        <div id='description-wrapper'>
          <p id='description-one'>I work with passion on my projects.</p>
          <p id='description-two'>Explore the portfolio</p>
        </div>
        
        <Grid className='page-content' centered container columns={3}>
          {projectsList}
        </Grid>
      </>
    )
  }
}

export default Projects