import React, { Component } from 'react'
import Education from './Education'
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
    const resume = this.state.resume
    let educationList

    if (resume) {
			educationList = resume.education.map(item => {
				return <Education item={item} />
			})
		}

    return (
      <>
        <div id='resume-wrapper'>
          <Grid columns='equal'>
            <Grid.Row>
              <Grid.Column>
                <Segment>
                  <h2>CAREER OBJECTIVE</h2>
                  Quality-oriented recent graduate as a developer from Craft Academy coding Bootcamp seeking new opportunities. I have practical experience working with Ruby on Rails and ReactJS. Looking to learn and grow as a developer.
                </Segment>
              </Grid.Column>
              <Grid.Column width={6}>
                <Segment>
                  <h2>EDUCATION</h2>
                  <List>
                    {educationList}
                  </List>
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment>
                  <h2>TECHNICAL SKILLS</h2>
                  <List
                    items={[
                      'JavaScript', 
                      'Ruby', 
                      'Test-Driven Development',
                      'HTML & CSS',
                      'Git/GitHub'
                    ]}
                  />
                </Segment>
                <Segment>
                  <h2>LANGUAGES</h2>
                  <List
                    items={[
                      'German - Native',
                      'English - Proficient'
                    ]}
                  />
                </Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </>
    )
  }
}

export default Resume