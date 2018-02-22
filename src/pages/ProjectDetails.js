import React from 'react';
import axios from 'axios';

// import {
//   connect
// } from 'react-redux';

import {
  Link
} from 'react-router-dom';

import {
  DEV_SERVER_URI,
  // DEV_ROOT_URI
} from '../variables/connections.js';

import CreateRequestModal from '../components/CreateRequestModal/CreateRequestModal.js';
import RequestsList from '../components/ProjectRequestsList/ProjectRequestsList.js';
import InviteModal from '../components/ProjectInviteModal/ProjectInviteModal.js';
import FeaturesList from '../components/ProjectFeaturesList/FeaturesList.js';
import NotesList from '../components/ProjectNotesList/NotesList.js';

const textStyle = {
  color: 'white'
}

const getProjectPath = 'projects/';
const joinProjectPath = 'projects/join';
const getRequestsPath = 'requests/read';
const getFeaturesPath = 'features/read';
// const createFeaturePath = 'features/create';
const getNotesPath = 'notes/read';
// const createNotePath = 'notes/create';
const followProjectPath = 'users/followProject';

const errorTextStyle = {
  color: "white",
  textShadow: "3px 3px #888888"
};

const defaultProject = {
  title: "untitled",
  description: "n/a",
  github: "n/a",
  visibility: "n/a",
  status: "n/a",
  access: "n/a",
  features: "n/a",
  bannerMessage: "n/a",
  tags: "n/a",
  category: "n/a",
  participants: [],
  technologies: "n/a",
  comments: "n/a",
  polls: 'n/a',
  history: "n/a"
}

const defaultItemStyle = {
  width: "100%",
  height: "30px",
  // border: "2px solid blue",
  margin: "0 5px 5px 5px"
}

const pageContainer = {
  width: "100%",
  background: "darkgray",
  display: "flex",
  flexFlow: "column",
  alignItems: "center"
};
const pageStyle = {
  width: "100%",
  display: "flex",
  background: "#273259"
};

const projectActionsContainer = {
  display: "flex",
  alignItems: "center"
}

const leftContainer = {
  width: "340px",
  display: "flex",
  flexFlow: "column",
  alignItems: "center",
  margin: "10px"
};
const titleContainer = {
  height: "60px",
  width: "100%",
  marginBottom: "10px",
  color: "white",
  background: "#313e6d",
  boxShadow: "3px 3px #48578e",
  overflow: "auto"
};
const githubContainer = {
  display: "flex",
  alignItems: "center",
  height: "60px",
  width: "100%",
  marginBottom: "10px",
  color: "white",
  background: "#313e6d",
  boxShadow: "3px 3px #48578e"
};
const descriptionContainer = {
  height: "140px",
  width: "100%",
  marginBottom: "10px",
  color: "white",
  background: "#313e6d",
  boxShadow: "3px 3px #48578e"
};
const featuresContainer = {
  height: "500px",
  width: "100%",
  marginBottom: "10px",
  color: "white",
  background: "#313e6d",
  boxShadow: "3px 3px #48578e",
  display: "flex",
  flexFlow: "column",
  alignItems: "center"
};

const rightContainer = {
  width: "100%",
  display: "flex",
  flexFlow: "column",
  margin: "10px"
};
const bannerContainer = {
  display: "flex",
  alignItems: "center",
  width: "100%",
  height: "60px",
  marginBottom: "10px",
  justifyContent: "space-between",
  color: "white",
  background: "#313e6d",
  boxShadow: "3px 3px #48578e"
};
const rightBottomContainer = {
  width: "100%",
  display: "flex",
  flexFlow: "row"
};
const rightContainer1 = {
  width: "50%",
  display: "flex",
  flexFlow: "column",
  marginRight: "10px"
};
const rightContainer2 = {
  width: "50%",
  display: "flex",
  flexFlow: "column"
};
const buttonStyle1 = {
  // width: "50px",
  color: "white",
  background: "rgb(0,112,219)",
  height: "30px"
};
const buttonStyle2 = {
  // width: "50px",
  color: "black",
  background: "lightgray",
  height: "30px"
};

const membersTitleTextStyle = {
  marginRight: "14px"
}

const membersContainer = {
  width: "100%",
  height: "60px",
  marginBottom: "10px",
  color: "white",
  background: "#313e6d",
  boxShadow: "3px 3px #48578e",
  overflow: "auto"
};
const membersTextContainer = {
  display: "flex",
  // flexFlow: "column",
  alignItems: "center"
};
const technologyContainer = {
  width: "100%",
  height: "140px",
  marginBottom: "10px",
  color: "white",
  background: "#313e6d",
  boxShadow: "3px 3px #48578e"
};
const notesContainer = {
  width: "100%",
  height: "500px",
  marginBottom: "10px",
  color: "white",
  background: "#313e6d",
  boxShadow: "3px 3px #48578e",
  display: "flex",
  flexFlow: "column",
  alignItems: "center"
};

//TODO: This is probbably where requests will go.
const otherContainer = {
  width: "100%",
  height: "210px",
  marginBottom: "10px",
  color: "white",
  background: "#313e6d",
  boxShadow: "3px 3px #48578e",
  overflow: "auto"
};
const historyContainer = {
  width: "100%",
  height: "100%",
  marginBottom: "10px",
  color: "white",
  background: "#313e6d",
  boxShadow: "3px 3px #48578e",
  display: "flex",
  flexFlow: "column",
  alignItems: "center"
};

const participantTextStyle = {
  marginRight: "10px",
  color: "white"
}

class ProjectDetailsPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      projectID: '',
      project: defaultProject,
      error: false,
      requestModal: false,
      requests: [],
      features: [],
      notes: [],
      inviteModal: false
    }
  }

  componentDidMount() {
    // this.setState({
    //   projectId: this.props.match.params.projectID;
    // });
    this._getProject();
    this._getRequests();
    this._getNotes();
    this._getFeatures();
  }

  _openModal() {
    this.setState({
      requestModal: true
    });
  }

  _closeModal() {
    this.setState({
      requestModal: false
    });
  }

  _openInviteModal() {
    this.setState({
      inviteModal: true
    });
  }

  _closeInviteModal() {
    this.setState({
      inviteModal: false
    });
  }

  _joinProject() {
    console.log("ProjetDetails _joinProject()");
    axios.post(DEV_SERVER_URI + joinProjectPath, {
        token: this.props.token,
        projectID: this.state.projectID
      })
      .then((res) => {
        console.log("Join successful");
        // this.setState({
        //   project: res.data
        // });
      })
      .catch((err) => {
        console.log("Join unsuccessful");
        console.log(err.message);
      });
  }

  _getProject() {
    console.log("ProjectDetails _getProject()");
    // console.log(this.props.match);
    const pID = this.props.match.params.projectID;
    axios.get(DEV_SERVER_URI + getProjectPath + pID)
      .then((res) => {
        // console.log(res.data);
        this.setState({
          project: res.data,
          projectID: pID
        });
      })
      .catch((err) => {
        console.log(err.message);
        this.setState({
          error: true
        });
      });
  }

  mapParticipants() {
    // console.log(this.state.project.participants);
    return this.state.project.participants.map((part, index) => {
      return (
        <Link style={participantTextStyle} key={index} to={{ pathname: `/user/${part.username}` }}>{part.username}</Link>
      );
    });
  }

  handleRefresh() {
    this._getProject();
  }

  _getRequests() {
    const options = {
      options: {
        query: {
          project: this.props.match.params.projectID
        },
        select: 'title category'
      }
    };

    axios.post(DEV_SERVER_URI + getRequestsPath, options)
      .then((res) => {
        this.setState({
          requests: res.data
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  _getFeatures() {
    const options = {
      options: {
        query: {
          project: this.props.match.params.projectID
        },
        // select: 'title category'
      }
    };
    console.log(options);

    axios.post(DEV_SERVER_URI + getFeaturesPath, options)
      .then((res) => {
        this.setState({
          features: res.data
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  _getNotes() {
    const options = {
      options: {
        query: {
          project: this.props.match.params.projectID
        },
        // select: 'title description category'
      }
    };

    axios.post(DEV_SERVER_URI + getNotesPath, options)
      .then((res) => {
        this.setState({
          notes: res.data
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  handleFollowButton() {
    const obj = {
      token: this.props.token,
      projectID: this.state.project._id
    }

    axios.post(DEV_SERVER_URI + followProjectPath, obj)
      .then((res) => {
        console.log("Success: Following project");
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  conditionalRender() {
    if (this.state.error) {
      return (
        <h1 style={errorTextStyle}>Unable To Load Project from Server</h1>
      );
    } else {
      // #313e6d
      // #212a49
      // #33353a
      // #48578e
      // #2d3a66
      // #313e6d #313e6d
      return (
        <div style={pageStyle}>
          <div style={leftContainer}>
            <div style={titleContainer}><h4>{this.state.project.title}</h4>  - {this.state.project.status} - {this.state.project.visibility} - {this.state.project.access} - {this.state.project.category}</div>
            <div style={githubContainer}><p>{this.state.project.github}</p></div>
            <div style={descriptionContainer}><h4>Description</h4> {this.state.project.description}</div>
            <div style={featuresContainer}>
              <h3>Features <button onClick={this._getFeatures.bind(this)}>Refresh</button></h3>
              <FeaturesList features={this.state.features} token={this.props.token} projectID={this.state.projectID}/>
            </div>
          </div>
          <div style={rightContainer}>
            <div style={bannerContainer}>
              <h4>{this.state.project.bannerMessage} </h4>
              <p>{this.state.project.tags}</p>
              <div style={projectActionsContainer}>
                <button onClick={this._joinProject.bind(this)} style={buttonStyle1}>Join</button>
                <button onClick={this._getProject.bind(this)} style={buttonStyle2}>Refresh</button>
                <button onClick={this._openModal.bind(this)} style={buttonStyle1}>New Request</button>
                <button onClick={this._openInviteModal.bind(this)} style={buttonStyle2}>Invite</button>
                <button onClick={this.handleFollowButton.bind(this)} style={buttonStyle1}>Follow</button>
              </div>
            </div>
            <div style={rightBottomContainer}>
              <div style={rightContainer1}>
                <div style={membersContainer}>
                  <div style={membersTextContainer}>
                    <h4 style={membersTitleTextStyle}>Members</h4>
                    {this.mapParticipants()}
                  </div>
                </div>
                <div style={technologyContainer}><h3>Tech</h3> {this.state.project.technologies}</div>
                <div style={notesContainer}>
                  <h3>Notes <button onClick={this._getNotes.bind(this)}>refresh</button></h3>
                  <NotesList notes={this.state.notes} token={this.props.token} projectID={this.state.projectID}/>
                </div>
              </div>
              <div style={rightContainer2}>
                <div style={otherContainer}>
                  <h3>Requests <button onClick={this._getRequests.bind(this)}>refresh</button></h3>
                  <RequestsList requests={this.state.requests}/>
                </div>
                <div style={historyContainer}>
                  <h3>History</h3>
                  <div style={defaultItemStyle}>User 1 added feature</div>
                  <div style={defaultItemStyle}>User 2 submitted contribution</div>
                  <div style={defaultItemStyle}>User 3 added feature</div>
                  <div style={defaultItemStyle}>User 1 submitted contribution</div>
                  <div style={defaultItemStyle}>User 2 added feature</div>
                  <div style={defaultItemStyle}>User 3 submitted contribution</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  conditionalModal() {
    const actions = {
      _closeModal: this._closeModal.bind(this)
    }
    if (this.state.requestModal) {
      return <CreateRequestModal project={this.state.project} token={this.props.token} actions={actions}/>
    }
  }

  conditionalInviteModal() {
    const actions = {
      _closeInviteModal: this._closeInviteModal.bind(this)
    };
    if (this.state.inviteModal) {
      return <InviteModal project={this.state.project} token={this.props.token} actions={actions}/>
    }
  }

  render() {
    return (
      <div style={pageContainer}>
        {this.conditionalInviteModal()}
        {this.conditionalModal()}
        {this.conditionalRender()}
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     token: state.token
//   };
// }
//
// export default connect(mapStateToProps, null)(ProjectDetailsPage);
export default ProjectDetailsPage;
