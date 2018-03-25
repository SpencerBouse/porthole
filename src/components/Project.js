import React from 'react'
import projectsdata from '../projects-data'

class Project extends React.Component{
  constructor(){
    super()

    this.renderProjects = this.renderProjects.bind(this)

    this.state ={
      projects: projectsdata
    }
  }

  renderProjects(key){
    const project = this.state.projects[key]
    return (
      <div className="project" key={key}>
        <h1>{project.name}</h1>
        <p>{project.desc}</p>
        <img src={project.image} alt='project'/>
      </div>
    )
  }

  render(){
    const projects = Object.keys(this.state.projects)

    return(
      <div>
          {projects.map(this.renderProjects)}
      </div>
    )
  }
}

export default Project
