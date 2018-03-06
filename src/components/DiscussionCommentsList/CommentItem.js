import React from 'react';

const commentStyle = {
  width: "100%",
  // display: "flex",
  // alignItems: "center",
  background: "#18192F",
  marginBottom: "5px",
  padding: "15px"
}

const textStyle = {
  color: "white"
}

class CommentItem extends React.Component {
  render() {
    return (
      <div style={commentStyle}>
        <p style={textStyle}>{this.props.comment.from.username}</p>
        <p style={textStyle}>{this.props.comment.description}</p>
      </div>
    );
  }
}

export default CommentItem;
