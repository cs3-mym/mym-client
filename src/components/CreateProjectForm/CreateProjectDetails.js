import React from 'react';

class CreateProjectDetails extends React.Component {
  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h3> Create Project Details </h3>
        <form onSubmit={this.handleSubmit}>
          <p>Field 1</p>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default CreateProjectDetails;
