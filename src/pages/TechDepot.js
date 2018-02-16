import React from 'react';
import axios from 'axios';

import TechList from '../components/TechList/TechList.js';

import {
  DEV_SERVER_URI
} from '../variables/connections.js';

const findTechPath = 'techs/find';
const textStyle = {
  color: "white"
}
const recentSearchContainer = {
  display: "flex",
  flexFlow: "row",
  width: "100%",
  justifyContent: "space-between"
};
const searchLabelStyle = {
  background: "#DFAE3B",
  color: "#18192F",
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
const errorContainer = {
  width: "46%",
  background: "#212a49",
  display: "flex",
  flexFlow: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px"
};
const techContainer = {
  width: "46%",
  background: "#212a49",
  display: "flex",
  flexFlow: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px"
};
const inputContainer = {
  background: "#18192F",
  border: "0px solid",
  outline: "none",
  color: "white"
};
class TechDepot extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tech: [],
      input: '',
      error: false
    }
  }

  componentDidMount() {
    console.log("DevelopersDepot componentDidMount()");
    axios.post(DEV_SERVER_URI + findTechPath, {
        options: {}
      })
      .then((res) => {
        this.setState({
          tech: res.data,
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
    // event.preventDefault();
    // console.log("DevelopersDepot handleChange()");
    this.setState({
      input: event.target.value
    });
  }

  filterTech() {
    if (this.state.input) {
      return this.state.tech.filter((tech) => {
        if (tech.name.toLowerCase().includes(this.state.input)) {
          return true;
        }
        return false;
      });
    } else {
      return this.state.tech;
    }
  }

  handleSubmit() {
    console.log("DevelopersDepot handleSubmit()");
    axios.post(DEV_SERVER_URI + findTechPath, {
        options: {}
      })
      .then((res) => {
        this.setState({
          tech: res.data,
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
      // #28294f
      return (
        <div style={errorContainer}>
          <h3 style={textStyle}>Error Loading Technology List</h3>
          <button onClick={this.handleSubmit.bind(this)}>Retry</button>
        </div>
      );
    } else {
      return (
        <div style={techContainer}>
          <h2 style={textStyle}>Tech Depot</h2>
          <input type="text" value={this.state.input} onChange={this.handleChange.bind(this)} style={inputContainer}/>
          <div style={recentSearchContainer}>
            <p style={searchLabelStyle}>Type:Frontend</p>
            <p style={searchLabelStyle}>Type:Backend</p>
            <p style={searchLabelStyle}>Type:Database</p>
            <p style={searchLabelStyle}>Tag:UI</p>
            <p style={searchLabelStyle}>Tag:Search</p>
          </div>
          <TechList tech={this.filterTech()}/>
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

export default TechDepot;
