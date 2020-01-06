import React from 'react'
import { Grid } from 'semantic-ui-react'

const ProjectCard = (props) => {
  let project = props.project

  return (
    <>
      <Grid.Column>
        <div id='project-wrapper'>
          <img
            className='project-img'
            src={project.image}
            alt='Project'
          />
          <div className='project-text'>
            <p className='project-name'>{project.name}</p>
            <p className='project-description'>{project.description}</p>
          </div>
        </div>
      </Grid.Column>
    </>
  )
}

export default ProjectCard