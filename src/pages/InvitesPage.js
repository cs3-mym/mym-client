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

import InvitesList from '../components/InvitesList/InvitesList.js';

const getMyInvitesPath = 'invitations/me';

const cardStyle = {
  width: "46%",
  display: "flex",
  flexFlow: "column",
  alignItems: 'center',
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

class InvitesPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      invites: [],
      error: false
    }
  }

  componentDidMount() {
    this._getMyInvites();
  }

  _getMyInvites() {
    const post = {
      token: this.props.token
    }

    axios.post(DEV_SERVER_URI + getMyInvitesPath, post)
      .then((res) => {
        this.setState({
          invites: res.data,
          error: false
        });
      })
      .catch((err) => {
        console.log(err.message);
        this.setState({
          error: true
        });
      });
  }

  _handleRetryButton() {
    this._getMyInvites();
  }

  conditionalRender() {
    if (this.state.error) {
      return (
        <div style={cardStyle}>
          <h3 style={textStyle}>Error Loading Invites</h3>
          <button onClick={this._handleRetryButton.bind(this)}>Retry</button>
        </div>
      );
    } else {
      return (
        <div style={{width: "46%", padding: "20px"}}>
          <h2 style={textStyle}>Invites <button onClick={this._handleRetryButton.bind(this)}>Refresh</button></h2>
          <InvitesList invites={this.state.invites}/>
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

// const mapStateToProps = (state) => {
//   return {
//     token: state.token
//   };
// };
//
// export default connect(mapStateToProps, null)(InvitesPage);
export default InvitesPage;
