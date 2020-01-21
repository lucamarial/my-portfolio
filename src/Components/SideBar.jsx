import React from 'react'
import { Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

const SideBar = () => {
  return (
    <>
      <Menu text vertical fixed='left' className='side-menu'>
        <Menu.Item header
          id='my-name'
          name='Luca Lobacher'
          as={NavLink}
          to='/'
        />
        <Menu.Item
          className='menu-item'
          name='About me'
          as={NavLink}
          to='/about'
        />
        <Menu.Item
          className='menu-item'
          name='Resume'
          as={NavLink}
          to='/resume'
        />
        <Menu.Item
          className='menu-item'
          name='Projects'
          as={NavLink}
          to='/projects'
        />
        <Menu.Item
          className='menu-item'
          name='Contact'
          as={NavLink}
          to='/contact'
        />
      </Menu>
    </>
  )
}

export default SideBar