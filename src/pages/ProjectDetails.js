import React from 'react';
import axios from 'axios';

import {
  connect
} from 'react-redux';

import {
  Link
} from 'react-router-dom';

import {
  DEV_SERVER_URI,
  DEV_ROOT_URI
} from '../variables/connections.js';

import CreateRequestModal from '../components/CreateRequestModal/CreateRequestModal.js';

const textStyle = {
  color: 'white'
}

const getProjectPath = 'projects/';
const joinProjectPath = 'projects/join';

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
  width: "100%",
  height: "60px",
  marginBottom: "10px",
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
  width: "50px",
  color: "white",
  background: "rgb(0,112,219)",
  height: "30px"
};
const buttonStyle2 = {
  width: "50px",
  color: "black",
  background: "lightgray",
  height: "30px"
};
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
  flexFlow: "column",
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
const commentsContainer = {
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
  boxShadow: "3px 3px #48578e"
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
class ProjectDetailsPage extends React.Component {

    constructor(props) {
      super(props);

      this.state = {
        projectID: '',
        project: defaultProject,
        error: false,
        requestModal: false
      }
    }

    componentDidMount() {
      // this.setState({
      //   projectId: this.props.match.params.projectID;
      // });
      this._getProject();
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
          <Link style={textStyle} key={index} to={{ pathname: `/user/${part.username}` }}>{part.username}</Link>
        );
      });
    }

    handleRefresh() {
      this._getProject();
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
            <div style={titleContainer}>Title: {this.state.project.title} - {this.state.project.status} - {this.state.project.visibility} - {this.state.project.access} - {this.state.project.category}</div>
            <div style={githubContainer}>Github Link: {this.state.project.github}</div>
            <div style={descriptionContainer}>Description: {this.state.project.description}</div>
            <div style={featuresContainer}>
              <h3>Features</h3>
              <div style={defaultItemStyle}>Feature 1</div>
              <div style={defaultItemStyle}>Feature 2</div>
              <div style={defaultItemStyle}>Feature 3</div>
              <div style={defaultItemStyle}>Feature 4</div>
              <div style={defaultItemStyle}>Feature 5</div>
            </div>
          </div>
          <div style={rightContainer}>
            <div style={bannerContainer}>
              Banner: {this.state.project.bannerMessage} - {this.state.project.tags}
              <button onClick={this._joinProject.bind(this)} style={buttonStyle1}>Join</button>
              <button onClick={this._getProject.bind(this)} style={buttonStyle2}>Refresh</button>
              <button onClick={this._openModal.bind(this)} style={buttonStyle1}>New Request</button>
            </div>
            <div style={rightBottomContainer}>
              <div style={rightContainer1}>
                <div style={membersContainer}>
                  Members
                  <div style={membersTextContainer}>
                    {this.mapParticipants()}
                  </div>
                </div>
                <div style={technologyContainer}>Tech: {this.state.project.technologies}</div>
                <div style={commentsContainer}>
                  <h3>Comments</h3>
                  <div style={defaultItemStyle}>User1: Lorem ipsum valtro engson patrut</div>
                  <div style={defaultItemStyle}>User2: Lorem ipsum valtro engson patrut</div>
                  <div style={defaultItemStyle}>User3: Lorem ipsum valtro engson patrut</div>
                  <div style={defaultItemStyle}>User1: Lorem ipsum valtro engson patrut</div>
                  <div style={defaultItemStyle}>User2: Lorem ipsum valtro engson patrut</div>
                  <div style={defaultItemStyle}>User3: Lorem ipsum valtro engson patrut</div>
                  <div style={defaultItemStyle}>User1: Lorem ipsum valtro engson patrut</div>
                  <div style={defaultItemStyle}>User1: Lorem ipsum valtro engson patrut</div>

                </div>
              </div>
              <div style={rightContainer2}>
                <div style={otherContainer}>Other/Polls</div>
                <div style={historyContainer}>
                  <h3>History</h3>
                  <div style={defaultItemStyle}>Event: User 1 added feature</div>
                  <div style={defaultItemStyle}>Event: User 2 submitted contribution</div>
                  <div style={defaultItemStyle}>Event: User 1 added feature</div>
                  <div style={defaultItemStyle}>Event: User 2 submitted contribution</div>
                  <div style={defaultItemStyle}>Event: User 1 added feature</div>
                  <div style={defaultItemStyle}>Event: User 2 submitted contribution</div>
                </div>
              </div>
            </div>
          </div> <
        /div>
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

  render() {
    return (
      <div style={pageContainer}>
        {this.conditionalModal()}
        {this.conditionalRender()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state
  };
}

export default connect(mapStateToProps, null)(ProjectDetailsPage);
