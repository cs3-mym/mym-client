import React from 'react';

import ChatArea from '../Chat/Chat.js';
import TweetArea from './TweetArea.js';
import StatusArea from './StatusArea.js';
import CommandArea from './CommandArea.js';

const CHAT = 'C';
const TWEET = 'T';
const STATUS = 'S';
const COMMAND = 'CO';

const mainContainer = {
  display: "flex",
  flexFlow: "column",
  position: "fixed",
  // alignItems: "flex-end",
  bottom: "0px",
  left: "0px"
}

const bottomNavContainer = {
  // width: "100%",
  display: "flex",
  // flexFlow: "column",
  alignItems: "center",
  padding: "10px",
  // height: "30px",
  background: "rgba(160, 160, 160, 0.5)",
  marginTop: "10px"
}

const textStyle = {
  // color: "darkgray",
  marginLeft: "5px"
}

const actionsContainer = {
  // width: "100%",
  display: "flex",
}

class BottomNav2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showActions: false,
      uiColor: "rgba(160, 160, 160, 0.5)",
      showChat: false,
      showCommand: false,
      showTweet: false,
      showStatus: false
    }
  }

  handleClickAction() {
    this.setState({
      showActions: !this.state.showActions
    });
  }

  handleChatClick() {
    this.setState({
      showChat: !this.state.showChat
    })
  }

  handleTweetClick() {
    this.setState({
      showTweet: !this.state.showTweet
    })
  }

  handleStatusClick() {
    this.setState({
      showStatus: !this.state.showStatus
    })
  }

  handleCommandClick() {
    this.setState({
      showCommand: !this.state.showCommand
    })
  }

  setUiColor(color) {
    this.setState({
      uiColor: color
    });
  }

  conditionalActions() {
    if (this.state.showActions) {
      return (
        <div style={actionsContainer}>
          <button style={textStyle} onClick={this.handleChatClick.bind(this)}>Chat</button>
          <button style={textStyle} onClick={this.handleTweetClick.bind(this)}>Tweet</button>
          <button style={textStyle} onClick={this.handleStatusClick.bind(this)}>Status</button>
          <button style={textStyle} onClick={this.handleCommandClick.bind(this)}>Command</button>
        </div>
      );
    }
  }

  conditionalStatus() {
    if (this.state.showStatus) {
      return <StatusArea uiColor={this.state.uiColor}/>
    }
  }

  conditionalTweet() {
    if (this.state.showTweet) {
      return <TweetArea uiColor={this.state.uiColor}/>
    }
  }

  conditionalChat() {
    if (this.state.showChat) {
      return <ChatArea uiColor={this.state.uiColor}/>;
    }
  }

  conditionalCommand() {
    const actions = {
      setUiColor: this.setUiColor.bind(this)
    };
    if (this.state.showCommand) {
      return <CommandArea uiColor={this.state.uiColor} actions={actions}/>
    }
  }

  render() {

    const tempStyle = {
      // width: "100%",
      display: "flex",
      // flexFlow: "column",
      alignItems: "center",
      padding: "10px",
      // height: "30px",
      background: this.state.uiColor
    }

    return (
      <div style={mainContainer}>
        {this.conditionalStatus()}
        {this.conditionalTweet()}
        {this.conditionalChat()}
        {this.conditionalCommand()}
        <div style={tempStyle}>
          <button style={textStyle} onClick={this.handleClickAction.bind(this)}>Actions</button>
          {this.conditionalActions()}
        </div>
      </div>
    );
  }
}

export default BottomNav2;
