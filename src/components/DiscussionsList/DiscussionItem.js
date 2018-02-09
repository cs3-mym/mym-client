import React from 'react';

import {
  NavLink
} from 'react-router-dom';

class DiscussionItem extends React.Component {
  render() {
    return (
      <div style={{width: "100%", marginBottom: "10px", background: "#18192F", display: "flex"}}>
        <h3 style={{color: "white"}}>{this.props.discussion.title}</h3>
        <p style={{color: "white"}}>{this.props.discussion.category}</p>
        <NavLink style={{color: "white"}} to="/welcome">more</NavLink>
      </div>
    );
  }
}

export default DiscussionItem;
