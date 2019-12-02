import React, { Component } from 'react'
import axios from 'axios'

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
    return (
      <>
        
      </>
    )
  }
}

export default Projects