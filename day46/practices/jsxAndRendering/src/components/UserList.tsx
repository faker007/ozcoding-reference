import React from "react";

const UserList = () => {
  const users = [
    { id: 1, name: "홍길동" },
    { id: 2, name: "김철수" },
    { id: 3, name: "카리나" },
    { id: 4, name: "아이유" },
  ];

  return (
    <div>
      <h2>User List</h2>

      <ul>
        {users.map((user) => {
          return <li key={user.id}>{user.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default UserList;
