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
  SERVER_URI
} from '../variables/connections.js';

const path = '/users/login';
const home = 'http://localhost:3000/'

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

    axios.post(SERVER_URI + path, {
        email,
        password
      })
      .then((res) => {
        if (res) {
          // console.log(res);
          this.setState({
            token: res.data.token,
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
    axios.delete(SERVER_URI + '/users/me/token', {
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
      <div style={{height: "100%", width: "100%", display: "flex", flexFlow: "column", justifyContent: "center", alignItems: "center"}}>
        {this.conditionalRender()}
      </div>
    );
  }
}

export default LoginPage;
