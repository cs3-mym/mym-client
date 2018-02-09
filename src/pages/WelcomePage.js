import React from 'react';

class WelcomePage extends React.Component {
  render() {
    return (
      <div style={{width: "100%", display: "flex", flexFlow: "column", alignItems: "center", background: "#212a49", minHeight: "100vh"}}>
        <h1 style={{color: "white", textShadow: "4px 4px #18192F"}}>Welcome to MYM</h1>
        <p style={{color: "lightgray"}}>A place to collaborate and bring ideas to life,</p>
        <p style={{color: "lightgray"}}>to find the spark that drives you to do great work,</p>
        <p style={{color: "lightgray"}}>and to develop a history of experiences that you never want to forget.</p>
        <div style={{display: "flex", width: "100%"}}>
          <div style={{flex: "1", display: "flex", flexFlow: "column", alignItems: "center"}}>
            <h1 style={{color: "white", textShadow: "4px 4px #18192F"}}>Create</h1>
            <p style={{padding: "10px", background: "#DFAE3B", fontSize: "1.4em", boxShadow: "0px 0px 5px 2px #18192F"}}>Craft an Idea</p>
            <p style={{padding: "10px", background: "#DFAE3B", fontSize: "1.4em", boxShadow: "0px 0px 5px 2px #18192F"}}>Find Other Ideas</p>
          </div>
          <div style={{flex: "1", display: "flex", flexFlow: "column", alignItems: "center"}}>
            <h1 style={{color: "white", textShadow: "4px 4px #18192F"}}>Explore</h1>
            <p style={{padding: "10px", background: "#00ccff", fontSize: "1.4em", boxShadow: "0px 0px 5px 2px #18192F"}}>Review Your Skills</p>
            <p style={{padding: "10px", background: "#00ccff", fontSize: "1.4em", boxShadow: "0px 0px 5px 2px #18192F"}}>Discover New Tech</p>
            <p style={{padding: "10px", background: "#00ccff", fontSize: "1.4em", boxShadow: "0px 0px 5px 2px #18192F"}}>Review Requests</p>
            <p style={{padding: "10px", background: "#00ccff", fontSize: "1.4em", boxShadow: "0px 0px 5px 2px #18192F"}}>Look for Proposals</p>
          </div>
          <div style={{flex: "1", display: "flex", flexFlow: "column", alignItems: "center"}}>
            <h1 style={{color: "white", textShadow: "4px 4px #18192F"}}>Collaborate</h1>
            <p style={{padding: "10px", background: "#ff6699", fontSize: "1.4em", boxShadow: "0px 0px 5px 2px #18192F"}}>Make Contributions</p>
            <p style={{padding: "10px", background: "#ff6699", fontSize: "1.4em", boxShadow: "0px 0px 5px 2px #18192F"}}>Start A Discussion</p>
            <p style={{padding: "10px", background: "#ff6699", fontSize: "1.4em", boxShadow: "0px 0px 5px 2px #18192F"}}>Give Feedback</p>
            <p style={{padding: "10px", background: "#ff6699", fontSize: "1.4em", boxShadow: "0px 0px 5px 2px #18192F"}}>Share Your Thoughts</p>
          </div>
        </div>
      </div>
    );
  }
}

export default WelcomePage;
