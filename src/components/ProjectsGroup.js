import React from 'react'

import Project from './Project'

class ProjectsGroup extends React.Component{
  render(){
    return(
      <div className='ProjectsDiv'>
        <h1>PROJECTS</h1>
        <Project></Project>
      </div>
    )
  }
}

export default ProjectsGroup
