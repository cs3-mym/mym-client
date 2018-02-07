import React from 'react';

class CreateProposalForm extends React.Component {
  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div style={{width: "46%", display: "flex", flexFlow: "column", alignItems: "center", background: "#28294f"}}>
        <h2 style={{color: "white"}}>Create Proposal Form</h2>
        <form>
          <button style={{background: "#DFAE3B", color: "#18192F"}} onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default CreateProposalForm;
