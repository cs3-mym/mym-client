import React from 'react';

class ProfilePage extends React.Component {
  render() {
    return (
      <div style={{display: "flex", height: "700px"}}>
        <div style={{width: "340px"}}>
          <div style={{height:"200px", border: "1px solid black"}}>
            Profile Pic
          </div>
          <div style={{height:"300px", border: "1px solid black"}}>
            Updates
          </div>
          <div style={{border: "1px solid black"}}>
            Hex Graph
          </div>
        </div>
        <div style={{width: "100%", display: "flex", flexFlow: "column"}}>
          <div style={{height: "240px", width: "100%", background: "lightgray", border: "1px solid black"}}>About Me</div>
          <div style={{height: "240px", width: "100%", background: "lightgray" , border: "1px solid black"}}>Current Projects</div>
          <div style={{height: "240px", width: "100%", background: "lightgray" , border: "1px solid black"}}>Contributions</div>
        </div>
      </div>
    );
  }
}

export default ProfilePage;
