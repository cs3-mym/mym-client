import React from 'react';

import axios from 'axios';

import {
  PrimaryButton,
  DefaultButton,
} from 'office-ui-fabric-react/lib/Button';

import {
  TextField
} from 'office-ui-fabric-react/lib/TextField';

import {
  DEV_SERVER_URI,
  DEV_SITE_ROOT,
  PROD_SERVER_URI,
  PROD_SITE_ROOT
} from '../variables/connections.js';

let serverUri; // = PROD_SERVER_URI;
let home; // = PROD_SITE_ROOT;
if (process.env.NODE_ENV === "production") {
  serverUri = PROD_SERVER_URI;
  home = PROD_SITE_ROOT;
} else {
  serverUri = DEV_SERVER_URI;
  home = DEV_SITE_ROOT;
}

const loginPath = 'users/login';
const removeTokenPath = 'users/me/token';

class LoginPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      token: '',
      submitted: false
    }
  }

  handleSubmit(event) {
    event.preventDefault();

    // console.log("submitting");
    const email = event.target.email.value;
    const password = event.target.password.value;
    // console.log(email);
    // console.log(password);
    console.log(serverUri);
    axios.post(serverUri + loginPath, {
        email,
        password
      })
      .then((res) => {
        if (res) { // TODO: Check if status is 200.
          // console.log(res);
          this.setState({
            token: res.data,
            submitted: true
          });
        }
      })
      .catch((err) => {
        // console.log(err);
        // console.log("Error: Couldn't Log in" + err.message);
        this.setState({
          submitted: true
        });
      });
  }

  tryAgain() {
    this.setState({
      submitted: false
    });
  }

  conditionalRender() {
    if (this.state.submitted) {
      if (!this.state.token) {
        return (
          <div>
            <p>Token Not Received.</p>
            <PrimaryButton onClick={this.tryAgain.bind(this)}>Retry</PrimaryButton>
          </div>
        );
      } else {
        return (
          <div style={{background: "lightgray", boxShadow: "2px 2px 2px #888888", padding: "10px"}}>
            <p style={{width: "600px", overflowWrap: "break-word", wordWrap: "break-word"}}> Welcome. </p>
            <p style={{width: "600px", overflowWrap: "break-word", wordWrap: "break-word"}}> Token received : {this.state.token} </p>
            <DefaultButton primary={true} onClick={this.signOut.bind(this)}>Sign Out</DefaultButton>
          </div>
        );
      }
    } else {
      return (
        <form style={{width: "320px", boxShadow: "2px 2px 2px #888888", background: "lightgray", padding: "10px"}} action='' onSubmit={this.handleSubmit.bind(this)}>
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
          />
          <PrimaryButton type='submit'>Submit</PrimaryButton>
          <DefaultButton href={home}>Home</DefaultButton>
        </form>
      );
    }
  }

  signOut() {
    axios.delete(serverUri + removeTokenPath, {
        params: {
          token: this.state.token
        }
      })
      .then((res) => {
        // Have to push new route to history.
        this.setState({
          token: '',
          submitted: false
        });
      })
      .catch((err) => {
        // console.log("Error: Couldn't sign out" + err.message);
      });
  }

  render() {
    return (
      <div style={{height: "100vh", width: "100%", display: "flex", flexFlow: "column", justifyContent: "center", alignItems: "center"}}>
        {this.conditionalRender()}
      </div>
    );
  }
}

export default LoginPage;
