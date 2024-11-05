import React, { Component } from "react";

class DerivedStateExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      derivedValue: props.initialValue,
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.initialValue !== prevState.derivedValue) {
      return {
        derivedValue: nextProps.initialValue,
      };
    }
    return null;
  }

  render() {
    return (
      <div>
        <h3>Derived State 예제</h3>
        <p>초기 값: {this.props.initialValue}</p>
        <p>파생 값: {this.state.derivedValue}</p>
      </div>
    );
  }
}

export default DerivedStateExample;
