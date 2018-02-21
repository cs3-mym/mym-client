import React from 'react';
import axios from 'axios';

// import {
//   connect
// } from 'react-redux';

import {
  Link
} from 'react-router-dom';

import {
  DEV_SERVER_URI
} from '../variables/connections.js';

const getTechPath = 'tech/';
// const addTechPath = '';

const defaultTech = {
  name: 'untitled',
  description: 'n/a',
  type: 'n/a',
  source: 'n/a',
  category: 'n/a',
  tags: 'n/a',
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

class TechDetailsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      techID: '',
      tech: defaultTech,
      error: false
    }
  }

  componentDidMount() {
    this._getTech();
  }

  _getTech() {
    console.log("TechDetails _getTech()");

    const tID = this.props.match.params.techID;
    axios.get(DEV_SERVER_URI + getTechPath + tID)
      .then((res) => {
        this.setState({
          tech: res.data,
          techID: tID
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
      return (
        <div style={cardStyle}>
          <h3 style={textStyle}>Unable to load item</h3>
        </div>
      );
    } else {
      return (
        <div style={pageStyle}>
          <div style={cardStyle}>
            <h3 style={textStyle}>{this.state.tech.name}</h3>
            <p style={textStyle}> Category: {this.state.tech.category}</p>
            <p style={textStyle}> Type: {this.state.tech.type}</p>
            <p style={textStyle}> Tags: {this.state.tech.tags}</p>
            <h3 style={textStyle}>Source:</h3>
            <p style={textStyle}>{this.state.tech.source}</p>
            <h3 style={textStyle}>Description:</h3>
            <p style={textStyle}>{this.state.tech.description}</p>
            <button>Add</button>
          </div>
        </div>
      );
    }
  }

  render() {
    return (
      <div style={pageStyle}>
        <Link style={textStyle} to="/technology/search">back</Link>
        {this.conditionalRender()}
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     token: state.token
//   };
// }
//
// export default connect(mapStateToProps, null)(TechDetailsPage);
export default TechDetailsPage;
