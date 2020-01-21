import React, { Component } from 'react'
import { Grid, Segment } from 'semantic-ui-react'

class Resume extends Component {
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
        </Grid>
      </>
    )
  }
}

export default Resume