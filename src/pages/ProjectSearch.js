import React from 'react';

let imgUrl = 'http://wallpaperstock.net/hd-wide-mountain_wallpapers_15988_2560x1440.jpg';
// let imgUrl = '';

class ProjectSearchPage extends React.Component {
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
        <div style={{width: "75%", height: "500px", border: "1px black solid", marginBottom: "10px", overflow: "auto"}}>
          <p>Results</p>
          <div style={{width: "100%", height: "100px", border: "1px solid black"}}>Project 1</div>
          <div style={{width: "100%", height: "100px", border: "1px solid black"}}>Project 2</div>
          <div style={{width: "100%", height: "100px", border: "1px solid black"}}>Project 3</div>
          <div style={{width: "100%", height: "100px", border: "1px solid black"}}>Project 4</div>
          <div style={{width: "100%", height: "100px", border: "1px solid black"}}>Project 5</div>
          <div style={{width: "100%", height: "100px", border: "1px solid black"}}>Project 6</div>
          <div style={{width: "100%", height: "100px", border: "1px solid black"}}>Project 7</div>
        </div>
        <div style={{position: "fixed", height: "300px", width: "40px", right: "0", top: "20%" , background: "lightgray"}}></div>
      </div>
    );
  }
}

export default ProjectSearchPage;
