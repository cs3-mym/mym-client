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
  padding: "10px"
}

class StatusArea extends React.Component {

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
      marginBottom: "10px"
    }
    return (
      <div style={tempStyle}>
        StatusArea
      </div>
    );
  }
}

export default StatusArea;
