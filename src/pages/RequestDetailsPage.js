import React from 'react';
import axios from 'axios';

import {
  Link
} from 'react-router-dom';

import UnableToLoad from '../components/UnableToLoad/UnableToLoad.js';

import {
  DEV_SERVER_URI
} from '../variables/connections.js';

const getRequestPath = 'requests/';

const defaultRequest = {
  title: 'untitled',
  description: 'n/a',
  project: {
    title: 'n/a'
  },
  creator: {
    username: "n/a"
  },
  category: 'n/a',
  type: 'n/a',
  tags: 'n/a',
  technology: 'n/a'
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

class RequestDetailsPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      requestID: '',
      request: defaultRequest,
      error: false
    }
  }

  componentDidMount() {
    this._getRequest();
  }

  _getRequest() {
    const rID = this.props.match.params.requestID;
    axios.get(DEV_SERVER_URI + getRequestPath + rID)
      .then((res) => {
        this.setState({
          request: res.data,
          error: false
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
            <h3 style={textStyle}>{this.state.request.title}</h3>
            <p style={textStyle}>Description: {this.state.request.description}</p>
            <p style={textStyle}>Project: <Link style={textStyle} to={{pathname: `/project/${this.state.request.project._id}`}}>{this.state.request.project.title}</Link></p>
            <p style={textStyle}>Creator: <Link style={textStyle} to={{pathname: `/user/${this.state.request.creator.username}`}}>{this.state.request.creator.username}</Link></p>
            <p style={textStyle}> Technology: {this.state.request.technolgy}</p>
            <p style={textStyle}> Category: {this.state.request.category}</p>
            <p style={textStyle}> Type: {this.state.request.type}</p>
            <p style={textStyle}> Tags: {this.state.request.tags}</p>
          </div>
        </div>
      );
    }
  }

  render() {
    return (
      <div style={pageStyle}>
        <Link style={textStyle} to="/requests/search">back</Link>
        {this.conditionalRender()}
      </div>
    );
  }
}

export default RequestDetailsPage;
