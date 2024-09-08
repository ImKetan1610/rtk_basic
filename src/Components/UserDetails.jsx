import React from "react";
import "./UserDetails.css";
import DeleteAllUsers from "./DeleteAllUsers";
import fakeUserData from "../api/index.js";
import { useDispatch } from "react-redux";
import { addUser } from "../store/slices/UserSlice.jsx";
// import store from "../store/index.jsx";
import DisplayUsers from "./DisplayUsers.jsx";

const UserDetails = () => {
  
  let dispatch = useDispatch();
  
  const addNewUser = (payload) => {
    // console.log(payload);
    dispatch(addUser(payload))
    // console.log(store.getState())
  };

  return (
    <div className="content">
      <div className="admin-table">
        <div className="admin-subtitle">List of User Details</div>
        <button onClick={() => addNewUser(fakeUserData())}>
          Add New Users
        </button>
      </div>
      <ul className="admin-table1">
        <DisplayUsers />
      </ul>
      <hr />
      <DeleteAllUsers />
    </div>
  );
};

export default UserDetails;
