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
  justifyContent: "space-between",
  padding: "15px"
};

const textStyle = {
  color: "white",
  margin: "4px 0"
};

const headerStyle = {
  color: "white",
  margin: "6px 0"
}


class RequestItem extends React.Component {
  render() {
    return (
      <div style={itemStyle}>
        <h4 style={headerStyle}>{this.props.request.title}</h4>
        <p style={textStyle}>{this.props.request.category}</p>
        <Link style={textStyle} to={`/request/${this.props.request._id}`}>more</Link>
      </div>
    );
  }
}

export default RequestItem;
