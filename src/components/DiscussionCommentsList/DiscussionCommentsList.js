import React from 'react';

import CommentItem from './CommentItem.js';

const cardStyle = {
  width: "100%",
  display: "flex",
  flexFlow: "column",
}

// const textStyle = {
//   color: "white",
// }

class DiscussionCommentsList extends React.Component {
  mapComments() {
    return this.props.comments.map((comment, index) => {
      return <CommentItem key={comment._id} id={comment._id} comment={comment}/>
    });
  }

  render() {
    return (
      <div style={cardStyle}>
        {this.mapComments()}
      </div>
    );
  }
}

export default DiscussionCommentsList;
