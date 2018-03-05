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
  color: "white"
};

class UserItem extends React.Component {
  render() {
    return (
      <div style={itemStyle}>
        <h4 style={textStyle}>{this.props.user.username}</h4>
        <Link style={textStyle} to={`/user/${this.props.user.username}`}>more</Link>
      </div>
    );
  }
}

export default UserItem;
