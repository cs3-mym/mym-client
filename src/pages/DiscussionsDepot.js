import React from 'react';
import axios from 'axios';

import DiscussionsList from '../components/DiscussionsList/DiscussionsList.js';

import {
  DEV_SERVER_URI
} from '../variables/connections.js';

const findDiscussionsPath = 'discussions/find';

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
        <div style={{width: "100%", display: "flex", flexFlow: "column", alignItems:"center", justifyContent: "center", padding: "20px", border: "1px dotted white"}}>
          <h3 style={{color: "white"}}>Error Loading Discussion List</h3>
          <button onClick={this.handleSubmit.bind(this)}>Retry</button>
        </div>
      );
    } else {
      return (
        <div style={{width: "100%", display: "flex", flexFlow: "column", alignItems:"center", justifyContent: "center", padding: "20px", border: "1px dotted white"}}>
          <DiscussionsList discussions={this.state.discussions}/>
        </div>
      );
    }
  }

  render() {
    return (
      <div style={{width: "100%", background: "lightgray", display: "flex", flexFlow: "column", alignItems: "center"}}>
        <div style={{width: "80%", background: "#28294f", display: "flex", flexFlow: "column", alignItems:"center", justifyContent: "center", padding: "20px"}}>
          <h2 style={{color: "white"}}>Discussions Depot</h2>
          <input value={this.state.input} onChange={this.handleChange.bind(this)} style={{background: "#18192F", border: "0px solid", outline: "none", color: "white"}}/>
          <div style={{display: "flex", flexFlow: "row", width: "100%", justifyContent: "center"}}>
            <p style={{background: "#DFAE3B", color: "#18192F", padding: "5px"}}>Type:Feedback</p>
            <p style={{background: "#DFAE3B", color: "#18192F", padding: "5px"}}>Type:Project Idea</p>
            <p style={{background: "#DFAE3B", color: "#18192F", padding: "5px"}}>Tag:Innovation</p>
          </div>
          <div style={{width: "100%", display: "flex", flexFlow: "row", padding: "30px"}}>
            <div style={{width: "200px", display: "flex", flexFlow: "column", alignItems: "center", border: "1px dotted white"}}>
              <p style={{height:"30px", width: "120px", background: "#DFAE3B", color: "#18192F", padding: "5px"}}>Feedback</p>
              <p style={{height:"30px", width: "120px", background: "#DFAE3B", color: "#18192F", padding: "5px"}}>Tech</p>
              <p style={{height:"30px", width: "120px", background: "#DFAE3B", color: "#18192F", padding: "5px"}}>Ideas</p>
            </div>
            {this.conditionalRender()}
          </div>
        </div>

      </div>
    );
  }
}

export default DiscussionDepot;
