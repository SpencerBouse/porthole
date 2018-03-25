import React from 'react'

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faLinkedin from '@fortawesome/fontawesome-free-brands/faLinkedin'
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub'
import faEnvelope from '@fortawesome/fontawesome-free-solid/faEnvelope'

class Contact extends React.Component{
  render(){
    return(
      <div className='contactDiv'>
        <h1>Contact!</h1>
        <ul className='contactlist'>
          <div className='contact'>
            <FontAwesomeIcon icon={faLinkedin}/>
            <li className='contactLink'><a href='https://www.linkedin.com/in/spencer-bouse-134254139/'>Linkedin</a></li>
          </div>
          <div className='contact'>
            <FontAwesomeIcon icon={faGithub}/>
            <li className='contactLink'><a href='https://github.com/SpencerBouse'>GitHub</a></li>
          </div>
          <div className='contact'>
            <FontAwesomeIcon icon={faEnvelope}/>
            <li>Email</li>
          </div>
        </ul>
      </div>
    )
  }
}

export default Contact
