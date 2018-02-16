import React from 'react';

import TechItem from './TechItem.js';

const listStyle = {width:"100%", display: "flex", flexFlow: "column", alignItems: "center"};

class TechList extends React.Component {
  mapTechToArr() {
    return this.props.tech.map((t, index) => {
      return <TechItem key={index} id={t._id} tech={t}/>;
    });
  }

  render() {
    return (
      <div style={listStyle}>
        {this.mapTechToArr()}
      </div>
    );
  }
}

export default TechList;
