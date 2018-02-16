import React from 'react';

const cardStyle = {
  width: "46%",
  display: "flex",
  flexFlow: "column",
  background: "#313e6d",
  color: "white",
  marginBottom: "10px",
  // boxShadow: "3px 3px #48578e",
  boxShadow: "0px 0px 5px 2px #18192F",
  border: "2px solid #48578e",
  padding: "20px"
}

const textStyle = {
  color: "white",
}

class UnableToLoad extends React.Component {
  render() {
    return (
      <div style={cardStyle}>
        <h3 style={textStyle}>Unable to load item</h3>
      </div>
    );
  }
}

export default UnableToLoad;
