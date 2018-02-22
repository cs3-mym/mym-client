import React from 'react';

import InviteItem from './InviteItem.js';

const listStyle = {
  width: "100%",
  display: "flex",
  flexFlow: "column",
  alignItems: "center"
}

class InvitesList extends React.Component {
  filterInvites() {
    return this.props.invites.filter((invite) => {
      if (invite.status === 'unaccepted') {
        return true;
      }
      return false;
    });
  }

  mapInvites() {
    return this.filterInvites().map((i, index) => {
      return <InviteItem key={i._id} invite={i} token={this.props.token}/>
    });
  }

  render() {
    return (
      <div style={listStyle}>
        {this.mapInvites()}
      </div>
    );
  }
}

export default InvitesList;
