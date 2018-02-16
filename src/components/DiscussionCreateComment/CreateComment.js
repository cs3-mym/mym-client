import React from 'react';
import axios from 'axios';

import {
  connect
} from 'react-redux';

import {
  DEV_SERVER_URI
} from '../../variables/connections.js';

const createCommentPath = 'comments/create';

const createCommentContainer = {
  width: "100%",
  display: "flex",
  flexFlow: "column",
  alignItems: "center"
}

const textStyle = {
  color: "white"
}

const textareaStyle = {
  marginBottom: "5px"
}

class CreateComment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      commentText: '',
      error: false,
      submitted: false
    }
  }

  _handleTextOnChange(event) {
    this.setState({
      commentText: event.target.value
    });
  }

  _handleSubmit() {
    console.log("CreateComment _handleSubmit()");

    const obj = {
      token: this.props.token,
      description: this.state.commentText,
      discussionID: this.props.discussion._id
    }

    axios.post(DEV_SERVER_URI + createCommentPath, obj)
      .then((res) => {
        console.log("Success: Comment Created");
        this.setState({
          error: false,
          submitted: true,
          commentText: ''
        });
      })
      .catch((err) => {
        console.log(err.message);
        this.setState({
          error: true,
          submitted: true
        });
      });
  }

  conditionalRender() {
    if (this.state.submitted) {
      if (this.state.error) {
        return (
          <p style={textStyle}>Error: Comment was not created</p>
        );
      } else {
        return (
          <p style={textStyle}>Success: Comment created</p>
        );
      }
    }
  }

  render() {
    return (
      <div style={createCommentContainer}>
        {this.conditionalRender()}
        <textarea style={textareaStyle} value={this.state.commentText} onChange={this._handleTextOnChange.bind(this)}></textarea>
        <button onClick={this._handleSubmit.bind(this)}>Submit</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state
  }
}

export default connect(mapStateToProps, null)(CreateComment);
