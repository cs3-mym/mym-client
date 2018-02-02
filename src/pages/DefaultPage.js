import React from 'react';

// let imgUrl = 'http://wallpaperstock.net/hd-wide-mountain_wallpapers_15988_2560x1440.jpg';
let imgUrl = '';
class DefaultPage extends React.Component {
  render() {
    return (
      <div style={{display: "flex", width: "100%", flexFlow: "column", alignItems: "center", border: "1px black solid", background: "rgba(255, 255, 255, 0.6)"}}>
        <div style={{background: "lightgray", width: "100%", height: "80px"}}></div>
        <div style={{display: "flex", width: "100%"}}>
          <div style={{height: "800px", width: "100%", marginRight: "30px", marginLeft: "30px"}}>
            <div style={{height: "50px", display: "flex", justifyContent: "space-around"}}>
              <p style={{marginRight: "10px", background: "lightgray"}}>Trending</p>
              <p style={{marginRight: "10px", background: "lightgray"}}>Recent</p>
              <p style={{marginRight: "10px", background: "lightgray"}}>Other1</p>
              <p style={{marginRight: "10px", background: "lightgray"}}>Other2</p>
            </div>
            <div style={{display: "flex", flexFlow: "column", width: "100%", overflow: "auto"}}>
              <div style={{height: "70px", border: "1px solid black"}}>Project Title 1 - Status - Phase - Members - Requirements - more</div>
              <div style={{height: "70px", border: "1px solid black"}}>Project Title 2 - Status - Phase - Members - Requirements - more</div>
              <div style={{height: "70px", border: "1px solid black"}}>Project Title 3 - Status - Phase - Members - Requirements - more</div>
              <div style={{height: "70px", border: "1px solid black"}}>Project Title 4 - Status - Phase - Members - Requirements - more</div>
              <div style={{height: "70px", border: "1px solid black"}}>Project Title 5 - Status - Phase - Members - Requirements - more</div>
              <div style={{height: "70px", border: "1px solid black"}}>Project Title 6 - Status - Phase - Members - Requirements - more</div>
              <div style={{height: "70px", border: "1px solid black"}}>Project Title 7 - Status - Phase - Members - Requirements - more</div>
              <div style={{height: "70px", border: "1px solid black"}}>Project Title 8 - Status - Phase - Members - Requirements - more</div>
              <div style={{height: "70px", border: "1px solid black"}}>Project Title 9 - Status - Phase - Members - Requirements - more</div>
            </div>
          </div>
          <div style={{width: "800px", height: "700px", display: "flex", flexFlow: "column", marginTop: "10px", marginRight: "60px", boxShadow: "0px 5px 18px #888888", padding: "10px"}}>
            <p style={{marginBottom: "10px"}}>Project Title</p>
            <p style={{marginBottom: "10px"}}>Project Description:</p>
            <p style={{marginBottom: "10px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit velit ut erat interdum ornare. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum mattis arcu quis efficitur vulputate. Vivamus vel tincidunt mi. Duis cursus interdum sem, sed dapibus est viverra et. Maecenas quam purus, egestas eu vehicula scelerisque, feugiat sit amet mauris. Sed laoreet pretium ultrices. Curabitur dignissim erat velit, in vehicula turpis laoreet laoreet. Aenean nec sagittis justo, a luctus sem. Sed gravida bibendum est ut suscipit. Proin faucibus congue venenatis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris rhoncus est eu odio dictum interdum ac vitae purus. Suspendisse non vulputate velit, ac tincidunt orci. Cras fringilla et enim non efficitur.</p>
            <div style={{display: "flex", height: "50px", marginBottom: "10px"}}>
              <p style={{marginRight: "10px", background: "lightgray"}}>History</p>
              <p style={{marginRight: "10px", background: "lightgray"}}>Stories</p>
              <p style={{marginRight: "10px", background: "lightgray"}}>Issues</p>
            </div>
            <div style={{display: "flex", flexFlow: "column", width: "100%", overflow: "auto"}}>
              <div style={{height: "70px", border: "1px solid black"}}>Item 1</div>
              <div style={{height: "70px", border: "1px solid black"}}>Item 2</div>
              <div style={{height: "70px", border: "1px solid black"}}>Item 3</div>
              <div style={{height: "70px", border: "1px solid black"}}>Item 4</div>
              <div style={{height: "70px", border: "1px solid black"}}>Item 5</div>
            </div>
          </div>
        </div>
        <div style={{position: "fixed", height: "300px", width: "40px", right: "0", top: "20%" , background: "lightgray"}}></div>
      </div>
    );
  }
}

export default DefaultPage;
