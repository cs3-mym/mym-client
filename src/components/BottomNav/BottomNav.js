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

class BottomNav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showActions: false,
      selectedAction: '',
      uiColor: "rgba(160, 160, 160, 0.5)"
    }
  }

  handleClickAction() {
    this.setState({
      showActions: !this.state.showActions
    });
  }

  handleChatClick() {
    const {
      selectedAction
    } = this.state;
    if (!selectedAction || selectedAction !== CHAT) {
      this.setState({
        selectedAction: CHAT
      });
    } else {
      this.setState({
        selectedAction: ''
      });
    }
  }

  handleTweetClick() {
    const {
      selectedAction
    } = this.state;
    if (!selectedAction || selectedAction !== TWEET) {
      this.setState({
        selectedAction: TWEET
      });
    } else {
      this.setState({
        selectedAction: ''
      });
    }
  }

  handleStatusClick() {
    const {
      selectedAction
    } = this.state;
    if (!selectedAction || selectedAction !== STATUS) {
      this.setState({
        selectedAction: STATUS
      });
    } else {
      this.setState({
        selectedAction: ''
      });
    }
  }

  handleCommandClick() {
    const {
      selectedAction
    } = this.state;
    if (!selectedAction || selectedAction !== COMMAND) {
      this.setState({
        selectedAction: COMMAND
      });
    } else {
      this.setState({
        selectedAction: ''
      });
    }
  }

  handleClose() {
    this.setState({
      selectedAction: ''
    });
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

  selectedActionComponent() {
    const actions = {
      setUiColor: this.setUiColor.bind(this)
    };
    const {
      selectedAction
    } = this.state;
    if (selectedAction) {
      switch (selectedAction) {
      case CHAT:
        return <ChatArea uiColor={this.state.uiColor}/>;
      case TWEET:
        return <TweetArea uiColor={this.state.uiColor}/>;
      case STATUS:
        return <StatusArea uiColor={this.state.uiColor}/>;
      case COMMAND:
        return <CommandArea uiColor={this.state.uiColor} actions={actions}/>;
      default:
        return <div>No actions available</div>
      }
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
      background: this.state.uiColor,
      marginTop: "10px"
    }

    return (
      <div style={mainContainer}>
        {this.selectedActionComponent()}
        <div style={tempStyle}>
          <button style={textStyle} onClick={this.handleClickAction.bind(this)}>Actions</button>
          {this.conditionalActions()}
        </div>
      </div>
    );
  }
}

export default BottomNav;
