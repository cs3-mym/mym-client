import React from 'react';
import axios from 'axios';

import DiscussionsList from '../components/DiscussionsList/DiscussionsList.js';

import {
  DEV_SERVER_URI
} from '../variables/connections.js';

const findDiscussionsPath = 'discussions/find';

const pageStyle = {
  width: "100%",
  background: "#212a49",
  display: "flex",
  flexFlow: "column",
  alignItems: "center",
  minHeight: "100vh"
};

const inputStyle = {
  background: "#18192F",
  border: "0px solid",
  outline: "none",
  color: "white"
};

const containerStyle = {
  width: "100%",
  display: "flex",
  flexFlow: "column",
  alignItems: "center",
  padding: "20px"
};

const textStyle = {
  color: "white"
};

const labelStyle = {
  background: "#DFAE3B",
  color: "#18192F",
  padding: "5px"
};

const filterLabelStyle = {
  height: "30px",
  width: "120px",
  background: "#DFAE3B",
  color: "#18192F",
  padding: "5px"
};

const filterContainerStyle = {
  width: "200px",
  display: "flex",
  flexFlow: "column",
  alignItems: "center"
};

const containerStyle2 = {
  width: "100%",
  display: "flex",
  flexFlow: "row",
  padding: "30px"
};

const cardStyle = {
  width: "80%",
  background: "#212a49",
  display: "flex",
  flexFlow: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px"
};

const recentSearchContainerStyle = {
  display: "flex",
  flexFlow: "row",
  width: "100%",
  justifyContent: "center"
};

const errorContainerStyle = {
  width: "100%",
  display: "flex",
  flexFlow: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px",
  border: "1px dotted white"
};

class DiscussionDepot extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      discussions: [],
      input: '',
      error: false
    }
  }

  componentDidMount() {
    console.log("DiscussionDepot componentDidMount()");
    const options = {
      options: {}
    };
    this._getDiscussions(DEV_SERVER_URI + findDiscussionsPath, options);
  }

  _setError(e) {
    console.log(e.message);
    this.setState({
      error: true
    });
  }

  _getDiscussions(path, o) {
    console.log("DiscussionDepot getDiscussions()");
    axios.post(path, o)
      .then((res) => {
        this.setState({
          discussions: res.data,
          error: false
        });
      })
      .catch((err) => {
        this._setError(err);
      })
  }

  _createDiscussion(path, discussion) {
    console.log("DiscussionDepot createDiscussion()");
  }

  _parseSearchField(str) {

  }

  handleChange(event) {
    event.preventDefault();
    console.log("DiscussionDepot handleChange()");

    this.setState({
      input: event.target.value
    });
  }

  handleSubmit() {
    console.log("DiscussionDepot handleSubmit()");
    const options = {
      options: {}
    };
    this._getDiscussions(DEV_SERVER_URI + findDiscussionsPath, options);
  }

  conditionalRender() {
    if (this.state.error) {
      return (
        <div style={errorContainerStyle}>
          <h3 style={textStyle}>Error Loading Discussion List</h3>
          <button onClick={this.handleSubmit.bind(this)}>Retry</button>
        </div>
      );
    } else {
      return (
        <div style={containerStyle}>
          <DiscussionsList discussions={this.state.discussions}/>
        </div>
      );
    }
  }

  render() {
    // #212a49
    // #28294f
    return (
      <div style={pageStyle}>
        <div style={cardStyle}>
          <h2 style={textStyle}>Discussions Depot</h2>
          <input value={this.state.input} onChange={this.handleChange.bind(this)} style={inputStyle}/>
          <div style={recentSearchContainerStyle}>
            <p style={labelStyle}>Type:Feedback</p>
            <p style={labelStyle}>Type:Project Idea</p>
            <p style={labelStyle}>Tag:Innovation</p>
          </div>
          <div style={containerStyle2}>
            <div style={filterContainerStyle}>
              <p style={filterLabelStyle}>Feedback</p>
              <p style={filterLabelStyle}>Tech</p>
              <p style={filterLabelStyle}>Ideas</p>
            </div>
            {this.conditionalRender()}
          </div>
        </div>

      </div>
    );
  }
}

export default DiscussionDepot;
