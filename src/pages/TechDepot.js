import React from 'react';
import axios from 'axios';

import TechList from '../components/TechList/TechList.js';

import {
  DEV_SERVER_URI
} from '../variables/connections.js';

const findTechPath = 'techs/find';

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
    event.preventDefault();
    console.log("DevelopersDepot handleChange()");
    this.setState({
      input: event.target.value
    });
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
        <div style={{width: "46%", background: "#212a49", display: "flex", flexFlow: "column", alignItems:"center", justifyContent: "center", padding: "20px"}}>
          <h3 style={{color: "white"}}>Error Loading Technology List</h3>
          <button onClick={this.handleSubmit.bind(this)}>Retry</button>
        </div>
      );
    } else {
      return (
        <div style={{width: "46%", background: "#212a49", display: "flex", flexFlow: "column", alignItems:"center", justifyContent: "center", padding: "20px"}}>
          <h2 style={{color: "white"}}>Tech Depot</h2>
          <input value={this.state.input} onChange={this.handleChange.bind(this)} style={{background: "#18192F", border: "0px solid", outline: "none", color: "white"}}/>
          <div style={{display: "flex", flexFlow: "row", width: "100%", justifyContent: "space-between"}}>
            <p style={{background: "#DFAE3B", color: "#18192F", padding: "5px"}}>Type:Frontend</p>
            <p style={{background: "#DFAE3B", color: "#18192F", padding: "5px"}}>Type:Backend</p>
            <p style={{background: "#DFAE3B", color: "#18192F", padding: "5px"}}>Type:Database</p>
            <p style={{background: "#DFAE3B", color: "#18192F", padding: "5px"}}>Tag:UI</p>
            <p style={{background: "#DFAE3B", color: "#18192F", padding: "5px"}}>Tag:Search</p>
          </div>
          <TechList tech={this.state.tech}/>
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

export default TechDepot;
