import React from 'react'
import { Menu } from 'semantic-ui-react'

const SideBar = () => {
  return (
    <>
      <Menu text vertical>
        <Menu.Item header>Luca Lobacher</Menu.Item>
        <Menu.Item
          name='About me'
        />
        <Menu.Item
          name='Projects'
        />
      </Menu>
    </>
  )
}

export default SideBar