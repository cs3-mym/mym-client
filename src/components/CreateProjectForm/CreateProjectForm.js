import React from 'react';
import axios from 'axios';

// import CreateProjectDetails from './CreateProjectDetails.js';
// import CreateUserStories from './CreateProjectStories.js';
// import CreateProjectInvites from './CreateProjectInvites.js';

import {
  DEV_SERVER_URI
} from '../../variables/connections.js';

const createProjectPath = 'projects/create';

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
        <div style={{width: "100%", display: "flex", flexFlow: "column", alignItems: "center", }}>
          <h2 style={{color: "white"}}>Project Submission Complete</h2>
          <p style={{color: "white"}}>{this.state.project.title} was submitted</p>
          <button onClick={this.handleRetry.bind(this)} style={{background: "#DFAE3B", color: "#18192F"}}>New Project</button>
        </div>
      );
    } else {
      return (
        <div style={{width: "100%", display: "flex", flexFlow: "column", alignItems: "center", }}>
          <h2 style={{color: "white"}}>Create A Project</h2>
          <form style={{width: "100%", border: "1px dotted white", display: "flex", flexFlow: "column", alignItems: "center"}}>
            <p style={{color: "white"}}>Title </p>
            <input type="text" name="title" onChange={this.handleChange.bind(this)} value={this.state.title} style={{background: "#18192F" , border: "0px solid", outline: "none", color: "white"}}/>
            <p style={{color: "white"}}>Banner Message </p>
            <input type="text" name="bannerMessage"  onChange={this.handleChange.bind(this)} value={this.state.bannerMessage} style={{background: "#18192F", border: "0px solid", outline: "none", color: "white"}}/>
            <p style={{color: "white"}}>Description </p>
            <input type="text" name="description"  onChange={this.handleChange.bind(this)} value={this.state.description} style={{background: "#18192F", border: "0px solid", outline: "none", color: "white"}}/>
            <p style={{color: "white"}}>Github Link </p>
            <input type="text" name="github"  onChange={this.handleChange.bind(this)} value={this.state.github} style={{background: "#18192F", border: "0px solid", outline: "none", color: "white"}}/>
            <p style={{color: "white"}}>Status </p>
            <input type="text" name="status"  onChange={this.handleChange.bind(this)} value={this.state.status} style={{background: "#18192F", border: "0px solid", outline: "none", color: "white"}}/>
            <p style={{color: "white"}}>Visibility </p>
            <select type="text" name="visibility" onChange={this.handleChange.bind(this)} value={this.state.visibility}>
              <option value="visible">Visible</option>
              <option value="hidden">Hidden</option>
            </select>
            <p style={{color: "white"}}>Access </p>
            <select type="text" name="access" onChange={this.handleChange.bind(this)} value={this.state.access}>
              <option value="public">Public</option>
              <option value="invite">Invite Only</option>
            </select>
            <p style={{color: "white"}}>Technologies </p>
            <input type="text" name="technologies" onChange={this.handleChange.bind(this)} value={this.state.technologies} style={{background: "#18192F", border: "0px solid", outline: "none", color: "white"}}/>
            <p style={{color: "white"}}>Tags </p>
            <input type="text" name="tags" onChange={this.handleChange.bind(this)} value={this.state.tags} style={{background: "#18192F", border: "0px solid", outline: "none", color: "white"}}/>
            <button style={{background: "#DFAE3B", color: "#18192F"}} onClick={this.handleSubmit.bind(this)}>Submit</button>
          </form>
        </div>
      );
    }
  }

  render() {
    // console.log(this.state);
    return (
      <div style={{width: "46%", background: "#28294f", padding: "20px"}}>
        {this.conditionalRender()}
      </div>
    );
  }
}

export default CreateProjectPage;
