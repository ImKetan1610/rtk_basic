import React from "react";
import { useSelector } from "react-redux";

const DisplayUsers = () => {
  const data = useSelector((state) => {
    return state;
  });

  if (data.length == 0) {
    return <>Data needs to be added</>;
  }

  return (
    <>
      {data.map((user, id) => (
        <li key={id}>
          {user.name}, {user.city}
          <span></span>
        </li>
      ))}
    </>
  );
};

export default DisplayUsers;
