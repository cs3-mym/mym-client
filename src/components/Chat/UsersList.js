import React from 'react';

import {
  Link
} from 'react-router-dom';

const listContainer = {
  width: "100%",
  display: "flex",
  flexFlow: "row",
  alignItems: "center"
}

const itemStyle = {
  marginRight: "5px"
}

class UsersList extends React.Component {
  mapUsers() {
    // const uString = this.props.users.map((u) => {
    //   return u.username;
    // });
    //
    // return <p>{uString.join(', ')}</p>;
    return this.props.users.map((u, index) => {
      return (
        // <p style={itemStyle} key={index}>{u.username}</p>
        <Link style={itemStyle} key={index} to={{pathname: `/user/${u.username}`}}>{u.username}</Link>
      );
    });
  }

  render() {
    return (
      <div>
        <h3>Users</h3>
        {this.mapUsers()}
      </div>
    );
  }
}

export default UsersList;
