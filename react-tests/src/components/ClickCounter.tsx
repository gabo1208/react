import React, { Component } from 'react';
import { ClickProps } from '../definitions/models';
import withCounter from './WithCounter';

class ClickCounter extends Component<ClickProps> {
  render() {
    const { count, name, incrementCount } = this.props;
    return (
      <div>
        <button onClick={incrementCount}>
          {name} Clicked {count} Times!
        </button>
      </div>
    );
  }
}

export default withCounter(ClickCounter);
