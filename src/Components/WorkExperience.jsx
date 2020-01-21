import React from 'react'
import { List } from 'semantic-ui-react'

const WorkExperience = (props) => {
  let item = props.item

  return (
    <>
      <List.Item key={item.id}>
        <h3>{item.company}</h3>
        <p>{item.location} - {item.title}</p>
        <p>{item.date}</p>
      </List.Item>
    </>
  )
}

export default WorkExperience