import React from 'react';

let imgUrl = 'http://wallpaperstock.net/hd-wide-mountain_wallpapers_15988_2560x1440.jpg';

class DashboardPage extends React.Component {
  render() {
    return (
      <div style={{display: "flex", width: "100%", height: "700px", backgroundImage: `url(${imgUrl})`, backgroundSize: "cover"}}>
        <div style={{width: "50%", flexFlow: "column", margin: "30px", display: "flex", justifyContent: "space-around", border: "1px solid black"}}>
          <div>
            <p style={{background: "lightgray", height: "50px", marginLeft: "30px"}}>7 New Messages</p>
            <p style={{background: "lightgray", height: "50px", marginLeft: "30px"}}>7 Current Projects</p>
            <p style={{background: "lightgray", height: "50px", marginLeft: "30px"}}>7 Current User Stories</p>
          </div>
          <div>
            <p style={{background: "lightgray", height: "50px", marginLeft: "30px"}}>7 New Commits</p>
            <p style={{background: "lightgray", height: "50px", marginLeft: "30px"}}>7 New Requests</p>
            <p style={{background: "lightgray", height: "50px", marginLeft: "30px"}}>3 New Invites</p>
          </div>
          <div>
            <p style={{background: "lightgray", height: "50px", marginLeft: "30px"}}>Welcome</p>
            <p style={{background: "lightgray", height: "50px", marginLeft: "30px"}}>Jonathan</p>
          </div>
        </div>
        <div style={{width: "50%", display: "flex", flexFlow: "column", alignItems: "flex-end", margin: "30px", border: "1px solid black"}}>
          <p style={{marginRight: "30px"}}>Your Tech</p>
          <div style={{display: "flex", marginRight: "30px"}}>
            <p style={{background: "lightgray", height: "50px", marginLeft: "10px"}}>NodeJS</p>
            <p style={{background: "lightgray", height: "50px", marginLeft: "10px"}}>Chai</p>
          </div>
          <div style={{display: "flex" , marginRight: "30px"}}>
            <p style={{background: "lightgray", height: "50px", marginLeft: "10px"}}>MongoDB</p>
            <p style={{background: "lightgray", height: "50px", marginLeft: "10px"}}>ExpressJS</p>
          </div>
          <div style={{display: "flex" , marginRight: "30px"}}>
            <p style={{background: "lightgray", height: "50px", marginLeft: "10px"}}>Redux</p>
            <p style={{background: "lightgray", height: "50px", marginLeft: "10px"}}>React</p>
          </div>
        </div>
      </div>
    );
  }
}

export default DashboardPage;
