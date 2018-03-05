import React from 'react';

import {
  NavLink
} from 'react-router-dom';

const itemStyle = {
  width: "100%",
  marginBottom: "10px",
  background: "#18192F",
  display: "flex",
  flexFlow: "column",
  // alignItems: "center",
  // justifyContent: "space-between",
  padding: "15px"
};

const textStyle = {
  color: "white",
  lineHeight: 1,
  fontSize: "1em",
  margin: "4px"
};

const headerStyle = {
  lineHeight: 1,
  fontSize: "1.6em",
  color: "white",
  margin: "4px"
}

class ProjectItem extends React.Component {
  render() {
    // #18192F
    // #212a49
    return (
      <div style={itemStyle}>
        <div style={{width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center"}}>
          <h4 style={headerStyle}>{this.props.project.title} </h4>
          <NavLink style={textStyle} to={`/project/${this.props.project._id}`}>more</NavLink>
        </div>
        <p style={textStyle}>{this.props.project.participants.length.toString()} Members</p>
        <p style={textStyle}>{this.props.project.github}</p>
        <p style={textStyle}>{this.props.project.status}</p>
        <p style={textStyle}>Tech: {this.props.project.technologies}</p>
      </div>
    );
  }
}

export default ProjectItem;
