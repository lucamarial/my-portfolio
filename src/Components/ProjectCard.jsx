import React from 'react'
import { Card, Grid, Image } from 'semantic-ui-react'

const ProjectCard = (props) => {
  let project = props.project

  return (
    <>
      <Grid.Column>
        <Card>
          <Image src={project.image} />
          <Card.Content>
            <Card.Header>{project.name}</Card.Header>
            <Card.Description>{project.description}</Card.Description>
          </Card.Content>
        </Card>
      </Grid.Column>
    </>
  )
}

export default ProjectCard