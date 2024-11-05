import React, { Component } from "react";

class LifecycleDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
    console.log("Constructor: 컴포넌트가 생성되었습니다.");
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("getDerivedStateFromProps: Props 변경 감지");
    return null;
  }

  componentDidMount() {
    console.log("componentDidMount: 컴포넌트가 마운트되었습니다.");
    // 데이터 페칭 예시
    fetch("https://api.example.com/data")
      .then((response) => response.json())
      .then((data) => this.setState({ data }));
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate: 업데이트 여부 판단");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate: 업데이트 전 상태 스냅샷");
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate: 컴포넌트가 업데이트되었습니다.");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount: 컴포넌트가 언마운트됩니다.");
  }

  render() {
    console.log("render: 컴포넌트 렌더링");
    return (
      <div>
        <h1>Lifecycle Demo</h1>
        {this.state.data ? <p>Data: {this.state.data}</p> : <p>Loading...</p>}
      </div>
    );
  }
}

export default LifecycleDemo;
