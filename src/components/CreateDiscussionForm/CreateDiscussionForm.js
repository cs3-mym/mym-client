import React from 'react';
import axios from 'axios';

import {
  DEV_SERVER_URI
} from '../../variables/connections.js';

const createDiscussionPath = 'discussions/create';

//TODO: Update page style. some props not needed.
const pageStyle = {
  width: "46%",
  display: "flex",
  flexFlow: "column",
  alignItems: "center",
  boxShadow: "0px 0px 5px 2px #18192F",
  background: "#313e6d",
  border: "2px solid #48578e",
  padding: "10px"
};

const textStyle = {
  color: "white"
};

const buttonStyle = {
  background: "#DFAE3B",
  color: "#18192F"
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
  alignItems: "center"
};

class CreateDiscussionForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
      objectives: '',
      visibility: 'visible',
      access: 'public',
      tags: '',
      category: '',
      discussion: '',
      submitted: false
    }
  }

  handleChange(event) {
    event.preventDefault();
    let obj = {};
    obj[event.target.name] = event.target.value;
    this.setState(obj);
  }

  handleSubmit(event) {
    console.log("CreateDiscussionForm handleSubmit()");
    event.preventDefault();
    axios.post(DEV_SERVER_URI + createDiscussionPath, {
        title: this.state.title,
        description: this.state.description,
        objectives: this.state.objectives,
        visibility: this.state.visibility,
        access: this.state.access,
        tags: this.state.tags,
        category: this.state.category
      })
      .then((res) => {
        this.setState({
          discussion: res.data,
          submitted: true
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  handleRetry() {
    this.setState({
      submitted: false,
      discussion: ''
    });
  }

  conditionalRender() {
    if (this.state.submitted) {
      return (
        <div style={containerStyle}>
          <h2 style={textStyle}>Discussion Submission Complete</h2>
          <p style={textStyle}>{this.state.discussion.title} was submitted</p>
          <button onClick={this.handleRetry.bind(this)} style={buttonStyle}>New Discussion</button>
        </div>
      );
    } else {
      return (
        <div style={containerStyle}>
          <h2 style={textStyle}>Start A Discussion</h2>
          <form style={containerStyle}>
            <p style={textStyle}>Title </p>
            <input type="text" name="title" onChange={this.handleChange.bind(this)} value={this.state.title} style={inputStyle}/>
            <p style={textStyle}>Description </p>
            <input type="text" name="description"  onChange={this.handleChange.bind(this)} value={this.state.description} style={inputStyle}/>
            <p style={textStyle}>Objectives </p>
            <input type="text" name="objectives"  onChange={this.handleChange.bind(this)} value={this.state.objectives} style={inputStyle}/>
            <p style={textStyle}>Visibility </p>
            <select type="text" name="visibility" onChange={this.handleChange.bind(this)} value={this.state.visibility}>
              <option value="visible">Visible</option>
              <option value="hidden">Hidden</option>
            </select>
            <p style={textStyle}>Access </p>
            <select type="text" name="access" onChange={this.handleChange.bind(this)} value={this.state.access}>
              <option value="public">Public</option>
              <option value="invite">Invite Only</option>
            </select>
            <p style={textStyle}>Category </p>
            <input type="text" name="category" onChange={this.handleChange.bind(this)} value={this.state.category} style={inputStyle}/>
            <p style={textStyle}>Tags </p>
            <input type="text" name="tags" onChange={this.handleChange.bind(this)} value={this.state.tags} style={inputStyle}/>
            <button style={buttonStyle} onClick={this.handleSubmit.bind(this)}>Submit</button>
          </form>
        </div>
      );
    }
  }

  render() {
    // #28294f
    return (
      <div style={{width: "46%", display: "flex", flexFlow: "column", alignItems: "center",boxShadow: "0px 0px 5px 2px #18192F", background: "#313e6d", border: "2px solid #48578e", padding: "10px"}}>
        {this.conditionalRender()}
      </div>
    );
  }
}

export default CreateDiscussionForm;
