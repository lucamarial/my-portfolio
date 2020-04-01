import React from 'react'
import SideBarToggleButton from './Components/SideBarToggleButton'
import SideBar from './Components/SideBar'
import HomePage from './Components/HomePage'
import AboutMe from './Components/AboutMe'
import Resume from './Components/Resume'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import { Switch, Route } from 'react-router-dom'

const App = () => {
	return (
    <>
      <SideBar />
      <SideBarToggleButton />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/about' component={AboutMe} />
        <Route exact path='/resume' component={Resume} />
        <Route exact path='/projects' component={Projects} />
        <Route exact path='/contact' component={Contact} />
      </Switch>
    </>
  )
}

export default App