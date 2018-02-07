import React from 'react';

class DiscussionItem extends React.Component {
  render() {
    return (
      <div style={{width: "100%", display: "flex", border: "2px solid white"}}>
        <h3 style={{color: "white"}}>{this.props.discussion.title}</h3>
        <p style={{color: "white"}}>{this.props.discussion.category}</p>
      </div>
    );
  }
}

export default DiscussionItem;
