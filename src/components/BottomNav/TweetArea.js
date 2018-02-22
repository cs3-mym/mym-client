import React from 'react';
import axios from 'axios';

import {DEV_SERVER_URI} from '../../variables/connections.js';
const getMyTweets = 'tweets/readMyTweets';
const likeTweetPath = 'tweets/like';

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
  padding: "10px"
}

const textStyle= {
  lineHeight: 1,
  fontSize: "1em",
  margin: 0
}

const usernameStyle = {
  fontStyle: "italic"
}

class TweetArea extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: false,
      tweets: []
    }
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    const obj = {
      token: this.props.token
    };

    axios.post(DEV_SERVER_URI + getMyTweets, obj)
      .then((res) => {
        this.setState({
          tweets: res.data,
          error: false
        });
      })
      .catch((err) => {
        console.log(err.message);
        this.setState({
          error: true
        });
      });
  }

  likeTweet(tweet){
    const obj = {
      token: this.props.token,
      tweetID: tweet._id 
    }

    axios.post(DEV_SERVER_URI + likeTweetPath, obj)
      .then((res) => {
        console.log("Success: Tweet Liked");
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  mapTweets() {
    return this.state.tweets.map((tweet, index) => {
      return (
        <p style={textStyle} key={index}>({tweet.likes.length.toString()}) {tweet.message} <strong style={usernameStyle}> by {tweet.creator.username}</strong><button onClick={() => this.likeTweet(tweet)}>like</button></p>
      );
    })
  }

  conditionalRender() {
    if (this.state.error) {
      return (
        <p style={textStyle}>Unable to load tweets</p>
      );
    } else {
      return this.mapTweets();
    }
  }

  render() {

    const tempStyle = {
      background: this.props.uiColor,
      // position: "fixed",
      // left: "10px",
      // bottom: "60px",
      maxHeight: "400px",
      overflow: "auto",
      width: "420px",
      display: "flex",
      flexFlow: "column",
      // alignItems: "center",
      zIndex: "100",
      padding: "10px",
      marginBottom: "10px"
    }

    return (
      <div style={tempStyle}>
        <h3>Tweets(Followed Users and You) <button onClick={this.getData.bind(this)}>Refresh</button></h3>
        {this.conditionalRender()}
      </div>
    );
  }
}

export default TweetArea;
