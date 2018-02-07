import React from 'react';

class ProjectItem extends React.Component {
  render() {
    return (
      <div style={{width: "100%", border: "2px solid #DFAE3B", background: "#18192F", display: "flex", alignItems: "center"}}>
        <h4 style={{color: "white"}}>{this.props.project.title}</h4>
        <p style={{color: "white"}}>{this.props.project.status}</p>
      </div>
    );
  }
}

export default ProjectItem;
