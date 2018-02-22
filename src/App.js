import React, {
  Component
} from 'react';

import {
  Route
} from 'react-router-dom';

// import './App.css';

import NavAuth from './hoc/navAuthCheck.js';
import RequireAuth from './hoc/authCheck.js';

// import Navigation from './components/Navigation/Navigation.js';
import Navigation2 from './components/Navigation/Navigation2.js';
import BottomNav from './components/BottomNav/BottomNav2.js';

// import HomePage from './pages/HomePage.js';
import WelcomePage from './pages/WelcomePage.js';
import HomePage2 from './pages/HomePage2.js';
import LoginPage from './pages/LoginPage.js';
import MessagesPage from './pages/MessagesPage.js';
import InvitesPage from './pages/InvitesPage.js';
import UserProfilePage from './pages/UserProfilePage.js';

import RegistrationPage from './pages/RegistrationPage.js';
import WorkbenchPage from './pages/WorkbenchPage.js';
import DevelopersDepot from './pages/ProjectsDepot.js';
import TechDepot from './pages/TechDepot.js';
import DiscussionsDepot from './pages/DiscussionsDepot.js';
import UserDepot from './pages/UserDepot.js';
import RequestsDepot from './pages/RequestsDepot.js';

import ProjectDetails from './pages/ProjectDetails.js';
import TechDetails from './pages/TechDetails.js';
import DiscussionDetails from './pages/DiscussionDetails.js';
import UserDetailsPage from './pages/UserDetailsPage.js';
import MessageDetails from './pages/MessageDetailsPage.js';
import RequestDetails from './pages/RequestDetailsPage.js';
import InviteDetails from './pages/InviteDetailsPage.js';
import NoteDetails from './pages/NoteDetailsPage.js';
import FeatureDetails from './pages/FeatureDetailsPage.js';
import ContributionDetails from './pages/ContributionDetailsPage.js';
// import SignInPage from './pages/SignInPage.js';
// import DefaultPage from './pages/DefaultPage.js';
// import ProjectSearchPage from './pages/ProjectSearch.js';
// import DashboardPage from './pages/Dashboard.js';
// import ProfilePage from './pages/ProfilePage.js';
// import ProjectSearch2 from './pages/ProjectSearch2.js';

const Navigation = NavAuth(Navigation2);
const Tools = NavAuth(BottomNav);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation/>
        <Tools/>
        <Route exact path="/" component={HomePage2}/>
        <Route exact path="/login" render={(props) => <LoginPage {...props}/>}/>
        {/* <Route exact path="/login" component={LoginPage}/> */}
        <Route exact path="/signup" component={RegistrationPage}/>
        <Route exact path="/workbench" component={RequireAuth(WorkbenchPage)}/>
        <Route exact path="/welcome" component={RequireAuth(WelcomePage)}/>
        <Route exact path="/profile" component={RequireAuth(UserProfilePage)}/>
        <Route exact path="/messages" component={RequireAuth(MessagesPage)}/>
        <Route exact path="/invites" component={RequireAuth(InvitesPage)}/>

        <Route exact path="/user/:username" component={RequireAuth(UserDetailsPage)}/>
        <Route exact path="/project/:projectID" component={RequireAuth(ProjectDetails)}/>
        <Route exact path="/tech/:techID" component={RequireAuth(TechDetails)}/>
        <Route exact path="/discussion/:discussionID" component={RequireAuth(DiscussionDetails)}/>
        <Route exact path="/message/:messageID" component={RequireAuth(MessageDetails)}/>
        <Route exact path="/request/:requestID" component={RequireAuth(RequestDetails)}/>
        <Route exact path="/invite/:inviteID" componenet={RequireAuth(InviteDetails)}/>
        <Route exact path="/note/:noteID" component={RequireAuth(NoteDetails)}/>
        <Route exact path="/feature/:featureID" component={RequireAuth(FeatureDetails)}/>
        <Route exact path="/contribution/:contributionID" component={RequireAuth(ContributionDetails)}/>

        <Route exact path="/requests/search" component={RequireAuth(RequestsDepot)}/>
        <Route exact path="/users/search" component={RequireAuth(UserDepot)}/>
        <Route exact path="/projects/search" component={RequireAuth(DevelopersDepot)}/>
        <Route exact path="/technology/search" component={RequireAuth(TechDepot)}/>
        <Route exact path="/discussions/search" component={RequireAuth(DiscussionsDepot)}/>
        {/* <Route exact path="/dashboard" component={DashboardPage}/> */}
      </div>
    );
  }
}

export default App;
