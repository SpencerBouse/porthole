import React from 'react'
import projectsdata from '../projects-data'
import Modal from 'react-modal';

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faTimes from '@fortawesome/fontawesome-free-solid/faTimes'

Modal.setAppElement('#main');

class Project extends React.Component{
  constructor(){
    super()

    this.renderProjects = this.renderProjects.bind(this)
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)

    this.state ={
      projects: projectsdata,
      modalIsOpen: false,
      imgSource: null
    }
  }
  openModal(e){
    this.setState({modalIsOpen: true})
    this.setState({imgSource:e})
  }
  closeModal(e){
    this.setState({modalIsOpen:false})
  }

  renderProjects(key){
    const project = this.state.projects[key]

    return (
      <div className="project" key={key}>
        <h1 href='{project.link}'>{project.name}</h1>
        <p>{project.desc}</p>
        <img src={project.image} alt='project' onClick={this.openModal.bind(this, project.image)}/>
      </div>
    )
  }

  render(){
    const projects = Object.keys(this.state.projects)

    return(
      <div>
          {projects.map(this.renderProjects)}
          <Modal isOpen={this.state.modalIsOpen} contentLabel='test Modal'>
            <FontAwesomeIcon icon={faTimes} className='modalClose' onClick={this.closeModal}/>
            <img className='modalImg' src={this.state.imgSource}/>
          </Modal>
      </div>
    )
  }
}

export default Project
