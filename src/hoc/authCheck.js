import React from 'react';

import {
  connect
} from 'react-redux';

import {
  push
} from 'react-router-redux';

import Restricted from '../components/PrivateRoute/Restricted.js';

export default (ComposedComponent
) => {
  class requireAuth extends React.Component {
    // componentWillMount() {
    //   if (!this.props.token) {
    // console.log("Testing history.push: NO token");
    // this.props.push('/');
    //   }
    // }

    conditionalRender() {
      // console.log(this.props);
      if (this.props.token) {
        return <ComposedComponent {...this.props}/>;
      } else {
        return <Restricted/>

      }
    }

    render() {
      return this.conditionalRender();
    }
  }

  const mapStateToProps = (state) => {
    return {
      token: state.token
    };
  }

  return connect(mapStateToProps, {
    push
  })(requireAuth);
};
