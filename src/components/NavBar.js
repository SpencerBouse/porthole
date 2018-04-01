import React from 'react'

import ScrollableAnchor from 'react-scrollable-anchor'

class NavBar extends React.Component{
  render(){
    return(
      <div>
        <ul className='navbar'>
          <li><a href='#HOME'>HOME</a></li>
          <li><a href='#PROJECTS'>PROJECTS</a></li>
          <li><a href='#CONTACT'>CONTACT</a></li>
        </ul>
      </div>
    )
  }
}

export default NavBar
