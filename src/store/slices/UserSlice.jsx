import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, action) {},
    removeUser(state, action) {},
    deleteAllUsers(state, action) {},
  },
});

console.log("userSlice actions", userSlice.actions);

export { userSlice };
