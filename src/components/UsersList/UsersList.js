import React from 'react';

import UserItem from './UserItem.js';

const listStyle = {
  width: "100%",
  display: "flex",
  flexFlow: "column",
  alignItems: "center"
};

class UsersList extends React.Component {
  mapUsers() {
    return this.props.users.map((u, index) => {
      return <UserItem key={index} id={u._id} user={u} />;
    });
  }

  render() {
    return (
      <div style={listStyle}>
        {this.mapUsers()}
      </div>
    );
  }
}

export default UsersList;
