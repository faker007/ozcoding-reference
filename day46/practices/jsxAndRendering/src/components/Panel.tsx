import React from "react";

const AdminPanel = () => <div>Admin Panel</div>;
const UserPanel = () => <div>User Panel</div>;

const Panel = ({ role }) => {
  const renderPanel = () => {
    if (role === "admin") {
      return <AdminPanel />;
    } else if (role === "user") {
      return <UserPanel />;
    } else {
      return <div>Guest View</div>;
    }
  };

  return <div>{renderPanel()}</div>;
};

export default Panel;
