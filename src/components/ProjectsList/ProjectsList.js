import React from 'react';

import ProjectItem from './ProjectItem.js';

const listStyle = {width:"100%", display: "flex", flexFlow: "column", alignItems: "center"};

class ProjectList extends React.Component {
  mapProjectsToArr() {
    return this.props.projects.map((proj, index) => {
      return <ProjectItem key={index} id={proj._id} project={proj}/>;
    });
  }

  render() {
    return (
      <div style={listStyle}>
        {this.mapProjectsToArr()}
      </div>
    );
  }
}

export default ProjectList;
