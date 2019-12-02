import React, { Component } from 'react'
import axios from 'axios'
import ProjectCard from './ProjectCard'

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
        {projectsList}
      </>
    )
  }
}

export default Projects