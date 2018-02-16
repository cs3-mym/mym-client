import React from 'react';
import axios from 'axios';

import {
  connect
} from 'react-redux';

import {
  Link
} from 'react-router-dom';

import MessageModal from '../components/SendMessageModal/MessageModal.js';

import {
  DEV_SERVER_URI
} from '../variables/connections.js';

const getUserPath = 'users/username/';

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

const defaultUser = {
  username: 'unknown',
  email: 'n/a',
  projects: [],
  skills: [],
  interests: []
}

// const modalStyle = {
//   width: "100%",
//   height: "100%",
//   background: "rgba(0,0,0,0.3)",
//   display: "flex",
//   flexFlow: "column",
//   alignItems: "center",
//   justifyContent: "center",
//   zIndex: "100",
//   position: "absolute",
//   left: "0",
//   top: '0'
// }
//
// const messageBoxStyle = {
//   width: "300px",
//   background: "darkgray",
//   display: "flex",
//   flexFlow: "column",
//   padding: "10px"
// }

class UserDetailsPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      user: defaultUser,
      error: false,
      username: '',
      messageModal: false,
      message: ''
    }
  }

  componentDidMount() {
    this._getUser();
  }

  _messageOnChange(event) {
    this.setState({
      message: event.target.value
    });
  }

  _getUser() {
    console.log('UserDetails _getUser()');

    const username = this.props.match.params.username;
    const obj = {
      token: this.props.token
    }

    axios.post(DEV_SERVER_URI + getUserPath + username, obj)
      .then((res) => {
        this.setState({
          user: res.data,
          username
        });
      })
      .catch((err) => {
        console.log(err.message);
        this.setState({
          error: true
        });
      });
  }

  _mapProjects() {
    return this.state.user.projects.map((proj, index) => {
      return <p key={index} style={textStyle}>{proj.title} <Link style={textStyle} to={{pathname: `/project/${proj._id}`}}>more</Link></p>
    });
  }

  _handleOpenModalButton() {
    this.setState({
      messageModal: true
    });
  }

  _handleCloseModalButton() {
    this.setState({
      messageModal: false
    });
  }

  _handleSubmitMessageButton() {

  }

  conditionalModal() {
    const actions = {
      _handleCloseModalButton: this._handleCloseModalButton.bind(this)
    }
    if (this.state.messageModal) {
      return <MessageModal token={this.props.token} message={this.state.message} user={this.state.user} actions={actions}/>;
    }

    // if (this.state.messageModal) {
    //   return (
    //     <div style={modalStyle}>
    //       <button onClick={this._handleCloseModalButton.bind(this)}>close</button>
    //       <div style={messageBoxStyle}>
    //         <h3>Send Message</h3>
    //         <p>To: {this.state.username}</p>
    //         <textarea value={this.state.message} onChange={this._messageOnChange.bind(this)}></textarea>
    //         <button onClick={this._handleSubmitMessageButton.bind(this)}>Submit</button>
    //       </div>
    //     </div>
    //   );
    // }
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
          <h2 style={textStyle}>User Details Page</h2>
          <p style={textStyle}>{this.state.user.email}</p>
          <p style={textStyle}>{this.state.user.username}</p>
          <button onClick={this._handleOpenModalButton.bind(this)}>Send Message</button>
          <h3 style={textStyle}>Projects</h3>
          {this._mapProjects()}
        </div>
      );
    }
  }

  render() {
    return (
      <div style={pageStyle}>
        <Link style={textStyle} to="/users/search">back</Link>
        {this.conditionalModal()}
        {this.conditionalRender()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state
  };
};

export default connect(mapStateToProps, null)(UserDetailsPage);
