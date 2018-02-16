import React from 'react';
import axios from 'axios';

import {
  DEV_SERVER_URI
} from '../../variables/connections.js';

import {
  connect
} from 'react-redux';

import {
  Link
} from 'react-router-dom';

const acceptInvitePath = 'invitations/accept';

const textStyle = {
  color: "white"
};

const archivedTextStyle = {
  color: "darkgray"
};

const basicConatiner = {
  width: "100%"
};
const pageContainer = {
  width: "100%",
  marginBottom: "10px",
  background: "#18192F",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between"
};

class InviteItem extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      acceptedStatus: false
    }
  }

  _acceptInvite() {
    const post = {
      token: this.props.token,
      invitationID: this.props.invite._id
    }
    axios.post(DEV_SERVER_URI + acceptInvitePath, post)
      .then((res) => {
        console.log("Success: Invite Accepted");
        this.setState({
          acceptedStatus: true
        });
      })
      .catch((err) => {
        console.log(err.message);
        this.setState({
          acceptedStatus: false
        });
      });
  }

  conditionalStatus() {
    //TODO: This is a very make shift way of handling things.
    if (this.state.acceptedStatus) {
      return (
        <p style={textStyle}>Invite Accepted</p>
      );
    }
  }

  render() {
    return (
      <div style={pageContainer}>
        <div style={basicConatiner}>
          {this.conditionalStatus()}
          <p style={textStyle}>From: {this.props.invite.from.username}</p>
          <p style={textStyle}>To: {this.props.invite.to.username}</p>
          <p style={textStyle}>Project: <Link style={textStyle} to={{pathname: `/project/${this.props.invite.project._id}`}}>{this.props.invite.project.title}</Link></p>
          <Link style={textStyle} to={{pathname: `/invite/${this.props.invite._id}`}}>more</Link>
          <button onClick={this._acceptInvite.bind(this)}>Accept</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state
  };
}

export default connect(mapStateToProps, null)(InviteItem);
