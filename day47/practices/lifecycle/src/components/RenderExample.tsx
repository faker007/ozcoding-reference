import React, { Component } from "react";

class RenderExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true,
    };
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }

  toggleVisibility() {
    this.setState((prevState) => ({
      isVisible: !prevState.isVisible,
    }));
  }

  render() {
    const { isVisible } = this.state;
    return (
      <div>
        <h3>Render 메서드 예제</h3>
        <button onClick={this.toggleVisibility}>
          {isVisible ? "숨기기" : "보이기"}
        </button>
        {isVisible && <p>이 문장은 토글 가능합니다.</p>}
      </div>
    );
  }
}

export default RenderExample;
