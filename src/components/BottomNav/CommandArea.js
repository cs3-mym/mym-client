import React from 'react';

const mainContainer = {
  background: "rgba(160, 160, 160, 0.5)",
  // position: "fixed",
  // left: "10px",
  // bottom: "60px",
  height: "30px",
  width: "420px",
  display: "flex",
  alignItems: "center",
  zIndex: "100",
  padding: "10px",
  display: "flex",
  alignItems: "center"
}

const inputStyle = {
  width: "100%",
  height: "100%",
  marginRight: "5px",
}

class CommandArea extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      input: ''
    }
  }

  _processCommand(c) {
    if (c.command === '/message') {
      const to = c.params.shift();
      const message = c.params.join(' ');
      console.log(`Message to ${to}: ${message}`);
    } else if (c.command === '/message_all') {
      const to = c.params.filter((element) => {
        if (element[0] === "@") {
          return true;
        }
        return false;
      });
      const message = c.params.filter((word) => {
        if (word[0] !== "@") {
          return true;
        }
        return false;
      }).join(' ');
      console.log(`Message to ${to.join(', ')}: ${message}`);
    } else if (c.command === "/ui") {
      const param1 = c.params.shift();
      let param2;
      if (param1 === "color") {
        param2 = c.params.shift();
      }
      this.props.actions.setUiColor(param2);
    } else {
      console.log('Unknown command');
    }
  }

  handleOnChange(event) {
    this.setState({
      input: event.target.value
    });
  }

  handleSubmit() {
    const c = parseInput(this.state.input);
    this._processCommand(c);
    this.setState({
      input: ''
    });
  }

  render() {
    const tempStyle = {
      background: this.props.uiColor,
      // position: "fixed",
      // left: "10px",
      // bottom: "60px",
      height: "30px",
      width: "420px",
      display: "flex",
      alignItems: "center",
      zIndex: "100",
      padding: "10px",
      display: "flex",
      alignItems: "center",
      marginBottom: "10px"
    }
    return (
      <div style={tempStyle}>
        <input style={inputStyle} value={this.state.input} onChange={this.handleOnChange.bind(this)} type="text" placeholder="/command param1 param2"/>
        <button onClick={this.handleSubmit.bind(this)}>Submit</button>
      </div>
    );
  }
}

function parseInput(input) {

  const resultObj = {};

  let splitInput = input.split(' ');
  splitInput = splitInput.map((element) => {
    return element.trim();
  })

  resultObj.command = splitInput.shift();
  resultObj.params = splitInput;

  return resultObj;
}

function processCommand(c) {
  if (c.command === '/message') {
    const to = c.params.shift();
    const message = c.params.join(' ');
    console.log(`Message to ${to}: ${message}`);
  } else if (c.command === '/message_all') {
    const to = c.params.filter((element) => {
      if (element[0] === "@") {
        return true;
      }
      return false;
    });
    const message = c.params.filter((word) => {
      if (word[0] !== "@") {
        return true;
      }
      return false;
    }).join(' ');
    console.log(`Message to ${to.join(', ')}: ${message}`);
  } else if (c.command === "/ui") {
    const param1 = c.params.shift();
    let param2;
    if (param1 === "color") {
      param2 = c.params.shift();
    }

  } else {
    console.log('Unknown command');
  }
}

export default CommandArea;
