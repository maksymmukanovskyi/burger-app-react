/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';

const withClass = (WrappedComponent, className) => {
  // eslint-disable-next-line react/display-name
  return class extends Component {
    state = {};

    render() {
      return (
        <div className={className}>
          <WrappedComponent {...this.props} />
        </div>
      );
    }
  };
};

export default withClass;
