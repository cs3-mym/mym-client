import React from 'react';
import axios from 'axios';

// import {
//   connect
// } from 'react-redux';

import {
  Link
} from 'react-router-dom';

import DiscussionCommentsList from '../components/DiscussionCommentsList/DiscussionCommentsList.js';
import CreateComment from '../components/DiscussionCreateComment/CreateComment.js';

import {
  DEV_SERVER_URI
} from '../variables/connections.js';

const getDiscussionPath = 'discussion/';
const getCommentsForDiscussionPath = 'comments/find';
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
  alignItems: "center",
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
      error: false,
      comments: [],
      errorComments: false
    }
  }

  componentDidMount() {
    this._getDiscussion();
    this._getComments();
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

  _getComments() {
    const options = {
      options: {
        query: {
          discussion: this.props.match.params.discussionID
        },
        populate: [{
          path: 'from',
          select: 'username'
        }]
      }
    };

    axios.post(DEV_SERVER_URI + getCommentsForDiscussionPath, options)
      .then((res) => {
        this.setState({
          comments: res.data,
          errorComments: false,
        });
      })
      .catch((err) => {
        console.log(err.message);
        this.setState({
          errorComments: true
        });
      });
  }

  _handleRefreshButton() {
    this._getComments();
  }

  conditionalStatus() {
    if (this.state.errorComments) {
      return <p style={textStyle}>unable to load items</p>;
    }
  }

  render() {
    return (
      <div style={pageStyle}>
        <Link style={textStyle} to="/discussions/search">back</Link>
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
            <h3 style={textStyle}>Comments <button onClick={this._handleRefreshButton.bind(this)}>Refresh</button></h3>
            {this.conditionalStatus()}
            <CreateComment discussion={this.state.discussion}/>
            <DiscussionCommentsList comments={this.state.comments}/>
          </div>
        </div>
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     token: state.token
//   };
// }
//
// export default connect(mapStateToProps, null)(DiscussionDetailsPage);
export default DiscussionDetailsPage;
