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
        <ul className='contactlist'>
          <div className='contact'>
            <FontAwesomeIcon icon={faLinkedin}/>
            <a href='https://www.linkedin.com/in/spencer-bouse-134254139/'>Linkedin</a>
          </div>
          <div className='contact'>
            <FontAwesomeIcon icon={faGithub}/>
            <a href='https://github.com/SpencerBouse'>GitHub</a>
          </div>
          <div className='contact'>
            <FontAwesomeIcon icon={faEnvelope}/>
            <a>Email</a>
          </div>
        </ul>
      </div>
    )
  }
}

export default Contact
