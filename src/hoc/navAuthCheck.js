import React from 'react';

import {
  connect
} from 'react-redux';

import {
  push
} from 'react-router-redux';

const navAuthWrapper = (ComposedComponent) => {
  class navAuth extends React.Component {
    // componentWillMount() {
    //   if (!this.props.token) {
    //     this.props.push('/');
    //   }
    // }
    conditionalRender() {
      console.log("TESTING");
      if (this.props.token) {
        return <ComposedComponent token={this.props.token}/>;
      }
      // else {
      //   return (
      //     <p style={{color: "lightgray"}}>No Token, signed out</p>
      //   );
      // }
    }

    render() {
      return (
        <div style={{width: "100%"}}>
          {this.conditionalRender()}
        </div>
      );
    }
  }

  const mapStateToProps = (state) => {
    return {
      token: state.token
    };
  }

  return connect(mapStateToProps, {
    push
  })(navAuth);
};

export default navAuthWrapper;
