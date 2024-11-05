import React, { Component } from "react";

class LifecycleOverview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      data: null,
      error: null,
    };
    console.log("Constructor: 초기 상태 설정");
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("getDerivedStateFromProps: Props 변경 감지");
    // 상태를 props에 따라 업데이트할 필요가 있는 경우 반환
    return null;
  }

  componentDidMount() {
    console.log("componentDidMount: 데이터 페칭 시작");
    // 데이터 페칭 예시
    fetch("https://api.example.com/data")
      .then((response) => response.json())
      .then((data) => this.setState({ data }))
      .catch((error) => this.setState({ error }));
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate: 업데이트 여부 결정");
    // 특정 조건에 따라 업데이트 여부를 결정
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate: 업데이트 전 상태 스냅샷");
    // 업데이트 전의 특정 정보를 캡처
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate: 업데이트 완료");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount: 리소스 정리");
    // 정리 작업 수행
  }

  increment = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    console.log("render: 컴포넌트 렌더링");
    const { count, data, error } = this.state;
    return (
      <div>
        <h2>Lifecycle Overview</h2>
        <p>카운트: {count}</p>
        <button onClick={this.increment}>카운트 증가</button>
        {data && <p>데이터: {JSON.stringify(data)}</p>}
        {error && <p>오류: {error.message}</p>}
      </div>
    );
  }
}

export default LifecycleOverview;
