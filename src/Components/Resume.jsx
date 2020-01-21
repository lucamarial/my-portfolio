import React, { Component } from 'react'
import { Grid, Segment, List } from 'semantic-ui-react'
import axios from 'axios'

class Resume extends Component {
  state = {
    resume: null
  }

  async componentDidMount() {
    try { 
      let response = await axios.get('/data/resume.json')
      return (
        this.setState({
          resume: response.data
        })
      )
    } catch(error) {
      console.log(error)
    }    
  }
  
  render() {
    return (
      <>
        <Grid columns='equal'>
          <Grid.Column>
            <Segment>
              <h2>CAREER OBJECTIVE</h2>
              Quality-oriented recent graduate as a developer from Craft Academy coding Bootcamp seeking new opportunities. I have practical experience working with Ruby on Rails and ReactJS. Looking to learn and grow as a developer.
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
              <List>

              </List>
            </Segment>
          </Grid.Column>
        </Grid>
      </>
    )
  }
}

export default Resume