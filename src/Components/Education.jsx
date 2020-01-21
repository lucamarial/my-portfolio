import React from 'react'
import { List } from 'semantic-ui-react'

const Education = (props) => {
  let item = props.item

  return (
    <>
      <List.Item key={item.id}>
        <h3>{item.school}</h3>
        <p>{item.location} - {item.degree}</p>
        <p className='resume-date'>{item.date}</p>
      </List.Item>
    </>
  )
}

export default Education