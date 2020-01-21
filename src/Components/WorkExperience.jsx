import React from 'react'
import { List } from 'semantic-ui-react'

const WorkExperience = (props) => {
  let item = props.item

  return (
    <>
      <List.Item key={item.id}>
        <h3 className='resume-list-header'>{item.company}</h3>
        <p>{item.location} - {item.title}</p>
        <p className='resume-date'>{item.date}</p>
        <p>Achievements/Tasks</p>
        <List
          className='resume-work-tasks'
          items={item.tasks}
          as='ol'
        />
      </List.Item>
    </>
  )
}

export default WorkExperience