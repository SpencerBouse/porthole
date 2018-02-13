import React from 'react';

import NavBar from './NavBar'

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
      </div>
    )
  }
}

export default App;
