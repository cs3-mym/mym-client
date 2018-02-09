import React from 'react';

import {
  NavLink
} from 'react-router-dom';

class TechItem extends React.Component {
  render() {
    return (
      <div style={{width: "100%", marginBottom: "10px", background: "#18192F", display: "flex", alignItems: "center"}}>
        <h4 style={{color: "white"}}>{this.props.tech.name}</h4>
        <p style={{color: "white"}}>{this.props.tech.type}</p>
        <NavLink style={{color: "white"}} to="/welcome">more</NavLink>
      </div>
    );
  }
}

export default TechItem;
