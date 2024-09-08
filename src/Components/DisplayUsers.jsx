import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../store/slices/UserSlice";

const DisplayUsers = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => {
    return state;
  });

  if (data.length == 0) {
    return <li>Data needs to be added</li>;
  }

  const deleteUser = (payload) => {
    dispatch(removeUser(payload));
  };

  return (
    <>
      {data.map((user, id) => (
        <li key={id}>
          {user.name}, {user.city}
          <button className="btn btn-delete" onClick={() => deleteUser(id)}>
            <MdDeleteForever className="delete-icon" />
          </button>
        </li>
      ))}
    </>
  );
};

export default DisplayUsers;
