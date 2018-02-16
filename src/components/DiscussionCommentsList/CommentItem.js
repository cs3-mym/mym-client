import React from 'react';

const commentStyle = {
  width: "100%",
  display: "flex",
  alignItems: "center"
}

const textStyle = {
  color: "white"
}

class CommentItem extends React.Component {
  render() {
    return (
      <div style={commentStyle}>
        <p style={textStyle}>Votes</p>
        <p style={textStyle}>Username: this.props.comment.from</p>
        <p style={textStyle}>{this.props.comment.description}</p>
      </div>
    );
  }
}

export default CommentItem;
