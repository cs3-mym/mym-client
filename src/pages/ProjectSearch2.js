import React from 'react';

let imgUrl = 'http://wallpaperstock.net/hd-wide-mountain_wallpapers_15988_2560x1440.jpg';
// let imgUrl = '';


class ProjectSearch2 extends React.Component {
  render() {
    return (
      <div style={{display: "flex", width: "100%", flexFlow: "column", alignItems: "center", border: "1px black solid", background: "rgba(255, 255, 255, 0.6)", backgroundImage: `url(${imgUrl})`, backgroundSize: 'cover'}}>
        <div style={{height: "60px", width: "100%", background: "lightgray"}}></div>
        <p style={{width: "400px", border: "1px black solid", marginBottom: "10px", background: "rgba(0, 0, 0, 0.2)"}}>Search</p>
        <div style={{width: "700px", display: "flex", flexFlow: "row", border: "1px black solid", marginBottom: "10px"}}>
          <p style={{background: "lightgray", marginRight: "10px"}}>recent search 1</p>
          <p style={{background: "lightgray", marginRight: "10px"}}>recent search 2</p>
          <p style={{background: "lightgray", marginRight: "10px"}}>recent search 3</p>
          <p style={{background: "lightgray", marginRight: "10px"}}>recent search 4</p>
          <p style={{background: "lightgray", marginRight: "10px"}}>recent search 5</p>
        </div>
        <div style={{border: "1px black solid", marginBottom: "10px", overflow: "auto", alignItems: "center", display: "flex", flexFlow: "column", width: "100%"}}>
          <p>Results</p>
          <div style={{display: "flex", width: "100%", justifyContent: "center"}}>
            <div style={{width: "180px", height: "240px", border: "1px solid black", margin: "10px", overflow: "auto"}}>
              <p>Project Title 1</p>
              <p>Phase</p>
              <p>Members</p>
              <p>User Stories</p>
              <p>Commits</p>
              <p>Tech</p>
              <p>Keywords</p>
            </div>
            <div style={{width: "180px", height: "240px", border: "1px solid black", margin: "10px", overflow: "auto"}}>
              <p>Project Title 2</p>
              <p>Phase</p>
              <p>Members</p>
              <p>User Stories</p>
              <p>Commits</p>
              <p>Tech</p>
              <p>Keywords</p>
            </div>
            <div style={{width: "180px", height: "240px", border: "1px solid black", margin: "10px", overflow: "auto"}}>
              <p>Project Title 3</p>
              <p>Phase</p>
              <p>Members</p>
              <p>User Stories</p>
              <p>Commits</p>
              <p>Tech</p>
              <p>Keywords</p>
            </div>
            <div style={{width: "180px", height: "240px", border: "1px solid black", margin: "10px", overflow: "auto"}}>
              <p>Project Title 4</p>
              <p>Phase</p>
              <p>Members</p>
              <p>User Stories</p>
              <p>Commits</p>
              <p>Tech</p>
              <p>Keywords</p>
            </div>
          </div>
          <div style={{display: "flex", width: "100%", justifyContent: "center"}}>
            <div style={{width: "180px", height: "240px", border: "1px solid black", margin: "10px", overflow: "auto"}}>
              <p>Project Title 5</p>
              <p>Phase</p>
              <p>Members</p>
              <p>User Stories</p>
              <p>Commits</p>
              <p>Tech</p>
              <p>Keywords</p>  </div>
            <div style={{width: "180px", height: "240px", border: "1px solid black", margin: "10px", overflow: "auto"}}>
              <p>Project Title 6</p>
              <p>Phase</p>
              <p>Members</p>
              <p>User Stories</p>
              <p>Commits</p>
              <p>Tech</p>
              <p>Keywords</p>
            </div>
            <div style={{width: "180px", height: "240px", border: "1px solid black", margin: "10px", overflow: "auto"}}>
              <p>Project Title 7</p>
              <p>Phase</p>
              <p>Members</p>
              <p>User Stories</p>
              <p>Commits</p>
              <p>Tech</p>
              <p>Keywords</p>
            </div>
            <div style={{width: "180px", height: "240px", border: "1px solid black", margin: "10px", overflow: "auto"}}>
              <p>Project Title 8</p>
              <p>Phase</p>
              <p>Members</p>
              <p>User Stories</p>
              <p>Commits</p>
              <p>Tech</p>
              <p>Keywords</p>
            </div>
          </div>
          <div style={{display: "flex", width: "100%", justifyContent: "center"}}>
            <div style={{width: "180px", height: "240px", border: "1px solid black", margin: "10px", overflow: "auto"}}>
              <p>Project Title 9</p>
              <p>Phase</p>
              <p>Members</p>
              <p>User Stories</p>
              <p>Commits</p>
              <p>Tech</p>
              <p>Keywords</p>
            </div>
            <div style={{width: "180px", height: "240px", border: "1px solid black", margin: "10px", overflow: "auto"}}>
              <p>Project Title 10</p>
              <p>Phase</p>
              <p>Members</p>
              <p>User Stories</p>
              <p>Commits</p>
              <p>Tech</p>
              <p>Keywords</p>
            </div>
            <div style={{width: "180px", height: "240px", border: "1px solid black", margin: "10px", overflow: "auto"}}>
              <p>Project Title 11</p>
              <p>Phase</p>
              <p>Members</p>
              <p>User Stories</p>
              <p>Commits</p>
              <p>Tech</p>
              <p>Keywords</p>
            </div>
            <div style={{width: "180px", height: "240px", border: "1px solid black", margin: "10px", overflow: "auto"}}>
              <p>Project Title 12</p>
              <p>Phase</p>
              <p>Members</p>
              <p>User Stories</p>
              <p>Commits</p>
              <p>Tech</p>
              <p>Keywords</p>
            </div>
          </div>
        </div>
        <div style={{position: "fixed", height: "300px", width: "40px", right: "0", top: "20%" , background: "lightgray"}}></div>
      </div>
    );
  }
}

export default ProjectSearch2;
