import React from 'react';
import axios from 'axios';

import ProjectsList from '../components/ProjectsList/ProjectsList.js';

import {
  DEV_SERVER_URI
} from '../variables/connections.js';

const findProjectsPath = 'projects/find';

const textStyle = {
  color: "white"
}

const errorContainer = {
  width: "46%",
  background: "#18192F",
  display: "flex",
  flexFlow: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px"
};
const projectsContainer = {
  width: "46%",
  background: "#212a49",
  display: "flex",
  flexFlow: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px"
};
const recentSearchContainer = {
  display: "flex",
  flexFlow: "row",
  width: "100%",
  justifyContent: "space-between"
};

const searchLabelStyle = {
  background: "#DFAE3B",
  color: "#212a49",
  padding: "5px"
};
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
class DevelopersDepot extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: [],
      input: '',
      error: false
    }
  }

  componentDidMount() {
    console.log("DevelopersDepot componentDidMount()");
    axios.post(DEV_SERVER_URI + findProjectsPath, {
        options: {}
      })
      .then((res) => {
        this.setState({
          projects: res.data,
          error: false
        });
      })
      .catch((err) => {
        console.log(err.message);
        this._setError();
      });
  }

  _parseSearchField(str) {

  }

  _setError() {
    this.setState({
      error: true
    });
  }

  _resetError() {
    this.setState({
      error: false
    });
  }

  filterProjects() {
    if (this.state.input) {
      return this.state.projects.filter((project) => {
        if (project.title.toLowerCase().includes(this.state.input)) {
          return true;
        }
        return false;
      });
    } else {
      return this.state.projects;
    }
  }

  handleChange(event) {
    // event.preventDefault();
    // console.log("DevelopersDepot handleChange()");
    this.setState({
      input: event.target.value
    });
  }

  handleSubmit() {
    console.log("DevelopersDepot handleSubmit()");
    axios.post(DEV_SERVER_URI + findProjectsPath, {
        options: {}
      })
      .then((res) => {
        this.setState({
          projects: res.data,
          error: false
        });
      })
      .catch((err) => {
        console.log(err.message);
        this._setError();
      });
  }

  conditionalRender() {
    if (this.state.error) {
      return (
        <div style={errorContainer}>
          <h3 style={textStyle}>Error Loading Projects</h3>
          <button onClick={this.handleSubmit.bind(this)}>Retry</button>
        </div>
      );
    } else {
      // #18192F
      //#28294f
      // #313e6d
      // #48578e
      return (
        <div style={projectsContainer}>
          <h2 style={textStyle}>Developers Depot</h2>
          <input value={this.state.input} onChange={this.handleChange.bind(this)} style={inputStyle}/>
          <div style={recentSearchContainer}>
            <p style={searchLabelStyle}>Tech:NodeJS</p>
            <p style={searchLabelStyle}>Tech:MongoDB</p>
            <p style={searchLabelStyle}>Tech:ExpressJS</p>
            <p style={searchLabelStyle}>Tech:Axios</p>
            <p style={searchLabelStyle}>Tech:Redux</p>
          </div>
          <ProjectsList projects={this.filterProjects()}/>
        </div>
      );
    }
  }

  render() {
    return (
      <div style={pageStyle}>
        {this.conditionalRender()}
      </div>
    );
  }
}

export default DevelopersDepot;
