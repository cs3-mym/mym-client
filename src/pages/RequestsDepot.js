import React from 'react';
import axios from 'axios';

import RequestsList from '../components/RequestsList/RequestsList.js';

import {
  DEV_SERVER_URI
} from '../variables/connections.js';

const getRequestsPath = 'requests/read';

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

const inputStyle = {
  background: "#18192F",
  border: "0px solid",
  outline: "none",
  color: "white"
};
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
const requestsContainer = {
  width: "46%",
  padding: "20px",
  display: "flex",
  flexFlow: "column",
  alignItems: "center"
};

class RequestsDepotPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      requests: [],
      error: false,
      input: ''
    }
  }

  componentDidMount() {
    this._getRequests();
  }

  _searchInputOnChange() {

  }

  _getRequests() {
    const obj = {
      options: {}
    };
    axios.post(DEV_SERVER_URI + getRequestsPath, obj)
      .then((res) => {
        this.setState({
          requests: res.data
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  _handleRetryButton() {
    this._getRequests();
  }

  _handleInputChange(event) {
    this.setState({
      input: event.target.value
    });
  }

  filterRequests() {
    if (this.state.input) {
      return this.state.requests.filter((request) => {
        if (request.title.toLowerCase().includes(this.state.input) || request.technology.toLowerCase().includes(this.state.input) || request.tags.toLowerCase().includes(this.state.input) || request.category.toLowerCase().includes(this.state.input)) {
          return true;
        }
        return false;
      });
    } else {
      return this.state.requests;
    }
  }

  conditionalRender() {
    // console.log(this.state.requests);
    if (this.state.error) {
      return (
        <div style={cardStyle}>
          <h3 style={textStyle}>Error Loading Requests</h3>
          <button onClick={this._handleRetryButton.bind(this)}>Retry</button>
        </div>
      );
    } else {
      return (
        <div style={requestsContainer}>
          <h2 style={textStyle}>Requests <button onClick={this._handleRetryButton.bind(this)}>Refresh</button></h2>
          <input type="text" value={this.state.input} onChange={this._handleInputChange.bind(this)} style={inputStyle}/>
          <div style={recentSearchContainer}>
            <p style={searchLabelStyle}>tech:Redux</p>
            {/* <p style={searchLabelStyle}>email:steve@me.com</p> */}
            <p style={searchLabelStyle}>category:frontend</p>
            <p style={searchLabelStyle}>category:backend</p>
          </div>
          <RequestsList requests={this.filterRequests()}/>
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

export default RequestsDepotPage;
