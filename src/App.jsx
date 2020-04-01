import React, { Component } from 'react'
import SideBarToggleButton from './Components/SideBarToggleButton'
import SideBar from './Components/SideBar'
import Backdrop from './Components/Backdrop'
import HomePage from './Components/HomePage'
import AboutMe from './Components/AboutMe'
import Resume from './Components/Resume'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import { Switch, Route } from 'react-router-dom'

class App extends Component {
  state = {
    sideBarOpen: false
  }

  sidebarToggleHandler = () => {
    this.setState((prevState) => {
      return {
        sideBarOpen: !prevState.sideBarOpen
      }
    })
  }

  backdropHandler = () => {
    this.setState({
      sideBarOpen: false
    })
  }

  render() {
    let sideBar;
    let backdrop;

    if (this.state.sideBarOpen) {
      sideBar = <SideBar />
      backdrop = <Backdrop />
    }

    return (
      <>
        {sideBar}
        <SideBarToggleButton  sidebarToggleHandler={this.sidebarToggleHandler} />
        {backdrop}
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
}

export default App