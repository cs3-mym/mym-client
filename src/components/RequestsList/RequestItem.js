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
  color: "white"
};

class RequestItem extends React.Component {
  render() {
    return (
      <div style={itemStyle}>
        <h4 style={textStyle}>{this.props.request.title}</h4>
        <p style={textStyle}>{this.props.request.category}</p>
        <Link style={textStyle} to={`/request/${this.props.request._id}`}>more</Link>
      </div>
    );
  }
}

export default RequestItem;
