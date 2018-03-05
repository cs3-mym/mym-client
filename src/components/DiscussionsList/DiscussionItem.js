import React from 'react';

import {
  NavLink
} from 'react-router-dom';

const textStyle = {
  color: "white"
};

const itemStyle = {
  width: "100%",
  marginBottom: "10px",
  background: "#18192F",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "15px"
};

class DiscussionItem extends React.Component {
  render() {
    return (
      <div style={itemStyle}>
        <h3 style={textStyle}>{this.props.discussion.title}</h3>
        <p style={textStyle}>{this.props.discussion.category}</p>
        <NavLink style={textStyle} to={`/discussion/${this.props.discussion._id}`}>more</NavLink>
      </div>
    );
  }
}

export default DiscussionItem;
