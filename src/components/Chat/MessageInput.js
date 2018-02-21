import React from 'react';

const inputContainer = {
  width: "100%",
  display: "flex",
  alignItems: "center"
};

const inputStyle = {
  width: "100%",
  marginRight: "5px"
};

class MessageInput extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      message: '',
      isTyping: false
    };
  }

  // componentWillUnmount() {
  //   this.stopCheckingTyping();
  // }

  handleSubmit = (e) => {
    e.preventDefault();
    this.sendMessage();
    this.setState({
      message: ''
    });
  }

  handleOnChange(event) {
    this.setState({
      message: event.target.value
    });
  }

  sendMessage = () => {
    if (this.state.message && this.props.connected) {
      this.props.addMessage(this.state.message);
      this.setState({
        message: ''
      });
    }
  }

  // sendTyping = () => {
  //   this.lastUpdateTime = Date.now();
  //   if (!this.state.isTyping) {
  //     this.setState({
  //       isTyping: true
  //     });
  //     this.props.sendIsTyping(true);
  //     this.startCheckingTyping();
  //   }
  // }
  //
  // startCheckingTyping = () => {
  //   this.typingInterval = setInterval(() => {
  //     if ((Date.now() - this.lastUpdateTime) > 300) {
  //       this.setState({
  //         isTyping: false
  //       });
  //       this.stopCheckingTyping();
  //     }
  //   }, 300);
  // }

  // stopCheckingTyping = () => {
  //   if (this.typingInterval) {
  //     clearInterval(this.typingInterval);
  //     this.props.sendIsTyping(false);
  //   }
  // }

  render() {
    return (
      <div style={inputContainer}>
        <input style={inputStyle} type="text" placeholder="type message here..." value={this.state.message} onChange={this.handleOnChange.bind(this)}></input>
        <button onClick={this.handleSubmit.bind(this)}>Submit</button>
      </div>
    );
  }
}

export default MessageInput;
