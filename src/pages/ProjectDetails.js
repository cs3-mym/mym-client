import React from 'react';
import axios from 'axios';

import {
  connect
} from 'react-redux';

import {
  DEV_SERVER_URI
} from '../variables/connections.js';

const getProjectPath = 'projects/';
const joinProjectPath = 'projects/join';

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

class ProjectDetailsPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      projectID: '',
      project: defaultProject,
      error: false
    }
  }

  componentDidMount() {
    // this.setState({
    //   projectId: this.props.match.params.projectID;
    // });
    this._getProject();
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
        console.log(res.data);
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
    console.log(this.state.project.participants);
    return this.state.project.participants.map((part, index) => {
      return (
        <p key={index}>{part._id}</p>
      );
    });
  }

  handleRefresh() {
    this._getProject();
  }

  conditionalRender() {
    if (this.state.error) {
      return (
        <h1 style={{color: "white", textShadow: "3px 3px #888888"}}>Unable To Load Project from Server</h1>
      );
    } else {
      // #313e6d
      // #212a49
      // #33353a
      // #48578e
      // #2d3a66
      // #313e6d #313e6d
      return (
        <div style={{width: "100%", display: "flex", background: "#273259"}}>
          <div style={{width: "340px", display: "flex", flexFlow: "column", alignItems: "center", margin: "10px"}}>
            <div style={{height: "60px", width: "100%", marginBottom: "10px", color: "white", background: "#313e6d", boxShadow: "3px 3px #48578e", overflow: "auto"}}>Title: {this.state.project.title} - {this.state.project.status} - {this.state.project.visibility} - {this.state.project.access} - {this.state.project.category}</div>
            <div style={{height: "60px", width: "100%", marginBottom: "10px", color: "white", background: "#313e6d", boxShadow: "3px 3px #48578e"}}>Github Link: {this.state.project.github}</div>
            <div style={{height: "140px", width: "100%", marginBottom: "10px", color: "white", background: "#313e6d", boxShadow: "3px 3px #48578e"}}>Description: {this.state.project.description}</div>
            <div style={{height: "500px", width: "100%", marginBottom: "10px", color: "white", background: "#313e6d", boxShadow: "3px 3px #48578e", display: "flex", flexFlow: "column", alignItems: "center"}}>
              <h3>Features</h3>
              <div style={defaultItemStyle}>Feature 1</div>
              <div style={defaultItemStyle}>Feature 2</div>
              <div style={defaultItemStyle}>Feature 3</div>
              <div style={defaultItemStyle}>Feature 4</div>
              <div style={defaultItemStyle}>Feature 5</div>
            </div>
          </div>
          <div style={{width: "100%", display: "flex", flexFlow: "column", margin: "10px"}}>
            <div style={{width: "100%", height: "60px", marginBottom: "10px", color: "white", background: "#313e6d", boxShadow: "3px 3px #48578e"}}>
              Banner: {this.state.project.bannerMessage} - {this.state.project.tags}
              <button onClick={this._joinProject.bind(this)} style={{width: "50px", color: "white", background: "rgb(0,112,219)", height: "30px"}}>Join</button>
              <button onClick={this._getProject.bind(this)} style={{width: "50px", color: "black", background: "lightgray", height: "30px"}}>Refresh</button>
            </div>
            <div style={{width: "100%", display: "flex", flexFlow: "row"}}>
              <div style={{width: "50%", display: "flex", flexFlow: "column", marginRight: "10px"}}>
                <div style={{width: "100%", height: "60px", marginBottom: "10px", color: "white", background: "#313e6d", boxShadow: "3px 3px #48578e", overflow: "auto"}}>
                  Members
                  <div style={{display: "flex", flexFlow: "column", alignItems: "center"}}>
                    {this.mapParticipants()}
                  </div>
                </div>
                <div style={{width: "100%", height: "140px", marginBottom: "10px", color: "white", background: "#313e6d", boxShadow: "3px 3px #48578e"}}>Tech: {this.state.project.technologies}</div>
                <div style={{width: "100%", height: "500px", marginBottom: "10px", color: "white", background: "#313e6d", boxShadow: "3px 3px #48578e", display: "flex", flexFlow: "column", alignItems: "center"}}>
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
              <div style={{width: "50%", display: "flex", flexFlow: "column"}}>
                <div style={{width: "100%", height: "210px", marginBottom: "10px", color: "white", background: "#313e6d", boxShadow: "3px 3px #48578e"}}>Other/Polls</div>
                <div style={{width: "100%", height: "100%", marginBottom: "10px", color: "white", background: "#313e6d", boxShadow: "3px 3px #48578e", display: "flex", flexFlow: "column", alignItems: "center"}}>
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
          </div>
        </div>
      );
    }
  }

  render() {
    return (
      <div style={{width: "100%", background: "darkgray", display: "flex", flexFlow: "column", alignItems: "center"}}>
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
