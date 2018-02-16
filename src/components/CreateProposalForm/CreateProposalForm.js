import React from 'react';

const pageStyle = {
  width: "46%",
  display: "flex",
  flexFlow: "column",
  alignItems: "center",
  background: "#28294f"
};

const textStyle = {
  color: "white"
};

const buttonStyle = {
  background: "#DFAE3B",
  color: "#18192F"
};

const inputStyle = {
  background: "#18192F",
  border: "0px solid",
  outline: "none",
  color: "white"
};

const containerStyle = {
  width: "100%",
  display: "flex",
  flexFlow: "column",
  alignItems: "center"
};

class CreateProposalForm extends React.Component {
  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div style={pageStyle}>
        <h2 style={textStyle}>Create Proposal Form</h2>
        <form>
          <button style={buttonStyle} onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default CreateProposalForm;
