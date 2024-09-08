import React from "react";
import { useDispatch } from "react-redux";
import { clearAllUsers } from "../store/slices/UserSlice";

const DeleteAllUsers = () => {
  const dispatch = useDispatch();
  const clearUsers = (payload) => {};
  return (
    <div>
      <button onClick={() => clearUsers()}>Clear All Data</button>
    </div>
  );
};

export default DeleteAllUsers;
