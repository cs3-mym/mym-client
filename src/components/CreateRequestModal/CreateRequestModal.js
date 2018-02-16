import React from 'react';
import axios from 'axios';

import {
  Link
} from 'react-router-dom';

import {
  DEV_SERVER_URI
} from '../../variables/connections.js';

const createRequestPath = 'requests/create';

const layoutStyle = {
  width: "100%",
  height: "100%"
}

const modalStyle = {
  width: "100%",
  height: "100%",
  background: "rgba(0,0,0,0.3)",
  display: "flex",
  flexFlow: "column",
  alignItems: "center",
  justifyContent: "center",
  zIndex: "100",
  position: "absolute",
  left: "0",
  top: '0'
}

const requestBoxStyle = {
  width: "300px",
  padding: "10px",
  background: "darkgray",
  display: "flex",
  flexFlow: "column",
  padding: "10px"
}

const formStyle = {
  width: "100%",
  display: "flex",
  flexFlow: "column",
  alignItems: "center"
};

const inputStyle = {
  background: "#18192F",
  border: "0px solid",
  outline: "none",
  color: "white"
};

class CreateRequestModal extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      request: '',
      title: '',
      description: '',
      technology: '',
      category: '',
      type: '',
      tags: '',
      submitted: false,
      error: false,
    }
  }

  _handleChange(event) {
    event.preventDefault();
    let obj = {};
    obj[event.target.name] = event.target.value;
    this.setState(obj);
  }

  _handleSubmitButton(event) {
    event.preventDefault();
    console.log('CreateRequestModal _handleSubmitButton()');

    const request = {
      token: this.props.token,
      title: this.state.title,
      description: this.state.description,
      project: this.props.project._id,
      technology: this.state.technology,
      category: this.state.category,
      type: this.state.type,
      tags: this.state.tags
    }

    axios.post(DEV_SERVER_URI + createRequestPath, request)
      .then((res) => {
        this.setState({
          request: res.data,
          submitted: true
        });
      })
      .catch((err) => {
        console.log(err.message);
        this.setState({
          error: true,
          submitted: true
        });
      });
  }

  _handleRetryButton() {
    this.setState({
      error: false,
      submitted: false,
      request: ''
    });
  }

  conditionalRender() {
    if (this.state.submitted) {
      if (this.state.error && !this.state.request) {
        return (
          <div style={modalStyle}>
            <button onClick={() => this.props.actions._closeModal()}>close</button>
            <div style={requestBoxStyle}>
              <h3>Error</h3>
              <p>Unable to create request</p>
              <button onClick={this._handleRetryButton.bind(this)}>Retry</button>
            </div>
          </div>
        );
      } else {
        return (
          <div style={modalStyle}>
            <button onClick={() => this.props.actions._closeModal()}>close</button>
            <div style={requestBoxStyle}>
              <h3>Success</h3>
              <p>Your request has been submitted.</p>
              <Link to={{pathname: `/request/${this.state.request._id}`}}>details</Link>
              <button onClick={this._handleRetryButton.bind(this)}>Submit Another</button>
            </div>
          </div>
        );
      }
    } else {
      return (
        <div style={modalStyle}>
          <button onClick={() => this.props.actions._closeModal()}>close</button>
          <div style={requestBoxStyle}>
            <h3>Create Request</h3>
            <p>Project: {this.props.project.title}</p>
            <form style={formStyle}>
              <p>Name </p>
              <input type="text" name="title" onChange={this._handleChange.bind(this)} value={this.state.name}/>
              <p>Description </p>
              <input type="text" name="description" onChange={this._handleChange.bind(this)} value={this.state.description}/>
              <p>Technology </p>
              <input type="text" name="technology" onChange={this._handleChange.bind(this)} value={this.state.technology}/>
              <p>Category </p>
              <input type="text" name="category" onChange={this._handleChange.bind(this)} value={this.state.category}/>
              <p>Type </p>
              <input type="text" name="type" onChange={this._handleChange.bind(this)} value={this.state.type}/>
              <p>Tags </p>
              <input type="text" name="tags" onChange={this._handleChange.bind(this)} value={this.state.tags}/>
              <button onClick={this._handleSubmitButton.bind(this)}>Submit</button>
            </form>
            {/* <textarea value={this.state.message} onChange={this._messageOnChange.bind(this)}></textarea> */}
            {/* <button onClick={this._handleSubmitMessageButton.bind(this)}>Submit</button> */}
          </div>
        </div>
      );
    }
  }

  render() {
    return (
      <div style={layoutStyle}>
        {this.conditionalRender()}
      </div>
    );
  }
}

export default CreateRequestModal;
