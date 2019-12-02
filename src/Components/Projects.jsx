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
        <Container>
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