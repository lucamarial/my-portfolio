import React from 'react'
import SideBar from './Components/SideBar'
import HomePage from './Components/HomePage'
import AboutMe from './Components/AboutMe'
import Projects from './Components/Projects'
import { Switch, Route } from 'react-router-dom'

function App() {
	return (
    <>
      <SideBar />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/about' component={AboutMe} />
        <Route exact path='/projects' component={Projects} />
      </Switch>
    </>
  )
}

export default App