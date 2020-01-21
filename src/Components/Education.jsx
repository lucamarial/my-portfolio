import React from 'react'
import { List } from 'semantic-ui-react'

const Education = (props) => {
  let item = props.item
  
  return (
    <>
      <List.Item key={item.id}>
        <h2>{item.school}</h2>
        <p>{item.location} - {item.degree}</p>
        <p>{item.date}</p>
      </List.Item>
    </>
  )
}

export default Education