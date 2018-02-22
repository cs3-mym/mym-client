import React from 'react';

import {
  Fabric
} from 'office-ui-fabric-react/lib/Fabric';

import {
  DefaultButton
} from 'office-ui-fabric-react/lib/Button';

import {
  DEV_SITE_ROOT,
  PROD_SITE_ROOT
} from '../variables/connections.js';

let home = DEV_SITE_ROOT;

// if (process.env.NODE_ENV === "production") {
//   home = PROD_SITE_ROOT;
// } else {
//   home = DEV_SITE_ROOT;
// }

const textStyle = {
  color: "white"
}

const menuBarStyle = {
  display: "flex",
  height: "70px",
  width: "100%",
  alignItems: "center",
  justifyContent: "space-between",
  background: "#18192F"
};

const billboardContainerStyle = {
  background: "#212a49",
  height: "560px",
  width: "100%",
  padding: "20px",
  display: "flex",
  flexFlow: "column",
  alignItems: "center",
  justifyContent: "center"
};

const billboardTextContainerStyle = {
  display: "flex",
  flexFlow: "column",
  width: "100%",
  justifyContent: "center",
  alignItems: "center"
};

const mymContainerStyle = {
  display: "flex",
  flexFlow: "column",
  alignItems: "center",
  marginRight: "0px",
  background: "#212a49",
  padding: "10px",
  boxShadow: "6px 6px 2px #18192F",
  border: "8px solid #DFAE3B"
};

const mymTextStyle = {
  color: "#DFAE3B",
  textShadow: "8px 8px #18192F",
  fontWeight: "bold",
  fontSize: "4.7em",
  lineHeight: "1",
  padding: "0",
  margin: "0"
};

const subtitleTextStyle = {
  color: "#33353a",
  boxShadow: "4px 4px 2px #18192F",
  background: "#DFAE3B",
  textAlight: "center",
  marginTop: "30px",
  fontWeight: "bold",
  width: "500px",
  fontSize: "1.4em",
  lineHeight: "1",
  overflowWrap: "break-word",
  wordWrap: "break-word",
  hyphens: "auto"
};

const bannerContainerStyle = {
  height: "120px",
  width: "100%",
  background: "#18192F",
  display: "flex",
  flexFlow: "column",
  alignItems: "center",
  justifyContent: "center"
};

const bannerTextStyle = {
  color: "#ECEDF5",
  textShadow: "2px 2px #18192F",
  fontWeight: "bold",
  fontSize: "2.8em"
};

const quoteContainerStyle = {
  height: "280px",
  width: "100%",
  background: "darkgray",
  display: "flex",
  flexFlow: "column",
  alignItems: "center",
  justifyContent: "center"
};

const quoteTextStyle = {
  color: "#33353a",
  boxShadow: "2px 2px 2px #888888",
  background: "lightgray",
  fontSize: "1.2em",
  fontStyle: "italic"
};

const storyContainerStyle = {
  height: "380px",
  width: "100%",
  background: "lightgray",
  display: "flex",
  flexFlow: "column",
  alignItems: "center",
  justifyContent: "center"
};

const storyTextStyle1 = {
  color: "white",
  boxShadow: "2px 2px 2px #888888",
  background: "#767d87",
  fontStyle: "italic"
};

const storyTextContainerStyle1 = {
  display: "flex",
  flexFlow: "column",
  alignItems: "center",
  justifyContent: "center",
  margin: "50px"
};

const storyTitleTextStyle1 = {
  color: "#33353a",
  fontSize: "1.8em",
  fontWeight: "bold",
  textShadow: "1px 1px #888888"
};

const storyContainerStyle2 = {
  height: "380px",
  width: "100%",
  background: "darkgray",
  display: "flex",
  flexFlow: "column",
  alignItems: "center",
  justifyContent: "center"
};

const storyTextStyle2 = {
  color: "#33353a",
  boxShadow: "2px 2px 2px #888888",
  background: "lightgray",
  fontStyle: "italic"
};

const storyTextContainerStyle2 = {
  color: "#33353a",
  fontSize: "1.8em",
  fontWeight: "bold",
  textShadow: "1px 1px darkgray"
};

const footerContainerStyle = {
  height: "50px",
  width: "100%",
  background: "#33353a",
  display: "flex",
  flexFlow: "row",
  alignItems: "center",
  justifyContent: "center"
};

class HomePage extends React.Component {
  render() {
    return (
      <Fabric>
        <div style={menuBarStyle}>
          <div style={{margin: "20px"}}>
            <h1 style={{color: "#DFAE3B", fontSize: "2em", fontWeight: "bold"}}>MYM</h1>
          </div>
          <div style={{margin: "20px"}}>
            <DefaultButton
              text="Login"
              primary={true}
              href={`${home}login`}
            />
            <DefaultButton
              text="Signup"
              primary={false}
              href={`${home}signup`}
            />
          </div>
        </div>
        {/* #233060 */}
        {/* #1d274c */}
        {/* #212a49 */}
        {/* #252f56 */}
        {/* #212a49 */}
        {/* #293859 */}
        <div style={billboardContainerStyle}>
          <div style={billboardTextContainerStyle}>
            <div style={mymContainerStyle}>
              <h1 style={mymTextStyle}>MAKE</h1>
              <h1 style={mymTextStyle}>YOUR</h1>
              <h1 style={mymTextStyle}>MARK</h1>
            </div>
            {/* <p style={{color: "#28294f", boxShadow: "4px 4px 2px #18192F", background: "#DFAE3B", marginTop: "30px", fontWeight: "bold", width: "500px", fontSize: "1.4em", lineHeight: "1", overflowWrap: "break-word", wordWrap: "break-word", hyphens:"auto"}}>Welcome to the place to find friends, build things, and make history.</p> */}
            {/* <p style={{color: "#DFAE3B", textShadow: "4px 4px #18192F", textAlight: "center", marginTop: "30px", fontWeight: "bold", width: "500px", fontSize: "1.4em", lineHeight: "1", overflowWrap: "break-word", wordWrap: "break-word", hyphens:"auto"}}>Welcome to the place to find friends, build things, and make history.</p> */}
            <p style={subtitleTextStyle}>Welcome to the place to find friends, build things, and make history.</p>
          </div>
        </div>
        {/* #ECEDF5 */}
        <div style={bannerContainerStyle}>
          <p style={bannerTextStyle}>The Opportunity to Build</p>
        </div>

        <div style={quoteContainerStyle}>
          <p style={quoteTextStyle}>  "Working as a part of a team has helped me build confidence and learn new skills."  </p>
          <p style={quoteTextStyle}>  "I've learned so much from joining different projects and seeing the visions of things that people want to create."  </p>
          <p style={quoteTextStyle}>  "It's great to have a place to come to where people are working on fun and incredible projects."  </p>
          <p style={quoteTextStyle}>  "When I'm a part of something, solving problems and crafting things piece by piece, I get excited."  </p>
        </div>

        <div style={storyContainerStyle}>
          <div style={storyTextContainerStyle1}>
            <p style={storyTitleTextStyle1}>  Build Your Projects  </p>

            <p style={storyTextStyle1}>  "Example Project and Story #1"  </p>
            <p style={storyTextStyle1}>  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis imperdiet ante at nisi suscipit porta. Vestibulum rutrum leo risus, eget rutrum turpis pretium in. Integer posuere sapien sit amet dui volutpat pretium. Duis rhoncus cursus lacus. Sed quis ornare felis, sit amet mattis diam. Integer scelerisque nisi metus, sit amet convallis erat semper eu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. "  </p>
            <p style={storyTextStyle1}>  "Example Project and Story #2"  </p>
            <p style={storyTextStyle1}>  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis imperdiet ante at nisi suscipit porta. Vestibulum rutrum leo risus, eget rutrum turpis pretium in. Integer posuere sapien sit amet dui volutpat pretium. Duis rhoncus cursus lacus. Sed quis ornare felis, sit amet mattis diam. Integer scelerisque nisi metus, sit amet convallis erat semper eu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. "  </p>
          </div>
        </div>


        <div style={storyContainerStyle2}>
          <div style={storyTextContainerStyle1}>
            <p style={storyTextContainerStyle2}>  Build Your Experience  </p>

            <p style={storyTextStyle2}>  "Example Project and Story #1"  </p>
            <p style={storyTextStyle2}>  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis imperdiet ante at nisi suscipit porta. Vestibulum rutrum leo risus, eget rutrum turpis pretium in. Integer posuere sapien sit amet dui volutpat pretium. Duis rhoncus cursus lacus. Sed quis ornare felis, sit amet mattis diam. Integer scelerisque nisi metus, sit amet convallis erat semper eu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. "  </p>
            <p style={storyTextStyle2}>  "Example Project and Story #2"  </p>
            <p style={storyTextStyle2}>  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis imperdiet ante at nisi suscipit porta. Vestibulum rutrum leo risus, eget rutrum turpis pretium in. Integer posuere sapien sit amet dui volutpat pretium. Duis rhoncus cursus lacus. Sed quis ornare felis, sit amet mattis diam. Integer scelerisque nisi metus, sit amet convallis erat semper eu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. "  </p>
          </div>
        </div>

        <div style={storyContainerStyle}>
          <div style={storyTextContainerStyle1}>
            <p style={storyTitleTextStyle1}>  Build Your Network  </p>

            <p style={storyTextStyle1}>  "Example Project and Story #1"  </p>
            <p style={storyTextStyle1}>  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis imperdiet ante at nisi suscipit porta. Vestibulum rutrum leo risus, eget rutrum turpis pretium in. Integer posuere sapien sit amet dui volutpat pretium. Duis rhoncus cursus lacus. Sed quis ornare felis, sit amet mattis diam. Integer scelerisque nisi metus, sit amet convallis erat semper eu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. "  </p>
            <p style={storyTextStyle1}>  "Example Project and Story #2"  </p>
            <p style={storyTextStyle1}>  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis imperdiet ante at nisi suscipit porta. Vestibulum rutrum leo risus, eget rutrum turpis pretium in. Integer posuere sapien sit amet dui volutpat pretium. Duis rhoncus cursus lacus. Sed quis ornare felis, sit amet mattis diam. Integer scelerisque nisi metus, sit amet convallis erat semper eu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. "  </p>
          </div>
        </div>

        <div style={footerContainerStyle}>
          <p style={textStyle}>Copyright MYM support@mym.tech</p>
        </div>
      </Fabric>
    );
  }
}

export default HomePage;
