import React from 'react';

import {
  connect
} from 'react-redux';
import {
  bindActionCreators
} from 'redux';
import {
  register,
  logout
} from '../actions/authActions.js';

import {
  PrimaryButton,
  DefaultButton,
} from 'office-ui-fabric-react/lib/Button';

import {
  TextField
} from 'office-ui-fabric-react/lib/TextField';

// OLD - Removed after Redux implementation.
import {
  // DEV_SERVER_URI,
  DEV_SITE_ROOT,
  // PROD_SERVER_URI,
  // PROD_SITE_ROOT
} from '../variables/connections.js';
//
// let serverUri = DEV_SERVER_URI;
let home = DEV_SITE_ROOT;
// if (process.env.NODE_ENV === "production") {
//   serverUri = PROD_SERVER_URI;
//   home = PROD_SITE_ROOT;
// } else {
//   serverUri = DEV_SERVER_URI;
//   home = DEV_SITE_ROOT;
// }

// const createPath = 'users/create';
// const removeTokenPath = 'users/me/token';

class RegistrationPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      submitted: false,
      // token: ''
    }
  }

  tryAgain() {
    this.setState({
      submitted: false
    });
  }

  signOut() {
    if (this.props.token) {
      this.props.logout(this.props.token);
      this.setState({
        subimtted: false
      });
    }

    // OLD - Removed after redux implementation.
    // axios.delete(serverUri + removeTokenPath, {
    //     params: {
    //       token: this.state.token
    //     }
    //   })
    //   .then((res) => {
    //     this.setState({
    //       submitted: false,
    //       token: ''
    //     });
    //   })
    //   .catch((err) => {
    //     console.log("Error: signOut() - " + err.message);
    //   });
  }

  handleSubmit(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const username = event.target.username.value;
    const password2 = event.target.password2.value;

    if (password === password2) {
      this.props.register({
        username,
        email,
        password
      });
      this.setState({
        submitted: true
      });
      // OLD - Removed after Redux implementation.
      // axios.post(serverUri + createPath, {
      //     username,
      //     email,
      //     password
      //   })
      //   .then((res) => {
      //     if (res) { // TODO: check if status is 200.
      //       console.log(res.data);
      //       this.setState({
      //         token: res.data,
      //         submitted: true
      //       });
      //     }
      //   })
      //   .catch((err) => {
      //     console.log("Error: submitInfo() - " + err.message);
      //     this.setState({
      //       submitted: true
      //     });
      //   });
    } else {
      console.log("Error: Password does not match");
    }
  }

  conditionalRender() {
    if (this.state.submitted) {
      if (!this.props.token) { // changed for Redux implementation. was this.state.token.
        return (
          <div>
            <p>Invalid User info. Token Not Received.</p>
            <PrimaryButton onClick={this.tryAgain.bind(this)}>Retry</PrimaryButton>
          </div>
        );
      } else {
        return (
          <div style={{background: "lightgray", boxShadow: "2px 2px 2px #888888", padding: "10px"}}>
            <p style={{width: "600px", overflowWrap: "break-word", wordWrap: "break-word"}}> New account created. </p>
            <p style={{width: "600px", overflowWrap: "break-word", wordWrap: "break-word"}}> Token received : {this.props.token} </p>
            <DefaultButton primary={true} onClick={this.signOut.bind(this)}>Sign Out</DefaultButton>
          </div>
        );
      }
    } else {
      return (
        <div>
          <p>Create Account</p>
          <form style={{width: "320px", boxShadow: "2px 2px 2px #888888", background: "lightgray", padding: "10px"}} action='' onSubmit={this.handleSubmit.bind(this)}>
            <TextField
              label='Username'
              placeholder="not secure"
              autoComplete='off'
              name='username'
            />
            <TextField
              label='Email'
              placeholder="not secure"
              autoComplete='off'
              name='email'
            />
            <TextField
              label='Password'
              placeholder="not secure"
              autoComplete='off'
              name='password'
              type="password"
            />
            <TextField
              label='Confirm Password'
              placeholder="not secure"
              autoComplete='off'
              name='password2'
              type="password"

            />
            <PrimaryButton type='submit'>Submit</PrimaryButton>
            <DefaultButton href={home}>Home</DefaultButton>
          </form>
        </div>
      );
    }
  }

  render() {
    return (
      <div style={{height: "100vh", width: "100%", background: "#212a49", display: "flex", flexFlow: "column", justifyContent: "center", alignItems: "center"}}>
        {this.conditionalRender()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.token
  };
}

const mapActionsToDispatch = (dispatch) => {
  return bindActionCreators({
    register,
    logout
  }, dispatch);
}

export default connect(mapStateToProps, mapActionsToDispatch)(RegistrationPage);
