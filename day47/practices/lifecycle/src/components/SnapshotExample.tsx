import React, { Component } from "react";

class SnapshotExample extends Component {
  constructor(props) {
    super(props);
    this.listRef = React.createRef();
    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    // 초기 아이템 추가
    this.setState({
      items: ["아이템 1", "아이템 2", "아이템 3"],
    });
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    if (prevState.items.length < this.state.items.length) {
      const list = this.listRef.current;
      return list.scrollHeight - list.scrollTop;
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (snapshot !== null) {
      const list = this.listRef.current;
      list.scrollTop = list.scrollHeight - snapshot;
    }
  }

  addItem = () => {
    this.setState((prevState) => ({
      items: [...prevState.items, `아이템 ${prevState.items.length + 1}`],
    }));
  };

  render() {
    return (
      <div>
        <h3>Snapshot 예제</h3>
        <button onClick={this.addItem}>아이템 추가</button>
        <ul
          ref={this.listRef}
          style={{ maxHeight: "100px", overflowY: "scroll" }}
        >
          {this.state.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default SnapshotExample;
