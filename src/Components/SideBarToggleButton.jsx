import React from 'react'

const SideBarToggleButton = props => {
  return (
    <>
      <button className='toggle-button' onClick={props.sidebarToggleHandler}>
        <span className='toggle-button-line' />
        <span className='toggle-button-line' />
        <span className='toggle-button-line' />
      </button>
    </>
  )
}

export default SideBarToggleButton