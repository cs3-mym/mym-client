import React from 'react';

import {
  Link
} from 'react-router-dom';

const listContainer = {
  width: "100%",
  display: "flex",
  flexFlow: "column"
};

const itemStyle = {
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between"
};

const textStyle = {
  color: "white"
};

class RequestsList extends React.Component {
  mapRequests() {
    return this.props.requests.map((r, index) => {
      return (
        <div key={index} style={itemStyle}>
          <p style={textStyle}>{r.title}</p>
          <p style={textStyle}>{r.category}</p>
          <Link style={textStyle} to={{pathname: `/request/${r._id}`}}>more</Link>
        </div>
      );
    });
  }

  render() {
    return (
      <div style={listContainer}>
        {this.mapRequests()}
      </div>
    );
  }
}

export default RequestsList;
