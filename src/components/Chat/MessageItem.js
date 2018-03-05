import React from 'react';

import {
  Link
} from 'react-router-dom';

const itemContainer1 = {
  width: "100%",
  display: "flex",
  background: "lightgray",
  margin: "3px 0"
}

const itemContainer2 = {
  width: "100%",
  display: "flex",
  background: "darkgray",
  margin: "3px 0"
}

class MessageItem extends React.Component {
  render() {
    // console.log(this.props.message);
    let st;
    if (this.props.num%2 === 0) {
      st = itemContainer1;
    } else {
      st = itemContainer2;
    }
    return (
      <div style={st}>
        <p><Link to={`/user/${this.props.author.username}`}>{this.props.author.username}</Link>: {this.props.message}</p>
      </div>
    );
  }
}

export default MessageItem;
