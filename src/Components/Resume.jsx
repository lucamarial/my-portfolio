import React, { Component } from 'react'
import Education from './Education'
import WorkExperience from './WorkExperience'
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
    let educationList, workExperience

    if (resume) {
			educationList = resume.education.map(item => {
				return <Education item={item} />
			})
    }
    
    if(resume) {
      workExperience = resume.work.map(item => {
        return <WorkExperience item={item} />
      })
    }

    return (
      <>
        <Grid className='grid resume' columns='equal' data-aos='fade-left'>
          <Grid.Column>
            <Segment color='teal'>
              <h2 className='resume-header'>Career Objective</h2>
              <p className='resume-info'>
                Quality-oriented recent graduate as a developer from Craft Academy coding Bootcamp seeking new opportunities. 
                <br /> 
                I have practical experience working with Ruby on Rails and ReactJS. Looking to learn and grow as a developer.
              </p>
            </Segment>
            <Segment color='teal'>
              <h2 className='resume-header'>Work Experience</h2>
              <List>
                {workExperience}
              </List>
            </Segment>
          </Grid.Column>
          <Grid.Column width={6}>
            <Segment color='teal'>
              <h2 className='resume-header'>Education</h2>
              <List divided relaxed>
                {educationList}
              </List>
            </Segment>
            <Segment color='teal'>
              <h2 className='resume-header'>Interests</h2>
              <List
                className='resume-info'
                items={[
                  'Traveling',
                  'Skiing',
                  'Hiking',
                  'Climbing'
                ]}
              />
            </Segment>
          </Grid.Column>
          <Grid.Column className='skills column'>
            <Segment color='teal'>
              <h2 className='resume-header'>Technical Skills</h2>
              <List
                className='resume-info'
                items={[
                  'JavaScript', 
                  'Ruby', 
                  'Test-Driven Development',
                  'HTML & CSS',
                  'Git/GitHub'
                ]}
              />
            </Segment>
            <Segment color='teal'>
              <h2 className='resume-header'>Soft Skills</h2>
              <List
                className='resume-info'
                items={[
                  'Teamwork',
                  'Logical/critical thinking',
                  'Flexibility',
                  'Working with an agile approach'
                ]}
              />
            </Segment>
            <Segment color='teal'>
              <h2 className='resume-header'>Languages</h2>
              <List
                className='resume-info'
                items={[
                  'German - Native',
                  'English - Proficient'
                ]}
              />
            </Segment>
          </Grid.Column>
        </Grid>
      </>
    )
  }
}

export default Resume