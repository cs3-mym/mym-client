import React from 'react';
import axios from 'axios';

import RequestItem from './RequestItem.js';

const listStyle = {
  width: "100%",
  display: "flex",
  flexFlow: "column",
  alignItems: "center"
}

class RequestsList extends React.Component {
  mapRequests() {
    console.log(this.props.requests);
    return this.props.requests.map((r, index) => {
      return <RequestItem key={index} request={r}/>;
    });
  }

  render() {
    return (
      <div style={listStyle}>
        {this.mapRequests()}
      </div>
    );
  }
}

export default RequestsList;
