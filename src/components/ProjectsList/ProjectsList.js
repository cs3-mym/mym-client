import React from 'react';

import ProjectItem from './ProjectItem.js';

class ProjectList extends React.Component {
  mapProjectsToArr() {
    return this.props.projects.map((proj, index) => {
      return <ProjectItem key={index} id={proj._id} project={proj}/>;
    });
  }

  render() {
    return (
      <div style={{width:"100%", display: "flex", flexFlow: "column", alignItems: "center"}}>
        {this.mapProjectsToArr()}
      </div>
    );
  }
}

export default ProjectList;
