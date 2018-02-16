import React from 'react';

import {
  Link
} from 'react-router-dom';

const pageStyle = {
  width: "100%",
  minHeight: "100vh",
  display: "flex",
  flexFlow: "column",
  alignItems: "center",
  justifyContent: "center",
  background: "#212a49"
}

const textStyle = {
  color: "white"
}

class Restricted extends React.Component {
  render() {
    return (
      <div style={pageStyle}>
        <p style={textStyle}>Private Route</p>
        <Link style={textStyle} to={{pathname:`/`}}>Home</Link>
      </div>
    );
  }
}

export default Restricted;
