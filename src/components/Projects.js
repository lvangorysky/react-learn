import React, { Component } from 'react';
import ProjectItem from './ProjectItem';


class Projects extends Component {
  
  render() {
    let projectItems;
    if(this.props.projects) {
      projectItems = this.props.projects.map( pro => {
        return (
          <ProjectItem key={pro.title} project={pro}/>
        )
      })
    }
    return (
      <div className="Projects">
        {projectItems}
      </div>
    );
  }
}

export default Projects;
