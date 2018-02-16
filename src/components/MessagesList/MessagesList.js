import React from 'react';

import MessageItem from './MessageItem.js';

const listStyle = {
  width: "100%",
  display: "flex",
  flexFlow: "column",
  alignItems: "center"
}

class MessagesList extends React.Component {
  mapMessages() {
    return this.props.messages.map((m, index) => {
      return <MessageItem key={index} id={m._id} message={m} />;
    });
  }

  render() {
    return (
      <div style={listStyle}>
        {this.mapMessages()}
      </div>
    );
  }
}

export default MessagesList;
