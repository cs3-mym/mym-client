import React from 'react';
import axios from 'axios';

// import CreateProjectDetails from './CreateProjectDetails.js';
// import CreateUserStories from './CreateProjectStories.js';
// import CreateProjectInvites from './CreateProjectInvites.js';

import {
  NavLink
} from 'react-router-dom';

import {
  DEV_SERVER_URI
} from '../../variables/connections.js';

const createProjectPath = 'projects/create';

const pageStyle = {
  width: "46%",
  background: "#313e6d",
  boxShadow: "0px 0px 5px 2px #18192F",
  border: "2px solid #48578e",
  padding: "20px"
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

class CreateProjectPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      step: 1,
      title: '',
      description: '',
      github: '',
      status: '',
      bannerMessage: '',
      visibility: 'visible',
      access: 'public',
      tags: '',
      technologies: '',
      submitted: false,
      project: ''
    }
  }

  handleChange(event) {
    event.preventDefault();
    let obj = {};
    obj[event.target.name] = event.target.value;
    // console.log(event.target.name);
    this.setState(obj);
  }

  handleSubmit(event) {
    console.log("Submit Project Button Pressed");
    event.preventDefault();
    axios.post(DEV_SERVER_URI + createProjectPath, {
        title: this.state.title,
        description: this.state.description,
        github: this.state.github,
        status: this.state.status,
        bannerMessage: this.state.bannerMessage,
        visibility: this.state.visibility,
        access: this.state.access,
        tags: this.state.tags,
        technologies: this.state.technologies
      })
      .then((res) => {
        // console.log(res.data);
        this.setState({
          project: res.data,
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
      project: ''
    });
  }

  conditionalRender() {
    if (this.state.submitted) {
      return (
        <div style={containerStyle}>
          <h2 style={textStyle}>Project Submission Complete</h2>
          <p style={textStyle}>{this.state.project.title} was submitted</p>
          <NavLink style={textStyle} to={`project/${this.state.project._id}`}>Details</NavLink>
          <button onClick={this.handleRetry.bind(this)} style={buttonStyle}>New Project</button>
        </div>
      );
    } else {
      return (
        <div style={containerStyle}>
          <h2 style={textStyle}>Create A Project</h2>
          <form style={containerStyle}>
            <p style={textStyle}>Title </p>
            <input type="text" name="title" onChange={this.handleChange.bind(this)} value={this.state.title} style={inputStyle}/>
            <p style={textStyle}>Banner Message </p>
            <input type="text" name="bannerMessage"  onChange={this.handleChange.bind(this)} value={this.state.bannerMessage} style={inputStyle}/>
            <p style={textStyle}>Description </p>
            <input type="text" name="description"  onChange={this.handleChange.bind(this)} value={this.state.description} style={inputStyle}/>
            <p style={textStyle}>Github Link </p>
            <input type="text" name="github"  onChange={this.handleChange.bind(this)} value={this.state.github} style={inputStyle}/>
            <p style={textStyle}>Status </p>
            <input type="text" name="status"  onChange={this.handleChange.bind(this)} value={this.state.status} style={inputStyle}/>
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
            <p style={textStyle}>Technologies </p>
            <input type="text" name="technologies" onChange={this.handleChange.bind(this)} value={this.state.technologies} style={inputStyle}/>
            <p style={textStyle}>Tags </p>
            <input type="text" name="tags" onChange={this.handleChange.bind(this)} value={this.state.tags} style={inputStyle}/>
            <button style={buttonStyle} onClick={this.handleSubmit.bind(this)}>Submit</button>
          </form>
        </div>
      );
    }
  }

  render() {
    // console.log(this.state);
    // #313e6d
    // #28294f
    return (
      <div style={pageStyle}>
        {this.conditionalRender()}
      </div>
    );
  }
}

export default CreateProjectPage;
