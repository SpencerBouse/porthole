import React from 'react'

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faLinkedin from '@fortawesome/fontawesome-free-brands/faLinkedin'
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub'
import faEnvelope from '@fortawesome/fontawesome-free-solid/faEnvelope'

class Contact extends React.Component{
  render(){
    return(
      <div className='contactDiv'>
        <h1>CONTACT</h1>
        <div className='phone'>
          <p>Bouse.spencer@gmail.com</p>
          <p>513-578-2139</p>
        </div>
        <ul className='contactlist'>
          <div className='contact'>
            <FontAwesomeIcon icon={faLinkedin}/>
            <a href='https://www.linkedin.com/in/spencer-bouse-134254139/'>Linkedin</a>
          </div>
          <div className='contact'>
            <FontAwesomeIcon icon={faGithub}/>
            <a href='https://github.com/SpencerBouse'>GitHub</a>
          </div>
          <a className='contact' href="mailto:bouse.spencer@gmail.com?Subject=Hello">
            <FontAwesomeIcon icon={faEnvelope}/>
            <a>Email</a>
          </a>
        </ul>
      </div>
    )
  }
}

export default Contact
