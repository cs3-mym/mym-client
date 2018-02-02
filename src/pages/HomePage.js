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

let home = PROD_SITE_ROOT;

// if (process.env.NODE_ENV === "production") {
//   home = PROD_SITE_ROOT;
// } else {
//   home = DEV_SITE_ROOT;
// }

class HomePage extends React.Component {
  render() {
    return (
      <Fabric>
        <div style={{display: "flex", height: "70px", width: "100%", alignItems: "center", justifyContent: "space-between", background: "#767d87", boxShadow: "0px 0px 5px 5px #888888"}}>
          <div style={{margin: "20px"}}>
            <p style={{color: "lightgray", fontSize: "2em", fontWeight: "bold"}}>MYM</p>
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

        <div style={{background: "#8aa1d8", height: "420px", width: "100%", padding: "20px", display: "flex", flexFlow: "column", alignItems: "center", justifyContent: "center"}}>
          <div style={{display: "flex", flexFlow: "row", width: "100%", justifyContent: "center", alignItems: "center"}}>
            <div style={{display: "flex", flexFlow: "column", alignItems: "center", marginRight: "80px"}}>
              <p style={{color: "#33353a", textShadow: "4px 4px #888888", fontWeight: "bold", fontSize: "4.7em", lineHeight: "1", padding: "0", margin: "0"}}>MAKE</p>
              <p style={{color: "#33353a", textShadow: "4px 4px #888888", fontWeight: "bold", fontSize: "4.7em", lineHeight: "1", padding: "0", margin: "0"}}>YOUR</p>
              <p style={{color: "#33353a", textShadow: "4px 4px #888888", fontWeight: "bold", fontSize: "4.7em", lineHeight: "1", padding: "0", margin: "0"}}>MARK</p>
            </div>
            <p style={{color: "#33353a", boxShadow: "4px 4px 2px #888888", background: "lightgray", fontWeight: "bold", width: "500px", fontSize: "1.4em", lineHeight: "1", overflowWrap: "break-word", wordWrap: "break-word", hyphens:"auto"}}>Welcome to the place to find friends, build things, and make history.</p>
          </div>
        </div>

        <div style={{height: "120px", width: "100%", background: "#767d87", display: "flex", flexFlow: "column", alignItems: "center", justifyContent: "center"}}>
          <p style={{color: "#33353a", textShadow: "2px 2px #888888", fontWeight: "bold", fontSize: "2.8em"}}>The Opportunity to Build</p>
        </div>

        <div style={{height: "280px", width: "100%", background: "darkgray", display: "flex", flexFlow: "column", alignItems: "center", justifyContent: "center"}}>
          <p style={{color: "#33353a", boxShadow: "2px 2px 2px #888888",background: "white", fontSize: "1.2em", fontStyle: "italic"}}>  "Working as a part of a team has helped me build confidence and learn new skills."  </p>
          <p style={{color: "#33353a", boxShadow: "2px 2px 2px #888888",background: "white", fontSize: "1.2em", fontStyle: "italic"}}>  "I've learned so much from joining different projects and seeing the visions of things that people want to create."  </p>
          <p style={{color: "#33353a", boxShadow: "2px 2px 2px #888888",background: "white", fontSize: "1.2em", fontStyle: "italic"}}>  "It's great to have a place to come to where people are working on fun and incredible projects."  </p>
          <p style={{color: "#33353a", boxShadow: "2px 2px 2px #888888",background: "white", fontSize: "1.2em", fontStyle: "italic"}}>  "When I'm a part of something, solving problems and crafting things piece by piece, I get excited."  </p>
        </div>

        <div style={{height: "380px", width: "100%", background: "lightgray", display: "flex", flexFlow: "column", alignItems: "center", justifyContent: "center"}}>
          <div style={{display: "flex", flexFlow: "column", alignItems: "center", justifyContent: "center", margin: "50px"}}>
            <p style={{color: "#33353a", fontSize: "1.8em", fontWeight: "bold", textShadow: "1px 1px #888888"}}>  Build Your Projects  </p>

            <p style={{color: "white", boxShadow: "2px 2px 2px #888888",background: "#767d87", fontStyle: "italic"}}>  "Example Project and Story #1"  </p>
            <p style={{color: "white", boxShadow: "2px 2px 2px #888888",background: "#767d87", fontStyle: "italic"}}>  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis imperdiet ante at nisi suscipit porta. Vestibulum rutrum leo risus, eget rutrum turpis pretium in. Integer posuere sapien sit amet dui volutpat pretium. Duis rhoncus cursus lacus. Sed quis ornare felis, sit amet mattis diam. Integer scelerisque nisi metus, sit amet convallis erat semper eu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. "  </p>
            <p style={{color: "white", boxShadow: "2px 2px 2px #888888",background: "#767d87", fontStyle: "italic"}}>  "Example Project and Story #2"  </p>
            <p style={{color: "white", boxShadow: "2px 2px 2px #888888",background: "#767d87", fontStyle: "italic"}}>  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis imperdiet ante at nisi suscipit porta. Vestibulum rutrum leo risus, eget rutrum turpis pretium in. Integer posuere sapien sit amet dui volutpat pretium. Duis rhoncus cursus lacus. Sed quis ornare felis, sit amet mattis diam. Integer scelerisque nisi metus, sit amet convallis erat semper eu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. "  </p>
          </div>
        </div>


        <div style={{height: "380px", width: "100%", background: "darkgray", display: "flex", flexFlow: "column", alignItems: "center", justifyContent: "center"}}>
          <div style={{display: "flex", flexFlow: "column", alignItems: "center", justifyContent: "center", margin: "50px"}}>
            <p style={{color: "#33353a", fontSize: "1.8em", fontWeight: "bold", textShadow: "1px 1px darkgray"}}>  Build Your Experience  </p>

            <p style={{color: "#33353a", boxShadow: "2px 2px 2px #888888",background: "lightgray", fontStyle: "italic"}}>  "Example Project and Story #1"  </p>
            <p style={{color: "#33353a", boxShadow: "2px 2px 2px #888888",background: "lightgray", fontStyle: "italic"}}>  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis imperdiet ante at nisi suscipit porta. Vestibulum rutrum leo risus, eget rutrum turpis pretium in. Integer posuere sapien sit amet dui volutpat pretium. Duis rhoncus cursus lacus. Sed quis ornare felis, sit amet mattis diam. Integer scelerisque nisi metus, sit amet convallis erat semper eu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. "  </p>
            <p style={{color: "#33353a", boxShadow: "2px 2px 2px #888888",background: "lightgray", fontStyle: "italic"}}>  "Example Project and Story #2"  </p>
            <p style={{color: "#33353a", boxShadow: "2px 2px 2px #888888",background: "lightgray", fontStyle: "italic"}}>  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis imperdiet ante at nisi suscipit porta. Vestibulum rutrum leo risus, eget rutrum turpis pretium in. Integer posuere sapien sit amet dui volutpat pretium. Duis rhoncus cursus lacus. Sed quis ornare felis, sit amet mattis diam. Integer scelerisque nisi metus, sit amet convallis erat semper eu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. "  </p>
          </div>
        </div>

        <div style={{height: "380px", width: "100%", background: "lightgray", display: "flex", flexFlow: "column", alignItems: "center", justifyContent: "center"}}>
          <div style={{display: "flex", flexFlow: "column", alignItems: "center", justifyContent: "center", margin: "50px"}}>
            <p style={{color: "#33353a", fontSize: "1.8em", fontWeight: "bold", textShadow: "1px 1px #888888"}}>  Build Your Network  </p>

            <p style={{color: "white", boxShadow: "2px 2px 2px #888888",background: "#767d87", fontStyle: "italic"}}>  "Example Project and Story #1"  </p>
            <p style={{color: "white", boxShadow: "2px 2px 2px #888888",background: "#767d87", fontStyle: "italic"}}>  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis imperdiet ante at nisi suscipit porta. Vestibulum rutrum leo risus, eget rutrum turpis pretium in. Integer posuere sapien sit amet dui volutpat pretium. Duis rhoncus cursus lacus. Sed quis ornare felis, sit amet mattis diam. Integer scelerisque nisi metus, sit amet convallis erat semper eu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. "  </p>
            <p style={{color: "white", boxShadow: "2px 2px 2px #888888",background: "#767d87", fontStyle: "italic"}}>  "Example Project and Story #2"  </p>
            <p style={{color: "white", boxShadow: "2px 2px 2px #888888",background: "#767d87", fontStyle: "italic"}}>  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis imperdiet ante at nisi suscipit porta. Vestibulum rutrum leo risus, eget rutrum turpis pretium in. Integer posuere sapien sit amet dui volutpat pretium. Duis rhoncus cursus lacus. Sed quis ornare felis, sit amet mattis diam. Integer scelerisque nisi metus, sit amet convallis erat semper eu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. "  </p>
          </div>
        </div>

        <div style={{height: "50px", width: "100%", background: "#33353a", display: "flex", flexFlow: "row", alignItems: "center", justifyContent: "center"}}>
          <p style={{color: "white"}}>Copyright MYM support@mym.tech</p>
        </div>
      </Fabric>
    );
  }
}

export default HomePage;
