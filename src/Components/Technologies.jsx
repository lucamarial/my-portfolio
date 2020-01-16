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
    let frameworkList

    if (data) {
      frameworkList = data.frameworks.map(framework => {
        return <li>{framework}</li>
      })
    }

    return (
      <>
        <ul>{frameworkList}</ul>
      </>
    )
  }
}

export default Technologies