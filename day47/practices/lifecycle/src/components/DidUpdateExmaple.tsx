import React, { Component } from "react";

class DidUpdateExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      prevCount: null,
    };
  }

  componentDidMount() {
    this.setState({
      ...this.state,
      count: localStorage.getItem("count")
        ? Number(localStorage.getItem("count"))
        : 0,
    });
  }

  componentDidUpdate(prevProps, prevState, snapshot?: any): void {
    if (prevState.count !== this.state.count) {
      console.log(
        `카운트가 ${prevState.count}에서 ${this.state.count}으로 변경되었습니다.`
      );

      localStorage.setItem("count", this.state.count);
    }
  }

  increment = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
      prevCount: prevState.count,
    }));
  };

  render() {
    return (
      <div>
        <h3>componentDidUpdate 예제</h3>

        <p>현재 카운트: {this.state.count}</p>

        <button onClick={this.increment}>카운트 증가</button>
      </div>
    );
  }
}

export default DidUpdateExample;
