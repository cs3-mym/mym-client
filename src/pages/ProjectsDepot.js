import React from 'react';
import axios from 'axios';

import ProjectsList from '../components/ProjectsList/ProjectsList.js';

import {
  DEV_SERVER_URI
} from '../variables/connections.js';

const findProjectsPath = 'projects/find';

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

  handleChange(event) {
    event.preventDefault();
    console.log("DevelopersDepot handleChange()");
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
        <div style={{width: "46%", background: "#18192F", display: "flex", flexFlow: "column", alignItems:"center", justifyContent: "center", padding: "20px"}}>
          <h3 style={{color: "white"}}>Error Loading Projects</h3>
          <button onClick={this.handleSubmit.bind(this)}>Retry</button>
        </div>
      );
    } else {
      // #18192F
      //#28294f
      // #313e6d
      // #48578e
      return (
        <div style={{width: "46%", background: "#212a49", display: "flex", flexFlow: "column", alignItems:"center", justifyContent: "center", padding: "20px"}}>
          <h2 style={{color: "white"}}>Developers Depot</h2>
          <input value={this.state.input} onChange={this.handleChange.bind(this)} style={{background: "#18192F", border: "0px solid", outline: "none", color: "white"}}/>
          <div style={{display: "flex", flexFlow: "row", width: "100%", justifyContent: "space-between"}}>
            <p style={{background: "#DFAE3B", color: "#212a49", padding: "5px"}}>Tech:NodeJS</p>
            <p style={{background: "#DFAE3B", color: "#212a49", padding: "5px"}}>Tech:MongoDB</p>
            <p style={{background: "#DFAE3B", color: "#212a49", padding: "5px"}}>Tech:ExpressJS</p>
            <p style={{background: "#DFAE3B", color: "#212a49", padding: "5px"}}>Tech:Axios</p>
            <p style={{background: "#DFAE3B", color: "#212a49", padding: "5px"}}>Tech:Redux</p>
          </div>
          <ProjectsList projects={this.state.projects}/>
        </div>
      );
    }
  }

  render() {
    return (
      <div style={{width: "100%", background: "#212a49", display: "flex", flexFlow: "column", alignItems: "center", minHeight: "100vh"}}>
        {this.conditionalRender()}
      </div>
    );
  }
}

export default DevelopersDepot;
