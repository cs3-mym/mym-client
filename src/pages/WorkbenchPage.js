import React from 'react';

import CreateProjectForm from '../components/CreateProjectForm/CreateProjectForm.js';
import CreateDiscussionForm from '../components/CreateDiscussionForm/CreateDiscussionForm.js';
import CreateTechForm from '../components/CreateTechForm/CreateTechForm.js';
import CreateProposalForm from '../components/CreateProposalForm/CreateProposalForm.js';

class WorkbenchPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      choice: 'project'
    }
  }

  changeType(event) {
    console.log("Workbench Change Type Method");
    this.setState({
      choice: event.target.value
    });
  }

  conditionalRender() {
    console.log("Workbench Render Method");
    switch (this.state.choice) {
    case 'project':
      return <CreateProjectForm />;
    case 'discussion':
      return <CreateDiscussionForm />;
    case 'proposal':
      return <CreateProposalForm />;
    case 'technology':
      return <CreateTechForm />;
    default:
      return (<div> Default </div>);
    }
  }

  render() {
    return (
      <div style={{width: "100%", display: "flex", flexFlow: "column", alignItems:"center", justifyContent: "center", background: "lightgray"}}>
        <h2>Workbench</h2>
        <select value={this.state.choice} onChange={this.changeType.bind(this)}>
          <option value="project" >Project</option>
          <option value="discussion" >Discussion</option>
          <option value="technology" >Technology</option>
          <option value="proposal" >Proposal</option>
        </select>
        {this.conditionalRender()}
      </div>
    );
  }
}

export default WorkbenchPage;
