import React from 'react'
import { Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

const SideBar = () => {
  return (
    <>
      <Menu text vertical>
        <Menu.Item header
          id='my-name'
          name='Luca Lobacher'
          as={NavLink}
          to='/'
        />
        <Menu.Item
          name='About me'
          as={NavLink}
          to='/about'
        />
        <Menu.Item
          name='Projects'
          as={NavLink}
          to='/projects'
        />
      </Menu>
    </>
  )
}

export default SideBar