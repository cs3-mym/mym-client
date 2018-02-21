import React from 'react';

import MessageItem from './MessageItem.js';

const listContainer = {
  width: "100",
  display: "flex",
  flexFlow: "column",
  // alignItems: "center",
  overflow: 'auto',
  maxHeight: "600px",
}

class MessagesList extends React.Component {
  mapMessages() {
    return this.props.messages.map((m) => {
      return <MessageItem key={m.id} author={m.author} message={m.message}/>
    });
  }

  render() {
    // console.log(this.props.messages);
    return (
      <div style={listContainer}>
        <h3>Messages</h3>
        {this.mapMessages()}
      </div>
    );
  }
}

export default MessagesList;
