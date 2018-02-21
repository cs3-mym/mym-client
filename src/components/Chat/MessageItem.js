import React from 'react';

import {
  Link
} from 'react-router-dom';

const itemContainer = {
  width: "100%",
  display: "flex"
}

class MessageItem extends React.Component {
  render() {
    console.log(this.props.message);
    return (
      <div style={itemContainer}>
        <p><Link to={`/user/${this.props.author.username}`}>{this.props.author.username}</Link>: {this.props.message}</p>
      </div>
    );
  }
}

export default MessageItem;
