import React from 'react';

import NavBar from './NavBar'
import ProjectsGroup from './ProjectsGroup'
import Contact from './Contact'

import face from '../images/spencer.jpg'

class App extends React.Component{
  render(){
    return(
      <div>
        <NavBar></NavBar>
        <ul className='titleList'>
          <li>SPENCER</li>
          <li>BOUSE</li>
          <li className='nameBold'>FRONT-END</li>
          <li className='nameBold'>DEVELOPER.</li>
        </ul>
        <img className='face' src={face} alt='My Face!'/>
        <ProjectsGroup></ProjectsGroup>
        <Contact></Contact>
      </div>
    )
  }
}

export default App;
