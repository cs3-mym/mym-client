import React from 'react';

class SignInPage extends React.Component {
  render() {
    return (
      <div style={{display: "flex", flexFlow: "column", alignItems: "center", justifyContent: "center", height: "100%", background: "blue"}}>
        <form style={{width: "240px"}}>
          <p>Username</p>
          <input type="text" name="username" style={{background: "rgba(0,0,0,0.3)"}}/>
          <p>Password</p>
          <input type="password" name="password" style={{background: "rgba(0,0,0,0.3)"}}/>
        </form>
      </div>
    );
  }
}

export default SignInPage;
