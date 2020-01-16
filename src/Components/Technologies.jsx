import React, { Component } from 'react'
import axios from 'axios'

class Technologies extends Component {
  state = {
    data: null
  }

  componentDidMount() {
    axios.get('/data/technologies.json').then(response => {
      this.setState({
        data: response.data
      })
    })
  }  
  
  render() {
    const data = this.state.data
    let frameworkList, skillList, dependencyList

    if (data) {
      frameworkList = data.frameworks.map(framework => {
        return <li>{framework}</li>
      })
    }

    if (data) {
      skillList = data.softSkills.map(skill => {
        return <li>{skill}</li>
      })
    }

    if (data) {
      dependencyList = data.dependencies.map(dependency => {
        return <li>{dependency}</li>
      })
    }

    return (
      <>
        <ul>{frameworkList}</ul>
        <ul>{skillList}</ul>
        <ul>{dependencyList}</ul>
      </>
    )
  }
}

export default Technologies