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
  color: "white",
  margin: "4px 0"
};

class RequestsList extends React.Component {
  mapRequests() {
    return this.props.requests.map((r, index) => {
      return (
        <div key={index} style={itemStyle}>
          <Link style={textStyle} to={{pathname: `/request/${r._id}`}}>{r.title}</Link>
          <p style={textStyle}>{r.category}</p>
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
