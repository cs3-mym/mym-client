import React from 'react';
import axios from 'axios';

import {
  connect
} from 'react-redux';

import {
  Link
} from 'react-router-dom';

import UnableToLoad from '../components/UnableToLoad/UnableToLoad.js';
import DiscussionCommentsList from '../components/DiscussionCommentsList/DiscussionCommentsList.js';

import {
  DEV_SERVER_URI
} from '../variables/connections.js';

const getDiscussionPath = 'discussion/';
// const addDiscussionPath = '';

const defaultDiscussion = {
  title: 'untitled',
  description: 'n/a',
  objectives: 'n/a',
  visibility: 'n/a',
  access: 'n/a',
  category: 'n/a',
  tags: 'n/a',
  comments: []
}

const cardStyle = {
  width: "46%",
  display: "flex",
  flexFlow: "column",
  background: "#313e6d",
  color: "white",
  marginBottom: "10px",
  // boxShadow: "3px 3px #48578e",
  boxShadow: "0px 0px 5px 2px #18192F",
  border: "2px solid #48578e",
  padding: "20px"
}

const textStyle = {
  color: "white",
}

const pageStyle = {
  width: "100%",
  display: "flex",
  flexFlow: "column",
  alignItems: "center",
  minHeight: "100vh",
  background: "#212a49"
}

class DiscussionDetailsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      discussionID: '',
      discussion: defaultDiscussion,
      error: false
    }
  }

  componentDidMount() {
    this._getDiscussion();
  }

  _getDiscussion() {
    console.log("DiscussionDetails _getDiscussion()");

    const dID = this.props.match.params.discussionID;
    axios.get(DEV_SERVER_URI + getDiscussionPath + dID)
      .then((res) => {
        this.setState({
          discussion: res.data,
          discussionID: dID
        });
      })
      .catch((err) => {
        console.log(err.message);
        this.setState({
          error: true
        });
      });
  }

  conditionalRender() {
    if (this.state.error) {
      return <UnableToLoad/>;
    } else {
      return (
        <div style={pageStyle}>
          <div style={cardStyle}>
            <h3 style={textStyle}>{this.state.discussion.title}</h3>
            <p style={textStyle}>Description: {this.state.discussion.description}</p>
            <p style={textStyle}>Objectives: {this.state.discussion.objectives}</p>
            <p style={textStyle}>Visibility: {this.state.discussion.visibility} Access: {this.state.discussion.access}</p>
            <p style={textStyle}>Category: {this.state.discussion.category}</p>
            <p style={textStyle}>Tags: {this.state.discussion.tags}</p>
          </div>
          <div style={cardStyle}>
            <h3 style={textStyle}>Comments</h3>
            <DiscussionCommentsList comments={this.state.discussion.comments}/>
          </div>
        </div>
      );
    }
  }

  render() {
    return (
      <div style={pageStyle}>
        <Link style={textStyle} to="/discussions/search">back</Link>
        {this.conditionalRender()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state
  };
}

export default connect(mapStateToProps, null)(DiscussionDetailsPage);
