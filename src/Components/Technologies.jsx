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
    return (
      <>
        
      </>
    )
  }
}

export default Technologies