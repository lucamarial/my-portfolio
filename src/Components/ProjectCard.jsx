import React from 'react'
import { Grid } from 'semantic-ui-react'

const ProjectCard = (props) => {
  let project = props.project
  let aosEffect

  if(window.innerWidth <= 823) {
    if (project.id % 2 == 0) {
      aosEffect = 'fade-left'
    } else {
      aosEffect = 'fade-right'
    }
  } else {
    aosEffect = 'fade-in'
  }

  return (
    <>
      <Grid.Column data-aos={aosEffect}>
        <div id='project-wrapper'>
          <a href={project.link} target='_blank'>
            <img
              className='project-img'
              src={project.image}
              alt='Project'
            />
            <div className='project-text'>
              <p className='project-name'>{project.name}</p>
              <p className='project-description'>{project.description}</p>
            </div>
          </a>
        </div>
      </Grid.Column>
    </>
  )
}

export default ProjectCard