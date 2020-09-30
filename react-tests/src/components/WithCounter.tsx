import React from 'react';
import { ClickState } from '../definitions/models';

const withCounter = (OriginalComponent: any) => {
  class NewComponent extends React.Component<any> {
    state: ClickState = { name: 'Test', count: 0 };

    incrementCount = () =>
      this.setState((prevState: ClickState) => ({
        count: prevState.count + 1
      }));

    render() {
      return <OriginalComponent {...this.state} incrementCount={this.incrementCount} props={this.props} />;
    }
  }

  return NewComponent;
};

export default withCounter;
