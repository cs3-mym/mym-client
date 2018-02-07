import React from 'react';
import Axios from 'axios';

import TechItem from './TechItem.js';

class TechList extends React.Component {
  mapTechToArr() {
    return this.props.tech.map((t, index) => {
      return <TechItem key={index} id={t._id} tech={t}/>;
    });
  }

  render() {
    return (
      <div style={{width:"100%", display: "flex", flexFlow: "column", alignItems: "center"}}>
        {this.mapTechToArr()}
      </div>
    );
  }
}

export default TechList;
