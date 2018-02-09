import React from 'react';

import {
  NavLink
} from 'react-router-dom';

class ProjectItem extends React.Component {
  render() {
    // #18192F
    // #212a49
    return (
      <div style={{width: "100%", marginBottom: "10px", background: "#18192F", display: "flex", alignItems: "center", justifyContent: "space-between"}}>
        <h4 style={{color: "white"}}>{this.props.project.title}</h4>
        <p style={{color: "white"}}>{this.props.project.status}</p>
        <NavLink style={{color: "white"}} to={`/project/${this.props.project._id}`}>more</NavLink>
      </div>
    );
  }
}

export default ProjectItem;
