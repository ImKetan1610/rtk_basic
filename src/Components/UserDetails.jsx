import React from "react";
import "./UserDetails.css";
import DeleteAllUsers from "./DeleteAllUsers";

const UserDetails = () => {
  return (
    <div className="content">
      <div className="admin-table">
        <div className="admin-subtitle">List of User Details</div>
        <button>Add New Users</button>
      </div>
      <ul className="admin-table1">
        <li>hi 1</li>
        <li>hi 2</li>
      </ul>
      <hr />
      <DeleteAllUsers />
    </div>
  );
};

export default UserDetails;
