import React from 'react';

import {
  Link
} from 'react-router-dom';

const itemStyle = {
  width: "100%",
  marginBottom: "10px",
  background: "#18192F",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between"
};

const textStyle = {
  color: 'white'
};

class TechItem extends React.Component {
  render() {
    return (
      <div style={itemStyle}>
        <h4 style={textStyle}>{this.props.tech.name}</h4>
        <p style={textStyle}>{this.props.tech.type}</p>
        <Link style={textStyle} to={`/tech/${this.props.tech._id}`}>more</Link>
      </div>
    );
  }
}

export default TechItem;
