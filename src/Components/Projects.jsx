import React, { Component } from 'react'
import axios from 'axios'
import ProjectCard from './ProjectCard'
import { Container, Grid } from 'semantic-ui-react'

class Projects extends Component {
  state = {
    projects: []
  }

  componentDidMount() {
    axios.get('../Data/projects.jsx')
      .then(response => {
        this.setState({
          projects: response.data
        })
      })
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