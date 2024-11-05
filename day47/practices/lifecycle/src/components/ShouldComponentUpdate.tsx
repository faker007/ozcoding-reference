import { Component } from "react";

class ShouldUpdateExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      otherValue: "기타 값",
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    // 카운트가 변경될 때만 업데이트
    if (this.state.count !== nextState.count) {
      return true;
    }
    return false;
  }

  incrementCount = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  updateOtherValue = () => {
    this.setState({
      otherValue: "변경된 값",
    });
  };

  render() {
    console.log("Render: ShouldUpdateExample 렌더링");
    return (
      <div>
        <h3>ShouldComponentUpdate 예제</h3>
        <p>카운트: {this.state.count}</p>
        <p>기타 값: {this.state.otherValue}</p>
        <button onClick={this.incrementCount}>카운트 증가</button>
        <button onClick={this.updateOtherValue}>기타 값 업데이트</button>
      </div>
    );
  }
}

export default ShouldUpdateExample;
