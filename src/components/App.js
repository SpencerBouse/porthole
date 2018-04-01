import React from 'react';

import NavBar from './NavBar'
import ProjectsGroup from './ProjectsGroup'
import Contact from './Contact'

import face from '../images/spencer.jpg'

import ScrollableAnchor from 'react-scrollable-anchor'

class App extends React.Component{
  render(){
    return(
      <div>
        <ScrollableAnchor id={'HOME'}>
          <NavBar></NavBar>
        </ScrollableAnchor>
        <ul className='titleList'>
          <li>SPENCER</li>
          <li>BOUSE</li>
          <li className='nameBold'>FRONT-END</li>
          <li className='nameBold'>DEVELOPER.</li>
        </ul>
        <img className='face' src={face} alt='My Face!'/>
        <ScrollableAnchor id={'PROJECTS'}>
          <ProjectsGroup></ProjectsGroup>
        </ScrollableAnchor>
        <ScrollableAnchor id={'CONTACT'}>
          <Contact></Contact>
        </ScrollableAnchor>
      </div>
    )
  }
}

export default App;
