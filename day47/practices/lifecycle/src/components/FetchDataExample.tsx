import React, { Component } from "react";

class FetchDataExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      loading: true,
      error: null,
    };
  }

  componentDidMount() {
    // 사용자 데이터 페칭
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("사용자 데이터를 가져오는 데 실패했습니다.");
        }
        return response.json();
      })
      .then((data) => this.setState({ users: data, loading: false }))
      .catch((error) => this.setState({ error, loading: false }));
  }

  render() {
    const { users, loading, error } = this.state;
    if (loading) {
      return <p>로딩 중...</p>;
    }
    if (error) {
      return <p>오류 발생: {error.message}</p>;
    }
    return (
      <div>
        <h3>사용자 목록</h3>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} ({user.email})
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default FetchDataExample;
