import React from 'react';

const pageContainer = {
  width: "100%",
  display: "flex",
  flexFlow: "column",
  alignItems: "center",
  background: "#212a49",
  minHeight: "100vh"
};

const headingStyle = {
  color: "white",
  textShadow: "4px 4px #18192F"
};
const subheadingStyle = {
  color: "lightgray",
  margin: "5px 0"
};

const highlightStyle1 = {
  padding: "10px",
  background: "#DFAE3B",
  fontSize: "1.4em",
  boxShadow: "0px 0px 5px 2px #18192F"
};
const highlightStyle2 = {
  padding: "10px",
  background: "#00ccff",
  fontSize: "1.4em",
  boxShadow: "0px 0px 5px 2px #18192F"
};
const highlightStyle3 = {
  padding: "10px",
  background: "#ff6699",
  fontSize: "1.4em",
  boxShadow: "0px 0px 5px 2px #18192F"
};
const featureListContainer = {
  flex: "1",
  display: "flex",
  flexFlow: "column",
  alignItems: "center"
};
const featureContainer = {
  display: "flex",
  width: "100%"
};

class WelcomePage extends React.Component {
  render() {
    return (
      <div style={pageContainer}>
        <h1 style={headingStyle}>Welcome to MYM</h1>
        <p style={subheadingStyle}>A place to collaborate and bring ideas to life,</p>
        <p style={subheadingStyle}>to find the spark that drives you to do great work,</p>
        <p style={subheadingStyle}>and to develop a history of experiences that you never want to forget.</p>
        <div style={featureContainer}>
          <div style={featureListContainer}>
            <h1 style={headingStyle}>Create</h1>
            <p style={highlightStyle1}>Craft an Idea</p>
            <p style={highlightStyle1}>Find Other Ideas</p>
          </div>
          <div style={featureListContainer}>
            <h1 style={headingStyle}>Explore</h1>
            <p style={highlightStyle2}>Review Your Skills</p>
            <p style={highlightStyle2}>Discover New Tech</p>
            <p style={highlightStyle2}>Review Requests</p>
            <p style={highlightStyle2}>Look for Proposals</p>
          </div>
          <div style={featureListContainer}>
            <h1 style={headingStyle}>Collaborate</h1>
            <p style={highlightStyle3}>Make Contributions</p>
            <p style={highlightStyle3}>Start A Discussion</p>
            <p style={highlightStyle3}>Give Feedback</p>
            <p style={highlightStyle3}>Share Your Thoughts</p>
          </div>
        </div>
      </div>
    );
  }
}

export default WelcomePage;
